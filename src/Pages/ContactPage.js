import React from 'react'
import ContactItem from '../Components/ContactItem'
import phone from '../img/phone.svg'
import email from '../img/emailme.svg'
import location from '../img/location.svg'
function ContactPage() {
    return (
        <div  className="ContactPage">
           <div className="map-sect">

           </div>
           <div className="contact-sect">
               <ContactItem icon={phone} text1={"+48 517 220 852"} text2={"+213 1232 2132"}/>
               <ContactItem icon={email} text1={"+48 517 220 852"} text2={"+213 1232 2132"}/>
               <ContactItem icon={location} text1={"+48 517 220 852"} text2={"+213 1232 2132"}/>
           </div>
        </div>
    )
}

export default ContactPage
