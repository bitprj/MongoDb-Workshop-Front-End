import React from 'react'
import axios from 'axios'

const test = axios.create({
    baseURL: 'http://localhost:3000'
})

export { test }