export default async function getMealsByFirstLetter(firstLetter) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`);

    //handling errors
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    const results = res.json();

    return results;
}