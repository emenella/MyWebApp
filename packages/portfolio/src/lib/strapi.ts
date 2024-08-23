export function getUrlImage(path: string){
    let url = process.env.NEXT_PUBLIC_STRAPI_URL || "0.0.0.0"
    return url + path
}