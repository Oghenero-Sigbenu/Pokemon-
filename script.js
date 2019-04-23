
//  var age = 18;
//  var religion = "christain";
// var isallowed =

// if ( (age >= 18) ||  ("religion" = true)) {
//   console.log (You are + "")
// alert("hello");
// var body = document.getElementsByTagName('body');
//  body[0].bgColor = 'blue';
//  console.log(body);

// var nameInput = document.getElementById('input1');
// var nameInputt = document.getElementById('input2');

// var ans = document.getElementById('answer');

// // console.log(nameInput.getAttribute("value"));
// //  console.log(nameInputt.getAttribute("value"));
 

// var add = document.querySelector(".add");
// add.addEventListener('click', function() {
//     var ip1 = nameInput.value;
//     var ip2 = nameInputt.value;

//    sol = parseInt(ip1) + parseInt(ip2);
//    ans.innerHTML = sol;

// console.log(alert(sol)); 
// })

// while loop
 
// 


// var input1 = document.getElementById("input1");
// var input2 = document.getElementById("input2");
// var add = document.getElementById("add");
// var submit = document.getElementById("submit");
// var inputid = 0;
// var news = document.getElementById("new");

// add.addEventListener("click", function(){
//     inputid++;
//     var inpue if(parseInt(grade[i].value) >= 39 && parseInt(grade[i].value) <= 49 ){
//     gradeText ='D';
//    }

//    var show = document.createElement("div");
//    show.setAttribute("name", "result");
//    show.innerHTML = gradeText;
//     news.appendChild(show);
// }
// });t = document.createElement("input");
//     input.type = 'number';
//     input.setAttribute("id", 'inputid');
//     input.setAttribute("name", "number");
//     news.appendChild(input);

//    var remove = document.createElement("button");
//   remove.setAttribute("id", 'buttonid');
//     // remove.removeChild();
//   remove.innerHTML ="REMOVE";
// news.appendChild(remove);
// });

// submit.addEventListener("click", function(){
//     // console.log(show);
// var grade = document.getElementsByName("number");

//   for( var i = 0; i < grade.length; i++){

//   if (parseInt(grade[i].value) >= 80 && (parseInt(grade[i].value) <= 100)) {
//       gradeText = 'A';

//   }
//  else if(parseInt(grade[i].value) >= 60 && (parseInt(grade[i].value) <= 79)){
//      gradeText = 'B';
//  }
//  else if(parseInt(grade[i].value) >= 50 && (parseInt(grade[i].value) <= 59)){
//     gradeText = 'C';
// }
//  else if(parseInt(grade[i].value) <= 39){
//    gradeText ='F';
//   }

//    else

let imagesnew = document.querySelector("imagesnew")
let list = document.querySelector(".list")
    async function asyncGetUsers() {
        let response = await fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json');
        let jsonData = await response.json();
       return jsonData.pokemon;
       return jsonData.pokemon.img;
    //   console.log(jsonData.pokemon.img);
 }

 asyncGetUsers()
     .then(data => {
            data.forEach(element => {
               let pictures = document.createElement("img");
               let newText = document.createElement("p");
               pictures.setAttribute("src", element.img);
             //  pictures.innerHTML = ;  
              
               let item = document.createElement("li");
               item.classList.add("col-sm-2");
               item.classList.add("card");
               item.classList.add("column-reverse");
              newText.innerHTML = element.name;
              item.appendChild(pictures);
            item.appendChild(newText);
                list.appendChild(item);
      item.addEventListener("click", ()=>{
         alert(element.name)
      })
                     
 
        
        });    
    });



  


    






























