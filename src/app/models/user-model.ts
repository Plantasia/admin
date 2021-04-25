export class UserModel {
  private id:string;
  private name:string;
  private bio:string;
  private avatar:string;
  private isAdmin:boolean;
  private created_at:string;
  private updated_at:string;
  private deleted_at:string;


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

    public getBio(): string {
        return this.bio;
    }

    public setBio(bio: string): void {
        this.bio = bio;
    }

    public getAvatar(): string {
        return this.avatar;
    }

    public setAvatar(avatar: string): void {
        this.avatar = avatar;
    }

    public isIsAdmin(): boolean {
        return this.isAdmin;
    }

    public setIsAdmin(isAdmin: boolean): void {
        this.isAdmin = isAdmin;
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

    public getDeleted_at(): string {
        return this.deleted_at;
    }

    public setDeleted_at(deleted_at: string): void {
        this.deleted_at = deleted_at;
    }




}
