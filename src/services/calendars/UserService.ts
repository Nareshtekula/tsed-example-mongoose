import { Inject, Service } from "@tsed/common";
import { MongooseModel } from "@tsed/mongoose";
import { User } from "../../models/users/User";


@Service()
export class UserService {
  @Inject(User)
  private User: MongooseModel<User>;

  async find(id: string): Promise<User> {
    const user = await this.User.findById(id).exec();
    return user;
  }

}
