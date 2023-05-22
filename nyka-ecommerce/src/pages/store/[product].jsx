import React from "react";
import { useRouter } from "next/router";
import { getProducto } from "@/firebase/firebase";
import { useEffect, useState } from "react";
import ItemList from "@/components/items/ItemList";
import Layout from "../../components/layout/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import CardItem from "../../components/cards/CardItem";
import Btn from "../../components/buttons/Button";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { getProductos } from "@/firebase/firebase";
import { useForm } from "react-hook-form";
import BtnQuantity from "../../components/buttons/BtnQuantity";

const Product1 = () => {
  const router = useRouter();
  const [productID, setProductID] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [producto, setProducto] = useState(null);
  const [productos, setProductos] = useState([]);
  const [promo, setPromo] = useState(false);
  const [PromoAbsolute, setPromoAbsolute] = useState(true);

  useEffect(() => {
    getProductos().then((products) => {
      setProductos(products);
    });
  }, []);

  useEffect(() => {
    if (router.query.product) {
      setProductID(router.query.product);
    }
  }, [router.query.product]);

  useEffect(() => {
    if (productID) {
      getProducto(productID).then((data) => setProducto(data));
    }
  }, [productID]);

  // formulario
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data) => {
    const formatedData = {
      light: data.light,
      image: data.image,
      promo: data.promo,
      promoType: data.promoType,
      note: data.note,
      quantity: data.quantity,
    };
    localStorage.setItem("product", JSON.stringify(formatedData));
  };

  // funciones para agregar o quitar unidades
  const handleMinusClick = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setValue("quantity", quantity - 1);
    }
  };
  const handlePlusClick = () => {
    setQuantity(quantity + 1);
    setValue("quantity", quantity + 1);
  };

  return (
    <Layout>
      <div className="flex justify-center font-sans items-center pt-16 md:pt-28">
        {producto ? (
          <div className="flex flex-col  md:flex-row">
            <div className="flex justify-center aling-center max-w-[100%] max-h-96 md:max-h-[80vh] w-full md:w-1/2 md:ml-4 mb-4">
              <img
                src={producto.img}
                alt={producto.name}
                className=" aspect-w-1 aspect-h-1 object-cover"
              />
            </div>

            <div className="w-full flex flex-col justify-between  px-2 md:w-1/2 md:pl-4 md:pr-28 ">
              <div>
                <h2 className="text-2xl text-black font-semibold  mb-3">
                  {producto.nombre}
                </h2>

                <p className="text-[#171513] font-light text-sm leading-8 ">
                  Tamaño: {producto.size}
                  <li>
                    Elegir luz blanca fría o cálida (amarillenta).
                  </li>
                  <li>
                Adjunta la imagen para terminar la compra.
                  </li>
                </p>

                <p className="text-2xl text-black font-semibold  my-3">
                  ${new Intl.NumberFormat("de-DE").format(producto.precio)}
                </p>

                <form
                  className="flex flex-col gap-5 text-black"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="flex gap-2">
                    <label className="flex flex-col max-w-min">
                      <select
                        className="select max-w-min bg-white border-1  border-black text-black transition-colors hover:bg-[#622708] hover:text-white"
                        name="light"
                        {...register("light", {
                          required: "Este campo es obligatorio",
                          validate: (value) =>
                            value !== "Seleccionar" || "Selecciona una opción",
                        })}
                      >
                        <option disabled selected>
                          Elegir luz
                        </option>
                        <option>Luz calida</option>
                        <option>Luz fria</option>
                      </select>
                      {errors.light && <span>{errors.light.message}</span>}
                    </label>
                    <label className="flex flex-col max-w-min ">
                      <select
                        className="select bg-white border-1  border-black text-black transition-colors hover:bg-[#622708] hover:text-white"
                        {...register("promo", { required: false })}
                        onChange={(e) =>
                          e.target.value === "Llavero"
                            ? setPromo(true)
                            : setPromo(false)
                        }
                      >
                        <option selected>Elegir promocion</option>
                        <option>Llavero</option>
                      </select>
                    </label>
                    {promo && (
                      <div className={`${PromoAbsolute ? 'absolute' : 'hidden'} bg-white shadow-xl right-2    px-4 py-2 rounded-lg flex flex-col  gap-2`}>
                        <h5 className=" font-light border-b-2 p-1 border-[#622708] ">
                          Elegí los diseños para tus llaveros
                        </h5>
                        <div className="flex flex-col gap-4">
                          <label>
                            <input
                              type="checkbox"
                              value="SpotifyCode"
                              className="mr-3 rounded border-gray-300 focus:ring-blue-500"
                              {...register("promoType")}
                            />
                            Código de spotify
                          </label>
                          <label>
                            <input
                              type="checkbox"
                              value="Calendary"
                              className="mr-3 rounded border-gray-300 focus:ring-blue-500"
                              {...register("promoType")}
                            />
                            Calendario
                          </label>
                          <label>
                            <input
                              type="checkbox"
                              value="SamePhoto"
                              className="mr-3 rounded border-gray-300 focus:ring-blue-500"
                              {...register("promoType")}
                            />
                            Misma foto de lámpara
                          </label>
                        </div>
                        <button onClick={()=> setPromoAbsolute(!PromoAbsolute)}>A</button>
                      </div>
                    )}{" "}
                  </div>

                  <label className="flex flex-col">
                    <p className="text-[#171513] font-light text-sm ">
                      Adjunta la imagen para tu lámpara a personalizar
                    </p>
                    <p className="text-gray-700 font-light text-xs leading-5">
                      {" "}
                      te pedimos que tenga buena luz y sea nítida{" "}
                    </p>
                    <input
                      type="file"
                      className="border subirArchivo appearance-none border-black bg-white rounded w-full max-w-xs p-2"
                      {...register("image", {
                        required: "Este campo es obligatorio",
                      })}
                    />
                  </label>

                  <div className=" ">
                    <h3 className="font-light ">Notas al pedido</h3>
                    <textarea
                      className="bg-white border border-black rounded-md w-full p-2"
                      placeholder="Opcional"
                      {...register("note")}
                    ></textarea>
                  </div>
                  <div className=" flex  w-full  md:flex-row justify-between items-center gap-2">
                    <BtnQuantity
                      value={quantity}
                      decrement={handleMinusClick}
                      increment={handlePlusClick}
                      register={register}
                    />
                    <Btn
                      type="submit"
                      content="Siguiente"
                      disable={!isValid}
                      onClick={onSubmit}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <p>Cargando datos del producto...</p>
        )}
      </div>
      <div className="flex-col items-center hidden">
        <h4 className="text-xl font-bold text-black  mt-20 border-b border-1 border-black pb-5 mb-5">
          Productos destacados de nuestra tienda
        </h4>
        <div>
          <Swiper
            className="h-[570px]"
            modules={[]}
            spaceBetween={0}
            slidesPerView={3}
            breakpoints={{
              0: {
                slidesPerView: 1.1,
              },
              436: {
                slidesPerView: 1.2,
              },
              600: {
                slidesPerView: 1.5,
              },
              730: {
                slidesPerView: 2,
              },
              919: {
                slidesPerView: 2.5,
              },
              1084: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 3.5,
              },
              1600: {
                slidesPerView: 5,
              },
            }}
            style={{ position: "unset" }}
          >
            {productos.map((product) => (
              <SwiperSlide key={product.id}>
                <CardItem
                  title={product.nombre}
                  price={product.precio}
                  img={product.img}
                  id={product.id}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Layout>
  );
};

export default Product1;

/* El primer efecto se activa cada vez que router.query.product cambia 
(es decir, cuando el usuario navega a una nueva página de producto)
 y establece el valor de productID en el estado. El segundo efecto 
 se activa cada vez que productID cambia (es decir, cuando router.query.product cambia)
  y utiliza la función getProducto para obtener los datos del producto correspondiente al 
  productID. Una vez que se reciben los datos del producto, se establecen en el estado. 
  
  En el retorno de tu componente, utilizamos el operador ternario para mostrar un mensaje de "Cargando" mientras se obtienen los datos del producto. Cuando se reciben los datos, se muestra el nombre y la descripción del producto.
  */
