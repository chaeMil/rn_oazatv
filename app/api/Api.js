import axios from "axios";
import Constants from "../Constants";
import ArchiveItem from "../models/ArchiveItem";

export default class Api {
    static getPopularVideos(onSuccess, onError) {
        axios.get(`${Constants.API}/popular-videos/`)
            .then((response) => {
                let videos = ArchiveItem.parseMultiple(response.data);
                console.log(videos);
                onSuccess(videos);
            })
            .catch((error) => {
                console.log(error);
                onError(error);
            });
    }
}