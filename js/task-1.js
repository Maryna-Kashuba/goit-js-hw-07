
const categoriesList = document.getElementById('categories');

const categoryCount = categoriesList.children.length;

console.log(`Number of categories: ${categoryCount}`);

categoriesList.querySelectorAll('.item').forEach(category => {
    const categoryName = category.querySelector("h2").textContent;
    const itemCount = category.querySelectorAll("li").length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${itemCount}`);
});

