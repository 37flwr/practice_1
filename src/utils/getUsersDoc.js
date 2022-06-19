import axios from "axios";

export const getUsersDoc = async ({ page }) => {
    const users = await axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`)
    return users;
}