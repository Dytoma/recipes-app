export default async function getRandomMeal() {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');

    //handling errors
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
}