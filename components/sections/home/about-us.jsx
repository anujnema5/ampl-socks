import { CardsLayout } from '@/components/layouts';
import React from 'react';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Text } from '@/components/ui/custom';


export default function EcoFriendlyLayout() {
    const data = [
        {
            icon: "💡",
            title: "SAVE",
            bg: "#E6DEDA"
        },
        {
            icon: "🌱",
            title: "WORLD ENVIRONMENT DAY",
            bg: "#E6DEDA"
        },
        {
            icon: "💧",
            title: "EVERY DROP COUNTS",
            bg: "#E6DEDA"
        },
        {
            icon: "♻️",
            title: "RECYCLE",
            bg: "#E6DEDA"
        }
    ]

    return (
        <CardsLayout className={'px-0'} heading={'About us'}>
            <div className="">
                <main className="w-full">
                    {/* About Us Section */}
                    <div className="flex flex-col md:flex-row gap-8 mb-12">
                        <div className="md:w-1/2">

                            <div className="space-y-4">
                                <p className="text-gray-700">
                                    We offer an exclusive selection of products, where each product is a
                                    small step towards taking care of our planet. Our store is not only
                                    about goods, but about lifestyle. Together we create a positive impact
                                    on the environment one step at a time.
                                </p>
                                <p className="text-gray-700">
                                    Our products are ethically sourced and environmentally friendly
                                    alternatives that embody the idea of sustainable living. Join us in our
                                    quest to create a greener, more sustainable future with every
                                    purchase.
                                </p>

                                <p className="text-gray-700">
                                    Our products are ethically sourced and environmentally friendly
                                    alternatives that embody the idea of sustainable living. Join us in our
                                    quest to create a greener, more sustainable future with every
                                    purchase.
                                </p>
                                <button className="text-[#4A5F44] font-medium">Read more</button>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="bg-gray-100 rounded-lg p-6 h-full border-2">

                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {data.map((card, index) => (
                            <AboutCard card={card} key={index} />
                        ))}
                    </div>
                </main>
            </div>
        </CardsLayout>
    );
}

const AboutCard = ({ card }) => {
    return (
        <Card className="shadow-none p-2">

            <CardContent
                className="p-0 border rounded-md min-h-40 flex items-center justify-center bg-gray-100">
                <Text>{card.title}</Text>
            </CardContent>
        </Card>

    )
}