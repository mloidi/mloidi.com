import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:7777';
// axios.defaults.baseURL = "https://backend-mloidi.herokuapp.com";

axios.interceptors.response.use(
  res => res.data,
  err => Promise.reject(err.response)
);

export const ResumeService = {
  getItemsByType: async type => {
    return await axios.get(`/mloidi/${type}`);
  },
  getAbout: async () => {
    return await axios.get(`/mloidi/about/`);
  },
  getSkills: async () => {
    return await axios.get(`/mloidi/skills/`);
  }
};
