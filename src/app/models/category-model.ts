export class CategoryModel {
  private name:string  
  private id:string 
  private authorEmail:string;
  private isActive:string;
  private imageStorage:string 
  private description:string  
  private lastTopicId:string  
  private lastTopicName:string  
  private lastActivity:string   
  private countComments:string 
  private countTopics:string 

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

}