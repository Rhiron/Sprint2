
function listAllNames(data) {
    return data.map(record => record.Name).join(', ');
}

function showAllAges(data) {
    return data.map(record => record.Name + " is " + record.Age + " years old").join('. ');
}

function displayFavoriteFoods(data) {
    return data.map(record => record.Name + "'s favorite food is " + record.Fav_Food).join('. ');
}

function displayInBrowser(data) {
    const names = listAllNames(data);
    const ages = showAllAges(data);
    const foods = displayFavoriteFoods(data);

    document.body.innerHTML += `<h2>Names: ${names}</h2>`;
    document.body.innerHTML += `<p>Ages: ${ages}</p>`;
    document.body.innerHTML += `<p>Favorite Foods: ${foods}</p>`;
}

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        displayInBrowser(data);
    })
    .catch(error => console.error('Fetch error:', error));



