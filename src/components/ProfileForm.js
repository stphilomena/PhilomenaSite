import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"
import {Link} from "gatsby";


const ProfileForm = () => (
   
<div className="w-screen centerAll">
<div className="w-10/12">


    <form className=" py-20">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="bg-red-700 h-full centerAll">PICTURE</div>
<div className="grid grid-cols-2 gap-4">
<div><label>First Name: <input type="text" name="firstName" />  </label></div>
<div>LAST NAME</div>
<div>TELEPHONE</div>
<div>EMAIL</div>
<div className="col-span-2">OCCUPATION</div>
<div>DATE OF BIRTH</div>
<div>MEMBER SINCE</div>
</div>
</div>
<div className="bg-gray-500">
<div>ADDRESS</div>
<div>ADDRESS</div>
<div className="grid grid-cols-4">
<div className="col-span-4 md:col-span-2">CITY</div>
<div className="col-span-2 md:col-span-1">STATE</div>
<div className="col-span-2 md:col-span-1">ZIP</div>
</div>
<div className="centerAll font-bold py-5">SACRAMENTS RECEIVED</div>
<div className="grid grid-cols-3">
<div>Sacrament</div>
<div>When?</div>
<div>Where?</div>
<div>Baptism</div>
<div>- - - - </div>
<div>- - - - </div>
<div>Confession</div>
<div>- - - - </div>
<div>- - - - </div>
<div>Communnion</div>
<div>- - - - </div>
<div>- - - - </div>
<div>Confirmation</div>
<div>- - - - </div>
<div>- - - - </div>
<div>Marriage</div>
<div>- - - - </div>
<div>- - - - </div>
<div>Extreme Unction</div>
<div>- - - - </div>
<div>- - - - </div>
</div>
<div className="centerAll font-bold py-5">AFFILIATIONS</div>
<div className="grid grid-cols-3">
<div>Holy Name of Jesus</div>
<div>Women's League</div>
<div>Third Order of the SSPX</div>
</div>
<div className="centerAll font-bold py-5">FAMILY INFORMATION</div>
<div className="grid grid-cols-2">
<div className="col-span-2">Are You Married? ( ) YES     ( ) NO</div>
<div>Spouse First Name</div>
<div>Spouse Last Name</div>
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