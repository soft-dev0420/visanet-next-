"use client";
import Link from "next/link";
import { useState } from 'react'

const data = Array.from({ length: 45 }, (_, i) => ({
    number: i + 1,
    name: `User ${i + 1}`,
    time: `2025-04-18 12:${(i % 60).toString().padStart(2, '0')}`,
    amount: `$${(Math.random() * 100).toFixed(2)}`,
    details: 'Transaction completed',
    other: '✔️',
}))

const PAGE_SIZE = 8
const PricePage = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil(data.length / PAGE_SIZE)

    const currentData = data.slice(
        (currentPage - 1) * PAGE_SIZE,
        currentPage * PAGE_SIZE
    )

    const changePage = (page: number) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page)
    }
    return (
        <>
            <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div
                                className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-1 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
                                data-wow-delay=".15s"
                            >
                                <div className="max-w-6xl mx-auto p-4">
                                    <div className="overflow-x-auto rounded-xl shadow-md bg-white">
                                        <table className="min-w-full text-sm text-left text-gray-700">
                                            <thead className="bg-blue-600 text-white text-sm uppercase">
                                                <tr>
                                                    <th className="px-6 py-3">#</th>
                                                    <th className="px-6 py-3">Name</th>
                                                    <th className="px-6 py-3">Time</th>
                                                    <th className="px-6 py-3">Amount</th>
                                                    <th className="px-6 py-3">Details</th>
                                                    <th className="px-6 py-3">Other</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100">
                                                {currentData.map((row) => (
                                                    <tr key={row.number} className="hover:bg-gray-50">
                                                        <td className="px-6 py-4">{row.number}</td>
                                                        <td className="px-6 py-4">{row.name}</td>
                                                        <td className="px-6 py-4">{row.time}</td>
                                                        <td className="px-6 py-4">{row.amount}</td>
                                                        <td className="px-6 py-4">{row.details}</td>
                                                        <td className="px-6 py-4">{row.other}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* Pagination Controls */}
                                    <div className="flex justify-between items-center mt-4">
                                        <p className="text-sm text-gray-600">
                                            Page {currentPage} of {totalPages}
                                        </p>
                                        <div className="space-x-2">
                                            <button
                                                onClick={() => changePage(currentPage - 1)}
                                                disabled={currentPage === 1}
                                                className="px-3 py-1 border rounded-md text-sm bg-white hover:bg-gray-100 disabled:opacity-40"
                                            >
                                                Prev
                                            </button>
                                            {Array.from({ length: totalPages }).map((_, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => changePage(i + 1)}
                                                    className={`px-3 py-1 border rounded-md text-sm ${currentPage === i + 1
                                                            ? 'bg-blue-600 text-white'
                                                            : 'bg-white hover:bg-gray-100'
                                                        }`}
                                                >
                                                    {i + 1}
                                                </button>
                                            ))}
                                            <button
                                                onClick={() => changePage(currentPage + 1)}
                                                disabled={currentPage === totalPages}
                                                className="px-3 py-1 border rounded-md text-sm bg-white hover:bg-gray-100 disabled:opacity-40"
                                            >
                                                Next
                                            </button>
                                        </div>
                                    </div>
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
