import axios from "axios";

axios.defaults.baseURL = 'https://bhero-django-aws-tester-d28ab74c5855.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;