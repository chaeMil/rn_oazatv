import axios from "axios";
import Constants from "../Constants";

class Api {
    static getPopularVideos(onSuccess, onError) {
        axios.get(`${Constants.API}/popular-videos/`)
            .then((response) => {
                console.log(response.data);
                onSuccess(response.data);
            })
            .catch((error) => {
                console.log(error);
                onError(error);
            });
    }
}

export default Api