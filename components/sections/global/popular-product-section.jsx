import { ProductCard } from '@/components/cards'
import { CardsLayout } from '@/components/layouts'
import { Button } from '@/components/ui/button'
import React from 'react'

const PopularProduct = () => {
    return (
        <CardsLayout
            heading={'Popular products'}>

            <ul className="grid lg:grid-cols-4 gap-5">
                {new Array(4).fill(0).map((_, i) => (
                    <li key={i}><ProductCard /></li>
                ))}
            </ul>

        </CardsLayout>
    )
}

export default PopularProduct