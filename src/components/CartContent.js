import * as React from "react"


const CartContent = () => (
   <div className="p-5  grid grid-cols-3 gap-5 justify-start w-full">
       <div className="bg-gray-300 cols-span-1 w-full centerAll">
        IMAGE           
       </div>
       <div className="w-2/3 grid grid-rows-3 justify-start">
       <div>Title</div>
       <div>Quantity: </div>
       <div>Total</div>
       </div>
   </div>
    )
    
    export default CartContent