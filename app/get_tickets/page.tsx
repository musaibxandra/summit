'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';

const passOptions = [
  {
    id: 'general',
    title: 'General Pass (Conference Access)',
    description:
      'Full access to conference sessions, workshops, and networking events.',
  },
  {
    id: 'vip',
    title: 'VIP All-Access Pass (Premium Experience)',
    description:
      'Includes General Pass + VIP lounge, priority seating, and exclusive meetups.',
  },
  {
    id: 'gala',
    title: 'Awards Gala Pass (Evening Only)',
    description: 'Access to the evening awards ceremony and after-party.',
  },
];

const pricingTiers = [
  { id: 'early-bird', name: 'Early Bird Pricing', price: 799.0 },
  { id: 'standard', name: 'Standard Rate', price: 1199.0 },
  { id: 'on-site', name: 'On-Site', price: 1499.0 },
];

const specialDiscounts = [
  { id: 'group-5', name: '5% off for 5+ attendees', discount: 5 },
  { id: 'group-10', name: '10% off for 10+ attendees', discount: 10 },
  {
    id: 'academic',
    name: '50% off General Pass for government or academic personnel (email verification required)',
    discount: 50,
    note: 'General Pass only',
  },
];

interface FormData {
  firstName: string;
  lastName: string;
  jobTitle: string;
  attendeeBirdCity: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  howDidYouHear: string;
  termsAccepted: boolean;
  subscribeNewsletter: boolean;
}

const CheckoutForm: React.FC<{
  total: number;
  onSubmit: (formData: FormData) => void;
  onBack: () => void;
}> = ({ total, onSubmit, onBack }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    jobTitle: '',
    attendeeBirdCity: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    howDidYouHear: '',
    termsAccepted: false,
    subscribeNewsletter: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === 'checkbox' ? (e.target as HTMLInputElement).checked : false;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const requiredFields = [
      'firstName',
      'lastName',
      'jobTitle',
      'attendeeBirdCity',
      'email',
      'phone',
      'country',
      'city',
      'howDidYouHear',
    ];
    const missingFields = requiredFields.filter(
      (field) => !formData[field as keyof FormData]
    );
    if (missingFields.length > 0 || !formData.termsAccepted) {
      alert(
        `Please fill all required fields and accept terms. Missing: ${missingFields.join(', ')}`
      );
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="max-w-2xl mx-auto py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Complete Your Registration</h2>
        <p className="text-gray-600">Total: USD {total.toFixed(2)}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              First Name *
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Last Name *
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Job Title *</label>
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Attendee Bird City *
          </label>
          <input
            type="text"
            name="attendeeBirdCity"
            value={formData.attendeeBirdCity}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Phone *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Bahrain +973"
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Country *</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select Country</option>
              <option value="Bahrain">Bahrain</option>
              {/* Add more countries as needed */}
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">City *</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              How did you hear? *
            </label>
            <input
              type="text"
              name="howDidYouHear"
              value={formData.howDidYouHear}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="subscribeNewsletter"
            checked={formData.subscribeNewsletter}
            onChange={handleChange}
            className="rounded"
          />
          <label className="text-sm">
            Subscribe to The World HR Summit & Expo – Global (2025) Newsletter?
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            required
            className="rounded"
          />
          <label className="text-sm">
            Terms, conditions and privacy. By continuing with the registration
            you are confirming that you have read, understand and accept our
            terms and conditions and privacy policy.
          </label>
        </div>

        <div className="flex gap-4 justify-center pt-6">
          <Button
            type="button"
            variant="outline"
            onClick={onBack}
            className="border-green-500 px-8 py-3 text-lg"
          >
            Back
          </Button>
          <Button
            type="submit"
            className="cursor-pointer bg-green-500 text-white px-8 py-3 text-lg"
          >
            Submit Registration
          </Button>
        </div>
      </form>
    </div>
  );
};

const Tickets: React.FC = () => {
  const [selectedPass, setSelectedPass] = useState<string | null>(null);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [selectedDiscount, setSelectedDiscount] = useState<string | null>(null);
  const [showPricing, setShowPricing] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [emailForDiscount, setEmailForDiscount] = useState('');

  const handlePassSelect = (id: string) => {
    setSelectedPass(id);
    setShowPricing(true);
    setQuantities({});
    setSelectedDiscount(null);
    setEmailForDiscount('');
  };

  const updateQuantity = (tierId: string, qty: number) => {
    setQuantities((prev) => ({ ...prev, [tierId]: qty }));
  };

  const calculateTotal = () => {
    if (!selectedPass) return 0;
    let subtotal = 0;
    Object.entries(quantities).forEach(([tierId, qty]) => {
      const tier = pricingTiers.find((t) => t.id === tierId);
      if (tier && qty > 0) {
        let price = tier.price;
        if (selectedDiscount && selectedPass === 'general') {
          const discount =
            specialDiscounts.find((d) => d.id === selectedDiscount)?.discount ||
            0;
          price = price * (1 - discount / 100);
        }
        subtotal += price * qty;
      }
    });
    return subtotal;
  };

  const total = calculateTotal();

  const handleProceedToCheckout = () => {
    if (total === 0) {
      alert('Please select at least one ticket.');
      return;
    }
    setShowCheckout(true);
  };

  const handleFormSubmit = async (formData: FormData) => {
    try {
      console.log('Registration Data:', formData, 'Total:', total);

      const paymentResponse = await fetch('/api/create_payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: total,
          customerName: `${formData.firstName} ${formData.lastName}`,
          customerEmail: formData.email,
        }),
      });

      // Debug logs
      const contentType = paymentResponse.headers.get('content-type');
      console.log('Response Status:', paymentResponse.status);
      console.log('Content-Type:', contentType);

      const responseText = await paymentResponse.text();
      console.log('Response Preview:', responseText.substring(0, 300) + '...');

      if (!paymentResponse.ok) {
        let error = `Server error (${paymentResponse.status})`;
        if (contentType?.includes('application/json')) {
          const errorData = JSON.parse(responseText);
          error = errorData.error || error;
        } else {
          // HTML or plain text (e.g., 404 page)
          error += `: ${responseText.includes('<!DOCTYPE') ? 'API route not found - check file path and restart server' : responseText.substring(0, 200)}...`;
        }
        throw new Error(error);
      }

      let paymentData;
      if (contentType?.includes('application/json')) {
        paymentData = JSON.parse(responseText);
      } else {
        throw new Error('Unexpected response format (not JSON)');
      }

      const { paymentUrl } = paymentData;
      if (!paymentUrl) {
        throw new Error('No payment URL returned');
      }

      window.open(paymentUrl, '_blank');
      alert('Registration submitted! Redirecting to payment...');

      setShowCheckout(false);
      setQuantities({});
    } catch (error) {
      console.error('Submission error:', error);
      alert(`Error: ${(error as Error).message}`);
    }
  };

  const handleBackFromCheckout = () => {
    setShowCheckout(false);
  };

  if (showCheckout) {
    return (
      <CheckoutForm
        total={total}
        onSubmit={handleFormSubmit}
        onBack={handleBackFromCheckout}
      />
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-24">
      <h1 className="text-3xl font-bold mb-8">Attendee Registration</h1>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {passOptions.map((option) => (
          <div
            key={option.id}
            className={`p-6 border rounded-xl cursor-pointer transition-all ${
              selectedPass === option.id
                ? 'border-green-500 bg-green-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => handlePassSelect(option.id)}
          >
            <h3 className="font-semibold text-lg mb-2">{option.title}</h3>
            <p className="text-sm text-gray-600">{option.description}</p>
          </div>
        ))}
      </div>

      {showPricing && selectedPass && !showCheckout && (
        <>
          <div className="border rounded-xl p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Select Pricing Tier</h2>
              <button
                onClick={() => setShowPricing(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <ChevronUp size={20} />
              </button>
            </div>

            {pricingTiers.map((tier) => (
              <div
                key={tier.id}
                className="flex justify-between items-center py-4 border-b last:border-b-0"
              >
                <div>
                  <h3 className="font-semibold">{tier.name}</h3>
                  <p className="text-green-600 font-bold">
                    Ticket Price: USD {tier.price.toFixed(2)}
                  </p>
                </div>
                <input
                  type="number"
                  min="0"
                  value={quantities[tier.id] || 0}
                  onChange={(e) =>
                    updateQuantity(tier.id, parseInt(e.target.value) || 0)
                  }
                  className="w-20 p-2 border rounded text-center"
                />
              </div>
            ))}

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">
                Subtotal: USD {total.toFixed(2)}
              </h3>
            </div>
          </div>

          <div className="border rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">
              Apply for Special Discount (Optional)
            </h3>
            <div className="space-y-3">
              {specialDiscounts.map((discount) => (
                <label
                  key={discount.id}
                  className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                >
                  <input
                    type="radio"
                    name="discount"
                    value={discount.id}
                    checked={selectedDiscount === discount.id}
                    onChange={() => setSelectedDiscount(discount.id)}
                    disabled={
                      discount.id === 'academic' && selectedPass !== 'general'
                    }
                    className="mr-3"
                  />
                  <div>
                    <p className="font-medium">{discount.name}</p>
                    {discount.note && (
                      <p className="text-sm text-gray-500">{discount.note}</p>
                    )}
                    {discount.id === 'academic' &&
                      selectedDiscount === discount.id && (
                        <input
                          type="email"
                          placeholder="Enter email for verification"
                          value={emailForDiscount}
                          onChange={(e) => setEmailForDiscount(e.target.value)}
                          className="mt-2 w-full p-2 border rounded text-sm"
                        />
                      )}
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Button
              onClick={handleProceedToCheckout}
              className="bg-green-500 text-white cursor-pointer px-8 py-3 text-lg"
            >
              Proceed to Checkout (USD {total.toFixed(2)})
            </Button>
            <Button
              variant="outline"
              className="border-green-500 cursor-pointer px-8 py-3 text-lg"
            >
              Download Brochure
            </Button>
          </div>
        </>
      )}

      {!showPricing && selectedPass && !showCheckout && (
        <div className="text-center py-8">
          <p className="text-gray-500 mb-4">
            Select a pass type above to view pricing options.
          </p>
          <button
            onClick={() => setShowPricing(true)}
            className="bg-green-500 text-white cursor-pointer px-6 py-2 rounded-lg"
          >
            View Pricing
          </button>
        </div>
      )}
    </div>
  );
};

export default Tickets;