import { TopicModel } from "./topic-model";
import { UserModel } from "./user-model";

export class CommentModel {
  public  id:string;
  public textBody:string;
  public readonly updated_at?:number;
  public readonly created_at?:number;
  public readonly deleted_at?: number;
  public readonly userId?: string;
  public readonly topicId?: string;
  public  user?: UserModel;
  public  topic?: TopicModel;

}

export class CommentToBackend {
  public textBody: string;
}
