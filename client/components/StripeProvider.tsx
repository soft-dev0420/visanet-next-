'use client';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import React from 'react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const StripeProvider = ({ children }: { children: React.ReactNode }) => {
    return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeProvider; // ✅ Must use default export
