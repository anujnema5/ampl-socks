import React from 'react'
import { Heading } from '../ui/custom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import clsx from 'clsx'

const CardsLayout = ({ heading, headingClassname, className, children }) => {
    return (
        <div
            className={clsx("w-full px-4", className)}>
            <div
                className="flex justify-between w-full">
                <Heading
                    className={clsx(headingClassname, 'font-normal')}
                    type={'h2'}>
                    {heading}
                </Heading>

                <div
                    className="lg:flex items-center gap-2 hidden">
                    <span className="border p-2 rounded-lg">
                        <ChevronLeft className="w-5" />
                    </span>

                    <span className="border p-2 rounded-lg">
                        <ChevronRight className="w-5" />
                    </span>
                </div>
            </div>

            <div
                className="mt-7">
                {children}
            </div>
        </div>
    )
}

export default CardsLayout