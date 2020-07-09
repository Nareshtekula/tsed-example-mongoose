import { Inject, Service, Injectable } from "@tsed/common";
import { MongooseModel } from "@tsed/mongoose";
import { User } from "../../models/users/User";


// @Service()
@Injectable()
export class UserService {
  constructor(@Inject(User) private userModel:   MongooseModel<User>) {}

  async find(id: string): Promise<User> {
    const user = await this.userModel.findById(id).exec();
    return user;
  }

}
