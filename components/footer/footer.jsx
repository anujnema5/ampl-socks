import { Leaf, Phone, Mail, Instagram, Send } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#7d8471] text-white rounded-t-3xl pt-12 pb-6 mt-20">
            <div className="mx-auto lg:px-20 px-7">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    <div className="space-y-4 ">
                        <div className="flex items-center space-x-2">
                            <Leaf className="h-6 w-6" />
                            <span className="font-semibold">COMPANY NAME</span>
                        </div>
                        <p className="text-sm">
                            Eco-friendly place,<br />
                            where sustainability<br />
                            meets style!
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Menu</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Catalog</li>
                            <li>About us</li>
                            <li>Contacts</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Catalog</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Organic cosmetic</li>
                            <li>Hygiene products</li>
                            <li>Eco dishes</li>
                            <li>Shoppers</li>
                            <li>Gift sets</li>
                        </ul>
                    </div>

                    

                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold mb-4">Contacts</h3>
                            <div className="space-y-2 text-sm">
                                <div className="flex items-center space-x-2">
                                    <Phone className="h-4 w-4" />
                                    <span>+38067 000 00 00</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Mail className="h-4 w-4" />
                                    <span>lorem@gmail.com</span>
                                </div>
                            </div>
                        </div>
                        {/* <div>
                            <h3 className="font-semibold mb-4">Social media</h3>
                            <div className="flex space-x-4">
                                <Instagram className="h-5 w-5" />
                                <Send className="h-5 w-5" />
                            </div>
                        </div> */}

                        
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-olive-500 text-sm flex flex-col md:flex-row justify-between items-center font-medium">
                    <p>© Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, commodi.</p>
                    <p className="mt-2 md:mt-0">*Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ex.</p>
                </div>
            </div>
        </footer>
    );
}