import axios from "axios";

export const sendApplyDoc = async (payload) => {

    const token = await axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/token')

    let formData = new FormData(); 
    formData.append('position_id', payload.position); 
    formData.append('name', payload.name); 
    formData.append('email', payload.email); 
    formData.append('phone', payload.phone); 
    formData.append('photo', payload.photo.files[0]);

    const res = await axios.post(`https://frontend-test-assignment-api.abz.agency/api/v1/users`, 
        formData,
        { headers: 
            { 'Token' : token.data.token }
        })
    
    return res;
}