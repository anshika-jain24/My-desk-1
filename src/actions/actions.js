import axios from 'axios';

export const addUser = async (name, email, googleId) => {
    return await axios
    .post('http://localhost:4000/addUser',{
        name: name,
        email: email,
        googleId: googleId
      })
    .then(res => res.data)
    .catch(err => Promise.reject(err));
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
  .catch(err => Promise.reject(err));
}

export const getTodos = async (email) => {
  return await axios
  .get(`http://localhost:4000/getTodo/${email}`)
  .then(res => res.data)
  .catch(err => Promise.reject(err));
}

export const deleteTodo = async (email, todoName) => {
  return await axios
  .delete(`http://localhost:4000/deleteTodo/${email}/${todoName}`)
  .then(res => res.data)
  .catch(err => Promise.reject(err));
}

export const checkTodo = async (email, todoName, todoStatus) => {
  return await axios
  .put(`http://localhost:4000/checkTodo`, {
    email: email,
    todoName: todoName,
    todoStatus: todoStatus
  })
  .then(res => res.data)
  .catch(err => Promise.reject(err));
}