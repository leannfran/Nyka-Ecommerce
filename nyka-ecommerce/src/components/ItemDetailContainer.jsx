import { getProducto } from "@/firebase/firebase";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState();
    const router = useRouter()
    const {id} = router.query;
    useEffect(() => {
        if(id){
        getProducto(id).then((item)=>{
            setProducto(item)
        })

        }
    }, [id])

    if(!producto){
        return <div>login...</div>
    }

    return (
        <div>
            <div className="mx-10 my-10 flex items-center justify-between flex-wrap gap-8">
               <ItemDetail item={producto} />
             </div>
        </div>
    );
}

export default ItemDetailContainer;
