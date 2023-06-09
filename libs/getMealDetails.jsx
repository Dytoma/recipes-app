export default async function getMealDetails(id) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);

    //handling errors
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
}