import React from 'react'
import axios from 'axios'

const backend = axios.create({
    baseURL: 'http://localhost:3000'
})


export {backend}