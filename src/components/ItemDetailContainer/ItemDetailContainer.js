import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import Container from "react-bootstrap/esm/Container";
import { useParams } from "react-router-dom";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = () =>{
    const[product, setProduct] = useState(null);
    const[loading, setLoading] = useState(true);

    const {itemId} = useParams();


    useEffect(() =>{
        setLoading(true)

        const docRef = doc(db, 'Items', itemId)   

        getDoc(docRef)
            .then(response =>{
                const data = response.data()
                const ProductAdapted = {id: response.id, ...data}
                setProduct(ProductAdapted)
            })
            .catch(error =>{
                console.log(error)
            })
            .finally(() =>{
                setLoading(false)
            })

            console.log(docRef)
            
    },[itemId])



    return (
        <Container>
            <ItemDetail {...product}/>
        </Container>
    )
}

export default ItemDetailContainer;