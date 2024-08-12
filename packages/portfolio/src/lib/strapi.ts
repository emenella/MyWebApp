export function getUrlImage(path: string){
    let url = process.env.NEXT_PUBLIC_STRAPI_URL || ""
    return url + path
}