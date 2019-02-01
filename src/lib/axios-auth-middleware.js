import axios from 'axios'

const axiosAuthMiddleware = axios.create();
axiosAuthMiddleware.interceptors.response.use( 
  response => response,
  error => {
    const originalRequest = error.config
    if ( error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      return error
    } else {
      return Promise.reject(error);
    }
  }
)

export default axiosAuthMiddleware