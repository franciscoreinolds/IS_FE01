import axios from "axios";

const url = '/api/episode_types'
//const url = 'http://localhost:3000/api/episode_types'

class EpisodeTypeService {
    static getTypes() {
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

export default EpisodeTypeService;