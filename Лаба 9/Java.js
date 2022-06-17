const URL = 'https://usersdogs.dmytrominochkin.cloud/dogs';
const Src = 'https://usersdogs.dmytrominochkin.cloud';
let close = document.getElementById('close');
let body = document.getElementsByTagName('body')[0];

let x = 0;

fetch(URL)
.then(result => result.json())
.then(dogs => {

        dogs.forEach(dog => {
            
            main.insertAdjacentHTML("beforebegin", 
            `<div class="grid open_modal" onclick="Display(this)"  value="${x}">
            <img src="${Src}${dog.dogImage}" alt="dog">
            <div class="textAling">
            <h1>${dog.title}</h1>
            <p>${dog.sex}</p>
            </div>
            </div>`);
            x++;

            
        });    
})
.catch(err => console.error(err));
    



function Display(info) {
   
     x = info.getAttribute('value');

    
    fetch(URL)
    .then(result => result.json())
    .then(dogs => {
    
    dogs.forEach(dog => {
                
        document.getElementById("link").src = Src + dogs[x].dogImage;
        document.getElementById("name").innerHTML = dogs[x].title;
        document.getElementById("sex").innerHTML = dogs[x].sex;
        document.getElementById("age").innerHTML = dogs[x].age;
        document.getElementById("description").innerHTML = dogs[x].description;
        
    
        backside.classList.add('vision'); 
        body.classList.add('blocks'); 

        }); 

    })
    .catch(err => console.error(err));

    

  }



close.onclick = function() {  
    backside.classList.remove('vision');
    body.classList.remove('blocks'); 
};