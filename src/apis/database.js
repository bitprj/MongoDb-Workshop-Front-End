import React from 'react'
import axios from 'axios'

const backend = axios.create({
    baseURL: 'https://jose-mongodb-workshop-backend.herokuapp.com'
})


export { backend}