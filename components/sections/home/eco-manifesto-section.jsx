import { Heading } from "@/components/ui/custom"

const EcoManifestoSection = () => {
    return (
        <div className="w-full flex flex-col">
            <Heading
                className={'uppercase lg:text-8xl text-2xl lg:space-y-10 space-y-3 font-sem'}
                type={'h1'}>

                <div className="lg:space-y-10 space-y-3">
                    <div className="">
                        <span>we are </span>
                        <span>consciously</span>
                    </div>

                    <div className="flex ">
                        <div className="lg:w-96 h-full"></div>
                        <span className="">striving for helping</span>
                    </div>
                </div>

                <div className="lg:space-y-10 space-y-3">

                    <div className="flex">
                        <div className="lg:w-32 h-full"></div>

                        <div className="">
                            <span>and </span>
                            <span>taking care</span>
                        </div>
                    </div>

                    <div className=" flex">
                        <div className="lg:w-96 h-full"></div>
                        <span>of our nature</span>
                    </div>
                </div>

            </Heading>
        </div>
    )
}

export default EcoManifestoSection