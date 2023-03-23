import { useState, useEffect } from 'react'

const urlApi = 'https://dummyjson.com/docs/products'

function Promos(){

    const [promos, setPromos] = useState('');

    useEffect(
        setPromos(getData(urlApi))
        , [])

    return (

    )
}