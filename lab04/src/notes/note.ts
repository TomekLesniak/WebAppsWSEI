export class Note {
    id: string;
    title: string;
    body: string;
    color: string;
    isPinned: boolean;
    dateCreated: Date;

    constructor(title: string, body: string, color: string, isPinned?: boolean) {
        this.id = title + color;
        this.title = title;
        this.body = body;
        this.color = color;
        this.isPinned = isPinned ?? false;
        this.dateCreated = new Date(Date.now());
    }

    toggleIsPinned = () => {
        this.isPinned = !this.isPinned;
    }

}