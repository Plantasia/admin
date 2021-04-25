export class UserModel {
  private id:string;
  private name:string;
  private bio:string;
  private avatar:string;

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

}
