import { Inject, Injectable } from "@tsed/common";
import { MongooseModel } from "@tsed/mongoose";
import { Workspace } from "../../models/workspace/Workspace";

// @Service()
@Injectable()
export class WorkspaceService {
  constructor(@Inject(Workspace) private workSpaceModel: MongooseModel<Workspace>) { }

  async find(id: string): Promise<Workspace> {
    const workspace = await this.workSpaceModel.findById(id).exec();
    return workspace;
  }

}
