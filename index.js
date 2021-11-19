// let tabPostit = new Postit (
//     100,100,200,200,"pink","Pia",1
// )

// tabPostit.affichePostit()
// tabPostit.deplacement(200,400)
// tabPostit.affichePostit()
// tabPostit.redimensionement(400,400)
// tabPostit.affichePostit()
// tabPostit.changertext("CCI")
// tabPostit.affichePostit()
// tabPostit.changercouleur("purple")
// tabPostit.affichePostit()

let tabPostit =[]

let numID = -1 // Chaque post it


document.querySelector(".pink").addEventListener("mousedown", (event)=>{
    tabPostit.push( new Postit (event.clientX, event.clientY,300,300,"pink","",tabPostit.length))
    tabPostit[tabPostit.length-1].affichePostit()


    let pointerX=-1
    let pointerY=-1

    let affiche= tabPostit[tabPostit.length-1]

    document.onmousemove=(event)=> {
        pointerX=event.clientX;
        pointerY=event.clientY;

        affiche.deplacement(pointerX,pointerY)
        affiche.affichePostit()
}})


document.querySelector(".purple").addEventListener("mousedown", ()=>{
    tabPostit.push( new Postit (1000,350,300,300,"lightblue","",tabPostit.length))
    tabPostit[tabPostit.length-1].affichePostit()

    let pointerX=-1
    let pointerY=-1

    let affiche= tabPostit[tabPostit.length-1]

    document.onmousemove=(event)=> {
        pointerX=event.clientX;
        pointerY=event.clientY;

        affiche.deplacement(pointerX,pointerY)
        affiche.affichePostit()
    
}})

document.querySelector(".white").addEventListener("mousedown", ()=>{
    tabPostit.push( new Postit (1400,550,300,300,"white","",tabPostit.length))
    tabPostit[tabPostit.length-1].affichePostit()

    let pointerX=-1
    let pointerY=-1

    let affiche= tabPostit[tabPostit.length-1]

    document.onmousemove=(event)=> {
        pointerX=event.clientX;
        pointerY=event.clientY;

        affiche.deplacement(pointerX,pointerY)
        affiche.affichePostit()
}})

document.addEventListener("keydown", (event)=>{
    if(numID>-1){
        console.log(event);
        if(event.key=="Backspace"){
            tabPostit[numID].changertext(tabPostit[numID].texte.substr(0,tabPostit[numID].texte.length-1))
            tabPostit[numID].affichePostit()
        }

        else if(event.key=="Control"){
        }

        else if (event.key=="Alt"){
        }

        else if (event.key=="Shift"){
        }

        else if (event.key=="CapsLock"){

        }

        else if (event.key=="Enter"){
            let saute=tabPostit[numID].texte+"<br>"
            tabPostit[numID].changertext(saute)
            tabPostit[numID].affichePostit()
        }

        else{
            tabPostit[numID].changertext(tabPostit[numID].texte+event.key)
            tabPostit[numID].affichePostit()
        }
        
    }
})


// Arreter d'ecrire sur le post it
document.body.addEventListener("click",()=>{
    numID=-1
    
})

// Pour suprimer
/**
 * supprime un postit du tableau
 * 
 * @param {number} num -  numero  du post it
 */
function suprimerPostit(num){
    tabPostit.splice(num,1)
}

/**
 * 
 * @param {string} name  nom du cookie
 * @param {number} value valeur du cookie
 * @param {string} days nombre de jours 
 */
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

/**
 * 
 * @param {string} name nom du cookie
 * @returns 
 */
function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}


/**
 * 
 * @param {string} name nom du cookie
 */
function eraseCookie(name) {
	createCookie(name,"",-1);
}


setInterval(()=>{
    let texteCookie =JSON.stringify(tabPostit)
    //console.log(texteCookie);
    localStorage.setItem("postit",texteCookie,365) //createCookie été repmlacé pour localStorage.setItem
},1000)

window.addEventListener('load',()=>{
let textcookie = localStorage.getItem("postit")  //readCookie été repmlacé pour localStorage.getItem
let tabCookie = JSON.parse(textcookie) 
for (let index = 0; index < tabCookie.length; index++) {
   //console.log(tabCookie[index]);
    tabPostit.push(new Postit(tabCookie[index].x,tabCookie[index].y,tabCookie[index].largeur,tabCookie[index].hauteur,tabCookie[index].couleur,tabCookie[index].texte,tabPostit.length))
    tabPostit[tabPostit.length-1].affichePostit()
}
})


/*Drag and drop*/

/**
 * Permet de demarrer le Drag and drop
 * @param {object} event 
 */
function drag_start(event) {
	var style = window.getComputedStyle(event.target, null);
	event.dataTransfer.setData("text/plain", 
    (parseInt(style.getPropertyValue("left"), 10) - event.clientX) + ',' + 
    (parseInt(style.getPropertyValue("top"), 10) - event.clientY) + ',' + 
    event.target.id);

    
}

function drag_over(event) {
	event.preventDefault();
	return false;
}

function drop(event) {
	var offset = event.dataTransfer.getData("text/plain").split(',');
	var pinky = document.getElementById(offset[2]); //Id de Post it
	pinky.style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
	pinky.style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
	event.preventDefault();
	return false;
}

 document.body.addEventListener('dragover', drag_over, false);
 document.body.addEventListener('drop', drop, false);
