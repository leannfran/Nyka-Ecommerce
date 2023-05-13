import Wizard from "@/components/atoms/wizard";
import Btn from "@/components/buttons/Button";
import CardPaymentMethod from "@/components/cards/CardPaymentMethod";
import Layout from "@/components/layout/Layout";
import React from "react";

const Buy = () => {
  const [promo, setPromo] = React.useState(false);
  const [step, setStep] = React.useState(0);

  const handleStepChange = (newStep) => {
    console.log(newStep);
    setStep(newStep);
  };

  return (
    <React.Fragment>
      <Layout>
        <div className="min-h-screen py-20 px-5 text-black flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Finalizar compra</h1>
          <h2 className="text-2xl font-bold">N° de Pedido #000000</h2>
          <div className=" flex justify-center items-center">
            <Wizard step={step} />
          </div>
          <h2 className="text-2xl font-bold">Nombre de producto</h2>
          <h3 className="text-2xl font-normal">Detalles de compra</h3>

          {step === 0 && (
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
                    e.target.value === "Llavero"
                      ? setPromo(true)
                      : setPromo(false)
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
            </form>
          )}
          {step === 1 && (
            <form className="flex flex-col gap-5">
              <label className="flex flex-col">
                Nombre
                <input
                  type="text"
                  className="bg-white rounded-lg border border-black p-1 text-gray-700"
                  placeholder="Tu nombre"
                />
              </label>
              <label className="flex flex-col">
                Apellido
                <input
                  type="text"
                  className="bg-white rounded-lg border border-black p-1 text-gray-700"
                  placeholder="Tu apellido"
                />
              </label>
              <label className="flex flex-col">
                Email
                <input
                  type="text"
                  className="bg-white rounded-lg border border-black p-1 text-gray-700"
                  placeholder="Tu correo"
                />
              </label>
              <label className="flex flex-col gap-2">
                Documento
                <select
                  className="select w-full bg-white border border-black"
                  onChange={(e) => console.log(e.target.value)}
                >
                  <option disabled selected>
                    Tipo de documento
                  </option>
                  <option>Homer</option>
                  <option>Marge</option>
                  <option>Bart</option>
                  <option>Lisa</option>
                  <option>Maggie</option>
                </select>
                <input
                  type="text"
                  className="bg-white rounded-lg border border-black p-1 text-gray-700"
                  placeholder="Tu identificación"
                />
              </label>
              <label className="flex flex-col">
                Celular
                <input
                  type="text"
                  className="bg-white rounded-lg border border-black p-1 text-gray-700"
                  placeholder="Tu celular"
                />
              </label>
              <div>
                <div className="flex justify-between gap-2">

                <label className="flex flex-col w-1/3  ">
                  Código postal
                  <input
                    type="text"
                    className="bg-white rounded-lg border border-black p-1 text-gray-700 "
                    placeholder="CP"
                  />
                </label>
                <label className="flex flex-col w-full ">
                  Ciudad
                  <input
                    type="text"
                    className="bg-white rounded-lg border border-black p-1 text-gray-700"
                    placeholder="Tu ciudad"
                    />
                </label>
                    </div>
                <label className="flex flex-col ">
                  Provincia
                  <select
                    className="select w-full bg-white border border-black"
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
              </div>
              <label className="flex flex-col">
                Dirección
                <input
                  type="text"
                  className="bg-white rounded-lg border border-black p-1 text-gray-700"
                  placeholder="Tu dirección"
                />
              </label>
              <label className="flex flex-col gap-2">
                Seleccionar envío
                <CardPaymentMethod color content="Envío a domicilio" price={690}/>
                <CardPaymentMethod color content="Envío a correo" price={690}/>
              </label>
            </form>
          )}
          <div className=" flex">
            {step != 0 && (
              <Btn
                content="Anterior"
                onClick={() => handleStepChange(step - 1)}
              />
            )}

            <Btn
              content="Siguiente"
              color
              onClick={() => handleStepChange(step + 1)}
            />
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default Buy;
