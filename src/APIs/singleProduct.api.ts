export default async function getSingleProduct(id:string){
    const result = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
    const {data} = await result.json();
    return data;
}