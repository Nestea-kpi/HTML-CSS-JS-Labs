const URL = 'https://usersdogs.dmytrominochkin.cloud/dogs';
const Src = 'https://usersdogs.dmytrominochkin.cloud';
let body = $('body').get(0);
let x = 0;

  $.ajax(URL, {
      success: function(info){

           info.forEach(dog =>{

            main.insertAdjacentHTML("beforebegin",
             `<div class = "grid open_modal" onclick ="Display(this)" value="${x}">
             <img src = "${Src}${dog.dogImage}">
             <div class = "textAlign">
             <h2>${dog.title}</h2>
             <h4>${dog.sex}</h4>
            </div>
            </div>`);
            x++;


           });

      }


  });
    



function Display(info) {
   
     x = info.getAttribute('value');

    
    $.ajax(URL, {
    success: function(info){
        $('#link')[0].src = Src + info[x].dogImage;
        $('#name')[0].innerHTML = info[x].title;
        $('#sex')[0].innerHTML = info[x].sex;
        $('#age')[0].innerHTML = info[x].age;
        $('#description')[0].innerHTML = info[x].description; 

        backside.classList.add('vision'); 
        body.classList.add('blocks'); 

    }



    })
}  
    
       

$('#close').click(function(){
    backside.classList.remove('vision');
    body.classList.remove('blocks');
})