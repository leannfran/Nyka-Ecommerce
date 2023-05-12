import Wizard from "@/components/atoms/wizard";
import Button from "@/components/buttons/Button";
import Layout from "@/components/layout/Layout";
import React from "react";

const Buy = () => {
  const [promo, setPromo] = React.useState(false);

  return (
    <Layout>
      <div className="min-h-screen py-20 px-5 text-black flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Finalizar compra</h1>
        <h2 className="text-2xl font-bold">N° de Pedido #000000</h2>
        <div className=" flex justify-center items-center">
          <Wizard />
        </div>
        <h2 className="text-2xl font-bold">Nombre de producto</h2>
        <h3 className="text-2xl font-normal">Detalles de compra</h3>
        <form className="flex flex-col gap-5">
          <label htmlFor="name">
            TAMAÑO
            <select
              className="select w-full max-w-xs bg-white border border-black"
              onChange={(e) => console.log(e.target.value)}
            >
              <option disabled selected>
                Seleccionar
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
          </label>

          <label htmlFor="name">
            LUZ
            <select
              className="select w-full max-w-xs bg-white border border-black"
              onChange={(e) => console.log(e.target.value)}
            >
              <option disabled selected>
                Seleccionar
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
          </label>

          <label htmlFor="name">
            Adjunta la imagen para tu lámpara a personalizar, te pedimos que
            tenga buena luz y sea nítida{" "}
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs bg-white border border-black"
            />
          </label>

          <label htmlFor="name">
            PROMOCIÓN
            <select
              className="select w-full max-w-xs bg-white border border-black"
              onChange={(e) =>
                e.target.value === "Llavero" ? setPromo(true) : setPromo(false)
              }
            >
              <option disabled selected>
                Seleccionar
              </option>
              <option>Llavero</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
          </label>
          {promo && (
            <div className="flex flex-col  gap-2">
              <h3>ELEGÍ LOS DISEÑOS PARA TUS LLAVEROS</h3>
              <div className="flex flex-col gap-4">
                <label>
                  <input type="radio" name="design" className="mr-3" />
                  Código de spotify
                </label>
                <label>
                  <input type="radio" name="design" className="mr-3" />
                  Calendario
                </label>
                <label>
                  <input type="radio" name="design" className="mr-3" />
                  Misma foto de lámpara
                </label>
              </div>
            </div>
          )}

          <div>
            <h3>Notas al pedido</h3>
            <textarea className="bg-white border border-black rounded-md w-full"></textarea>
          </div>
          <Button
            content="Siguiente"
            color 
          />
        </form>
      </div>
    </Layout>
  );
};

export default Buy;
