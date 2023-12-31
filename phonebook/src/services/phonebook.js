import axios from 'axios'
const baseUrl = '/api/persons'

const getContacts = async () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
  }

const AddNew = async contactObject => {
    const request = axios.post(baseUrl, contactObject)
    return request.then(response => response.data)
  }

const deleteContact = async (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
  }  
// const update = async (id, newObject) => {
//     const request = axios.put(`${baseUrl}/${id}`, newObject)
//     return request.then(response => response.data)
//   }

export default { getContacts, AddNew, deleteContact }