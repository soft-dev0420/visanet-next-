"use client";
import Link from "next/link";
import StripeProvider from '@/components/StripeProvider'; // ✅ no curly braces
import StripeCheckoutForm from '@/components/StripeCheckoutForm'; // ✅ no curly braces

const PricePage = () => {

    return (
        <>
            <section
                className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]"
            >
                <div className="container">
                    <div className="-mx-4 flex flex-wrap justify-center">
                        <div className="w-full px-4">
                            <div
                                className="bg-[#F9F9F9] wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white p-4 sm:p-[40px] lg:mb-5 lg:p-8 xl:p-[55px] flex flex-col lg:flex-row items-center gap-8"
                                data-wow-delay=".15s"
                            >
                                {/* Image section */}
                                <div className="w-full lg:w-1/2">
                                    <img
                                        src="/images/back/visa.jpg" // This is your fixed image if you'd like another one for display
                                        alt="Secure Payment"
                                        className="w-full h-auto rounded-md"
                                    />
                                </div>

                                {/* Stripe Checkout Form */}
                                <div className="w-full lg:w-1/2">
                                    <StripeProvider>
                                        <StripeCheckoutForm />
                                    </StripeProvider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PricePage;
