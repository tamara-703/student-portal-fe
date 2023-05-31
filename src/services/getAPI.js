import axios from 'axios';

// const base_url = 'http://localhost:3001/student'
const base_url = 'https://student-portal-backend.onrender.com/student';


//Index api
export const getIndexAPI = () => {

    const url = base_url;
    const resp = axios.get(url);

    return resp;
}

//Delete api
export const getDeleteAPI = (data) => {

    const url = `${base_url}/${data}`;
    const response = axios.delete(url);

    //return deleted student
    return response;

}


//update api
export const getUpdateAPI = (id, body) => {
    const url = `${base_url}/${id}`
    const response = axios.put(url, body);

    return response;
}

//create api
export const getCreateAPI = (data) => {
    const url = `${base_url}`
    const response = axios.post(url, data);

    console.log("create response: " + response)

    return response;
}

//edit api
export const getEditAPI = (data) => {
    const url = `${base_url}/${data}`
    const response = axios.get(url);

    return response;
}

//show api
