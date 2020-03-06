import axios from "axios";

const url = '/api/requests'
const urlreport = '/api/requests/report'
const urlexam = '/api/requests/exam'

//const url = 'http://localhost:3000/api/requests'
//const urlreport = 'http://localhost:3000/api/requests/report'
//const urlexam = 'http://localhost:3000/api/requests/exam'

class RequestService {
    static getRequests(currItem) {
        if(currItem == 1) {
            return new Promise(async (resolve, reject) => {
                try {
                    const res = await axios.get(urlreport);
                    const data = res.data;
                    resolve(data);
                    console.log("report requests: " + data);
                } catch(err) {
                    reject(err);
                }  
            })
        }
        else if(currItem == 2) {
            return new Promise(async (resolve, reject) => {
                try {
                    const res = await axios.get(urlexam);
                    const data = res.data;
                    resolve(data);
                    console.log("exam requests: " + data);
                } catch(err) {
                    reject(err);
                }  
            })
        }
        else {
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
    static executeExam(new_id) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.put(url, {
                    req_id : new_id
                });
                console.log("res.data: " + res.data.code);
                resolve(res.data);
            }   
            catch(err) {
                console.log("Error");
                resolve({
                    "code" : 400,
                    "message" : "Bad Update"
                });
            }
        })
    }
    static send_report(new_id,report) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.post(url, {
                    new_id,
                    report
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