import axios from "axios";

const url = 'http://localhost:3000/api/requests'
const urlreport = 'http://localhost:3000/api/requests/report'
const urlexam = 'http://localhost:3000/api/requests/exam'

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
    static getReportRequests() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(urlreport);
                const data = res.data;
                resolve(data);
                console.log("requests: " + data);
            } catch(err) {
                reject(err);
            }  
        })
    }
    static getExamRequests() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(urlexam);
                const data = res.data;
                resolve(data);
                console.log("requests: " + data);
            } catch(err) {
                reject(err);
            }  
        })
    }
    static executeExam() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.put(url, {
                    status : 1
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

export default RequestService;