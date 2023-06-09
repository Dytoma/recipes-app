export default async function getCategories() {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');

    //Handling errors
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
}