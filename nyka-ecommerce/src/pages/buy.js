import Wizard from "@/components/atoms/wizard";
import Btn from "@/components/buttons/Button";
import CardPaymentMethod from "@/components/cards/CardPaymentMethod";
import Layout from "@/components/layout/Layout";
import React from "react";
import { useForm } from "react-hook-form";

const Buy = () => {
  const [promo, setPromo] = React.useState(false);
  const [step, setStep] = React.useState(1);

  const handleStepChange = (newStep) => {
    setStep(newStep);
  };

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmitStepOne = (data) => {
    const stepOneData = {
      size: data.size,
      light: data.light,
      image: data.image,
      promo: data.promo,
      promoType: data.promoType,
      note: data.note,
    };
    localStorage.setItem("data", JSON.stringify(stepOneData));
    requestAnimationFrame(() => handleStepChange(1));
  };

  const onSubmitStepTwo = (data) => {
    const stepOneData = JSON.parse(localStorage.getItem("data"));
    const stepTwoData = {
      ...stepOneData,
      firstName: data.first_name,
      lastName: data.last_name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      city: data.city,
      province: data.province,
      postalCode: data.postal_code,
      country: data.country,
      documentType: data.document_type,
      documentNumber: data.document_number,
      shipping: data.shipping,
    };
    localStorage.setItem("data", JSON.stringify(stepTwoData));
    requestAnimationFrame(() => handleStepChange(2));
  };

  const promoValue = watch("promo");

  return (
    <Layout>
      <div className="min-h-screen py-20 px-5 text-black flex flex-col gap-4 max-w-[1000px] m-auto">
        <h1 className="text-3xl font-bold">Finalizar compra</h1>
        <h2 className="text-2xl font-bold">N° de Pedido #000000</h2>
        <div className=" flex justify-center items-center">
          <Wizard step={step} />
        </div>
        <h2 className="text-2xl font-bold">Nombre de producto</h2>
        <h3 className="text-2xl font-normal">
          {step === 0 ? "Detalles de compra" : "Completar datos de envío"}
        </h3>

        {step === 0 && (
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmitStepOne)}
          >
            <label className="flex flex-col">
              TAMAÑO
              <select
                className="select w-full max-w-xs bg-white border border-black"
                name="size"
                {...register("size", {
                  required: "Este campo es obligatorio",
                  validate: (value) =>
                    value !== "Seleccionar" || "Selecciona una opción",
                })}
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
              {errors.size && <span>{errors.size.message}</span>}
            </label>

            <label className="flex flex-col">
              LUZ
              <select
                className="select w-full max-w-xs bg-white border border-black"
                name="light"
                {...register("light", {
                  required: "Este campo es obligatorio",
                  validate: (value) =>
                    value !== "Seleccionar" || "Selecciona una opción",
                })}
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
              {errors.light && <span>{errors.light.message}</span>}
            </label>

            <label className="flex flex-col">
              Adjunta la imagen para tu lámpara a personalizar, te pedimos que
              tenga buena luz y sea nítida{" "}
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs bg-white border border-black"
                {...register("image", {
                  required: "Este campo es obligatorio",
                })}
              />
            </label>

            <label className="flex flex-col">
              PROMOCIÓN
              <select
                className="select w-full max-w-xs bg-white border border-black"
                {...register("promo", { required: false })}
                onChange={(e) =>
                  e.target.value === "Llavero"
                    ? setPromo(true)
                    : setPromo(false)
                }
              >
                <option selected>Ninguna</option>
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
                    <input
                      type="checkbox"
                      value="SpotifyCode"
                      className="mr-3"
                      {...register("promoType")}
                    />
                    Código de spotify
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="Calendary"
                      className="mr-3"
                      {...register("promoType")}
                    />
                    Calendario
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="SamePhoto"
                      className="mr-3"
                      {...register("promoType")}
                    />
                    Misma foto de lámpara
                  </label>
                </div>
              </div>
            )}

            <div>
              <h3>Notas al pedido</h3>
              <textarea
                className="bg-white border border-black rounded-md w-full p-2"
                placeholder="Opcional"
                {...register("note")}
              ></textarea>
            </div>

            <Btn
              type="submit"
              content="Siguiente"
              disable={!isValid}
              onClick={onSubmitStepOne}
            />
          </form>
        )}
        {step === 1 && (
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmitStepTwo)}
          >
            {/* <label className="flex flex-col">
              Nombre
              <input
                type="text"
                className="bg-white rounded-lg border border-black p-1 text-gray-700"
                placeholder="Tu nombre"
                {...register("first_name", {
                  required: "Este campo es obligatorio",
                })}
              />
            </label>
            <label className="flex flex-col">
              Apellido
              <input
                type="text"
                className="bg-white rounded-lg border border-black p-1 text-gray-700"
                placeholder="Tu apellido"
                {...register("last_name", {
                  required: "Este campo es obligatorio",
                })}
              />
            </label>
            <label className="flex flex-col">
              Email
              <input
                type="email"
                className="bg-white rounded-lg border border-black p-1 text-gray-700"
                placeholder="Tu correo"
                {...register("email", {
                  required: "Este campo es obligatorio",
                })}
              />
            </label>
            <label className="flex flex-col gap-2">
              Documento
              <select
                className="select w-full bg-white border border-black"
                {...register("document_type", {
                  required: "Este campo es obligatorio",
                })}
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
                type="number"
                className="bg-white rounded-lg border border-black p-1 text-gray-700"
                placeholder="Tu identificación"
                {...register("document_number", {
                  required: "Este campo es obligatorio",
                })}
              />
            </label>
            <label className="flex flex-col">
              Celular
              <input
                type="number"
                className="bg-white rounded-lg border border-black p-1 text-gray-700"
                placeholder="Tu celular"
                {...register("phone", {
                  required: "Este campo es obligatorio",
                })}
              />
            </label>
            <div>
              <div className="flex justify-between gap-2">
                <label className="flex flex-col w-1/3  ">
                  Código postal
                  <input
                    type="number"
                    className="bg-white rounded-lg border border-black p-1 text-gray-700 "
                    placeholder="CP"
                    {...register("postal_code", {
                      required: "Este campo es obligatorio",
                    })}
                  />
                </label>
                <label className="flex flex-col w-full ">
                  Ciudad
                  <input
                    type="text"
                    className="bg-white rounded-lg border border-black p-1 text-gray-700"
                    placeholder="Tu ciudad"
                    {...register("city", {
                      required: "Este campo es obligatorio",
                    })}
                  />
                </label>
              </div>
              <label className="flex flex-col ">
                Provincia
                <select
                  className="select w-full bg-white border border-black"
                  {...register("province", {
                    required: "Este campo es obligatorio",
                  })}
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
            </div> */}
            <label className="flex flex-col">
              Dirección
              <input
                type="text"
                className="bg-white rounded-lg border border-black p-1 text-gray-700"
                placeholder="Tu dirección"
                {...register("address", {
                  required: "Este campo es obligatorio",
                })}
              />
            </label>
            <label
              className="flex flex-col gap-2"
              
            >
              Seleccionar envío
              <CardPaymentMethod
                color
                content="Envío a domicilio"
                price={690}
                register={register}
              />
              <CardPaymentMethod 
                color 
                content="Envío a correo" 
                price={690} 
                  register={register}
              />
            </label>
            <div className="flex">
              <Btn content="Anterior" onClick={() => handleStepChange(0)} />

              <Btn
                content="Siguiente"
                disable={!isValid}
                onClick={onSubmitStepTwo}
              />
            </div>
          </form>
        )}
        {step === 2 && (
          <form className="flex flex-col gap-5">
            <CardPaymentMethod
              color
              content="Transferencia bancaria 20% OFF"
              description="Los datos para realizar la transferencia se enviarán a través de tu correo"
              price={1200}
            />
            <CardPaymentMethod color content="Mercado Pago" price={1200} />
            <div>
              <h3>Notas al pedido</h3>
              <textarea className="bg-white border border-black rounded-md w-full p-2"></textarea>
            </div>
            <div className=" flex">
              <Btn content="Anterior" onClick={() => handleStepChange(1)} />
              <Btn content="Finalizar compra" color />
            </div>
          </form>
        )}
      </div>
    </Layout>
  );
};

export default Buy;
