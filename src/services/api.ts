import axios from 'axios'

const hardcodedBearerToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTY5MzM5OTg5NiwiZXhwIjoxNzI5Mzk5ODk2fQ.q1yicH3ml2-LMOqay4UADbfGEt46Sqq8bOExrY_JFtk'

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization: `Bearer ${hardcodedBearerToken}`
  }
})
