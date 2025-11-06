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

interface CheckoutFormProps {
  total: number;
  onSubmit: (formData: FormData) => void;
  onBack: () => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ total, onSubmit, onBack }) => {
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
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : false;
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
    <div className="w-full px-4 md:px-6 py-8 md:py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-gray-900">
            Complete Your Registration
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-semibold">
            Total: <span className="text-green-600">USD {total.toFixed(2)}</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full p-3 md:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">
                Last Name *
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full p-3 md:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">Job Title *</label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              required
              className="w-full p-3 md:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Attendee Bird City *
            </label>
            <input
              type="text"
              name="attendeeBirdCity"
              value={formData.attendeeBirdCity}
              onChange={handleChange}
              required
              className="w-full p-3 md:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 md:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">Phone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Bahrain +973"
                required
                className="w-full p-3 md:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">Country *</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full p-3 md:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all bg-white"
              >
                <option value="">Select Country</option>
                <option value="Bahrain">Bahrain</option>
                {/* Add more countries as needed */}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">City *</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full p-3 md:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">
                How did you hear? *
              </label>
              <input
                type="text"
                name="howDidYouHear"
                value={formData.howDidYouHear}
                onChange={handleChange}
                required
                className="w-full p-3 md:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
              />
            </div>
          </div>

          <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
            <input
              type="checkbox"
              name="subscribeNewsletter"
              checked={formData.subscribeNewsletter}
              onChange={handleChange}
              className="mt-1 rounded border-gray-300 text-green-600 focus:ring-green-500"
            />
            <label className="text-sm text-gray-700 leading-relaxed">
              Subscribe to The World HR Summit & Expo – Global (2025) Newsletter?
            </label>
          </div>

          <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
              className="mt-1 rounded border-gray-300 text-green-600 focus:ring-green-500"
            />
            <label className="text-sm text-gray-700 leading-relaxed">
              Terms, conditions and privacy. By continuing with the registration
              you are confirming that you have read, understand and accept our
              terms and conditions and privacy policy.
            </label>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={onBack}
              className="border-green-500 text-green-600 hover:bg-green-50 px-6 md:px-8 py-3 text-base md:text-lg font-semibold"
            >
              Back
            </Button>
            <Button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-6 md:px-8 py-3 text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Submit Registration
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

// FIXED LINE: Removed React.FC — no more parsing error!
const Tickets = () => {
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
            specialDiscounts.find((d) => d.id === selectedDiscount)?.discount || 0;
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
    <div className="w-full px-4 md:px-6 py-8 md:py-12 lg:py-16 bg-gradient-to-b from-white to-gray-50/30 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Attendee Registration
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Select your pass type and complete your registration for the World HR Summit & Expo – Global 2025
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {passOptions.map((option) => (
            <div
              key={option.id}
              className={`group p-6 md:p-8 border-2 rounded-xl cursor-pointer transition-all duration-300 bg-white shadow-sm hover:shadow-lg ${
                selectedPass === option.id
                  ? 'border-green-500 bg-green-50 shadow-lg scale-105'
                  : 'border-gray-200 hover:border-green-300 hover:scale-102'
              }`}
              onClick={() => handlePassSelect(option.id)}
            >
              <h3 className="font-bold text-lg md:text-xl mb-3 text-gray-900 group-hover:text-green-600 transition-colors">
                {option.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {option.description}
              </p>
            </div>
          ))}
        </div>

        {showPricing && selectedPass && !showCheckout && (
          <>
            <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 mb-6 md:mb-8 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Select Pricing Tier</h2>
                <button
                  onClick={() => setShowPricing(false)}
                  className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Collapse pricing"
                >
                  <ChevronUp size={20} />
                </button>
              </div>

              <div className="space-y-4">
                {pricingTiers.map((tier) => (
                  <div
                    key={tier.id}
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-base md:text-lg text-gray-900 mb-1">
                        {tier.name}
                      </h3>
                      <p className="text-green-600 font-bold text-lg md:text-xl">
                        USD {tier.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <label className="text-sm font-medium text-gray-700">Quantity:</label>
                      <input
                        type="number"
                        min="0"
                        value={quantities[tier.id] || 0}
                        onChange={(e) =>
                          updateQuantity(tier.id, parseInt(e.target.value) || 0)
                        }
                        className="w-24 p-3 border border-gray-300 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 font-semibold"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-5 md:p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg md:text-xl text-gray-900">Subtotal:</h3>
                  <p className="text-green-700 font-bold text-xl md:text-2xl">
                    USD {total.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 mb-6 md:mb-8 shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-900">
                Apply for Special Discount (Optional)
              </h3>
              <div className="space-y-4">
                {specialDiscounts.map((discount) => (
                  <label
                    key={discount.id}
                    className={`flex items-start p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      selectedDiscount === discount.id
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-green-300 hover:bg-gray-50'
                    } ${
                      discount.id === 'academic' && selectedPass !== 'general'
                        ? 'opacity-50 cursor-not-allowed'
                        : ''
                    }`}
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
                      className="mt-1 mr-3 text-green-600 focus:ring-green-500"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 mb-1">{discount.name}</p>
                      {discount.note && (
                        <p className="text-sm text-gray-600 mb-2">{discount.note}</p>
                      )}
                      {discount.id === 'academic' &&
                        selectedDiscount === discount.id && (
                          <input
                            type="email"
                            placeholder="Enter email for verification"
                            value={emailForDiscount}
                            onChange={(e) => setEmailForDiscount(e.target.value)}
                            className="mt-2 w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          />
                        )}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleProceedToCheckout}
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-8 py-3 md:py-4 text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Proceed to Checkout (USD {total.toFixed(2)})
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto border-green-500 text-green-600 hover:bg-green-50 px-8 py-3 md:py-4 text-base md:text-lg font-semibold"
              >
                Download Brochure
              </Button>
            </div>
          </>
        )}

        {!showPricing && selectedPass && !showCheckout && (
          <div className="text-center py-12 bg-white rounded-xl border border-gray-200 shadow-sm">
            <p className="text-gray-600 mb-6 text-lg">
              Select a pass type above to view pricing options.
            </p>
            <Button
              onClick={() => setShowPricing(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              View Pricing
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tickets;