export interface IProduct{
    id:number,
    name:string,
    quantity:number,
    price:number,
    imgURL:string
    categoryId:number
}

export interface ICategory{
    id:number,
    name:string,
    description:string
}

export enum DiscountOffers{
    NoDiscount,
    "10%",
    "15%"
}