import { NodeWithI18n } from "@angular/compiler"

export interface Anime{
    id?:string,
    name:string,
    first_emision?: Date,
    season?:string,
    studio?:string,
    rate?:number,
    cover?:string
}
