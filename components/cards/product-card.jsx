import { Heart } from 'lucide-react'
import React from 'react'
import Tag from '../ui/tag'
import { Button } from '../ui/button'
import { Text } from '../ui/custom'

const ProductCard = ({ tag }) => {
    // lg:max-h-40 lg:max-w-24 lg:h-40 lg:w-24
    return (
        <div className="flex flex-col gap-5">
            <div>
                <div className="product-img w-full h-80 border-2 bg-gray-100 rounded-lg relative">
                    {tag &&
                        <Tag>{tag}</Tag>
                    }
                    <div className="bg-white rounded-full absolute right-4 top-4 p-2">
                        <Heart />
                    </div>
                </div>
            </div>

            <div className="title-price ml-1">
                <Text className={'text-xl font-medium'}>Product Title</Text>
                <Text className={'text-base'}>$ 30</Text>
            </div>

            <Button className="lg:w-7/12 w-full py-5 bg-gray-200 rounded-xl ">Add to cart</Button>
        </div >
    )
}

export default ProductCard