export default async function getBrands(){
    const result = await fetch(`https://ecommerce.routemisr.com/api/v1/Brands`);
    const {data} = await result.json();
    return data;
}