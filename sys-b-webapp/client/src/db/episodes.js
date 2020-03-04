import axios from "axios";

const url = '/api/episodes'
//const url = 'http://localhost:3000/api/episodes'

class EpysodeService {
    static insertEpisode(patient_id, doctor_id, episode_id) {
        return axios.post(url, {
            patient_id,
            doctor_id,
            episode_id
        });
    }
}

export default EpysodeService;