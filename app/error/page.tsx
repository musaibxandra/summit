'use client';
// app/error/page.tsx
import { useSearchParams } from 'next/navigation';

export default function ErrorPage() {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get('paymentId') || searchParams.get('Id'); // MyFatoorah appends these

  // TODO: Optionally verify status via MyFatoorah's GetPaymentStatus API using paymentId
  // Fetch from /api/get-payment-status?paymentId=... (implement if needed)

  return (
    <div className="text-center py-16 bg-red-50">
      <h1 className="text-3xl font-bold text-red-600 mb-4">Payment Failed</h1>
      <p className="text-lg text-gray-700 mb-4">
        Your payment could not be processed. Please try again or contact
        support.
      </p>
      <p className="text-sm text-gray-500 mb-6">
        Payment ID: {paymentId || 'N/A'} (for reference)
      </p>
      <a
        href="/get_tickets" // Back to registration
        className="inline-block bg-[#002366] text-white px-6 py-3 rounded-lg hover:bg-[#001a4d] transition-colors"
      >
        Retry Registration
      </a>
    </div>
  );
}
