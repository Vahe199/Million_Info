
import axios from "axios";

const instance = axios.create({
//    baseURL: 'http://millioninfo.fab.nu/',
    baseURL: 'https://hagop.xyz/',
    headers: {
        "Content-Type": "application/json",
        'Authentication': `Bearer ${99}`
    },
})



export const dataApi = {
    getSearchData(value) {
        return instance.get(`search/${value}`)
    },
}
