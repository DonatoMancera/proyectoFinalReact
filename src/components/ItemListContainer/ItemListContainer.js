import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";


const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(() =>{
        const collectionRef = collection(db, 'Items')
        const q = categoryId ? query(collectionRef, where("category", "==", categoryId)) : collectionRef;
        console.log(categoryId)

        getDocs(q)
        .then((response) =>{
            setProducts(
                response.docs.map((doc) =>{
                    return {...doc.data(), id: doc.id}
                })
            )
        })

    },[categoryId])

    
    
    return (    
        <div>
            <h1  className="text-center m-5">{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;