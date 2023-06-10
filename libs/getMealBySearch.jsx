export default async function getMealBySearch(search) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);

    //handling errors
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
}