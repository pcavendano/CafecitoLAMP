import axios from 'axios';
const BASE_API_URL = 'http://laravel.test:80/api';
export default {
  getAllEmployees: () => axios.get(`${BASE_API_URL}/employees`),
  getOneEmployee: (id) => axios.get(`${BASE_API_URL}/employees${id}/edit`),
  addEmployee: (employee) => axios.post(`${BASE_API_URL}/employees`, employee),
  updateEmployee: (employee, id) =>
    axios.put(`${BASE_API_URL}/employees${id}`, employee),
  deleteEmployee: (id) =>
    axios.delete(`${BASE_API_URL}/employees${id}`, employee),
};
