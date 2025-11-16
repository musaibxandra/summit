'use client';
// app/success/page.tsx (or pages/success.tsx if Pages Router)
import { useSearchParams } from 'next/navigation'; // For query params
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const invoiceId = searchParams.get('invoiceId'); // MyFatoorah appends params like ?invoiceId=123

  // TODO: Verify payment status via MyFatoorah API (e.g., ExecutePayment or GetPaymentStatus)
  // Use invoiceId to fetch details and update your DB (e.g., mark registration paid)

  return (
    <div className="text-center py-16">
      <h1 className="text-3xl font-bold text-green-600">Payment Successful!</h1>
      <br />
      <p>Thank you for registering for World HR Summit & Expo – Global 2025.</p>
      <br />
      <p>Invoice ID: {invoiceId || 'N/A'}</p>
      <br />
      <p>Thankyou</p>
      <br />
      {/* <Link href="get_tickets"><Button className='cursor-pointer'>Back to Tickets</Button></Link> */}
    </div>
  );
}
