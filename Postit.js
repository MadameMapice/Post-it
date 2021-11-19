/**
 * @class Postit - classe representant un postit
 */

class Postit {
    x;
    y;
    largeur;
    hauteur;
    couleur;
    texte;
    id;

/**
 * 
 * @param {number} x - Position horizontal
 * @param {number} y - Position Vertical
 * @param {number} largeur - Taille de Postit
 * @param {number} hauteur - Taille de Postit
 * @param {string} couleur - Mettre le couleur au Post it
 * @param {string} texte - Mettre le text
 * @param {number} id - Numéro de Postit
 */
    constructor(x,y,largeur,hauteur,couleur,texte,id){

        this.x=x;
        this.y=y;
        this.largeur=largeur;
        this.hauteur=hauteur;
        this.couleur=couleur;
        this.texte=texte;
        this.id=id;

    }


/**
 * Deplacer le Postit haut et bas
 * @param {number} x 
 * @param {number} y 
 */
    deplacement(x,y){
        this.x=x;
        this.y=y;
    }
/**
 * Gérer les mesures de Postit
 * @param {number} largeur 
 * @param {number} hauteur 
 */
    redimensionement(largeur,hauteur){

        this.largeur=largeur;
        this.hauteur=hauteur;

    }

/**
 * Gérer le texte
 * @param {string} texte 
 */
    changertext(texte){
        this.texte=texte;
    }

    /**
     * Gérer le couleur
     * @param {string} couleur 
     */

    changercouleur(couleur){
        this.couleur=couleur;

    }

    /**
     * Montrer le Postit aprés chaque fonction
     */

    affichePostit(){
        let elem = document.getElementById("postit"+this.id)
        if(elem== null){
            elem=document.createElement("div")
            document.getElementById("tableau").appendChild(elem) // class qu'on a mis dans html
            elem.addEventListener('dragstart', drag_start, false); //Permet le drag and drop
        }
         
        elem.draggable=true //Autorise le drag and drop sur en element html
        elem.id="postit"+this.id
        elem.className="postit"
        // style de CSS
        elem.style.position ="fixed"; 
        elem.style.left = this.x+"px"; 
        elem.style.top = this.y+"px";
        elem.style.width = this.largeur+"px";
        elem.style.height = this.hauteur+"px";
        elem.style.backgroundColor = this.couleur;
        // Pour text
        elem.innerHTML = this.texte;


        // Bar Menu
        let menu=document.createElement("div")
        menu.className="menu"
            elem.appendChild(menu)
        
        // Pour deplacer
        // let buttom=document.createElement("div")
        // menu.appendChild(buttom)
        // buttom.className="fas fa-expand-arrows-alt"
        // buttom.addEventListener("mousedown",()=>{ 
        //     let pointerX=-1;
        //     let pointerY=-1;

        // document.onmousemove=(event)=> {
        //     pointerX=event.pageX;
        //     pointerY=event.pageY;
        //     this.deplacement(pointerX  -this.largeur +120,pointerY -this.hauteur +20)
        //     this.affichePostit()
        // }

        // })

        // buttom.addEventListener("mouseup",()=>{
        //     document.onmousemove=()=>{}
        // })

            


            
             // Pour redimensionement 

            let buttom1=document.createElement("div")
            menu.appendChild(buttom1)
            buttom1.className="fas fa-expand-alt"
            buttom1.addEventListener("mousedown",(event)=>{ 

                let posXOrig=event.clientX;
                let posYOrig=event.clientY;
                let largeurOrig = this.largeur;
                let hauteurOrig=this.hauteur;

                document.onmousemove=(event)=> {

                

                    this.redimensionement(event.clientX-posXOrig+largeurOrig,event.clientY-posYOrig+hauteurOrig)
                    this.affichePostit()

                }
            
            })
            elem.addEventListener("mouseup",()=>{
                document.onmousemove=()=>{}
            })



            // Pour le text

            let buttom2=document.createElement("div")
            menu.appendChild(buttom2)
            buttom2.className="fas fa-keyboard"
            buttom2.addEventListener("click",(event)=>{ // pour donner des fonctions
                numID = this.id

                event.stopPropagation() 
                // Arreter l'evenement pour eviter de mettre le post it -1
            })


            // Pour changer le color
            let buttom3=document.createElement("div")
            menu.appendChild(buttom3)
            buttom3.className="fas fa-palette"
            buttom3.addEventListener("click",()=>{ // pour donner des fonctions
            
            if(this.couleur=="pink"){
              this.changercouleur("lightblue")  
            }    
            else if(this.couleur=="lightblue"){
                this.changercouleur("white")
            }
            else if(this.couleur=="white"){
                this.changercouleur("pink")
            }
                this.affichePostit()
            })


            // Pour suprimer
            let buttom4=document.createElement("div")
            menu.appendChild(buttom4)
            buttom4.className="fas fa-window-close"
            buttom4.addEventListener("click",()=>{ // pour donner des fonctions

                elem.parentNode.removeChild(elem)
                suprimerPostit(this.id)
               
            })


    }
}
