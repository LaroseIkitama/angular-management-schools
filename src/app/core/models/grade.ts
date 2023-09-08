import { Student } from "./student";
import { Subject } from "./subject";

export enum GradeType {
    Exam = 'Exam',
    Assignment = 'Assignment'
}

export class Grade {
    "id"!: number;
    "score"!: number;
    "comment"!: string;
    "type"!: string;
    "student"!: Student;
    "subject"!: Subject;
}
