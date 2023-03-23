import axios from 'axios'

import { useState, useEffect } from 'react'

const urlApi = 'https://dummyjson.com/docs/products'

function Promos(){

    useEffect(
        axios
                .get(urlApi)
                .then((response) => {
                    return response.data
                })
        , [])

    return (

    )
}