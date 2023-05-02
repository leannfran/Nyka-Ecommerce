import Image from 'next/image'
import { getProductos, getProducto } from '@/firebase/firebase'

export default function Home() {
getProductos()
getProducto("2F3kA5WKoQMLfO3joJ5G")
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}>
     <h1> HOLA SOMOS NYKA</h1>
    </main>
  )
}
