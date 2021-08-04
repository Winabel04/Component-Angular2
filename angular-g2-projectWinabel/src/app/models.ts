
export interface Device {
    id?:number;
    name:string;
    brand: string;
    model: string;
    year:number;
    serial:any;
}

export interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address:{
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo:{
            lat: string;
            lng: string;
        }
    };
   
    phone: string;
    website: string;
    company:{
        name: string;
        catchPhrase: string;
        bs: string;
    }
   
}