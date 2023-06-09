export default async function getCategoriesMeals(categoryName) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);

    //Handling errors
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
}