const lista = document.getElementById("lista");
const btn = document.getElementById("btn");
const imgApi = document.getElementById("imgApi");

const url = "https://jsonplaceholder.typicode.com/posts/";

async function getApiData(){
    const response = await fetch(url);
    const data = await response.json();
    displayData(data);
    console.log(data); 
}

function displayData(data){
    data.forEach(e => {
        let li = document.createElement("li");
        li.innerHTML = `
            <p>User ID = ${e.userId}</p>
            <p>ID = ${e.id}</p>
            <p>Title = ${e.title}</p>
            <p>Body = ${e.body}</p>
        `;

        lista.appendChild(li);
    });
}

function displayImage(){
    
    let imgUrl = `https://picsum.photos/${Math.round(Math.random() * 300)}/${Math.round(Math.random() * 300)}`;

    console.log(imgUrl);
    imgApi.src = imgUrl;

    btn.innerHTML = "Cambiar imagen";
}

btn.addEventListener("click", ()=>{
    displayImage();
})

getApiData();