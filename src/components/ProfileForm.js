import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"
import {Link} from "gatsby";


const ProfileForm = () => (
   
<div className="w-screen centerAll">
<div className="w-10/12">


    <form className=" py-20">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="bg-red-700 h-full centerAll">UPLOAD PICTURE</div>
<div className="grid grid-cols-2 gap-4">
<div><input type="text" name="firstName" className="inputField w-full" placeholder="First Name"/></div>
<div><input type="text" name="lastName" className="inputField w-full" placeholder="Last Name"/></div>
<div><input type="tel" name="telephone" className="inputField w-full" placeholder="Telephone"/></div>
<div><input type="email" name="email" className="inputField w-full" placeholder="E-Mail Address"/></div>
<div className="col-span-2"><input type="text" name="occupation" className="inputField w-full" placeholder="Occupation"/></div>
<div>Date of Birth: <input type="date" name="DOB" className="inputField w-full"/></div>
<div>Member Since: <input type="date" name="memberSince" className="inputField w-full"/></div>
</div>
</div>
<div className="py-10">
<div className="grid grid-cols-4 gap-4">
<div className='col-span-4 lg:col-span-3'><input type="text" name="address1" className="inputField w-full" placeholder="Street Address"/></div>
<div className="col-span-4 lg:col-span-1"><input type="text" name="address2" className="inputField w-full" placeholder="Apt / Suite / Unit"/></div>
<div className="col-span-4 lg:col-span-2"><input type="text" name="city" className="inputField w-full" placeholder="City"/></div>
<div className="col-span-2 lg:col-span-1"><input type="text" name="state" className="inputField w-full" placeholder="State"/></div>
<div className="col-span-2 lg:col-span-1"><input type="text" name="zip" className="inputField w-full" placeholder="Zip Code"/></div>
</div>
<div className="centerAll font-bold py-5">SACRAMENTS RECEIVED</div>
<div className="grid grid-cols-3 gap-4">
<div>Sacrament</div>
<div>When?</div>
<div>Where?</div>
<div><input type="checkbox" name="baptism" value="YES"/> Baptism</div>
<div><input type="date" name="baptismDate" className="inputField w-full"/></div>
<div><input type="text" name="baptismPlace" className="inputField w-full"/></div>
<div><input type="checkbox" name="confession" value="YES"/> Confession</div>
<div><input type="date" name="confessionDate" className="inputField w-full"/></div>
<div><input type="text" name="confessionPlace" className="inputField w-full"/></div>
<div><input type="checkbox" name="communion" value="YES"/> Communion</div>
<div><input type="date" name="communionDate" className="inputField w-full"/></div>
<div><input type="text" name="communionPlace" className="inputField w-full"/></div>
<div><input type="checkbox" name="confirmation" value="YES"/> Confirmation</div>
<div><input type="date" name="confirmationDate" className="inputField w-full"/></div>
<div><input type="text" name="confirmationPlace" className="inputField w-full"/></div>
<div><input type="checkbox" name="matrimony" value="YES"/> Matrimony</div>
<div><input type="date" name="matrimonyDate" className="inputField w-full"/></div>
<div><input type="text" name="matrimonyPlace" className="inputField w-full"/></div>
<div><input type="checkbox" name="extremeUnction" value="YES"/> Extreme Unction</div>
<div><input type="date" name="unctionDate" className="inputField w-full"/></div>
<div><input type="text" name="unctionPlace" className="inputField w-full"/></div>
</div>
<div className="centerAll font-bold py-5">GROUPS / AFFILIATIONS</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg">
<div><input type="checkbox" name="schola" value="YES"/> Schola</div>
<div><input type="checkbox" name="choir" value="YES"/> Choir</div>
<div><input type="checkbox" name="holyNameofJesus" value="YES"/> Holy Name of Jesus</div>
<div><input type="checkbox" name="womensLeague" value="YES"/> Women's League</div>
<div><input type="checkbox" name="thirdOrder" value="YES"/> Third Order of the SSPX</div>
</div>
<div className="centerAll font-bold py-5">FAMILY INFORMATION</div>
<div className="grid grid-cols-2">
<div className="col-span-2">Are You Married? ( ) YES     ( ) NO</div>
<div>Spouse First Name</div>
<div>Spouse Last Name </div>
<div>Spouse Telephone</div>
<div>Spouse EMail</div>
<div className="col-span-2">Do You Have Kids? ( ) YES     ( ) NO</div>
<div>Spouse First Name</div>
<div>Spouse Last Name</div>
<div>+ Add More</div>

</div>

</div>
<div className="centerAll py-10">
    <button className="bg-red-600 text-white font-bold py-5 px-10">
        UPDATE PROFILE
    </button>
</div>
</form>


</div>
</div>
)

export default ProfileForm