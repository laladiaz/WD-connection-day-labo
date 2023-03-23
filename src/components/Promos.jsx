import React from 'react';

import {getData} from '../service'
import { useState, useEffect } from 'react'

const urlApi = 'https://dummyjson.com/docs/products'

function Promos(){

    const [promos, setPromos] = useState('');

    useEffect(
        setPromos(getData(urlApi))
        , [])

    console.log(promos)

    return (
        <>
            <h1>Promos</h1>
            <div>
                {promos}
            </div>
        </>
    )
}