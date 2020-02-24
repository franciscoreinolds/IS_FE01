import axios from "axios";

const url = '/api/wl_requests'

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

    static updateRequest(req_id, desc, medical_act_id, episode_id, patient_id) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.put(url, {
                    req_id : req_id,
                    description : desc,
                    act_id : medical_act_id,
                    episode_id : episode_id,
                    patient_id : patient_id
                });
                console.log("res.data: " + res.data.code);
                resolve(res.data);
            }   
            catch(err) {
                console.log("Error");
                resolve({
                    "code" : 400,
                    "message" : "Bad Insert"
                });
            }
        })
    }
}

export default WLRequestsService;