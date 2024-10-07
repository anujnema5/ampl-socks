import React from 'react'

import {
    Card,
    CardContent,
} from "@/components/ui/card"
import clsx from 'clsx'

const CategoriesCard = ({ imgSrc, text }) => {

    return (
        <Card className="p-0 shadow-none bg-gray-100 border-2">
            <CardContent className="p-0 relative">
                <div className="h-64 m-auto"></div>
                <Tag className={'absolute bottom-0 right-0'}>{text}</Tag>
            </CardContent>
        </Card>
    )
}

const Tag = ({ className, text }) => {
    return (
        <div className={clsx(className)}>{text}</div>
    )
}

export default CategoriesCard