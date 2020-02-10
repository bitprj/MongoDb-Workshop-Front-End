import React from 'react'
import axios from 'axios'

const backend = axios.create({
    //https://jose-mongodb-workshop-backend.herokuapp.com
    //'http://localhost:3000'
    baseURL: 'https://jose-mongodb-workshop-backend.herokuapp.com'
})


export {backend}