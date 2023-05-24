import React from "react";
import Layout from "../components/layout/Layout";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { IconInstaSvg, IconWspSvg } from "../components/Svgs";
import Link from "next/link";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const Questions = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Layout>
      <div className="min-h-screen pt-20 px-5 text-black flex flex-col items-center gap-4 max-w-[1000px] m-auto">
        <h2 className="text-2xl font-bold border-b-2 border-gray py-3">¿Cómo comprar?</h2>

        <Fragment className="text-black">
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader className="border rounded-lg px-2 shadow-md text-sm text-black" onClick={() => handleOpen(1)}>
              Como pago?
            </AccordionHeader>
            <AccordionBody>
            Aceptamos cualquier método de pago a través de Mercado Pago. 
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader className="border rounded-lg px-2 shadow-md text-sm text-black" onClick={() => handleOpen(2)}>
            ¿Dónde puedo retirar? 
            </AccordionHeader>
            <AccordionBody>
            No tenemos retiro en persona, envíamos todo a través de Mercado Envíos.
            </AccordionBody>
          </Accordion><Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader className="border rounded-lg px-2 shadow-md text-sm text-black" onClick={() => handleOpen(3)}>
            ¿Envían a todo el país? 
            </AccordionHeader>
            <AccordionBody>
            ¡Por supuesto! No dejamos a nadie afuera.
            </AccordionBody>
          </Accordion><Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
            <AccordionHeader className="border rounded-lg px-2 shadow-md text-sm text-black" onClick={() => handleOpen(4)}>
            ¿Cómo envían los productos? 
            </AccordionHeader>
            <AccordionBody>
            Para tu seguridad utilizamos Mercado Envíos de Mercado Libre.  
            </AccordionBody>
          </Accordion>
            <h2 className="text-2xl font-bold border-b-2 border-gray py-3">Preguntas frecuentes</h2>
          
          <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
            <AccordionHeader className="border rounded-lg px-2 shadow-md text-sm text-black" onClick={() => handleOpen(5)}>
            ¿Puedo electrocutarme con las lámparas Nyka? 
            </AccordionHeader>
            <AccordionBody>
            ¡No! Nuestras lámparas funcionan con 12v, por lo tanto no existe ningún riesgo.
            </AccordionBody>
          </Accordion><Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
            <AccordionHeader className="border rounded-lg px-2 shadow-md text-sm text-black" onClick={() => handleOpen(6)}>
            ¿Consumen mucho?
            </AccordionHeader>
            <AccordionBody>
            El consumo es insignificante, solo consumen 2w.
            </AccordionBody>
          </Accordion><Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
            <AccordionHeader className="border rounded-lg px-2 shadow-md text-sm text-black" onClick={() => handleOpen(7)}>
            ¿Tienen diferentes colores de luz?
            </AccordionHeader>
            <AccordionBody>
            Por el momento tenemos luz blanca y cálida, en un futuro vamos agregar más colores.  
            </AccordionBody>
          </Accordion><Accordion open={open === 8} icon={<Icon id={8} open={open} />}>
            <AccordionHeader className="border rounded-lg px-2 shadow-md text-sm text-black" onClick={() => handleOpen(8)}>
            ¿Cómo les envío la foto para el diseño personalizado?
            </AccordionHeader>
            <AccordionBody>
            Al momento de cargar tus datos al finalizar la compra, tendrás la opción de adjuntar tu foto. ¡Es muy fácil!
            </AccordionBody>
          </Accordion><Accordion open={open === 9} icon={<Icon id={9} open={open} />}>
            <AccordionHeader className="border rounded-lg px-2 shadow-md text-sm text-black" onClick={() => handleOpen(9)}>
            ¿Venden acrílicos por separado?
            </AccordionHeader>
            <AccordionBody>
            ¡Si! A los miembros del “Club Nyka”. Todo aquel que compre una base Nyka ya pertenece al club. 
            </AccordionBody>
          </Accordion>
        </Fragment>
        <div className="flex gap-5 mt-12 text-xs font-bold">
          <Link href="#" className="flex flex-col items-center">
          <IconInstaSvg/>
          <span>@somosnyka</span>
          </Link>
          <Link href="#" className="flex flex-col items-center">
          <IconWspSvg/>
          <span>Whatsapp</span>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Questions;
