import { CategoriesCard } from '@/components/cards'
import { CardsLayout } from '@/components/layouts'
import React from 'react'

const CategoriesSection = ({heading}) => {

    const tempData = [
        { imgSrc: '', text: 'lorem' },
        { imgSrc: '', text: 'lorem' },
        { imgSrc: '', text: 'lorem' },
    ]

    return (
        <CardsLayout
            heading={heading}>
            <ul
                className="grid lg:grid-cols-3 grid-cols-1 lg:gap-5 gap-5">
                {tempData.map((category, i) => (
                    <li key={i}><CategoriesCard {...category} /></li>
                ))}
            </ul>
        </CardsLayout>
    )
}

export default CategoriesSection