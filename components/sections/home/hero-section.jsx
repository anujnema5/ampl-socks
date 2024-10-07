import React from 'react';
import { Button } from '@/components/ui/button';
import { Gift, Leaf, Rocket, Award } from 'lucide-react';
import { BenefitsCard } from '@/components/cards';
import { Heading, Text } from '@/components/ui/custom';
import Image from 'next/image';

const HeroSection = () => {
    const benefits = [
        { icon: <Leaf className="w-9 h-9" />, text: 'Eco friendly goods' },
        { icon: <Gift className="w-9 h-9" />, text: 'Eco packaging' },
        { icon: <Rocket className="w-9 h-9" />, text: 'Fast delivery' },
        { icon: <Award className="w-9 h-9" />, text: 'Certificated products' },
    ];

    return (
        <div className="w-full mx-auto px-4 py-8 mt-5">

            {/* Desktop */}
            <div className="flex flex-col gap-3">
                <div className="hidden lg:flex gap-24 items-center">
                    <Heading className={'text-8xl font-normal'}>GREEN CITY STYLE</Heading>
                    <Button variant="default" className="w-72 py-5 rounded-lg">
                        Go to catalog
                    </Button>
                </div>

                <div className="hidden lg:flex items-center gap-8">

                    <Text className={'text-gray-600 lg:w-80'} >
                        Welcome to our eco-conscious store, where sustainability meets style! Discover a curated collection of eco friendly products
                    </Text>

                    <Heading className={'text-8xl font-normal uppercase'}>ECO GOODS STORE</Heading>
                </div>
            </div>

            {/* Mobile Header */}
            <div className="lg:hidden space-y-2 mb-4">
                <h1 className="text-4xl  text-olive-600">GREEN CITY STYLE</h1>
                <h2 className="text-4xl  text-olive-600">ECO GOODS STORE</h2>
            </div>

            <Text className={'text-gray-600 lg:w-80 lg:hidden'} >
                Welcome to our eco-conscious store, where sustainability meets style! Discover a curated collection of eco friendly products
            </Text>

            {/* Hero Image */}
            <div className="relative rounded-lg overflow-hidden my-6 lg:mt-10 bg-[#f5e6d3] p-6 h-96">
                {/* <Image src={'https://img.freepik.com/free-photo/natural-toothbrushes-beauty-health-spa-concept_23-2148645548.jpg?w=1060&t=st=1728305427~exp=1728306027~hmac=751de052c66b8c51e11e73f7bdfb34d3b9048faf97dfb009d6ab4c03abbb9b9e'} alt='comb-img' width={10000} height={1000} className="w-full h-full "/>  */}
            </div>

            {/* Mobile Button */}
            <div className="lg:hidden mb-8">
                <Button className="w-full py-6 bg-secondary ">
                    Go to catalog
                </Button>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                {benefits.map((benefit, i) => (
                    <BenefitsCard key={i} {...benefit} />
                ))}
            </div>
        </div>
    );
};

export default HeroSection;