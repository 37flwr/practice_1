import axios from "axios";

export const sendApplyDoc = async (payload) => {
    console.log(payload);
    console.log(1);
    await axios.post(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6`)
    return;
}