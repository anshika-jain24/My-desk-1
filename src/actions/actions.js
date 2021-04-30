import axios from 'axios';

export const addUser = async (name, email, googleId) => {
    return await axios
    .post('http://localhost:4000/addUser',{
        name: name,
        email: email,
        googleId: googleId
      })
    .then(res => res.data)
    .then(err => Promise.reject(err));
}

export const addTodo = async (email, todoName, todoDate, todoTime) => {
  return await axios
  .post('http://localhost:4000/addTodo',{
      email: email,
      todoName: todoName,
      todoDate: todoDate,
      todoTime: todoTime
    })
  .then(res => res.data)
  .then(err => Promise.reject(err));
}

export const getTodo = async (email) => {
  return await axios
  .get(`http://localhost:4000/getTodo/${email}`)
  .then(res => res.data)
  .then(err => Promise.reject(err));
}