export interface CustomersList {
    firstName: string;
    lastName: string;
    idNumber: string;
    address: Address;
    contractList: ContractList[];
}

export interface Address {
    city: string;
    street: string;
    number: string;
    zipCode: string;
}

export interface ContractList {
    [x: string]: any;
    contractId: string;
    contractName: string;
    packages: PackagesList[];
}

export interface PackagesList {
    packageType: number;
    packageName: string;
    packageQuantity: number;
    packageBalance: number;
}