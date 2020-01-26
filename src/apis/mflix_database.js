import React from 'react'
import axios from 'axios'

const mflix = axios.create({
    baseURL: 'http://localhost:3000'
})

export { mflix }