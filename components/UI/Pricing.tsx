import { useState } from "react";
import { BiNetworkChart, BiLogoAndroid, BiDesktop } from "react-icons/bi";
import { LiaCheckCircleSolid } from "react-icons/lia";
import Modal from "@/components/UI/Modal";
import { FC } from "react";

const PricingSection: FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const openModal = (service: string) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  return (
    <section id="pricing">
      <div className="container mx-auto p-5">
        <h1
          className="text-xl md:text-4xl text-center my-5"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          Nos devis
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <div
            className="h-auto relative rounded-2xl shadow-2xl overflow-hidden p-10 flex flex-col items-center gap-3 after:rounded before:rounded-2xl after:absolute after:w-full after:h-full after:-z-50 after:top-1 after:bg-white before:absolute before:top-0 before:-z-50 before:w-full before:h-full before:bg-gradient-to-r before:from-pink-500 before:to-purple-700"
            data-aos="fade-up"
            data-aos-duration={1000}
          >
            <div className="h-20 w-20 rounded-full mx-auto mb-3 bg-[#CCCCCC]/40 flex items-center justify-center">
              <BiNetworkChart size={50} />
            </div>
            <span>Développement Web</span>
            <span className="text-[8px]">A partir de</span> 
            <h1 className="font-bold text-4xl text-center">400 000 MGA</h1>
            <ul className="mt-3 pl-5">
              <li className="flex items-center gap-3">
                <LiaCheckCircleSolid size={20} />
                <span className="text-base">
                  Conception de sites web réactifs et modernes
                </span>
              </li>
              <li className="flex items-center gap-3">
                <LiaCheckCircleSolid size={20} />
                <span className="text-base">
                  Intégration de systèmes de gestion de contenu
                </span>
              </li>
              <li className="flex items-center gap-3">
                <LiaCheckCircleSolid size={20} />
                <span className="text-base">
                  Optimisation SEO pour une meilleure visibilité
                </span>
              </li>
              <li className="flex items-center gap-3">
                <LiaCheckCircleSolid size={20} />
                <span className="text-base">
                  Maintenance et support continu
                </span>
              </li>
            </ul>
            <button
              onClick={() => openModal("Développement Web")}
              className="py-3 bg-gradient-to-r from-[#ad0e8d] to-purple-700/70 w-full rounded-full mt-auto text-white"
            >
              Commencer
            </button>
          </div>
          <div
            className="h-auto relative rounded-2xl shadow-2xl overflow-hidden p-10 flex flex-col items-center gap-3 after:rounded before:rounded-2xl after:absolute after:w-full after:h-full after:-z-50 after:top-1 after:bg-white before:absolute before:top-0 before:-z-50 before:w-full before:h-full before:bg-gradient-to-r before:from-pink-500 before:to-purple-700"
            data-aos="fade-up"
            data-aos-duration={1000}
            data-aos-delay={500}
          >
            <div className="h-20 w-20 rounded-full mx-auto mb-3 bg-[#CCCCCC]/40 flex items-center justify-center">
              <BiLogoAndroid size={50} />
            </div>
            <span>Développement Mobile</span>
            <span className="text-[8px]">A partir de</span> 
            <h1 className="font-bold text-4xl text-center">600 000 MGA</h1>
            <ul className="mt-3 pl-5">
              <li className="flex items-center gap-3">
                <LiaCheckCircleSolid size={20} />
                <span className="text-base">
                  Applications mobiles natives pour Android et iOS
                </span>
              </li>
              <li className="flex items-center gap-3">
                <LiaCheckCircleSolid size={20} />
                <span className="text-base">
                  Interfaces utilisateur intuitives et conviviales
                </span>
              </li>
              <li className="flex items-center gap-3">
                <LiaCheckCircleSolid size={20} />
                <span className="text-base">
                  Intégration d&apos;API et de services tiers
                </span>
              </li>
              <li className="flex items-center gap-3">
                <LiaCheckCircleSolid size={20} />
                <span className="text-base">
                  Tests et optimisation des performances
                </span>
              </li>
            </ul>
            <button
              onClick={() => openModal("Développement Mobile")}
              className="py-3 bg-gradient-to-r from-[#ad0e8d] to-purple-700/70 w-full rounded-full mt-auto text-white"
            >
              Commencer
            </button>
          </div>
          <div
            className="h-auto relative rounded-2xl shadow-2xl overflow-hidden p-10 flex flex-col items-center gap-3 after:rounded before:rounded-2xl after:absolute after:w-full after:h-full after:-z-50 after:top-1 after:bg-white before:absolute before:top-0 before:-z-50 before:w-full before:h-full before:bg-gradient-to-r before:from-pink-500 before:to-purple-700"
            data-aos="fade-up"
            data-aos-duration={1000}
            data-aos-delay={1000}
          >
            <div className="h-20 w-20 rounded-full mx-auto mb-3 bg-[#CCCCCC]/40 flex items-center justify-center">
              <BiDesktop size={50} />
            </div>
            <span>Développement Logiciel</span>
            <span className="text-[8px]">A partir de</span> 
            <h1 className="font-bold text-4xl text-center">600 000 MGA</h1>
            <ul className="mt-3 pl-5">
              <li className="flex items-center gap-3">
                <LiaCheckCircleSolid size={20} />
                <span className="text-base">
                  Solutions logicielles personnalisées
                </span>
              </li>
              <li className="flex items-center gap-3">
                <LiaCheckCircleSolid size={20} />
                <span className="text-base">
                  Automatisation des processus métiers
                </span>
              </li>
              <li className="flex items-center gap-3">
                <LiaCheckCircleSolid size={20} />
                <span className="text-base">
                  Intégration de bases de données avancées
                </span>
              </li>
              <li className="flex items-center gap-3">
                <LiaCheckCircleSolid size={20} />
                <span className="text-base">
                  Maintenance et évolutivité du logiciel
                </span>
              </li>
            </ul>
            <button
              onClick={() => openModal("Développement Logiciel")}
              className="py-3 bg-gradient-to-r from-[#ad0e8d] to-purple-700/70 w-full rounded-full mt-auto text-white"
            >
              Commencer
            </button>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} service={selectedService} />
    </section>
  );
};

export default PricingSection;
