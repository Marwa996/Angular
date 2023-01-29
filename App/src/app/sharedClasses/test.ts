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

// export class test {
//     products: ICategory[] = [
//         {
//           id: 1,
//           name: "Laptops",
//           description: "This is description"
//         },
//         {
//           id: 2,
//           name: "Tablets",
//           description: "This is description"
//         },
//         {
//           id: 3,
//           name: "Mobiles",
//           description: "This is description"
//         }
//       ]
// }