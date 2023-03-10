const form = document.querySelector("#form");
const display = document.querySelector('#display');

form.addEventListener('submit', async (e) =>{
    try{
        e.preventDefault();
        display.innerHTML = '';
        const searchTerm = form.query.value;
        const config = {params: {q :searchTerm}};
        const result = await axios.get("https://api.tvmaze.com/search/shows/", config);
        const resultList = result.data;
        makeResult(resultList);
    }catch(e){
        display.innerText = 'No results found!!';
    }
    
})
//result.data.0.show.image.medium
const makeResult = (results) => {
    for (let r in results){
        if(results[r].show.image){
            const img = document.createElement('img');
            img.src = results[r].show.image.medium;
            display.appendChild(img);
        }
    }
}