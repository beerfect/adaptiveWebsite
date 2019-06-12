const siteMapUl = document.querySelectorAll('.siteMap__ul');

for (let ul of siteMapUl) {
    ul.addEventListener('click',handler);
}

function handler(){
    this.classList.toggle('ulChecked');
    let childs = this.querySelectorAll('.siteMap__li');
    for(let li of childs){
        li.classList.toggle('siteMap__ul_visible');
    }
}