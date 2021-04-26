export class CategoryModel {
  private name:string  
  private id:string 
  private authorEmail?:string;
  private isActive?:string;
  private imageStorage?:string 
  private description:string  
  private lastTopicId?:string  
  private lastTopicName?:string  
  private lastActivity?:string   
  private countComments?:string 
  private countTopics?:string 
  private updated_at?:string;
  private created_at?:string;
  private deleted_at?:string;

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getImageStorage(): string {
        return this.imageStorage;
    }

    public setImageStorage(imageStorage: string): void {
        this.imageStorage = imageStorage;
    }

    public getDescription(): string {
        return this.description;
    }

    public setDescription(description: string): void {
        this.description = description;
    }

    public getLastTopicId(): string {
        return this.lastTopicId;
    }

    public setLastTopicId(lastTopicId: string): void {
        this.lastTopicId = lastTopicId;
    }

    public getLastTopicName(): string {
        return this.lastTopicName;
    }

    public setLastTopicName(lastTopicName: string): void {
        this.lastTopicName = lastTopicName;
    }

    public getLastActivity(): string {
        return this.lastActivity;
    }

    public setLastActivity(lastActivity: string): void {
        this.lastActivity = lastActivity;
    }

    public getCountComments(): string {
        return this.countComments;
    }

    public setCountComments(countComments: string): void {
        this.countComments = countComments;
    }

    public getCountTopics(): string {
        return this.countTopics;
    }

    public setCountTopics(countTopics: string): void {
        this.countTopics = countTopics;
    }

    public getAuthorEmail(): string {
        return this.authorEmail;
    }

    public setAuthorEmail(authorEmail: string): void {
        this.authorEmail = authorEmail;
    }

    public getIsActive(): string {
        return this.isActive;
    }

    public setIsActive(isActive: string): void {
        this.isActive = isActive;
    }

    public getUpdated_at(): string {
        return this.updated_at;
    }

    public setUpdated_at(updated_at: string): void {
        this.updated_at = updated_at;
    }

    public getCreated_at(): string {
        return this.created_at;
    }

    public setCreated_at(created_at: string): void {
        this.created_at = created_at;
    }

    public getDeleted_at(): string {
        return this.deleted_at;
    }

    public setDeleted_at(deleted_at: string): void {
        this.deleted_at = deleted_at;
    }

  
  

}