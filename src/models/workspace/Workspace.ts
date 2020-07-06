import { Required} from "@tsed/common";
import {Model, Ref, ObjectID} from "@tsed/mongoose";
import { User } from "../users/User";
@Model()
export class Workspace {
  @ObjectID("id")
  _id: string;

  @Required()
  name: string;

  @Ref(User)
  createdBy: Ref<User>;
}