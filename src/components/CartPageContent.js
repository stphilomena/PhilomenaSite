import * as React from "react"
import { useSelector} from 'react-redux'
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {addProduct, removeProduct} from "../state/cart";
import {updateShippingField, updateBillingField, updateShippingInfo, updateBillingInfo} from "../state/checkout"
import {Link} from "gatsby";
import {GatsbyImage,getImage} from "gatsby-plugin-image";
import {USD_P2} from "../helpers/NumberHelper";
import Paypal from "gatsby-plugin-paypal"
import Combobox from "./forms/combobox";
import statesList from "./forms/states";

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
    const billingInfo = useSelector((state) => state.checkout.billing)
    const shippingInfo = useSelector((state) => state.checkout.shipping)

    const setter = (e, name) => {
        // const state = {...shippingInfo};
        // state[name] = e.target.value;
        // setShippingInfo(state);
        dispatch(updateShippingField({name: name, value: e.target.value}))
    };

    const setterBilling = (e, name) => {
        // const state = {...billingInfo};
        // state[name] = e.target.value;
        // setBillingInfo(state);
        dispatch(updateBillingField({name: name, value: e.target.value}))
    };
    const copyToShipping = (e) => {
        e.preventDefault();
        // setShippingInfo({...billingInfo});
        dispatch(updateShippingInfo({info: billingInfo}))
    }
    const copyToBilling = (e) => {
        e.preventDefault();
        dispatch(updateBillingInfo({info: shippingInfo}))
    }
    useEffect(() => {
        if (typeof window !== `undefined`) {
            window.order = {
                shipping: shippingInfo,
                billing: billingInfo,
                cart: cartProducts.map(item => {
                    return {itemId: item.itemId, qty: item.qty}
                })
            }
        }
    });
    const submitOrder = () => {
        return fetch('/api/create-order',
            {
                headers: {'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(window.order)
            })
            .then((res) => res.json())
            .then(data => data.orderID)
            .catch(err => {console.log(err)});
    }
    const shipping = useSelector((state) => state.cart.shipping)
    const cartTotal = useSelector((state) => state.cart.total)
    const cartLength = useSelector((state) => state.cart.products.length)
    const cartProducts = useSelector((state) => state.cart.products)
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);

    return (
        <form>
            {errors.length > 0 ?
                <div className="">
                    <div className="centerAll bg-blue-600 py-2 text-white">
                        <p className="text-5xl">&#x26A0; &nbsp;</p>
                        <p className="text-4xl font-bold"> PAYMENT FAILED</p>
                    </div>
                    <div className="centerAll bg-blue-700 p-1 text-white">Your payment method has failed. Please enter
                        another form of payment.
                    </div>
                </div>
                : ""}
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

    {cartProducts.map(product => { return (
        <div key={product.itemId} className="grid grid-cols-4 py-2 border-b border-gray-200">
            <div className="">
                <div className="grid grid-cols-4">
                    <div className="hidden sm:flex sm:justify-end sm:mr-2 items-center">
                        <button className="w-7 h-7 border border-red-500 text-red-500 text-center font-extrabold rounded-md hover:bg-red-500 hover:text-white"

                                onClick={() => dispatch(removeProduct({itemId: product.itemId}))}
                        >X</button>

                    </div>
                    <div className=" object-contain col-span-4 sm:col-span-3">
                        <GatsbyImage className={"h-32 w-32"} alt={product.title} image={getImage(product.image)} />

                    </div>
                </div>
            </div>

            <div className="col-span-2 ">
                <div className="grid grid-cols-4  h-32 items-center">
                    <div className="col-span-4 sm:col-span-3 font-bold text-gray-600 ">{product.title}</div>
                    <div className="col-span-4 sm:col-span-1 ">{USD_P2(product.price)}</div>
                </div>
            </div>

            <div className="">
                <div className="flex items-center h-32">
                    <div className="flex justify-end">
                        <button className="w-8 h-8 border text-gray-500 border-gray-500 rounded-full hover:bg-gray-500 hover:text-white"
                                onClick={(e) => {e.preventDefault();dispatch(removeProduct({itemId: product.itemId, qty: 1}))}}

                        >-</button>
                    </div>
                    <div className="centerAll px-2 w-10">{product.qty}</div>
                    <div className="">
                        <button className="w-8 h-8 border border-gray-500 text-gray-500 rounded-full hover:bg-gray-500 hover:text-white"
                                onClick={(e) => {e.preventDefault(); dispatch(addProduct({itemId: product.itemId, qty: 1}))}}
                        >+</button>
                    </div>
                </div>
            </div>

        </div>

    );}) }

</div>
</div>

<div className="centerAll">
    <div className="w-10/12 py-5">
    <div className=" w-max">
    <div className="grid grid-cols-2 gap-2 px-10">
                <div className="col-span-1 text-right">
                    <div>Subtotal:</div>
                    <div>Shipping:</div>
                    <div>Order Total:</div>
                </div>
        <div>
        <div className="col-span-1 text-left font-bold ">
                <div>{USD_P2(cartTotal)}</div>
                <div>{USD_P2(shipping)}</div>
                <div>{USD_P2(Number.parseFloat(cartTotal) + Number.parseFloat(shipping))}</div>
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
                                        <button onClick={copyToBilling}>&#9745; Copy to billing address</button>
                                    </div>

                                    <InputField name={"firstName"} value={shippingInfo.firstName} setter={setter}
                                                placeholder={"First Name"} required={true}
                                                className="inputField col-span-4 md:col-span-2"/>
                                    <InputField name={"lastName"} value={shippingInfo.lastName} setter={setter}
                                                placeholder={"Last Name"} required={true}
                                                className="col-span-4 md:col-span-2 inputField" />
                                    <InputField name={"email"} value={shippingInfo.email} placeholder={"E-Mail"}
                                                setter={setter} required={true} type={"email"}
                                                className="col-span-4 md:col-span-2 inputField" />
                                    <InputField name={"phone"} value={shippingInfo.phone} setter={setter}
                                                placeholder={"Telephone"} required={true}
                                                className="col-span-4 md:col-span-2 inputField" />
                                    <InputField name={"address1"} value={shippingInfo.address1} setter={setter}
                                                placeholder={"Address 1"} required={true}
                                                className="col-span-4 inputField" />
                                    <InputField name={"address2"}  value={shippingInfo.address2} setter={setter}
                                        placeholder={"Address 2"} required={false}
                                        className="col-span-4 inputField" />
                                    <InputField name={"city"} value={shippingInfo.city} setter={setter}
                                                placeholder={"City"}  required={true}
                                                className="col-span-4 md:col-span-2 inputField" />
                                    <Combobox name={"state"} value={shippingInfo.state}
                                              optionList={statesList}
                                              freeText={false}
                                              onChange={(e)=> {
                                                  dispatch(updateShippingField({name: "state", value: e.target.valueId}))
                                              }}
                                                placeholder={"State"} required={true}
                                                className="col-span-2 md:col-span-1 inputField" />
                                    <InputField name={"zip"} value={shippingInfo.zip} setter={setter}
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
                                        <button onClick={copyToShipping}>&#9745; Ship to the same address</button>
                                    </div>

                                    <InputField name={"firstName"} value={billingInfo.firstName} setter={setterBilling}
                                                placeholder={"First Name"} required={true}
                                                className="inputField col-span-4 md:col-span-2"/>
                                    <InputField name={"lastName"} value={billingInfo.lastName} setter={setterBilling}
                                                placeholder={"Last Name"} required={true}
                                                className="col-span-4 md:col-span-2 inputField" />
                                    <InputField name={"email"} value={billingInfo.email} placeholder={"E-Mail"}
                                                setter={setterBilling} required={true} type={"email"}
                                                className="col-span-4 md:col-span-2 inputField" />
                                    <InputField name={"phone"} value={billingInfo.phone} setter={setterBilling}
                                                placeholder={"Telephone"} required={true}
                                                className="col-span-4 md:col-span-2 inputField" />
                                    <InputField name={"address1"} value={billingInfo.address1} setter={setterBilling}
                                                placeholder={"Address 1"} required={true}
                                                className="col-span-4 inputField" />
                                    <InputField name={"address2"}  value={billingInfo.address2} setter={setterBilling}
                                        placeholder={"Address 2"} required={false}
                                        className="col-span-4 inputField" />
                                    <InputField name={"city"} value={billingInfo.city} setter={setterBilling}
                                                placeholder={"City"}  required={true}
                                                className="col-span-4 md:col-span-2 inputField" />
                                    <Combobox name={"state"} value={billingInfo.state}
                                              optionList={statesList}
                                              freeText={false}
                                              onChange={(e)=> {
                                                  dispatch(updateBillingField({name: "state", value: e.target.valueId}))
                                              }}
                                                placeholder={"State"}
                                                className="col-span-2 md:col-span-1 inputField" />
                                    <InputField name={"zip"} value={billingInfo.zip} setter={setterBilling}
                                                placeholder={"Zip"} required={true}
                                                className="col-span-2 md:col-span-1 inputField" />
                                    </div>
        </div>
    </div>
</div>
         <div className="centerAll py-10">
             <Paypal createOrder={submitOrder}
                     onClick={(data, action) => {
                         action.reject();
                     }}

             />
            {/*<button className=" w-72 bg-red-500 hover:bg-red-700 text-white p-5 font-bold rounded-full"*/}
            {/*        onClick={submitOrder}*/}
            {/*>*/}

            {/*COMPLETE ORDER*/}
            {/*</button>*/}
        </div>
       


<div className="py-10">
</div>
</form>
    )
}

export default CartPageContent