/*
_1 (Template strings) (2 Puntos)

Utilizando el array dado, utilizar Template Strings para producior la siguiente cadena. Asegurarse que los numeros, nombres y nombre del equipo, provengan de los datos

Mensaje a escribir: 

Hay 4 personas en el developer team.
Sus nombres son Jennie, Ronald, Martin, Anneli.
2 de ellos son senior con experiencia.

Tip: 
Utilizar \n para el salto de renglón. 
Utilizar map() para los nombres. Las comas las da el mismo map, ojo con el espacio despues de cada coma.

Plus: Se puede realizar en una sola linea

*/

const teamName = "developer"
const people = [
    { name: "Jennie", role: "senior" },
    { name: "Ronald", role: "junior" },
    { name: "Martin", role: "senior" },
    { name: "Anneli", role: "junior" }
]

const names = people.map(person => ` ${person.name}`);

const senior = people.filter(({ role }) => role === "senior");

const message = `Hay ${people.length} personas en el ${teamName} team.\nSus nombres son ${names}.\n${senior.length} de ellos son ${senior[0].role} con experiencia.`

console.log('Ejercico _1  ->', message)


/*
_2 (Destructuring & Find) (2 Puntos)

La función detectCollision recibe un array de rectangulos y un punto. Busca en el array y devuelve el primer rectangulo en el cual el punto dado está dentro.

Usar destructuring (en el punto y en cada objeto) y find() para reemplazar el código de la función, logrando el mismo resultado.
En el caso de que el punto no esté en ningun rectangulo, la función debe retornar false.

Tip: 
Al hacer destructuring, se puede asignar un alias a cada clave si se le quiere cambiar el nombre ej: 
const { uno: primero, dos, tres } = numeros

Plus: Se puede realizar en una sola linea si el destructuring del punto se hace en el parámetro de la función. Sino dos lineas.

*/


const myObjects = [
    { x: 10, y: 20, width: 30, height: 30 },
    { x: -40, y: 20, width: 30, height: 30 },
    { x: 0, y: 0, width: 10, height: 5 }
]

const detectCollision = (objects, point) => {

    for (let i = 0; i < objects.length; i++) {
        let object = objects[i]
        if (point.x >= object.x && point.x <= object.x + object.width &&
            point.y >= object.y && point.y <= object.y + object.height)
            return object
    }

    //Comentar el for y colocar acá la respuesta

    // const { x: pointX, y: pointY } = point
    // return true

}

console.log('Ejercico _2  ->', detectCollision(myObjects, { x: 4, y: 2 }))


/* 
_3 (Destructuring, Arrow Functions) (2 Puntos)
*/

/*
_3_a Usar destructuring para obtener el link de twitter del objeto profile

Plus: Se puede realizar en una sola linea..., alias.
*/

const profile = {
    fname: 'Mike',
    lname: 'Morron',
    social: {
        twitter: "https://twitter.com/mikemorronneverdies",
        instagram: "https://www.instagram.com/mikemorronneverdies"
    }
}

const { twitter, instagram } = profile.social;


console.log('Ejercico _3_a  ->', twitter);


/*
 _3_b Convertir exampleFunction en una arrow function de una sola linea..., sugar sintax.
*/

const exampleFunction = (fecha => `Code is fun, I love Javascript today: ${fecha}`);


console.log('Ejercicio _3_b ->', exampleFunction(Date()))

/*
 _3_c Utilizar map() y destructuring para obtener un array con la multiplicacion de ambos numeros en cada posición.

Plus: Se debe realizar en una sola linea...

*/

const operaciones = [
    { num1: 10, num2: 5 },
    { num1: 50, num2: 22 },
    { num1: 1, num2: 100 },
    { num1: 60, num2: 0 },
]

const operacionesMultiplicadas = operaciones.map(({ num1, num2 }) => num1 * num2);

console.log('Ejercicio _3_c ->', `${operacionesMultiplicadas}`)



/*
_4 Filter, Rest Operators (4 Puntos)

_4_a Obtener los semifinalistas (true) de cada grupo en dos arrays (Nombre: semiFinalistasZonaA, Nombre: semiFinalistasZonaAB) utilizando filter(), luego unir todos los objetos en otro array (Nombre: semiFinal) mediante Rest operator (...)
 
_4_b Obtener un array (Nombre: final) con los objetos de Argentina y Brasil. Utilizar if ternario y el operador || (or): 
//cond ? true (objeto) : false

_4_c Obtener un array finalResultado mediante final.map(), agregandole la clave goles utilizando Rest Parameters a cada objeto del array: 
goles: Math.floor(Math.random() * 101)

_4_d Modificar la constante campeon para que compare los goles de cada equipo y guarde una cadena que diga: 

El campeón es y el nombre del pais. (Tip utilizar if ternario y los subindices del array para comparar y formar el template string)


*/

const zonaA = [
    { pais: 'Argentina', semiFinalista: true },
    { pais: 'Uruguay', semiFinalista: false },
    { pais: 'Chile', semiFinalista: false },
    { pais: 'Colombia', semiFinalista: true }
]
const zonaB = [
    { pais: 'Peru', semiFinalista: true },
    { pais: 'Ecuador', semiFinalista: false },
    { pais: 'Brasil', semiFinalista: true },
    { pais: 'Bolivia', semiFinalista: false }
]

// Obtener un array (Nombre: final) con los objetos de Argentina y Brasil. Utilizar if ternario y el operador || (or): 
//cond ? true (objeto) : false
const semiFinalistasZonaA = zonaA.filter(({ semiFinalista }) => semiFinalista);
const semiFinalistasZonaB = zonaB.filter(({ semiFinalista }) => semiFinalista);


const semiFinal = [...semiFinalistasZonaA, ...semiFinalistasZonaB];

const final = semiFinal.filter(({ pais }) => pais === "Argentina" || pais === "Brasil");

const finalResultado = final.map(conGoles => ({ ...conGoles, goles: Math.floor(Math.random() * 101) }));

const campeon = arr =>
    arr[0].goles > arr[1].goles
        ? `El campeón es ${arr[0].pais}`
        : arr[0].goles === arr[1].goles
            ? `Empate`
            : `El campeón es ${arr[1].pais}`;


console.log('Ejercicio _4 ->', campeon(finalResultado));



