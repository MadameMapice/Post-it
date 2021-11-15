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

let numID = -1


document.querySelector(".pink").addEventListener("click", ()=>{
    tabPostit.push( new Postit (600,60,300,300,"pink","",tabPostit.length))
    tabPostit[tabPostit.length-1].affichePostit()
})

document.querySelector(".purple").addEventListener("click", ()=>{
    tabPostit.push( new Postit (1000,350,300,300,"lightblue","",tabPostit.length))
    tabPostit[tabPostit.length-1].affichePostit()
})

document.querySelector(".white").addEventListener("click", ()=>{
    tabPostit.push( new Postit (1400,550,300,300,"white","",tabPostit.length))
    tabPostit[tabPostit.length-1].affichePostit()
})

document.addEventListener("keyup", (event)=>{
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

        else if (event.key=="Enter"){
            tabPostit[numID].changertext(tabPostit[numID].texte.string(0,tabPostit[numID].texte.length+1))
            tabPostit[numID].affichePostit()
        }

        else{
            tabPostit[numID].changertext(tabPostit[numID].texte+event.key)
            tabPostit[numID].affichePostit()
        }
        
    }
})