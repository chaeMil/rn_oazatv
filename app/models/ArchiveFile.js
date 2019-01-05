import _ from "lodash";

export default class ArchiveFile {
    constructor(jsonInput) {
        this.title = jsonInput.title;
        this.description = jsonInput.description;
        this.file = new File(jsonInput.file);
        this.fileType = jsonInput.file_type;
        this.languageId = jsonInput.language_id;
        this.createdAt = jsonInput.created_at;
        this.updatedAt = jsonInput.updated_at;
    }

    static parseMultiple(archive_files) {
        let files = [];
        archive_files.forEach((file, key) => {
            file = new ArchiveFile(file);
            files.push(file);
        });
        return files;
    }
}

class File {
    constructor(jsonInput) {
        _.assign(this, jsonInput);
    }

    getType() {
        return this.type;
    }

    getThumbnail() {
        return this.thumb.url;
    }

    static FileType = Object.freeze({
        "UNDEFINED": "undefined",
        "IMAGE": "image",
        "VIDEO": "video",
        "AUDIO": "audio",
        "SUBTITLES": "subtitles"
    });
}