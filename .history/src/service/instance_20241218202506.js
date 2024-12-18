import axios from 'axios';
import {BASE_URL} from './url';
const Client = axios.create();
Client.defaults.baseURL = BASE_URL;
