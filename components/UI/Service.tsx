"use client"
import { FC, useState } from "react";
import { LiaArrowRightSolid, LiaCodeSolid } from "react-icons/lia";
import services from "@/data/services.json";
import Modal from "./Modal";

const Service: FC = () => {
  // States pour gérer l'ouverture du modal et le service sélectionné
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  // Fonction pour ouvrir le modal avec le service sélectionné
  const openModal = (service: string) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  return (
    <section className="relative" id="services">
      <div className="container mx-auto p-5 h-full relative">
        <h1
          className="text-3xl sm:text-4xl text-center my-3"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          Nos services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-5">
          {services.map((item: any) => (
            <div
              key={item.id}
              className="bg-[#3D2473] backdrop-filter rounded py-5 px-10 backdrop-blur text-white flex flex-col gap-3"
              data-aos="fade-up"
              data-aos-duration={2000}
              data-aos-delay={200 * item.id}
            >
              <LiaCodeSolid className="text-3xl text-green-400" />
              <h1 className="text-base sm:text-lg p-0 mt-2">{item.nom}</h1>
              <p className="text-sm p-0 m-0 text-justify sm:text-[14px] font-thin">
                {item.description}
              </p>
              <div className="mt-auto flex items-center justify-center">
                <button
                  onClick={() => openModal(item.nom)}
                  className="py-2 px-6 border border-[#BA1C98] text-sm flex items-center justify-between gap-3"
                >
                  <LiaArrowRightSolid />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal pour afficher les détails du service */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        service={selectedService}
      />
    </section>
  );
};

export default Service;
