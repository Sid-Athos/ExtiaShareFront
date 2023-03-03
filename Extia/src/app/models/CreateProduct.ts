import {Category} from "./Category";

export interface CreateProduct {
  "name": string,
  "description": string,
  "expiration": Date,
  "quantity": number
  "categories": Category[],
  "containerId": number
}
