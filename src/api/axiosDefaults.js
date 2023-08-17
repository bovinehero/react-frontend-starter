import axios from "axios";

// chnage to this for prod
axios.defaults.baseURL = 'https://bhero-django-aws-tester-d28ab74c5855.herokuapp.com/';
// axios.defaults.baseURL = 'http://127.0.0.1:8000/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();