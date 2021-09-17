import axios from "axios";

class HttpService
{
  constructor() {
    this.apiCall = axios.create({
      baseURL: 'http://localhost:8000/api',
    })
  }
}

export default HttpService;