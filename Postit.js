class Postit {
    x;
    y;
    largeur;
    hauteur;
    couleur;
    texte;
    id;


    constructor(x,y,largeur,hauteur,couleur,texte,id){

        this.x=x;
        this.y=y;
        this.largeur=largeur;
        this.hauteur=hauteur;
        this.couleur=couleur;
        this.texte=texte;
        this.id=id;

    }

    deplacement(x,y){
        this.x=x;
        this.y=y;
    }

    redimensionement(largeur,hauteur){

        this.largeur=largeur;
        this.hauteur=hauteur;

    }

    changertext(texte){
        this.texte=texte;
    }

    changercouleur(couleur){
        this.couleur=couleur;

    }

    affichePostit(){
        let elem = document.getElementById("postit"+this.id)
        if(elem== null){
            elem=document.createElement("div")
            document.getElementById("tableau").appendChild(elem) // class qu'on a mis dans html
        }
         
        
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
            let buttom=document.createElement("div")
            menu.appendChild(buttom)
            buttom.className="fas fa-expand-arrows-alt"
            buttom.addEventListener("mousedown",()=>{ 
                let pointerX=-1;
                let pointerY=-1;

            document.onmousemove=(event)=> {
                pointerX=event.pageX;
                pointerY=event.pageY;
                this.deplacement(pointerX  -this.largeur +120,pointerY -this.hauteur +20)
                this.affichePostit()
            }

            })

            buttom.addEventListener("mouseup",()=>{
                document.onmousemove=()=>{}
            })
            
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
