export default async function getSingleProduct(id){
    let result = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
    let {data} = await result.json();
    return data;
}