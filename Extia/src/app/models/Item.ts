import { User } from "./User";

export interface Item {

    id?: string;
    name: string;
    categories:  Array<any>;
    quantity: string;
    expirationDate: Date;
    user: User;

}
