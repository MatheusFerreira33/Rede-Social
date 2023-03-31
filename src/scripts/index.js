
function renderSugstUrses(array){
    let container__suggestions = document.querySelector(".container__suggestions");
    for(let i = 0; i < array.length; i++){
        //console.log(users[array[i]-1]);
        const cards__Suggestions = document.createElement("div");
        cards__Suggestions.classList.add("cards__Suggestions");
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        const ul = document.createElement("ul");
        const li1 = document.createElement("li");
        const h2 = document.createElement("h2");
        const li2 = document.createElement("li");
        const button = document.createElement("button");


        img.src = users[array[i]-1.].img;
        img.alt = "image Users";
        figure.appendChild(img);

        h2.innerText = users[array[i]-1].user;
        li1.appendChild(h2);

        li2.innerText = users[array[i]-1].stack;
        button.type = "submit";
        button.innerText = "Seguir";

        ul.append(li1,li2,button);

        cards__Suggestions.append(figure,ul);

        container__suggestions.appendChild(cards__Suggestions);
       
    }
}

renderSugstUrses(sugestUsers);


function renderPostUrses(array){
    let container__posts = document.querySelector(".container__posts");
    for(let i = 0; i< array.length; i++){
       
        const posts = document.createElement("div");
        const header = document.createElement("div");
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        const ul = document.createElement("ul");
        const li1 = document.createElement("li");
        const li2 = document.createElement("li");
        const h2 = document.createElement("h2");

        const posts__conteudo = document.createElement("div");
        const h1 = document.createElement("h1");
        const p = document.createElement("p");
        const span = document.createElement("span");
        const button = document.createElement("button");
        const img2 = document.createElement("img");

        
        posts.className = "posts";

        header.className = "header";
        posts__conteudo.className = "posts__conteudo";

        h1.innerText = array[i].title;
        p.innerText = array[i].text;
        button.innerText = "Abrir Post";
        
       
        for(let j = 0; j < users.length; j++){
           if(users[j].id == array[i].user){
               img.src = users[j].img;
               h2.innerText = users[j].user;
               li2.innerText = users[j].stack;
               button.setAttribute("data-modal-control",users[j].id);
    
           }
        }

        li1.appendChild(h2);
        ul.append(li1,li2);
        img2.src = "./src/assets/img/iconCoracao.png";
        img2.alt = "Coração";
        span.append(button,img2,"19");

        figure.appendChild(img)
        header.append(figure,ul);
        posts__conteudo.append(h1,p,span);
        posts.append(header,posts__conteudo);
        container__posts.append(posts);

    }

    let botoes = document.querySelectorAll("[data-modal-control]");

    for(let i = 0; i < botoes.length; i++){
        botoes[i].addEventListener("click",function(event){
            let idModal = parseInt(botoes[i].getAttribute("data-modal-control"));
            
            for(let m = 0; m < array.length;m++){
                if(array[m].user == idModal){

                   for(let n = 0; n < users.length;n++){
                        if(users[n].id == idModal){
                           
                            return renderModal(array[m],users[n]);
                        }
                   }
                }
            }
           
            
        });
    }
}

renderPostUrses(posts);
