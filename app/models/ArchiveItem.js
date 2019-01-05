import ArchiveFile from "./ArchiveFile";
import LocaleUtils from "../utils/LocaleUtils";

export default class ArchiveItem {
    constructor(jsonInput) {
        this.hashId = jsonInput.hash_id;
        this.date = jsonInput.date;
        this.tags = jsonInput.tags.split(",");
        this.views = jsonInput.views;
        this.createdAt = jsonInput.created_at;
        this.updatedAt = jsonInput.updated_at;
        this.archiveFiles = ArchiveFile.parseMultiple(jsonInput.archive_files);
        this.translations = Translation.parseMultiple(jsonInput.translations);
    }

    static parseMultiple(archive_items) {
        let items = [];
        archive_items.forEach((item, key) => {
            item = new ArchiveItem(item);
            items.push(item);
        });
        return items;
    }

    getTitle() {
        return this.translations
            .filter((translation) => translation.locale === LocaleUtils.getUsersLocaleFallback())[0].title;
    }

    getDescription() {
        return this.translations
            .filter((translation) => translation.locale === LocaleUtils.getUsersLocaleFallback())[0].description;
    }

    getThumbnail() {
        return this.archiveFiles
            .filter((archiveFile) => {
                return archiveFile.getType() === ArchiveFile.FileType.IMAGE
                    && archiveFile.language.locale === LocaleUtils.getUsersLocaleFallback()
            })[0].getThumbnail();
    }
}

class Translation {
    constructor(jsonInput) {
        this.title = jsonInput.title;
        this.description = jsonInput.description;
        this.locale = jsonInput.locale;
    }

    static parseMultiple(input) {
        let translations = [];
        input.forEach((item, key) => {
            let translation = new Translation(item);
            translations.push(translation);
        });
        return translations;
    }
}