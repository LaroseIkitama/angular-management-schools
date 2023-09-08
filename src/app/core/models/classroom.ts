import { Student } from "./student";
import { Subject } from "./subject";

export class Classroom {
    "id"!: number;
    "name"!: string;
    "level"!: string;
    "year"!: number;
    "maximum_capacity"!: number;
    students?: Student[];
    subjects?: Subject[];
}
