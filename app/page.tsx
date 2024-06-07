"use client";
import Image from "next/image";
import { useEffect } from "react";
import hero from "./Image1.png";
import {
  LiaArrowLeftSolid,
  LiaArrowRightSolid,
  LiaCheckCircleSolid,
  LiaCodeSolid,
} from "react-icons/lia";
import { Carousel } from "react-responsive-carousel";
import {
  BiDesktop,
  BiLogoAndroid,
  BiNetworkChart,
  BiRocket,
} from "react-icons/bi";
import { AiOutlineCode, AiOutlineEdit, AiOutlineTeam } from "react-icons/ai";
import services from "@/data/services.json";
import Link from "next/link";
import Contact from "@/components/UI/Contact";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    const disableRightClick = (e: { preventDefault: () => void }) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", disableRightClick);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);
  return (
    <>
      <section className="relative h-screen bg-[url('/mobile.png')] bg-cover bg-center bg-no-repeat bg-fixed">
        <div className="h-full bg-gradient-to-r from-slate-900 to-purple-800/70 ">
          <div className="container h-full mx-auto grid grid-cols-1 md:grid-cols-2 px-5">
            <div className="h-full flex flex-col justify-center text-white gap-3">
              <h1 className="text-4xl sm:text-5xl leading-tight" >
                Bienvenue chez <br />
                <span className="font-bold" >Full Coding</span>
              </h1>
              <p className="text-base " >
                Bienvenue sur le site de Full Coding, votre partenaire de
                confiance pour toutes vos solutions numériques. Nous sommes une
                équipe dévouée de développeurs et de créatifs, prêts à vous
                accompagner dans la réussite de vos projets en ligne.
              </p>

              <div className=" flex gap-3">
                <a
                  href=""
                  className="h-fit w-fit border backdrop-blur bg-[#BA1C98] border-[#BA1C98] px-5 py-2 text-sm sm:text-[14px] sm:px-7 sm:py-3 rounded shadow-md shadow-[#BA1C98]"
                >
                  Demandez un devis
                </a>
                <a
                  href=""
          
                  className="h-fit w-fit bg-gradient-to-r from-slate-400 to-slate-400 btn-hover-1 bg-right  bg-no-repeat duration-500  text-slate-400 hover:text-slate-900 px-5 py-2 text-sm sm:text-[16px] sm:px-7 sm:py-3 rounded"
                >
                  En savoir plus
                </a>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={hero}
          alt="hero"
          className="w-[400px] h-[400px] absolute inset-y-1/4  right-28 hidden md:block"
          loading="eager"
          decoding="async"
          fill={false}
          
        />
        <div className="absolute bottom-0 left-0 overflow-hidden bg-[url('/wave.png')]  h-[142px] animateWave w-full after:w-full after:h-[142px] after:bg-[url('/wave.png')] after:absolute after:top-0 after:left-0 after:opacity-60  before:w-full before:h-[142px] before:bg-[url('/wave.png')] before:absolute before:top-0 before:left-0 before:opacity-40"></div>
      </section>

      <section>
        <div>
          <div className="container mx-auto p-5">
            <div className="grid grid-cols-1 sm:grid-cols-6">
              <div className="col-span-1"></div>
              <div className="col-span-4 flex flex-col justify-center items-center">
                <h1 className="text-3xl sm:text-4xl" data-aos="fade-up" data-aos-duration={1000}>Qui nous sommes?</h1>
                <p className="text-center p-5 text-base sm:text-lg" data-aos="fade-up" data-aos-duration={1000}>
                  FullCoding est une équipe passionnée de développeurs et de
                  créatifs dédiée à fournir des solutions numériques innovantes
                  et de haute qualité. Nous croyons en la puissance de la
                  technologie pour transformer les idées en réalités tangibles
                  et aider les entreprises à atteindre leurs objectifs.
                </p>
              </div>
              <div className="col-span-1"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative">
        <div className="container mx-auto p-5 h-full relative">
          <h1 className="text-3xl sm:text-4xl text-center my-3" data-aos="fade-up" data-aos-duration={1000}>
            Nos services
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 py-5">
            {services.map((item: any) => {
              return (
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
                    <button className="py-2 px-6 border border-[#BA1C98] text-sm flex items-center justify-between gap-3">
                      <LiaArrowRightSolid />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto p-5">
          <h1 className="text-3xl sm:text-4xl text-center mb-10" data-aos="fade-up" data-aos-duration={1000}>
            Pourquoi nous choisir ?
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div
              className="p-5 flex flex-col items-center justify-center"
              data-aos="fade-up"
              data-aos-duration={2000}
            >
              <div className="w-20 p-0 h-20 mb-3 rounded-full flex flex-col justify-center items-center border-2 border-[#3D2473]">
                <AiOutlineCode size={40} color="#BA1C98" />
              </div>
              <h1 className="text-xl sm:text-2xl uppercase text-center">
                Expertise
              </h1>
              <p className="text-base  text-center">
                Une équipe de professionnels expérimentés avec une expertise
                reconnue dans le développement web et mobile.
              </p>
            </div>
            <div
              className="p-5 flex flex-col items-center justify-center"
              data-aos="fade-up"
              data-aos-duration={2000}
              data-aos-delay={500}
            >
              <div className="w-20 p-0 h-20 mb-3 rounded-full flex flex-col justify-center items-center border-2 border-[#3D2473]">
                <BiRocket size={40} color="#BA1C98" />
              </div>
              <h1 className="text-xl sm:text-2xl uppercase text-center">
                Innovation
              </h1>
              <p className="text-base  text-center">
                Utilisation des technologies les plus récentes pour offrir des
                solutions innovantes et performantes.
              </p>
            </div>
            <div
              className="p-5 flex flex-col items-center justify-center"
              data-aos="fade-up"
              data-aos-duration={2000}
              data-aos-delay={1000}
            >
              <div className="w-20 p-0 h-20 mb-3 rounded-full flex flex-col justify-center items-center border-2 border-[#3D2473]">
                <AiOutlineEdit size={40} color="#BA1C98" />
              </div>
              <h1 className="text-xl sm:text-2xl uppercase text-center">
                Personnalisation
              </h1>
              <p className="text-base  text-center">
                Des solutions sur mesure adaptées aux besoins spécifiques de
                chaque client.
              </p>
            </div>
            <div
              className="p-5 flex flex-col items-center justify-center"
              data-aos="fade-up"
              data-aos-duration={2000}
              data-aos-delay={1500}
            >
              <div className="w-20 p-0 h-20 mb-3 rounded-full flex flex-col justify-center items-center border-2 border-[#3D2473]">
                <AiOutlineTeam size={40} color="#BA1C98" />
              </div>
              <h1 className="text-xl sm:text-2xl uppercase text-center">
                Support
              </h1>
              <p className="text-base text-center">
                Un support continu pour garantir la pérennité et la performance
                de vos solutions numériques.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#3D2473] bg-[url('/img2.jpg')] bg-cover bg-blend-soft-light bg-fixed relative mt-4">
        <div className="container mx-auto p-5 w-full absolute top-3">
          <h1 className="text-3xl sm:text-4xl text-center my-3 text-white font-semibold uppercase" data-aos="fade-up" data-aos-duration={1000}>
            Nos Projets
          </h1>
        </div>
        <Carousel
          showArrows={true}
          className="h-[30rem] w-full "
          autoPlay
          showIndicators={true}
          swipeable
          infiniteLoop
        >
          <div className="relative h-full text-white">
            <div className="h-[30rem] grid grid-cols-1 md:grid-cols-5">
              <div className="col-span-1"></div>
              <Link
                className="col-span-3 h-full flex flex-col items-center justify-center gap-3 px-3"
                href={""}
              >
                <h1 className="text-5xl font-semibold text-center">
                  Sagot & Ralay
                </h1>
                <p className="text-sm md:text-base text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates alias dolorem perferendis dolores totam obcaecati
                  quis laboriosam amet dolore corrupti id officia ipsa facilis
                  libero, ea impedit saepe voluptatum vero?
                </p>
              </Link>
              <div className="col-span-1"></div>
            </div>
          </div>
          <div className="relative h-full text-white">
            <div className="h-[30rem] grid grid-cols-1 md:grid-cols-5">
              <div className="col-span-1"></div>
              <Link
                href={""}
                className="col-span-3 h-full flex flex-col items-center justify-center gap-3 px-3"
              >
                <h1 className="text-5xl font-semibold text-center">
                  ESPIC MADAGASCAR
                </h1>
                <p className="text-sm md:text-base text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates alias dolorem perferendis dolores totam obcaecati
                  quis laboriosam amet dolore corrupti id officia ipsa facilis
                  libero, ea impedit saepe voluptatum vero?
                </p>
              </Link>
              <div className="col-span-1"></div>
            </div>
          </div>
          <div className="relative h-full text-white">
            <div className="h-[30rem] grid grid-cols-1 md:grid-cols-5">
              <div className="col-span-1"></div>
              <Link
                href={""}
                className="col-span-3 h-full flex flex-col items-center justify-center gap-3 px-3"
              >
                <h1 className="text-5xl font-semibold text-center">
                  ISDE MADAGASCAR
                </h1>
                <p className="text-sm md:text-base text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates alias dolorem perferendis dolores totam obcaecati
                  quis laboriosam amet dolore corrupti id officia ipsa facilis
                  libero, ea impedit saepe voluptatum vero?
                </p>
              </Link>
              <div className="col-span-1"></div>
            </div>
          </div>
          <div className="relative h-full text-white">
            <div className="h-[30rem] grid grid-cols-1 md:grid-cols-5">
              <div className="col-span-1"></div>
              <Link
                href={""}
                className="col-span-3 h-full flex flex-col items-center justify-center gap-3 px-3"
              >
                <h1 className="text-5xl font-semibold text-center">
                  JSSI MADAGASCAR
                </h1>
                <p className="text-sm md:text-base text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates alias dolorem perferendis dolores totam obcaecati
                  quis laboriosam amet dolore corrupti id officia ipsa facilis
                  libero, ea impedit saepe voluptatum vero?
                </p>
              </Link>
              <div className="col-span-1"></div>
            </div>
          </div>
        </Carousel>
      </section>
      <section id="pricing">
        <div className="container mx-auto p-5">
          <h1 className="text-xl md:text-4xl text-center my-5" data-aos="fade-up" data-aos-duration={1000}>Nos devis</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <div
              className="h-auto relative rounded-2xl shadow-2xl overflow-hidden p-10 flex flex-col items-center gap-3 after:rounded before:rounded-2xl after:absolute after:w-full after:h-full after:-z-50 after:top-1 after:bg-white before:absolute before:top-0 before:-z-50 before:w-full before:h-full before:bg-gradient-to-r before:from-pink-500 before:to-purple-700"
              data-aos="fade-up"
              data-aos-duration={1000}
            >
              <div className="h-20 w-20 rounded-full mx-auto mb-3 bg-[#CCCCCC]/40 flex items-center justify-center ">
                <BiNetworkChart size={50} />
              </div>
              <span>Developpement web</span>
              <h1 className="font-bold text-4xl text-center">400 000 MGA</h1>
              <ul className="mt-3 pl-5">
                <li className="flex items-center gap-3">
                  <LiaCheckCircleSolid size={20} />{" "}
                  <span className="text-base">
                    Lorem, ipsum dolor sit amet consectetur
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <LiaCheckCircleSolid size={20} />{" "}
                  <span className="text-base">
                    Lorem, ipsum dolor sit amet consectetur
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <LiaCheckCircleSolid size={20} />{" "}
                  <span className="text-base">
                    Lorem, ipsum dolor sit amet consectetur
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <LiaCheckCircleSolid size={20} />{" "}
                  <span className="text-base">
                    Lorem, ipsum dolor sit amet consectetur
                  </span>
                </li>
              </ul>
              <button className="py-3 bg-gradient-to-r  from-[#ad0e8d] to-purple-700/70 w-full rounded-full mt-3 text-white">
                Commencer
              </button>
            </div>
            <div
              className="h-auto relative rounded-2xl shadow-2xl overflow-hidden p-10 flex flex-col items-center gap-3 after:rounded before:rounded-2xl after:absolute after:w-full after:h-full after:-z-50 after:top-1 after:bg-white before:absolute before:top-0 before:-z-50 before:w-full before:h-full before:bg-gradient-to-r before:from-pink-500 before:to-purple-700"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={500}
            >
              <div className="h-20 w-20 rounded-full mx-auto mb-3 bg-[#CCCCCC]/40 flex items-center justify-center ">
                <BiLogoAndroid size={50} />
              </div>
              <span>Developpement Mobile</span>
              <h1 className="font-bold text-4xl text-center">600 000 MGA</h1>
              <ul className="mt-3 pl-5">
                <li className="flex items-center gap-3">
                  <LiaCheckCircleSolid size={20} />{" "}
                  <span className="text-base">
                    Lorem, ipsum dolor sit amet consectetur
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <LiaCheckCircleSolid size={20} />{" "}
                  <span className="text-base">
                    Lorem, ipsum dolor sit amet consectetur
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <LiaCheckCircleSolid size={20} />{" "}
                  <span className="text-base">
                    Lorem, ipsum dolor sit amet consectetur
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <LiaCheckCircleSolid size={20} />{" "}
                  <span className="text-base">
                    Lorem, ipsum dolor sit amet consectetur
                  </span>
                </li>
              </ul>
              <button className="py-3 bg-gradient-to-r  from-[#ad0e8d] to-purple-700/70 w-full rounded-full mt-3 text-white">
                Commencer
              </button>
            </div>
            <div
              className="h-auto relative rounded-2xl shadow-2xl overflow-hidden p-10 flex flex-col items-center gap-3 after:rounded before:rounded-2xl after:absolute after:w-full after:h-full after:-z-50 after:top-1 after:bg-white before:absolute before:top-0 before:-z-50 before:w-full before:h-full before:bg-gradient-to-r before:from-pink-500 before:to-purple-700"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={1000}
            >
              <div className="h-20 w-20 rounded-full mx-auto mb-3 bg-[#CCCCCC]/40 flex items-center justify-center ">
                <BiDesktop size={50} />
              </div>
              <span>Developpement Logiciel</span>
              {/* <span className="text-sm">A partir de</span> */}
              <h1 className="font-bold text-4xl text-center">400 000 MGA</h1>
              <ul className="mt-3 pl-5">
                <li className="flex items-center gap-3">
                  <LiaCheckCircleSolid size={20} />{" "}
                  <span className="text-base">
                    Lorem, ipsum dolor sit amet consectetur
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <LiaCheckCircleSolid size={20} />{" "}
                  <span className="text-base">
                    Lorem, ipsum dolor sit amet consectetur
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <LiaCheckCircleSolid size={20} />{" "}
                  <span className="text-base">
                    Lorem, ipsum dolor sit amet consectetur
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <LiaCheckCircleSolid size={20} />{" "}
                  <span className="text-base">
                    Lorem, ipsum dolor sit amet consectetur
                  </span>
                </li>
              </ul>
              <button className="py-3 bg-gradient-to-r  from-[#ad0e8d] to-purple-700/70 w-full rounded-full mt-3 text-white">
                Commencer
              </button>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}
