import axios from "axios";

const url = '/api/medical_acts'

class MedicalActsService {
    static getActs() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(data);
            } catch(err) {
                reject(err);
            }  
        })
    }
}

export default MedicalActsService;