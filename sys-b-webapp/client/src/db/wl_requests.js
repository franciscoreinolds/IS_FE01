import axios from "axios";

const url = '/api/wl_requests'
//const url = 'http://localhost:3000/api/wl_requests'

class WLRequestsService {
    static getWLRequests(req_id) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url, {
                    params : {
                        id: req_id,
                    }
                });
                if (res.data.length < 1) {
                    resolve({
                        "code" : 401,
                        "message" : "No request with that id"
                    });
                }
                else resolve(res.data);
            } catch(err) {
                console.log("Error: " + err.response.data.code);
                resolve({
                    "code" : err.response.data.code,
                    "message" : "Error"
                });
            }
        })
    }
}

export default WLRequestsService;