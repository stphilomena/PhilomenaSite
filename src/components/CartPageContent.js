import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"
import {useState} from "react";

const InputField = ({placeholder, type, className, value, setter, name, required}) => {
    const [pristine, setPristine] = useState(true);
    const onChange = (e) => {
        setPristine(false);
        setter(e, name);
    }
    const onBlur = () => {
        setPristine(false)
    }
    return (<div className={className}>
            {!pristine && required && (value||"").length === 0 ?
                <div className={"relative"}> <span className={"text-bold text-red-500 "}>*</span></div>:""}
        <input type={type||"text"} className={"w-full"} onChange={onChange} onBlur={onBlur} name={name} placeholder={placeholder} value={value} />
        </div>
    )
};

const CartPageContent = () => {
    const [cartState, setCartState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        cc: '',
        exp: '',
        svc:'',
        login:'',
        password: ''
    })
    const setter = (e, name) => {
        const state = {...cartState};
        state[name] = e.target.value;
        setCartState(state);
    };
    return (
        <form>
<div className="text-red-500 font-black text-4xl centerAll py-10">SHOPPING CART</div>
<div className="w-full centerAll">
    
    <div className=" w-10/12">
    <div className="hidden md:grid md:grid-cols-12 gap-5 pb-5">
                            <div className="md:col-span-4 lg:col-span-2 centerAll font-bold">IMAGE</div>
                            <div className="md:col-span-2 lg:col-span-1 centerAll font-bold">PRICE</div>
                            <div className="md:col-span-2 lg:col-span-1 centerAll font-bold">QTY</div>
                            <div className="md:col-span-4 lg:col-span-8 flex justify-start font-bold">PRODUCT DETAILS
                            </div>
                        </div>

                        <div className="p-2">
                            <div className="grid grid-cols-12 gap-2 md:gap-5">
                                <div className="col-span-12 md:col-span-4 lg:col-span-2 centerAll">
                                    IMAGE
                                </div>

                                <div
                                    className="col-span-2 md:col-span-2 lg:col-span-1 centerAll text-lg font-bold text-gray-600">
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
    </div>
</div>

<div className="centerAll">
    <div className="w-10/12 py-5">
    <div className=" w-max">
    <div className="grid grid-cols-2 gap-2 px-10">
                <div className="col-span-1 text-right">
                    <div>Subtotal:</div>
                    <div>Taxes:</div>
                    <div>Shipping:</div>
                    <div>Order Total:</div>
                </div>
        <div>
        <div className="col-span-1 text-left font-bold ">
                <div>Subtotal</div>
                <div>Taxes</div>
                <div>Shipping</div>
                <div>Order Total</div>
            </div>
        </div>
    </div>
    <div className="py-5">
    <Link to="#checkout">
        <button className="bg-red-500 hover:bg-red-700 text-white p-5 w-full font-bold rounded-full">
                PLACE ORDER
        </button>
        </Link>
   
    </div>
    </div>
    </div>   
</div>



<div id="checkout" className="text-red-500 font-black text-4xl centerAll py-10">CHECK OUT</div>

<div className="centerAll">

<div className="grid grid-cols-1 gap-2 lg:grid-cols-2 w-10/12">
                   
        <div>
                            <div className="grid grid-cols-4 w-full gap-2">
                                    <div className="col-span-4 centerAll font-bold py-5">
                                        SHIPPING INFORMATION

                                    </div>

                                    <div className="col-span-4">
                                    &#9745; Copy address to billing information
                                    </div>

                                    <InputField name={"firstName"} value={cartState.firstName} setter={setter}
                                                placeholder={"First Name"} required={true}
                                                className="inputField col-span-4 md:col-span-2"/>
                                    <InputField name={"lastName"} value={cartState.lastName} setter={setter}
                                                placeholder={"Last Name"} required={true}
                                                className="col-span-4 md:col-span-2 inputField" />
                                    <InputField name={"email"} value={cartState.email} placeholder={"E-Mail"}
                                                setter={setter} required={true} type={"email"}
                                                className="col-span-4 md:col-span-2 inputField" />
                                    <InputField name={"phone"} value={cartState.phone} setter={setter}
                                                placeholder={"Telephone"} required={true}
                                                className="col-span-4 md:col-span-2 inputField" />
                                    <InputField name={"address1"} value={cartState.address1} setter={setter}
                                                placeholder={"Address 1"} required={true}
                                                className="col-span-4 inputField" />
                                    <InputField name={"address2"}  value={cartState.address2} setter={setter}
                                        placeholder={"Address 2"} required={false}
                                        className="col-span-4 inputField" />
                                    <InputField name={"city"} value={cartState.city} setter={setter}
                                                placeholder={"City"}  required={true}
                                                className="col-span-4 md:col-span-2 inputField" />
                                    <InputField name={"state"} value={cartState.state} setter={setter}
                                                placeholder={"State"} required={true}
                                                className="col-span-2 md:col-span-1 inputField" />
                                    <InputField name={"zip"} value={cartState.zip} setter={setter}
                                                placeholder={"Zip"} required={true}
                                                className="col-span-2 md:col-span-1 inputField" />
                                    
                                </div> 
                            </div>

        
        <div>
        <div className="grid grid-cols-4 w-full gap-2">
                                    <div className="col-span-4 centerAll font-bold py-5">
                                        BILLING INFORMATION

                                    </div>

                                    <div className="col-span-4">
                                    &#9745; Ship to the same address
                                    </div>

                                    <InputField name={"firstName"} value={cartState.firstName} setter={setter}
                                                placeholder={"First Name"} required={true}
                                                className="inputField col-span-4 md:col-span-2"/>
                                    <InputField name={"lastName"} value={cartState.lastName} setter={setter}
                                                placeholder={"Last Name"} required={true}
                                                className="col-span-4 md:col-span-2 inputField" />
                                    <InputField name={"email"} value={cartState.email} placeholder={"E-Mail"}
                                                setter={setter} required={true} type={"email"}
                                                className="col-span-4 md:col-span-2 inputField" />
                                    <InputField name={"phone"} value={cartState.phone} setter={setter}
                                                placeholder={"Telephone"} required={true}
                                                className="col-span-4 md:col-span-2 inputField" />
                                    <InputField name={"address1"} value={cartState.address1} setter={setter}
                                                placeholder={"Address 1"} required={true}
                                                className="col-span-4 inputField" />
                                    <InputField name={"address2"}  value={cartState.address2} setter={setter}
                                        placeholder={"Address 2"} required={false}
                                        className="col-span-4 inputField" />
                                    <InputField name={"city"} value={cartState.city} setter={setter}
                                                placeholder={"City"}  required={true}
                                                className="col-span-4 md:col-span-2 inputField" />
                                    <InputField name={"state"} value={cartState.state} setter={setter}
                                                placeholder={"State"} required={true}
                                                className="col-span-2 md:col-span-1 inputField" />
                                    <InputField name={"zip"} value={cartState.zip} setter={setter}
                                                placeholder={"Zip"} required={true}
                                                className="col-span-2 md:col-span-1 inputField" />
                                    </div>
        </div>
    </div>
</div>

<div className="centerAll">
<div className="grid grid-cols-1 gap-2 lg:grid-cols-2 w-10/12">
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
        <div className="col-span-4 centerAll font-bold py-5">
        CREDIT CARD INFORMATION
        </div>
            <InputField name={"cc"} value={cartState.cc} placeholder={"Credit Card Number"}
                        setter={setter}
                        className="col-span-4 inputField" />
            <InputField name={"exp"} value={cartState.exp} placeholder={"Expiration"}
                        setter={setter}
                        className="col-span-2 md:col-span-1 inputField" />
            <InputField name={"svc"} value={cartState.svc} placeholder={"SVC"}
                        setter={setter}
                        className="col-span-2 md:col-span-1 inputField" />
        </div>
        <div>
        <div className="col-span-4 centerAll font-bold py-5">
         HAVE A PAYPAL ACCOUNT?
         </div>
         <div className="centerAll">
            <button className=" w-72 bg-blue-700 hover:bg-blue-900 text-white p-5 font-bold rounded-full">
            PAY WITH PAYPAL
            </button>
        </div>
        </div>
    </div>
</div>

<div className="py-20">

</div>
</form>
    )
}

export default CartPageContent