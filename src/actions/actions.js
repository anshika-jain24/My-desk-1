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