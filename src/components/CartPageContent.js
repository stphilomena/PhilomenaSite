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

<div className="centerAll">
<div className="px-5 md:px-0 md:w-10/12">
    <div className="hidden sm:block border-b pb-2">
        <div className="grid grid-cols-4">
        <div></div>
        <div className="col-span-2">
        <div className="grid grid-cols-4">
                <div className="col-span-4 sm:col-span-3 font-bold">PRODUCT</div>
                <div className="col-span-4 sm:col-span-1 font-bold">PRICE</div>
            </div>
            </div>
        <div className="font-bold">QUANTITY</div>
        </div>
    </div>

    <div className="grid grid-cols-4 py-2 border-b border-gray-200">
        <div className="">
        <div className="grid grid-cols-4">
            <div className="hidden sm:flex sm:justify-end sm:mr-2 ">
            <button className="w-7 h-7 border border-red-500 text-red-500 text-center font-extrabold rounded-md hover:bg-red-500 hover:text-white">X</button>                  

            </div>
            <div className=" object-contain col-span-4 sm:col-span-3">image</div>
        </div>
        </div>
        
        <div className="col-span-2 ">
            <div className="grid grid-cols-4">
                <div className="col-span-4 sm:col-span-3 font-bold text-gray-600">Title</div>
                <div className="col-span-4 sm:col-span-1 ">Price</div>
            </div>
        </div>

        <div className="">
            <div className="flex">
                    <div className="flex justify-end">
                        <button className="w-8 h-8 border text-gray-500 border-gray-500 rounded-full hover:bg-gray-500 hover:text-white">-</button>
                    </div>
                    <div className="centerAll px-2 w-10">1</div>
                    <div className="">
                    <button className="w-8 h-8 border border-gray-500 text-gray-500 rounded-full hover:bg-gray-500 hover:text-white">+</button>                  
                    </div>    
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
    <div className="py-5 ">
    <a href="#checkout">
        <button className="bg-red-500 hover:bg-red-700 text-white p-5 w-full font-bold rounded-full">
                PLACE ORDER
        </button>
    </a>
   
    </div>
    </div>
    </div>   
</div>

<div className="py-10"> </div>
<div className="centerAll">
<div id="checkout" className="w-10/12 border-t border-b border-gray-300 text-red-500 font-black text-4xl centerAll py-7">CHECK OUT</div>
</div>
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
        <div className="grid grid-cols-4 w-full gap-2  pl-2">
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
         <div className="centerAll py-10">
            <button className=" w-72 bg-red-500 hover:bg-red-700 text-white p-5 font-bold rounded-full">
            COMPLETE ORDER
            </button>
        </div>
       


<div className="py-10">
</div>
</form>
    )
}

export default CartPageContent