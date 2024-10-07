import React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


const BenefitsCard = ({ icon, text }) => {
    return (
        <Card className="w-full shadow-none border-2 rounded-lg py-7 lg:py-10">
            <CardContent className="p-0 flex flex-col gap-3 items-center justify-center">
                {icon} <p>{text}</p>
            </CardContent>
        </Card>
    )
}

export default BenefitsCard