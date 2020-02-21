import axios from "axios";

const url = 'http://localhost:3000/api/requests'

class RequestService {
    static getRequests() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(data);
                console.log("requests: " + data);
            } catch(err) {
                reject(err);
            }  
        })
    }
}

export default RequestService;