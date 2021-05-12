/*
The code is written in French but you still can understand the algorithm
*/

var inputRomains = document.querySelector(".chiffresRomains input");
var btn = document.querySelector(".convertisseur button");
var inputArabes = document.querySelector(".chiffresArabes input");
var messageErreur = document.querySelector(".messageErreur p");
var erreur = "erreur";

/**
I = 1
V = 5
X = 10
L = 50
C = 100
D = 500
M = 1000
*/

var i, v, x, l, c, d, m;

var nombres = [];
var resultat;
var key;
/*
La fonction "chiffresRomains" permet de convertir les chiffres romains en chiffres arabes.
*/
function chiffresRomains() {
    //je recupère la valeur de l'input.
    var valeur = inputRomains.value;
    /*
    En chiffres romains, chaque chiffre/nombre est représenté par une lettre (sans blague...).
    */
    for (var j = 0; j < valeur.length; j++) {
        switch (valeur[j]) {
        case "i":
        case "I":
            i = 1;
            nombres.push(i);
            break;
        case "v":
        case "V":
            v = 5;
            nombres.push(v);
            break;
        case "x":
        case "X":
            x = 10;
            nombres.push(x);
            break;
        case "l":
        case "L":
            l = 50;
            nombres.push(l);
            break;
        case "c":
        case "C":
            c = 100;
            nombres.push(c);
            break;
        case "d":
        case "D":
            d = 500;
            nombres.push(d);
            break;
        case "m":
        case "M":
            m = 1000;
            nombres.push(m);
            break;
        default:
            /*
            Si un chiffre non romain est écrit, on push dans le tableau au hasard un nombre erreur
            (01019) pour sortir une erreur.
            */
            nombres.push(erreur);
            break;
        }
    }
}

function caracteresNonAcceptes() {
    var valeur = inputRomains.value;
    var str = "CDILMVXcdilmvx";
    for (i = 0; i < valeur.length; i++) {
        if (
            valeur[i] !== "c" &&
            valeur[i] !== "C" &&
            valeur[i] !== "d" &&
            valeur[i] !== "D" &&
            valeur[i] !== "i" &&
            valeur[i] !== "I" &&
            valeur[i] !== "l" &&
            valeur[i] !== "L" &&
            valeur[i] !== "m" &&
            valeur[i] !== "M" &&
            valeur[i] !== "v" &&
            valeur[i] !== "V" &&
            valeur[i] !== "x" &&
            valeur[i] !== "X" &&
            valeur[i] !== " "
        ) {
            messageErreur.textContent = "'" + valeur[i] + "' n'est pas un chiffre romain !";
        } else if (valeur[i] == " ") {
            messageErreur.textContent = "Assurez-vous de ne pas mettre d'espace !";
        }
    }
    if (valeur.length == 0) {
        inputArabes.value = "";
        messageErreur.textContent = "";
    }
}

function calcul() {
    //je récupère le tableau qui contient les chiffres romains écrits dans l'input.
    chiffresRomains();
    //je push un 0 à la fin du tableau "nombre", il nous servira à arrêter la boucle.
    nombres.push(0);
    //enfin, je convertis tous les chiffres et/ou nombres en entier.
    for (i = 0; i < nombres.length; i++) {
        nombres[i] = parseInt(nombres[i]);
    }
    //le résulat prend la première valeur du tableau.
    resultat = nombres[0];

    //le calcul commence !
    for (i = 0; i < nombres.length; i++) {
        /*
        En chiffres romains, deux chiffres décroissants sont additionner et deux chiffres croissants sont soustraits
        donc, si i est plus petit que le chiffre avant ET après lui...
        */
        if (nombres[i] < nombres[i + 1] && nombres[i] < nombres[i - 1] && nombres[i - 1] == nombres[0]) {
            //résultat prend la valeur qui est avant notre i.
            resultat = nombres[0];
            //la fonction "relative" rend un chiffre/nombre positif négatif.
            resultat = resultat + (relative(nombres[i]) + nombres[i + 1]);
            /*
            Si i est seulement plus petit que le i qui le suit...
            */
        } else if (nombres[i] < nombres[i + 1] && nombres[i] < nombres[i - 1] && nombres[i + 1] == 5) {
            console.log("(" + resultat + "-1) + (" + (relative(nombres[i]) + " + " + nombres[i + 1] + ")"));
            //calcul...
            resultat = (resultat - 1) + (relative(nombres[i]) + nombres[i + 1]);
        } else if (nombres[i] < nombres[i + 1] && nombres[i] < nombres[i - 1]) {
            console.log(resultat + " + (" + (relative(nombres[i]) + " + " + nombres[i + 1] + ")"));
            //calcul...
            resultat = resultat + (relative(nombres[i]) + nombres[i + 1]);
            /*
            Si i est seulement plus petit que le i qui le suit...
            */
        } else if (nombres[i] < nombres[i + 1]) {
            //calcul...
            resultat = relative(resultat) + nombres[i + 1];
            /*
            Si i est supérieur au i qui le suit...
            */
        } else if (nombres[i] == erreur) {
            //si 01019, le nombre erreur est détecté, la boucle s'arrête est un message d'erreur apparaît.
            messageErreur.textContent = "Erreur ! Assurez-vous d'avoir entré que des chiffres romains et pas d'espaces.";
            nombres = [];
            break;
        } else {
            //calcul...
            resultat += nombres[i + 1];
        }
        /*
        Enfin si l'avant dernier i rencontre le dernier i (0),
        ils s'additionnent et la boucle s'arrête.
        */
        if (nombres[i + 1] == 0) {
            inputArabes.value = resultat;
            messageErreur.textContent = "";
            nombres = [];
            break;
        }
        /*
        Cas si une lettre entrée n'est pas un chiffre romain
        */
    }
}

/*
Fonction pour valider avec la touche entrée
*/
function toucheEntreeCalcul(event){
    if (event.keyCode == 13 && inputRomains.value !== ""){
        calcul();
    }
}

//la fonction relative qui rend négatif un chiffre/nombre positif.
function relative(a) {
    a = parseInt(a);
    return a - (a * 2);
}

btn.addEventListener("click", calcul);
inputRomains.addEventListener("keydown", toucheEntreeCalcul);
inputRomains.addEventListener("keyup", caracteresNonAcceptes);
