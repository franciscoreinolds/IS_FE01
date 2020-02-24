import axios from "axios";

const url = 'http://localhost:3000/api/requests'

class RequestService {
    static getRequests(req_id, req_n) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url, {
                    params : {
                        req: req_id,
                        req_number : req_n
                    }
                });
                console.log("asd:" + res.data.results);
                res.data.results = res.data.results.sort(function(a,b) {return (a.date < b.date) ? 1 : ((b.date < a.date) ? -1 : 0)});
                resolve(res.data);
            } catch(err) {
                console.log("Error: " + err.response.data.code);
                resolve({
                    "code" : err.response.data.code,
                    "message" : "Bad Insert"
                });
            }  
        })
    }

    static insertRequest(episode_id,  act_id, description) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.post(url, {
                    episode_id,
                    act_id,
                    description
                });
                resolve(res.data);
            } catch(err) {
                console.log("Error: " + err.response.data.message);
                resolve({
                    "code" : 400,
                    "message" : "Bad Insert"
                });
            } 
        });
    }
}

export default RequestService;