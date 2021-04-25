export class TopicModel {
  private id:string;
  private name:string;
  private textBody:string;
  private imageStorage:string;
  private created_at: string;
  private updated_at: string;

    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getTextBody(): string {
        return this.textBody;
    }

    public setTextBody(textBody: string): void {
        this.textBody = textBody;
    }

    public getImageStorage(): string {
        return this.imageStorage;
    }

    public setImageStorage(imageStorage: string): void {
        this.imageStorage = imageStorage;
    }

    public getCreated_at(): string {
        return this.created_at;
    }

    public setCreated_at(created_at: string): void {
        this.created_at = created_at;
    }

    public getUpdated_at(): string {
        return this.updated_at;
    }

    public setUpdated_at(updated_at: string): void {
        this.updated_at = updated_at;
    }

}
