"use client"
import React, { useRef, useState } from "react";
import "@/types/formData"
import DOMPurify from 'dompurify';
import {
  LiaAtSolid,
  LiaMapMarkerSolid,
  LiaPhoneAltSolid,
  LiaPaperPlane
} from "react-icons/lia";
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

function Contact() {
  const [formData, setFormData] = useState<formData>({userName:"",email:"",subject:"",message:""});
  const formRef = useRef<HTMLFormElement>(null);
  function handleChange( event : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    const {name, value}:any = event.target;
    setFormData((prevFormData)=>({...prevFormData, [name]:value}))
    console.log(formData);
  } 

  function handleClick(){
    formRef.current?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    const sanitizedData = {
      ...formData,
      message: DOMPurify.sanitize(formData.message)
    };
    setFormData(sanitizedData);
    emailjs.sendForm('FullCoding', 'fullCoding_Template', formRef.current!, 'GJCbIwr-B8qpFObBe')
      .then((result) => {
          console.log(result.text);
          toast.success("Email envoyé avec succès!");
          formRef.current?.reset();
          setFormData({ userName: "", email: "", subject: "", message: "" });
      }, (error) => {
          console.log(error.text);
          toast.error("Erreur lors de l'envoi de l'email.");
      });
  }
  return (
    <React.Fragment>
      
      <section>
        <div className="container mx-auto px-5 py-5 relative mb-10">
          <h1 className="text-center mt-4 mb-4 text-4xl" data-aos="fade-up" data-aos-duration={1000}>Nous contacter</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mt-8 py-5 gap-3 mb-3">
            <div className="col-span-1 flex flex-col gap-4">
              <div className="border py-7 pl-10  flex items-center gap-4 rounded" data-aos="fade-up" data-aos-duration={1000}>
                <LiaMapMarkerSolid size={30} />
                <a href="" className="flex flex-col gap-1">
                  <div className="">
                    <span>Localisation</span>
                  </div>
                  <div className="">
                    <address>Antananarivo, Madagascar, 101</address>
                  </div>
                </a>
              </div>
              <div className="border py-7 pl-10  flex items-center gap-4 rounded" data-aos="fade-up" data-aos-duration={1000}>
                <LiaAtSolid size={30} />
                <a href="" className="flex flex-col gap-1">
                  <div className="">
                    <span>Address mail</span>
                  </div>
                  <div className="">
                    <address>contact@fullcoding.mg</address>
                  </div>
                </a>
              </div>
              <div className="border py-7 pl-10  flex items-center gap-4 rounded" data-aos="fade-up" data-aos-duration={1000}>
                <LiaPhoneAltSolid size={30} />
                <a href="" className="flex flex-col gap-1">
                  <div className="">
                    <span>Téléphone</span>
                  </div>
                  <div className="">
                    <address>+261 32 56 088 38</address>
                  </div>
                </a>
              </div>
             
            </div>
            <div className="col-span-1">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4" ref={formRef} noValidate action="" method="POST">
                <input
                  type="text"
                  name="userName"
                  value={formData.userName}
                  placeholder="Votre Nom*"
                  required
                  className="border px-4 py-5 rounded"
                  onChange={handleChange}
                  data-aos="fade-up" data-aos-duration={1000}
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Votre Sujet*"
                  value={formData.subject}
                  required
                  className="border px-4 py-5 rounded"
                  onChange={handleChange}
                  data-aos="fade-up" data-aos-duration={1000}

                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Votre email*"
                  value={formData.email}
                  required
                  className="border px-4 py-5 rounded"
                  onChange={handleChange}
                  data-aos="fade-up" data-aos-duration={1000}

                />
                <textarea
                  name="message"
                  id=""
                  rows={4}
                  className="border rounded px-3 py-[10px]"
                  placeholder="Votre message *"
                  value={formData.message}
                  onChange={handleChange}
                  data-aos="fade-up" data-aos-duration={1000}
                ></textarea>
              </form>
            </div>
          </div>

          <div className="flex items-center  justify-start md:justify-center mt-auto">
            <button data-aos="fade-up" data-aos-duration={1000} data-aos-offset={0} onClick={handleClick} className="bg-[#BA1C98] px-28 py-5 font-semibold text-white rounded flex items-center gap-3 text-xl"><span>Envoyer</span> <LiaPaperPlane/> </button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Contact;
