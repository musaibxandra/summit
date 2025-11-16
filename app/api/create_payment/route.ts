import { NextRequest, NextResponse } from 'next/server';

// Interface for MyFatoorah Validation Error
interface ValidationError {
  Code: number;
  Message: string;
  VariableName?: string; // Optional, based on common API patterns
}

// Interface for MyFatoorah SendPayment response
interface SendPaymentResponse {
  IsSuccess: boolean;
  Message: string;
  ValidationErrors: null | ValidationError[];
  Data: {
    InvoiceId: number;
    InvoiceURL: string;
    CustomerReference: string;
    UserDefinedField: string | null;
  };
}

// Use environment variable for API URL, default to test if not set
const baseURL =
  process.env.MYFATOORAH_API_URL;
const token = process.env.MYFATOORAH_TOKEN;

// GET /api/create_payment (info endpoint)
export async function GET() {
  return NextResponse.json({
    message:
      'This endpoint requires a POST request with JSON body: { amount: number, customerName: string, customerEmail: string }',
    example:
      'curl -X POST http://localhost:3000/api/create_payment -H \'Content-Type: application/json\' -d \'{"amount":10.00,"customerName":"Test User","customerEmail":"test@example.com"}\'',
  });
}

// POST /api/create_payment (main endpoint)
export async function POST(request: NextRequest) {
  if (!token) {
    return NextResponse.json(
      { error: 'Server configuration error: Token not set' },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { amount, customerName, customerEmail } = body;

    if (!amount || !customerName || !customerEmail) {
      return NextResponse.json(
        {
          error: 'Missing required fields: amount, customerName, customerEmail',
        },
        { status: 400 }
      );
    }

    console.log('Initiating payment for:', {
      amount,
      customerName,
      customerEmail,
    });

    const response = await fetch(`${baseURL}/v2/SendPayment`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        CustomerName: customerName,
        NotificationOption: 'LNK', 
        InvoiceValue: amount,
        CustomerEmail: customerEmail,
        CallBackUrl:
          process.env.NEXT_PUBLIC_SUCCESS_URL,
        ErrorUrl:
          process.env.NEXT_PUBLIC_ERROR_URL,
        Language: 'EN', 
      }),
    });

    console.log('MyFatoorah API Response Status:', response.status);

    if (!response.ok) {
      // IMPROVED: Try JSON first for structured errors
      let errorData;
      try {
        errorData = await response.json();
      } catch {
        errorData = await response.text();
      }
      console.error('MyFatoorah API Error Details:', errorData);
      throw new Error(
        `API error: ${response.status} ${response.statusText} - ${typeof errorData === 'string' ? errorData : JSON.stringify(errorData)}`
      );
    }

    const data: SendPaymentResponse = await response.json();

    // FIXED: Check IsSuccess even on 2xx status
    if (!data.IsSuccess) {
      const errorMsg = data.Message || 'Payment creation failed';
      const validationErrors = data.ValidationErrors;
      if (validationErrors && validationErrors.length > 0) {
        console.error('Validation Errors:', validationErrors);
        // Append first error for brevity
        const firstError = validationErrors[0];
        throw new Error(`${errorMsg}. Validation: ${firstError.Message} (${firstError.VariableName || 'unknown'})`);
      }
      throw new Error(errorMsg);
    }

    console.log('Payment created successfully:', { isSuccess: data.IsSuccess, invoiceId: data.Data.InvoiceId, invoiceUrl: data.Data.InvoiceURL });

    const corsHeaders = {
      'Access-Control-Allow-Origin': '*', // TODO: Restrict to domain in prod
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    return NextResponse.json(
      { paymentUrl: data.Data.InvoiceURL, invoiceId: data.Data.InvoiceId },
      {
        // status: 200, // Implicit, can remove
        headers: corsHeaders,
      }
    );
  } catch (error) {
    console.error('Full Error in /create_payment:', error);
    return NextResponse.json(
      { error: 'Failed to create payment', details: (error as Error).message },
      { status: 500 }
    );
  }
}

// OPTIONS for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204, // IMPROVED: Standard for preflight
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}