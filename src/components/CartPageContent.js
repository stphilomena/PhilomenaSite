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
                <div className={"relative"}> <span className={"absolute right-0 formAlert"}>{placeholder} is required.</span></div>:""}
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
            <div className="w-full centerAll">
                <div className="w-8/12 grid grid-cols-1">
                    <div className="w-full text-black ">
                        <div className="text-red-500 font-black text-4xl centerAll py-10">SHOPPING CART</div>

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
                                        <button
                                            className="bg-red-500 hover:bg-red-700 text-white p-5 w-96 font-bold rounded-full">
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
                                    <InputField name={"login"} value={cartState.login} placeholder={"Paypal Login"}
                                                setter={setter}
                                                className="col-span-4 inputField" />
                                    <InputField name={"password"} value={cartState.password} placeholder={"Paypal Password"}
                                                setter={setter} type={"password"}
                                                className="col-span-4 inputField" />
                                    <div className="py-2 col-span-4 centerAll">
                                        <button
                                            className=" w-72 bg-blue-700 hover:bg-blue-900 text-white p-5 font-bold rounded-full">
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
                                    <div className="col-span-4 centerAll font-bold">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default CartPageContent