<h1>(L'application n'a pas de titre pour l'instant)</h1>
<p>Je crée une application qui permet de convertir des chiffres romains en chiffres arabes.</p>
<h3>Le problème que je rencontre</h3>
<p>Parmi mes fonctions, j'en ai deux essentielles :</p>
<ul><li>"chiffresRomains" qui convertit des chiffres romains et chiffres arabes</li>
<li>"calcul" l'algorithme qui calcule un nombre format romain pour en sortir un nombres format arabe</li></ul>
<p>Ma difficulté est dans la fonction "chiffresRomains". </br> J'ai une barre de texte et un tableau. Quand je rentre
un chiffre romain (x, v, ou i, par exemple...), ce chiffre est "push" dans le tableau et est convertit en chiffre arabes (10, 5, oui 1, par exemple...) Ce tableau sera envoyé dans la fonction "calcul" où l'algorithme calculera les chiffres/nombres à l'intérieur.</br> Le problème est que j'utilise une boucle dont les chiffres déjà enregistrés sont "push" une nouvelle fois quand l'index s'incrémente !</br>
Il faut que, malgré l'incrémentation de l'index, le chiffre déjà push soit ne doit être push une 2ème fois à cause de la boucle.</p>