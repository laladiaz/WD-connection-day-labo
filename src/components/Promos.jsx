import React from 'react';

import { useState, useEffect } from 'react'
import { axiosGet } from "../service"

const urlApi = 'https://dummyjson.com/docs/products'

export default function Promos(){

    const [promos, setPromos] = useState([]);

    const promoData = ()=>{
        fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(setPromos);
    } 

    useEffect(() => {
        promoData()
        console.log(promos)

    }, [])
 

    console.log(promos)

    return (
        <>
            <h1>Promos</h1>
            <div>
                Promos
            </div>
        </>
    )
}