function renderModal(arrayPosts, arrayUsers) {
    const main = document.querySelector("main");
    const modal__container = document.createElement("section");
    const modal = document.createElement("div");
    const header__modal = document.createElement("div");
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const button = document.createElement("button");

    const conteudo__modal = document.createElement("div");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    modal__container.className = "modal__container";
    modal.className = "modal";
    header__modal.className = "header__modal";

    img.src = arrayUsers.img;
    img.alt = "user";
    figure.appendChild(img);

    li1.innerText = arrayUsers.user;
    li2.innerText = arrayUsers.stack;

    button.innerText = "X";

    button.addEventListener("click",() =>{
        modal__container.remove();
    })

    conteudo__modal.className ="conteudo__modal";
    h1.innerText = arrayPosts.title;
    p.innerText = arrayPosts.text;

    conteudo__modal.append(h1,p);
    ul.append(li1,li2);
    header__modal.append(figure,ul,button);
    modal.append(header__modal,conteudo__modal);
    modal__container.appendChild(modal);
    main.appendChild(modal__container);
}