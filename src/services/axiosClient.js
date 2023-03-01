import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.headers['Accept'] = "application/json";
axios.defaults.maxContentLength = 500000000;
axios.defaults.maxBodyLength = 500000000;

const handleResponse = response => response.data;

export { axios, handleResponse };