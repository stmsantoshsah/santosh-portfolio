"use client";
import React from "react";
import phone from '../assets/images/phone.svg'
import "../scss/Global.scss";
const contactData =[
  {
    "id": 1,
    "type": "Phone",
    "value": "+91-620-50-2709",
    "link": "tel:91-620-50-2709",
    "icon": "phone"
  },
  {
    "id": 2,
    "type": "Location",
    "value": "Chandigarh, India",
    "link": "#",
    "icon": "location"
  },
  {
    "id": 3,
    "type": "E-Mail",
    "value": "Santosh1500165@gmail.com",
    "link": "mailto:santosh1500165@gmail.com",
    "icon": "email"
  }
]

const icons = {
  phone: (
    <svg version="1.1" width="25px" height="25px" fill="#147efb" viewBox="0 0 1200 1200">
                  <path id="path16102" d="M1183.326,997.842l-169.187,167.83
                    c-24.974,25.612-58.077,34.289-90.316,34.328c-142.571-4.271-277.333-74.304-387.981-146.215
                    C354.22,921.655,187.574,757.82,82.984,559.832C42.87,476.809-4.198,370.878,0.299,278.209c0.401-34.86,9.795-69.073,34.346-91.543
                    L203.831,17.565c35.132-29.883,69.107-19.551,91.589,15.257l136.111,258.102c14.326,30.577,6.108,63.339-15.266,85.188l-62.332,62.3
                    c-3.848,5.271-6.298,11.271-6.36,17.801c23.902,92.522,96.313,177.799,160.281,236.486
                    c63.967,58.688,132.725,138.198,221.977,157.021c11.032,3.077,24.545,4.158,32.438-3.179l72.51-73.743
                    c24.996-18.945,61.086-28.205,87.771-12.714h1.272l245.51,144.943C1205.373,927.619,1209.131,971.279,1183.326,997.842
                    L1183.326,997.842z"></path>
                </svg>
  ),
  location: (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
      <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
      <path d="M20.2 20.2l1.8 1.8"></path>
    </svg>
  ),
  email: (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7l9 6l9 -6"></path>
      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
    </svg>
  ),
};

const Contact = () => {
  return (
    <section id="contact" className="contact spacing_top spacing_bottom">
      <div className="container">
        <div className="contact__content">
          <div className="contact__title">
            <h3 className="section-title">Contact</h3>
            <h2 className="section-subtitle">Don't be shy! Hit me up! 👇</h2>
          </div>
          <div className="contact__icons">
            {contactData.map((item) => (
              <div className="contact__icon-box" key={item.id}>
                <span>{icons[item.icon]} </span>
                <div className="contact__info">
                  <h3>{item.type}</h3>
                  {item.link !== "#" ? (
                    <a href={item.link}>{item.value}</a>
                  ) : (
                    <p>{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
