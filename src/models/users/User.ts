import { Required } from "@tsed/common";
import { Model, Ref, ObjectID } from "@tsed/mongoose";
import { Workspace } from "../workspace/Workspace";

@Model()
export class User {
    @ObjectID("id")
    _id: string;

    @Required()
    name: string;

    @Ref(Workspace)
    workspace: Ref<Workspace>;
}