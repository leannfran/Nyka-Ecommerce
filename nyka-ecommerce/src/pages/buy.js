import Wizard from "../components/atoms/Wizard";
import Btn from "../components/buttons/Button";
import CardPaymentMethod from "../components/cards/CardPaymentMethod";
import Layout from "../components/layout/Layout";
import React from "react";
import { useForm } from "react-hook-form";

const Buy = () => {
  const [promo, setPromo] = React.useState(false);
  const [step, setStep] = React.useState(0);

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
    const product = {
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
      delivery: data.delivery_method,
    };
    localStorage.setItem("buy", JSON.stringify(product));
    requestAnimationFrame(() => handleStepChange(1));
  };

 const onSubmitStepTwo = async (data) => {
    const stepOneData = await JSON.parse(localStorage.getItem("buy"));
    const product = {
      ...stepOneData,
      paymentMethod: data.payment_method,
      note: data.note,
    };
    localStorage.setItem("buy", JSON.stringify(product));
  }


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
          {step === 0 ? "Datos de envío" : "Datos de compra"}
        </h3>


        {step === 0 && (
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmitStepOne)}
          >
            <label className="flex flex-col">
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
            </div>
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
                formProperty="delivery_method"
              />
              <CardPaymentMethod 
                color 
                content="Envío a correo" 
                price={690} 
                  register={register}
                  formProperty="delivery_method"
              />
            </label>
            <div className="flex">
              <Btn content="Anterior" onClick={() => handleStepChange(0)} />

              <Btn
                content="Siguiente"
                disable={!isValid}
                onClick={onSubmitStepOne}
              />
            </div>
          </form>
        )}
        {step === 1 && (
          <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmitStepTwo)}>
            <CardPaymentMethod
              color
              content="Transferencia bancaria 20% OFF"
              description="Los datos para realizar la transferencia se enviarán a través de tu correo"
              price={1200}
              register={register}
              formProperty="payment_method"
            />
            <CardPaymentMethod color content="Mercado Pago" price={1200} register={register}
            formProperty="payment_method"
            />
            <div>
              <h3>Notas al pedido</h3>
              <textarea className="bg-white border border-black rounded-md w-full p-2" {...register("note")}></textarea>
            </div>
            <div className=" flex">
              <Btn content="Anterior" onClick={() => handleStepChange(0)} />
              <Btn
                content="Finalizar compra"
                disable={!isValid}
                onClick={onSubmitStepTwo}
              />
            </div>
          </form>
        )}
      </div>
    </Layout>
  );
};

export default Buy;
