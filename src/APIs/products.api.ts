export default async function getProducts(){
    let result = await fetch(`https://ecommerce.routemisr.com/api/v1/products`);
    let {data} = await result.json();
    return data;
}