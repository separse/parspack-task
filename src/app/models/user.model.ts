import { Address } from "./address.model";
import { Company } from "./user.model copy";

export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string,
    website: string,
    company: Company,
}
