import { TopicModel } from "./topic-model";
import { UserModel } from "./user-model";

export class CommentModel {
  public  id:string;
  public textBody: string;
  public isActive: boolean;
  public readonly updated_at?:string;
  public readonly created_at?:string;
  public  deleted_at?: string;
  public readonly userId?: string;
  public readonly topicId?: string;
  public  user?: UserModel;
  public  topic?: TopicModel;

}

export class CommentToBackend {
  public textBody: string;
}
