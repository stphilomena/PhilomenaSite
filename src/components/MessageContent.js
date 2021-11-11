import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"
import {Link} from "gatsby";


const MessageContent = () => (
   
    

<div className="centerAll w-full">
    
    <div className="w-10/12 centerAll py-20">
 <div>
            <form>
<div className="py-20">
    <div>
    <strong>WHAT TYPE OF MESSAGE WOULD YOU LIKE TO SEND?</strong>
        <div>
        <label><input type="radio" name="messageType" value="SMS" /> TEXT MESSAGE</label><br/>
        <label><input type="radio" name="messageType" value="EMAIL" /> EMAIL MESSAGE</label>
        </div>
    </div>
    <div className="pt-10">
        <strong>WHO WILL RECEIVE THIS MESSAGE?</strong>
        <div>
        <select id="recipient" name="recipient">
            <option > Select Recipient </option>
            <option value="group1">group1</option>
            <option value="group2">group2</option>
            <option value="group3">group3</option>
        </select>
        </div>
    </div>

    <div className="pt-10">
        <strong>WHAT WOULD YOU LIKE TO SAY?</strong>
        <div>
        <input className="border w-10/12 h-48" type="text" name="message" rows="10" cols="30" defaultValue="GREG!!!!  HELP!!!!!"/>
        </div>
    </div>
               
    </div>
            
            <input className="bg-red-600 text-white font-bold p-4 hover:bg-red-700" type="submit" value="SEND MESSAGE" />
            </form>
 </div>
    </div>
</div>
)

export default MessageContent
