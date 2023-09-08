import { Classroom } from "./classroom";

export enum Gender {
    Female = 'Female',
    Male = 'Male'
}

export class Student {
    "id"!: number;
    "registrationNumber"!: string;
    "full_name"!: string;
    "date_of_birth"!: Date;
    "address"!: string;
    "email"!: string;
    "phone_number"!: string;
    "gender"!: string;
    classroom!: Classroom;
}
