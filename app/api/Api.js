import axios from "axios";
import Constants from "../Constants";
import ArchiveItem from "../models/ArchiveItem";
import LocaleUtils from "../utils/LocaleUtils";

export default class Api {

    static getPopularVideos(onSuccess, onError) {
        axios.get(`${Constants.API}/popular-videos/?locale=${LocaleUtils.getUsersLocaleFallback()}`)
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

    static getVideos(page, onSuccess, onError) {
        axios.get(`${Constants.API}/videos/?page=${page}&locale=${LocaleUtils.getUsersLocaleFallback()}`)
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