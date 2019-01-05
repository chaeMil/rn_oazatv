import ArchiveFile from "./ArchiveFile";

export default class ArchiveItem {
    constructor(jsonInput) {
        this.title = jsonInput.title;
        this.description = jsonInput.description;
        this.hashId = jsonInput.hash_id;
        this.date = jsonInput.date;
        this.tags = jsonInput.tags.split(",");
        this.views = jsonInput.views;
        this.createdAt = jsonInput.created_at;
        this.updatedAt = jsonInput.updated_at;
        this.archiveFiles = ArchiveFile.parseMultiple(jsonInput.archive_files);
    }

    static parseMultiple(archive_items) {
        let items = [];
        archive_items.forEach((item, key) => {
            item = new ArchiveItem(item);
            items.push(item);
        });
        return items;
    }
}