const number = [2, 5, 15, 3]; // Tableau de n nombre
const arrayOfDate = [new Date(),randomDate(),randomDate(),randomDate()] // Tableau de n date

/*
** Exercice 1 : Pour chaque nombre n de la liste, on veut effectuer les opérations suivantes
*  En argument n, un nombre
** Return la genre ou la valeur en fonction de s'il est divisible par 3 , 5 ou les deux.
 */
const printGender = (number)=>{
    let gender = number % 5 === 0 ?  "Garçon" : "";
    return  gender += number % 3 === 0 ?  "Fille" : gender === "" ? number : "" ;
}

/*
** En argument la date envoyé
* Permet de savoir le nombre du jour dans l'année
** Ainsi on peut facilement savoir le nombre de la semaine
 */
const diffDays = (otherDate) => Math.ceil(Math.abs(new Date(new Date().getFullYear(), 0, 2) - otherDate) / (1000 * 60 * 60 * 24));

/*
* Exercice 2 Pour chaque date n dans une liste, on veut avoir ces résultats affichés en fonction des dates de la liste
* En argument une date
* Cette fonction permet de faire les 4 résultats attendu dans l'exercicie 1
 */
const formatDate = (previousDate)=>{
    let newDate = new Date(previousDate);
    let numberOfDay = Math.floor(diffDays( previousDate) / 7); // Divise le nombre de jour par 7 pour avoir le nombre de semanaine

    let frFormat = [newDate.getMonth()+1,
            newDate.getDate(),
            newDate.getFullYear()].join('/')+' '+
            [(newDate.getHours() < 10? '0' :'' )+newDate.getHours() ,
            (newDate.getMinutes() < 10 ? '0' : '')+newDate.getMinutes() ].join(':'); // formate la date en DD/MM/YYYY hh:mm

    newDate.setDate(0); // transforme la date au dernier jour du mois précédant
    previousDate.setHours(1,0,0,0); // reset l'heure de la date
    return [newDate,previousDate,frFormat,numberOfDay]
}

/*
* Le fait de ne pas faire de fonciton fleché me permet d'appeler la fonction avant.
* Return une Date random pour remplir le tableau de date (non demandé mais me permet de tester plus facilement)
*/
function randomDate() {
    const start = new Date(2020, 0, 1) ;
    const end = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}


// Print le resultat
console.log(number.map(printGender))
console.log(arrayOfDate.map(formatDate))
