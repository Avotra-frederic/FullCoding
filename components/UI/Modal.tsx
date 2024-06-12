"use client";
import { useState, FC, FormEvent, useRef } from "react";
import emailjs from 'emailjs-com';
import { toast } from "react-toastify";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: string;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, service }) => {
    const [userName, setuserName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const formRef = useRef<HTMLFormElement>(null); 
  if (!isOpen) return null;

  const handleReset= ()=>{
    setuserName("");
    setEmail("");
    setMessage("");
    setFile(null);

  }
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('service', service);
      formData.append('name', userName);
      formData.append('email', email);
      formData.append('message', message);
      if (file) {
        formData.append('file', file);
      }

      const response = await emailjs.sendForm(
        'FullCoding', 'fullCoding_Template',
        formRef.current!,
        'GJCbIwr-B8qpFObBe'
      );

      if (response.status === 200) {
        toast.success("Demande envoyé avec succès!");
        onClose();
        handleReset()
      } else {
        toast.error("Erreur lors de l'envoi de l'email.");
        handleReset()
        onClose();
      }
    } catch (error) {
        toast.error("Erreur lors de l'envoi de l'email.");
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Demande de Devis pour {service}</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900 text-4xl">
            &times;
          </button>
        </div>
        <form className="mt-4" onSubmit={handleSubmit} ref={formRef} encType="multipart/form-data">
          <div className="mb-4">
            <label className="block text-gray-700">Nom</label>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded mt-1" 
              name="userName"
              required 
              value={userName} 
              onChange={(e) => setuserName(e.target.value)} 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input 
              type="email" 
              name="email"
              className="w-full p-2 border border-gray-300 rounded mt-1" 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea 
              className="w-full p-2 border border-gray-300 rounded mt-1" 
              required 
              name="message"
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Fichier</label>
            <input 
              type="file" 
              name="file"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)} 
            />
          </div>
          <button type="submit" className="py-3 bg-gradient-to-r from-[#ad0e8d] to-purple-700/70 w-full rounded-full mt-auto text-white">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;

