export enum Role {
    Admin = 'Admin',
    Administrative = 'Administrative',
    SuperAdmin = 'SuperAdmin',
}

export class User {
    "id"!: number;
    "name"!: string;
    "password"!: string;
    "email"!: string;
    "role"!: string;
}
