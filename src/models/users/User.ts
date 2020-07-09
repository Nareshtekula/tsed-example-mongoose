import { Required } from "@tsed/common";
import { Model, Ref, ObjectID } from "@tsed/mongoose";
import { Workspace } from "../workspace/Workspace";
import { CalendarEvent } from "./../events/CalendarEvent";
import { Calendar } from "./../calendars/Calendar";

@Model()
export class User {
    @ObjectID("id")
    _id: string;

    @Required()
    name: string;

    @Ref(Calendar)
    calendar: Ref<Calendar>;

    @Ref(CalendarEvent)
    calendarEvent: Ref<CalendarEvent>;

    @Ref(Workspace)
    workspace: Ref<Workspace>;
}