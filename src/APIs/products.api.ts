export default async function getProducts(){
    const result = await fetch(`https://ecommerce.routemisr.com/api/v1/products`);
    const {data} = await result.json();
    return data;
}