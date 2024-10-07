import React from 'react'
import { Heading, Text } from '../ui/custom'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Leaf } from 'lucide-react'

const OfferBanner = () => {
    return (
        <div className="w-full py-8 px-4 lg:py-12 lg:px-8 xl:py-20 xl:px-20 bg-[#7D8471] rounded-xl">
            <div className="w-full mx-auto">
                {/* Mobile Layout */}
                <div className="block lg:hidden space-y-4">
                    <div className="space-y-2">
                        <Heading type={'h1'} className="text-white text-4xl font-light uppercase">
                            Your first purchase
                        </Heading>
                        <div className="flex items-center gap-2">
                            <Heading type={'h2'} className="text-white text-4xl font-light uppercase">
                                with
                            </Heading>
                            <Heading type={'h2'} className="text-[#E3A668] text-4xl font-light uppercase">
                                10% off
                            </Heading>
                            <Leaf className="text-white w-6 h-6 ml-2" />
                        </div>
                    </div>

                    <Text className="text-white text-sm opacity-80">
                        Subscribe to our newsletter and get discount on your first purchase
                    </Text>

                    <div className="space-y-2">
                        <Input
                            placeholder="Enter your e-mail"
                            className="w-full bg-transparent border rounded-md placeholder:text-white/40 py-5"
                        />
                        <Button className="w-full py-5 text-white bg-[#E3A668] hover:bg-[#d39557]">
                            Subscribe
                        </Button>
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:block">
                    <div className="space-y-8">
                        <Heading type={'h1'} className="text-white text-4xl lg:text-7xl font-light uppercase">
                            Your first purchase
                        </Heading>
                        <div className="flex gap-10 ml-28 items-center">
                            <div className="w-20 h-full text-white border">ICON</div>
                            <div className="flex flex-col gap-8">
                                <div className="flex gap-8 ">
                                    <Text className="text-white w-80 opacity-80">
                                        Subscribe to our newsletter and get discount on your first purchase
                                        Lorem, ipsum dolor sit amet
                                    </Text>
                                    <div className="flex">
                                        <Heading type={'h2'} className="text-white text-4xl lg:text-7xl font-light uppercase">
                                            with
                                        </Heading>
                                        <Heading type={'h2'} className="text-[#E3A668] text-4xl lg:text-7xl font-light uppercase">
                                            10% off
                                        </Heading>
                                    </div>
                                </div>
                                <div className="flex w-10/12 items-center gap-3 ">
                                    <Input
                                        placeholder="Enter your e-mail"
                                        className="border rounded-lg placeholder:text-white/40 py-5"
                                    />
                                    <Button className="w-5/12 py-5 text-white bg-[#E3A668] hover:bg-[#d39557]">
                                        Subscribe
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OfferBanner