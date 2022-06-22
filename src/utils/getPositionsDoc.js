import axios from "axios";

export const getPositionsDoc = async () => {
    const users = await axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/positions`)
    return users.data.positions;
}