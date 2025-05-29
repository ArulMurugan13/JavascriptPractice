
async function getData(){
    const data = await fetch("https://api.github.com/users/ArulMurugan13");
    console.log(data);
    const jsonVal = await data.json();
    console.log(jsonVal);
}

getData();

// fetch returns a response object and then it is converted into json format