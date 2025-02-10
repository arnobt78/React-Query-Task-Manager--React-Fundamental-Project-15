// import axios from 'axios';

// const customFetch = axios.create({
//   baseURL: 'http://localhost:5000/api/tasks',
// });

// export default customFetch;
import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://task-management-server-nyfr.onrender.com/api/tasks",
});

export default customFetch;
