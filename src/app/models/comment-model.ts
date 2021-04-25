export class CommentModel {
  private readonly id:number;
  private textBody:number;
  private readonly updated_at:number;
  private readonly created_at:number;
  private readonly deleted_at:number;
  
    public getId(): number {
        return this.id;
    }

    public getTextBody(): number {
        return this.textBody;
    }

    public setTextBody(textBody: number): void {
        this.textBody = textBody;
    }

    public getUpdated_at(): number {
        return this.updated_at;
    }

    public getDeleted_at(): number {
        return this.deleted_at;
    }

    public getCreated_at(): number {
        return this.created_at;
    }

}
