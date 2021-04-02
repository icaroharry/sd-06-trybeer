import axios from 'axios';

export async function login(loginUser) {
  const user = await axios.post('http://localhost:3001/login', loginUser)
    .then((resp) => resp.data)
    .catch((err) => {
      console.log(err.response);
      return err.response;
    });
  return user;
}

export async function signUp(name, email, password, role) {
  const registerUser = await axios.post('http://localhost:3001/register', {
    name, email, password, role,
  })
    .then((resp) => resp)
    .catch((err) => {
      console.log(err.response);
      return err.response;
    });
  return registerUser;
}

export async function getProducts() {
  const token = localStorage.getItem('token');
  const products = await axios.get('http://localhost:3001/products', {
    headers: {
      authorization: JSON.parse(token),
    },
  })
    .then((resp) => resp.data)
    .catch((err) => {
      console.log(err.response);
      return err.response;
    });
  return products;
}
