import axios from 'axios'

export const loginUser = async({email, password}) =>{
    const response = await axios.post('http://localhost:3000/api/auth/login',{
        email, password
    })
    return response
}

export const registerUser = async(data)=>{
    const response = await axios.post('http://localhost:3000/api/users',data)
    return response
}

export const getMe = async() => {
    const token = localStorage.getItem('tokenLogin')
    const response= await axios.get('http://localhost:3000/api/auth/me',{
        headers: { Authorization: token },
    timeout: 3000
    })
    return response.data
}

export const updateUser = async(data) => {
    const formData = new FormData();
    for (const key in data) {
        formData.append(key, data[key]);
    }

    const id = localStorage.getItem('id');

    const response = await axios.patch(`http://localhost:3000/api/users/${id}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    return response.data;
}