import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"


const CartPageContent = () => (
    <div className="w-full centerAll">
        <div className="w-8/12 grid grid-cols-1">
             <div className="w-full text-black ">
                <div className="text-red-500 font-black text-4xl centerAll py-10">SHOPPING CART</div>
                
                <div className="hidden md:grid md:grid-cols-12 gap-5 pb-5">
                    <div className="md:col-span-4 lg:col-span-2 centerAll font-bold">IMAGE</div>
                    <div className="md:col-span-2 lg:col-span-1 centerAll font-bold">PRICE</div>
                    <div className="md:col-span-2 lg:col-span-1 centerAll font-bold">QTY</div>
                    <div className="md:col-span-4 lg:col-span-8 flex justify-start font-bold">PRODUCT DETAILS</div>
                </div>

                <div className="p-2">
                <div className="grid grid-cols-12 gap-2 md:gap-5">
                    <div className="col-span-12 md:col-span-4 lg:col-span-2 centerAll">
                        IMAGE
                    </div>
                    
                    <div className="col-span-2 md:col-span-2 lg:col-span-1 centerAll text-lg font-bold text-gray-600">
                        $5.00
                    </div>

                    <div className="col-span-2 md:col-span-2 lg:col-span-1 centerAll">
                                        <div className="centerAll w-10 h-10 border border-black">1</div>
                    </div>                   
                    
                    
                    <div className="col-span-6 md:col-span-4 lg:col-span-8">
                        <div>Product Title</div>
                        <div className="text-gray-500"><i>Product Description</i></div>

                    </div>
                </div>
                </div>

                <div className="w-80">                
                <div className="grid grid-cols-2 gap-5 pt-5">
                    <div className="col-span-1 text-right">
                        <div>Subtotal:</div>
                        <div>Taxes:</div>
                        <div>Shipping:</div>
                        <div>Order Total:</div>
                    </div>
                    <div className="col-span-1 text-left font-bold">
                        <div>Subtotal</div>
                        <div>Taxes</div>
                        <div>Shipping</div>
                        <div>Order Total</div>
                    
                    </div>
                    
                    <div>
                    <div className="py-2">
                        <button className="bg-red-500 hover:bg-red-700 text-white p-5 w-96 font-bold rounded-full">
                            PLACE ORDER
                        </button>
                    </div>
                    
                    </div>

                </div>
                </div>
                </div>

                <div>
                <div className="text-red-500 font-black text-4xl centerAll pt-20">CHECK OUT</div>
    
                </div>
             

             <div className="">         
             <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-5">
             
             <div className="centerAll p-2">
                <div className="grid grid-cols-4 w-full gap-2">
                    <div className="col-span-4 border border-gray-400">
                        USERNAME
                    </div>
                    <div className="col-span-4 border border-gray-400">
                        PASSWORD
                    </div>
                    <div className="py-2 col-span-4 centerAll">
                        <button className=" w-72 bg-blue-700 hover:bg-blue-900 text-white p-5 font-bold rounded-full">
                            PAY WITH PAYPAL
                        </button>
                    </div>
                </div>
             </div>
            <div>
             <div className="grid grid-cols-4 w-full gap-2">
                    <div className="col-span-4 centerAll font-bold">
                    BILLING INFORMATION
                    
                    </div>
                    
                    <div className="col-span-4 ">
                        Ship to this address
                    </div>

                    <div className="col-span-4 md:col-span-2 border border-gray-400">
                        First Name
                    </div>
                    <div className="col-span-4 md:col-span-2 border border-gray-400">
                        Last Name
                    </div>
                    <div className="col-span-4 md:col-span-2 border border-gray-400">
                        E-Mail
                    </div>
                    <div className="col-span-4 md:col-span-2 border border-gray-400">
                        Telephone
                    </div>
                    <div className="col-span-4 border border-gray-400">
                        Address 1
                    </div>
                    <div className="col-span-4 border border-gray-400">
                        Address 2
                    </div>
                    <div className="col-span-4 md:col-span-2 border border-gray-400">
                        City
                    </div>
                    <div className="col-span-2 md:col-span-1 border border-gray-400">
                        State
                    </div>
                    <div className="col-span-2 md:col-span-1 border border-gray-400">
                        Zip
                    </div>
                    <div className="col-span-4 centerAll font-bold">
                    CREDIT CARD INFORMATION
                    </div>
                    <div className="col-span-4 border border-gray-400">
                        Credit Card Number
                    </div>
                    <div className="col-span-2 md:col-span-1 border border-gray-400">
                        Expiration
                    </div>
                    <div className="col-span-2 md:col-span-1 border border-gray-400">
                        SVC
                    </div>
                    
            </div>
            </div>

             </div>
             </div> 
             </div> 
             </div>    
     )
     
     export default CartPageContent