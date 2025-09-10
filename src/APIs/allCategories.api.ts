export default async function getCategories(){
    const result = await fetch(`https://ecommerce.routemisr.com/api/v1/categories`);
    const {data} = await result.json();
    return data;
}