import axios from 'axios';

const csrfToken = document.querySelector('[name=csrf-token]').content;
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

// ----- Consts & Dicts ----- //
const API_ROUTE = '/api/v1';

// ----- Articles Routes ----- //
export const fetchArticles = () => axios.create()({
  method: 'get',
  url: `${API_ROUTE}/articles`,
});

export const addArticle = (data) => axios.create()({
  method: 'post',
  url: `${API_ROUTE}/articles`,
  data,
});

// ----- Cars Routes ----- //
export const fetchAllCars = () => axios.create()({
  method: 'get',
  url: `${API_ROUTE}/cars`,
});

export const fetchCarWithDrivers = (id) => axios.create()({
  method: 'get',
  url: `${API_ROUTE}/cars/${id}`,
});

export const createCar = (data) => axios.create()({
  method: 'post',
  url: `${API_ROUTE}/cars`,
  data,
});

// ----- Drivers Routes ----- //
export const fetchAllDrivers = () => axios.create()({
  method: 'get',
  url: `${API_ROUTE}/drivers`,
});

export const fetchDriverWithCars = (id) => axios.create()({
  method: 'get',
  url: `${API_ROUTE}/drivers/${id}`,
});

export const createDriver = (data) => axios.create()({
  method: 'post',
  url: `${API_ROUTE}/drivers`,
  data,
});

// ----- Meta Routes ----- //
export const fetchTimestamps = (type, id) => axios.create()({
  method: 'get',
  url: `${API_ROUTE}/carsanddrivers/${id}?type=${type}`,
});
