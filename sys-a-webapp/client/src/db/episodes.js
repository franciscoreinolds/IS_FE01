import axios from "axios";

const url = '/api/episodes'

class EpisodeService {
    static insertEpisode(pat_id, doc_id, type_id) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.post(url, {
                    pat_id,
                    doc_id,
                    type_id
                });
                resolve(res.data);
            } catch(err) {
                resolve({
                    "code" : 400,
                    "message" : "Bad Insert"
                });
            } 
        });
    }
}

export default EpisodeService;