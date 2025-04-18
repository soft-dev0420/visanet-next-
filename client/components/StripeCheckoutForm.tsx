'use client';

import {
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { useState } from 'react';

const inputStyle = {
    style: {
        base: {
            fontSize: '16px',
            color: '#32325d',
            backgroundColor: '#fff',
            '::placeholder': {
                color: '#a0aec0',
            },
            ':-webkit-autofill': {
                color: '#32325d',
                backgroundColor: '#fff',
            },
        },
        invalid: {
            color: '#e53e3e',
        },
    },
    hideIcon: true, // Optional: hides card brand icon if you want a cleaner look
};

const StripeCheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const [amount, setAmount] = useState("0");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        if (!stripe || !elements) return;

        const cardNumber = elements.getElement(CardNumberElement);
        if (!cardNumber) return;

        const res = await fetch('/api/create-payment-intent', {
            method: 'POST',
        });
        const { clientSecret } = await res.json();

        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardNumber,
                billing_details: {
                    name: name || 'Unknown',
                },
            },
        });

        if (result.error) {
            setError(result.error.message ?? 'Payment failed');
        } else if (result.paymentIntent?.status === 'succeeded') {
            setSuccess(true);
        }

        setLoading(false);
    };

    return (
        <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-xl space-y-6 border border-gray-100"
        >
                     {/* Transfer Amount */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Transfer Amount ($)</label>
                <input
                    type="number"
                    min={1}
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                />
            </div>

            {/* Name on Card */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Name on Card</label>
                <input
                    type="text"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                />
            </div>

            {/* Card Number */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Card Number</label>
                <div className="border rounded-md p-2 bg-white">
                    <CardNumberElement options={inputStyle} />
                </div>
            </div>

            {/* Expiration & CVC */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Expiration</label>
                    <div className="border rounded-md p-2 bg-white">
                        <CardExpiryElement options={inputStyle} />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">CVC</label>
                    <div className="border rounded-md p-2 bg-white">
                        <CardCvcElement options={inputStyle} />
                    </div>
                </div>
            </div>

            {/* Error or Success Message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && (
                <p className="text-green-600 font-medium text-center">✅ Payment successful!</p>
            )}

            {/* Pay Button */}
            <button
                type="submit"
                disabled={!stripe || loading}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
            >
                {loading ? 'Processing...' : `S   e   n   d`}
            </button>
        </form>

    );
};

export default StripeCheckoutForm;
