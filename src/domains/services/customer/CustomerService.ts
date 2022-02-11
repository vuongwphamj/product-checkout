import { mockCustomers } from "../../../mock/customer";
import { Customer } from "../../models/customer/Customer";

class CustomerService {
    constructor() {}

    public async getCustomers(): Promise<Customer[]> {
        return mockCustomers;
    }
}

export const customerService = new CustomerService();