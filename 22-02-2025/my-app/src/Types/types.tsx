export type Product = {
    id: number;
    title:string;
    price: number;
    description:string;
    image:string;
    category : string;
    quantity:number;
};

export type User = {
    id:number;
    name:string;
    email:string;
    isAdmin : boolean;
};