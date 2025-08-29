export default async function getCategories(){
    let result = await fetch(`https://ecommerce.routemisr.com/api/v1/categories`);
    let {data} = await result.json();
    return data;
}