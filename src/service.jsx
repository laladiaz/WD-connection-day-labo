import axios from 'axios'

export function getData(link){
    return axios
                .get(link)
                .then((response) => {
                    return response.data
                })
}