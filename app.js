// let color = 'red';
// var Color = 'blue';
// const PI = 3.142;


// let background = 'white'
// var Background = 'red'
// const G=9.8;

// console.log(color.length);
// console.log(PI);


//constraints in declarators

// let country = 'Nigeria';
//     country = 'Liberia';
// console.log(country);

// var gender = 'male'
// var gender = 'female'
// console.log(gender);

// const gravity = 9.8;
// console.log(gravity);

//constraints in variable naming
//when naming variables do not give space between names we make use of camel casing or underscore and they can never start with a number but it can contain one
//when writing variables use a descriptive variable name


// let first_name = 'john';
// let lastName = 'nike';


//strings
//string property
// let fullName = 'chiamaka';

// console.log(fullName[6]);

// let result = fullName.length;

// console.log(result);


//
// let middleName = 'john';

// console.log(middleName.length);

//string methods: methods are functions that are related to a data type. Functions are lines if code that perform a task.
// to uppercase()
// let surname = 'ademola';

// let finalSurname = surname.toUpperCase();
// console.log(finalSurname);

//to lowercase()
// let Colour = 'VIOLET';

// console.log(Colour.toLowerCase());

//indexOf()
// let email = 'techstudio@outlook.com';
// console.log(email.length);
// console.log(email.indexOf('@'));

// //slice()
// let sliceEmail = email.slice(0,4);

// let slicee = email.slice(14,18);
// console.log(slicee);

// console.log(sliceEmail);

// //replace()
// let replace_email = email.replace('t','z');

// console.log(replace_email);




// let country = 'NIGERIA';

// console.log(country);

// let state = 'LAGOS';

// console.log(state);

// let continent = 'AFRICA';

// console.log(continent);


// 'Create a variable animal with a value of hippopotamus

// Using string method

// Convert to upper, lower,
// Get d position of t

// Get d position of d last o

// Get pot to show from hippopotamus

// Lastly replace h with b


// let animal = 'hippopotamus';

// let panimal = animal.toUpperCase();

// console.log(panimal);

// let canimal = panimal.toLowerCase();

// console.log(animal);

// console.log(animal.indexOf('t'));

// console.log(animal.lastIndexOf('o'));

// let sliceee = animal.slice(5,8);
// console.log(sliceee);

// let replace_animal = animal.replace('h','b')
// console.log(replace_animal);

//joining(concatenation) variables with strings


// let mult = score2 * score;
// console.log(mult);

// let div = score2/score;
// console.log(div);

// console.log(2**2);

// let indices = num ** num2;
// console.log(indices);

// let modulus = num % num2;
// console.log(modulus);

// let newYear = year + 1;

// console.log(newYear);

// console.log(year + 2);

// //short hand

// year--

// console.log(year);

// year +=
// console.log(year);

// Declare variables for continent, language, ghanaPopulation, finlandPopulation, country and nigeriaPopulation 

// With theses respective values

// Africa, pidgin English, 500,800 Nigeria, 1000

// let Continent = 'Africa';
// console.log(Continent);
// let Language = 'Pidgin English';
// console.log(Language);
// let ghanaPopulation = 500;
// console.log(ghanaPopulation);
// let finlandPopulation = 800;
// console.log(finlandPopulation);
// let Country = 'Nigeria'
// console.log(Country);
// let nigeriaPopulation = 1000
// console.log(nigeriaPopulation);

// 1)  If nigeriaPopulation is split in half.... How many people would love in each half?

// 2)  Increase nigeriaPopulation by 1 and log result to the console

// 3)   Log to the console using < or > to indicate whether   nigeriaPopulation is more than finlandPopulation

// 4)   Do same for ghanaPopulation

// 5)   Based on the variables created, create a new variable 'description' which would contain a string with this format --nigeria is in Africa and it's nigeriaPopulation people speak pidgin English

// let half = nigeriaPopulation / 2 ;
// console.log(half);

// // nigeriaPopulation++
// console.log(nigeriaPopulation + 1);

// console.log(nigeriaPopulation > finlandPopulation);
// console.log(nigeriaPopulation > ghanaPopulation);

// let description = Country + " is in " + Continent + ' and it\'s ' + nigeriaPopulation + ' people speak ' + Language;
// console.log(description);

// null means empty or nothing

// let blog = 50;

// let statement = 'The blog has ' + blog + ' likes'
// console.log(statement);

// let Score = 90
// let studentName = 'Nike'
// let School = 50

// let response = 'Hey stan, did you know ' + studentName + ' attends ' + School + ' and had ' + Score + ' in her test '
// console.log(response);

// let responses = `Hey Silver did you know ${studentName} attends ${School * Score} in her test`;
// console.log(responses);


// let friend1 = 'ola'
// let friend2 = 'gift'
// let friend3 = 'blessing'
// let friend4 = 'nike'

// console.log(friend1);
// console.log(friend2);
// console.log(friend3);
// console.log(friend4);

// //arrays
// let myfriends =['stan', 'femi', 'rilwan', 'ade']

// myfriends[1] = 'mark'
// console.log(myfriends);
// console.log(myfriends);

// //properties
// console.log(myfriends[2]);

// //array methods
// let includes = myfriends.includes('eggy')
// console.log(includes);

// let join = myfriends.join('_')
// console.log(join);

// let indexof = myfriends.indexOf('ade')
// console.log(indexof);

// let concat = myfriends.concat(['akin', 'kudos'])
// console.log(concat);

// let push = myfriends.push('silva')
// console.log(push);
// console.log(myfriends);

// let pop = myfriends.pop()
// console.log(pop);
// console.log(myfriends);

// [2:57 PM, 4/12/2022] +234 706 044 0986: Create an array of trainees of everyone in this class,starting with Temilolu

// Update the first name on the array to pappi and log to the console

// Using an array method..
// Add Amos and Mike to the end of array

// Using an array method remove Mike from the array

// Using an array method..
// Add Zack and Bobby at the beginning of d array

// Using an array method remove Zack from the array


// Using an array method concat a new array of trainees... Queen, segun, Pius, emeka
// [3:07 PM, 4/12/2022] +234 706 044 0986: Names of Trainees

// Ola,
// Nike,
// Blessing,
// Kudus,
// Gift,
// Gbolahon,
// Blard,
// Hillary,
// Akin,
// Silva,
// Femi,
// Stanley,
// Ade,
// Rilwan


// let trainees =['temilolu', 'ola', 'nike', 'blessing', 'kudus', 'gift', 'gbolahan', 'blard', 'hilary', 'akin', 'silva', 'femi', 'stanley', 'ade', 'rilwan'];
// console.log(trainees);

// trainees[0] = 'pappi';
// console.log(trainees);

// let Push = trainees.push('amos', 'mike')
// console.log(Push);
// console.log(trainees);

// let Pop = trainees.pop();
// console.log(Pop);
// console.log(trainees);

// let xvrk = trainees.unshift('zack', 'bobby');
// console.log(xvrk);
// console.log(trainees);

// let rrr = trainees.shift(0);
// console.log(rrr);
// console.log(trainees);

// let Concat = trainees.concat(['queen', 'segun', 'pius', 'emeka']);
// console.log(Concat);

// //typeof
// let add = 1000;
// console.log(typeof add);

// let food = 'hamburger';
// console.log(typeof food);

// let town;
// console.log(typeof town);

// let sth = null;
// console.log(typeof sth);

// //spread operator - it helps to list out items and join items
// let foods = ['starch', 'banga', 'eba', 'egusi'];
// let newfoods = ['rice', 'beans', ...foods]

// console.log(newfoods);


// //array destructure
// let colors = ['pink', 'green', 'blue', 'red', 'white', 'grey']

// let [a,b,c] = colors;
// console.log(a);



// // 13th APRIL

// //type conversion and coercion

// //conversion
// const inputyear = '1991';
// console.log(inputyear);
// console.log(typeof inputyear);
// console.log(inputyear + 18);
// console.log(Number(inputyear) + 18);

// // lets try to convert something that's actually is not a number
// console.log('eggy');
// console.log(Number('eggy'));

// let SCORE = 100;
// let answer = SCORE +10;
// console.log(answer);

// console.log(String(23), 23);

// //coercionlog
// console.log('i am ' + 23 + ' years old');
// console.log('i am ' + String(23) + ' years old');


// console.log('23'- '10' - 3);
// console.log('23'+ '10' + 3);
// console.log('23'-+'10' - 3);
// console.log('23' ** '2');
// console.log('23' > '2');

// let z = '1' +  1;

// z = z - 1
// console.log(z);

// console.log(2+3+4+'5');
// console.log('10'-'4'-'3'-2+'5');

// //comparison operator
// //>,<,==,===,!=,>=,<=

// let year1 = 2023;

// console.log(year1 > 2001);
// console.log(year1 > 2001);
// console.log(year1 >+ 2001);
// console.log(year1 <= 2001);
// console.log(year1 != 2001);

// //loose comparison operator ==

// let score_= '100';
// let score_2 = score_== 100
// let score_3 = score_!= 100

// console.log(score_2);
// console.log(score_3);

//strict comparison operater ===

// let score222 = score_ === 100;
// let score333 = score_ !== 100;

// console.log(score222);
// console.log(score333);

// control flow has loops(for and while) and conditional statements(if , else, else if, switch) 


//loops
//for - loop

// for(let i = 0; i < 11; i++){
//     console.log(i);
// }

// console.log('lifing weight repition 1 ');

// for (let rep = 1; rep <= 10; rep++){
//     console.log(`eggy lifts weight${rep}`);
// }

// let guys = ['hillary', 'blessing', 'ade', 'femi']

// for (let i = 0; i < guys.length; i++) {
//     console.log(guys[i]);
// }


// //while loops
// let babes = ['fatiima', 'joy',  'chioma', 'esther'];
// let i = 0;

// while (i < babes.length) {
//     console.log(babes[i].toUpperCase())
//     i++
// }
// // [2:47 PM, 4/13/2022] +234 706 044 0986: et colors = ['blue', 'pink', 'black', 'red']
// // [2:47 PM, 4/13/2022] +234 706 044 0986: use a for loop on dis

// let Colors = ['blue', 'pink', 'black', 'red'];

// for (let i = 0; i < Colors.length; i++) {
//  console.log('i have ' + Colors[i] + ' shirt')
// }

// let I = 0;

// while (I < Colors.length) {
//     console.log(`akin has ${Colors[I]} pants`)
//     I++

// }

// //conditional statements

// let age = 50;

// if(age === 35) {
//     console.log('baba you don old');
// }else {
//     console.log('oga the info is incorrect');
// }

// // let password = prompt('type a password')
// // console.log(password.length)

// // alert('your password length is ' + password.length)


// let SCORe = 30;

// if(SCORe >= 30){
//     console.log('you are over 29 years');
// }


// let PASSWORD = 'pas';
// if(PASSWORD.length >= 12) {
//     console.log('thats a very strong password');
// }else if(PASSWORD.length >= 8){
//     console.log('password is good');
// }else if(PASSWORD.length >= 6){
//     console.log('password is manageable');
// }else{
//     console.log('baba the password is not good enough');
// }

//logical operator

// || means or
// && means and

// true && true = true
// true && false = false
// false && true = false
// false && false = false
// as long as there is a negative value the whole statement is negative

//true || true = true
//true || false = true
//false || true = true
//false || false = false

// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);


// // &&
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// let _password = 'password1234'

// if(_password.length >= 12 && _password.includes('@')) {
//     console.log('thats a strong password');
// }else if(_password.length >= 8 || _password.includes('@')) {
//     console.log('password is good');
// }else{
//     console.log('not good enough');
// }


// let input = prompt('type a password')

// if(input.length >= 10 && input.includes('@')){
//     alert('strong password')
// }else if(input.length >= 5 || input.includes('@')){
//     alert('good password')
// }else{}
// alert('invalid password try again')

//TERNARY OPERATORS
// const number = 49;
// let result


// if (number === 50) {
//     result = 'Sufficiently Adequate'
// }else if ( number < 10){
//     result = 'Inadequate'
// }else{
//     result = 'Okay I Guess'
// }


// result = number >= 50 ? 'Sufficiently Adequate' : 'Inadequate'
// result = number === 50 ? 'Sufficiently Adequate' : (number < 10 ? 'Inadequate' : 'Okay I Guess')



// console.log(result);

// const user = {};
// let value 

// if (user.valid) {
//     user.save
// }else{
//     user.printError
// }

// value = user.valid ? user.save : user.printError







// 19th april Break and continue


// let RESULT = [20, 40, 0, 50, 100, 15, 10]

// for (let i = 0; i < RESULT.length; i++) {
//     //if we dont wnat to log zero to our console
//     if (RESULT[i] === 0) {
//         continue
//     }

//     console.log('your score is: ', RESULT[i]);

//     if(RESULT[i]=== 100){
//         break
//     }
// }

// let GRADE = 'A'

// if(GRADE ==='A'){
//     console.log('you got A');
// }else if(GRADE ==='B'){
//     console.log('you got B');
// }else if(GRADE ==='C'){
//     console.log('you got C');
// }else if(GRADE ==='D'){
//     console.log('you got D');
// }else{
//     console.log('you failed');
// }


//Switch statement

// let points = 'A'

// switch (points){
//     case 'A':
//         console.log('you got A');
//         break
//     case 'B':
//         console.log('you got B'); 
//         break   
//     case 'C':
//         console.log('you got C'); 
//         break   
//     case 'D':
//         console.log('you got D');
//         break
//     default:
//         console.log('you failed');        
// }

//Q- using data below, calculate the BMI for both ola and Nike.. and also with a conditional statement.. If ola's BMI is greater than Nike..log to the console ola's BMI is greater than Nike, else-------

//BMI = mass/height ** 2

//Given that ola/Nike height = 10/9
//given that ola/Nike mass 60/70


// let olaBMI =  36
// let nikeBMI = 60.5

// if (olaBMI > nikeBMI){
//     console.log("Ola's BMI is greater than Nike");
// }else{
//     console.log("Nike's BMI is greater than Ola's");
// }

// Global and local or block scope

// let $age = 100;
// if($age){
//     let $age = 40
//     console.log('Inside 1st block of code: ', $age);

//     if(true){
//         let $age = 300
//         console.log('inside 2md block of code: ', $age);
//     }
// }

// console.log('outside block of code: ', $age);


//functions
// before es6 we just had the declaration amd expression


//declaration

// greet()
// function greet (){
//     console.log('my gee');    
// }


// greet()
// greet()
// greet()
// greet()
// greet()

//expression


// let speaker = function(){
//     console.log('my person');
// }
// speaker()

// //arguement and parameters

// let speak = function(name, time){
//     console.log(`good day ${name}`);
//     console.log(`good ${time} ${name}`);
// }
// speak('ola', 'afternoon')


//arrow
// let salute = (gender)=>{
// console.log('na we dey here' + gender);
// }

// salute(' people')


//
// let explanation = statement + ' this morning '
// console.log(explanation);

//we have two tech teams (spartans and alpha)
//they compete against each other 3x, the winner with the highest average score wins the trophy
//calculate the average score for each team using the data below
// spartan - 60 70 80
//alphas- 88 91 120

//compare the teams average score to determine the winner of the competition and log to the console
//hint use an if, else statement

let spartanscore = (60 + 70 + 80) / 3;
console.log(spartanscore);

let alphascore = (88 + 91 + 120) / 3;
console.log(alphascore);


if (spartanscore > alphascore) {
    console.log('spartans are the winners of the competition');
}else{
    console.log('alphas are the winners of the competition');
}


//Q2
let purchaseprice = 10
let sellingprice = 15
let percentprofit = ((sellingprice - purchaseprice) / purchaseprice) * 100
console.log(percentprofit);



let trainees = [1,0,200];
let fees = [60, 800, 0, 120]

function calculate(Array, say){
    for(let i = 0; i < Array.length; i++){
        if(Array[i] === 0){
            continue
        }
        console.log(Array[i]);
    }

    for(let g = 0; g < say.length; g++){
        console.log(say[g]);
    }
}

calculate(trainees, fees)



let calcage = birthday =>{
    let age = birthday - 1984
    console.log(age);
    return age
}

let agecalc = calcage(2022)









// let _expressions = `Blessing was born ${agecalc} years ago`
// console.log(_expressions);

let classs = function(){
    return `hi`
}

let higher = (name, thus) =>{
    let myname = 'hillary'
    return`${thus()} ${myname} my name is ${name} `
}
let final = higher('eggy', classs)

console.log(final);














// let xv = function(){
//     return `hello`
// }

// let tr = function(){
//     return `easy`
// }
// let higherr = (life, hard, john) =>{
//     let mylife = 'this life is'
//     return`${life()} ${mylife} not very ${john()} `
// }

// let end = higherr(xv,'really', tr)
// console.log(end);


// There are 2 teams, Alpha and Spartans.

// Each team competes 3 times and the average of the 3 scores is calculated( one average score per team)

// A team only wins if it has atleast double the average score of the other team otherwise no team wins.

// 1) create an arrow function 'calcAverage' to calculate the average of 3 scores. 

// 2) use the function to calculate the average for both teams.

// 3) Create a function 'checkWinner' that takes the average score of each team as parameters ('aveAlpha' and 'aveSpartan') and then log the winner to the console together with the victory points, according to the rule above, i.e Spartan wins(30, vs 13)

// 4) use the checkWinner function to determine the winner for both Data

// 5) ignore draws this time
// Test Data 1 -- Alpha scores 43, 21 and 73. Spartan scores 63,55, and 47

// Test Data 2 -- Alpha scores 87,55 and 39. Spartan scores 21,33 and 27
// Expo

// To calculate average of 3 values and them all and divide by 3



// Expo 2

// To check if a is atleast double number b, check for a >= 2 * B .... apply this to the teams average score

let calaverage = (one, two, three) =>{
    return (one + two + three)/3
}

console.log(calaverage(10,20,30));


let Alphascore = calaverage(43,21,73)
console.log(Alphascore);

let Spartanscore = calaverage(63,55,47)
console.log(Spartanscore);


let checkwinner = function (Alphascore, Spartanscore){
    if(Alphascore >= 2 * Spartanscore){
        console.log(`Alphascore wins trophy (${Alphascore} vs ${Spartanscore}) `);
    }else if(Spartanscore >= 2 * Alphascore){
        console.log(`Spartanscore wins trophy (${Spartanscore} vs ${Alphascore})`);
    }else{
        console.log('No winner');
    }
}

checkwinner (Alphascore, Spartanscore)

let Alphascore2 = calaverage(87,55,39)
console.log(Alphascore2); 
 
let Spartanscore2 = calaverage(21,33,27)
console.log(Spartanscore2);

let checkwinner2 = function (Alphascore2, Spartanscore2){
    if(Alphascore2 => 2 * Spartanscore2){
        console.log(`Alphascore wins trophy (${Alphascore2} vs ${Spartanscore2}) `);
    }else if(Spartanscore2 => 2* Alphascore2){
        console.log(`Spartanscore wins trophy (${Spartanscore2} vs ${Alphascore2})`);
    }
    else{
        console.log('No winner');
    }
}

checkwinner2 (Alphascore2, Spartanscore2)

//21st
//object----- object literal, math object, dates-in objects we have keys and values
//higher order functions (for each, map, filter)
//DOM(document object modele)

let client_user = {
    firstname: 'Tolu', 
    lastname: 'Williams', 
    age: 25, 
    hasdriverslicense: false, 
    favouritefood:['beans', 'amala', 'yam']
}
let another_client = {
    country : 'country', 
    state : 'lagos'
}
console.log({...client_user, ...another_client});

delete client_user.lastname
console.log(client_user.favouritefood.pop());
console.log(client_user.firstname.toUpperCase());
console.log(client_user.favouritefood[1] = 'corn');
console.log(client_user);

// //dot nitation
// console.log(client_user.age);
// console.log(client_user.firstname='GB');
// console.log(client_user.hasdriverslicense);
// console.log(client_user.favouritefood);
// console.log(client_user.lastname);

// //bracket notation
// console.log(client_user['firstname']);
// console.log(client_user['lastname']);
// console.log(client_user['hasdriverslicense']);
// console.log(client_user['age']);
// console.log(client_user['favouritefood']);


//object destructure
const person ={
    name: 'nike',
    age:40,
    address:{
        city:'surulere',
        state: 'lagos'
    }
}

console.log(person.address.city);

let {name, age} = person
console.log(name);
console.log(age);

let customer = {
    first_name: 'ola',
    last_name: 'okoronkwo',
    year : 2022,
    calcbirthday: function(){
        return this.year - 1987
    },
    statement: function(){
        return`${this.first_name} is ${customer.calcbirthday()} years old`
    },
    hasdata: true,
    currentday: Date(),
    $friends:['gift', 'silva', 'tolu', 'stan']
}
console.log(customer);

console.log(customer.statement());


let Gbolahan = {
    FULLNAME: 'Gbolahan Thomas',
    MASS: 76,
    HEIGHT: 1.99,
    CALCBMI: function(){
      return (this.MASS/this.HEIGHT) * 2
    }
  }
  let BLESSING = {
    FULLNAME: 'Blessing Bode',
    MASS: 80,
    HEIGHT: 2.1,
    CALCBMI: function(){
      return (this.MASS/this.HEIGHT) * 2
    }
  }
  
  console.log(Gbolahan.CALCBMI());
  console.log(BLESSING.CALCBMI())
  
  let results =
    Gbolahan.CALCBMI() > BLESSING.CALCBMI()
      ? Gbolahan.FULLNAME +
        ' BMI ' +
        '(' +
        Gbolahan.CALCBMI() +
        ')' +
        ' is higher than' +
        BLESSING.FULLNAME +
        ' BMI' +
        '(' +
        BLESSING.CALCBMI() +
        ')'
      : BLESSING.FULLNAME +
        ' BMI ' +
        '(' +
        BLESSING.CALCBMI() +
        ')' +
        ' is higher than' +
        Gbolahan.FULLNAME +
        ' BMI' +
        '(' +
        Gbolahan.CALCBMI() +
        ')'
  
        console.log(results);

        // Higher order functions(forEach,map,filter)
let PEOPLE = [
    {name: 'Blessing', age: 30, position:'Banker'},
    {name: 'Silva', age: 40, position:'Web developer'},
    {name: 'Akin', age: 50, position:'Product Manager'},
    {name: 'B-Lard', age: 60, position:'Mobile App Developer'}
  ]

  for (x=0; x < PEOPLE.length;  x++) {
      console.log(PEOPLE[x])
  }

  //expression
  let newpeople = function(person){
      console.log(person);
  }

  PEOPLE.forEach(newpeople)

//arrow function
PEOPLE.forEach((person)=>{
    console.log(person);
})

//map
//it retuens a new array
//does not change the sixe of the original array
//uses values from the original array

let anotherperson = PEOPLE.map((i)=>{
    // return i.name
    return `<h2> ${i.name} </h2> <h1> ${i.age} </h1> <h4>${i.position}</h4>`
})
document.body.innerHTML = anotherperson.join('')
console.log(anotherperson);

console.log(anotherperson);

//filter
//it returns a new one

let youngblood = PEOPLE.filter((z)=>{
    return z.name ==='blessing'
})
console.log(youngblood);

let arr = [11,22,33,44,55]

let maparr = arr.map((item,index,array)=>{
    console.log(item);
    console.log(index);
    console.log(array);
})





//QUESTION 1

let billValue = 275
let tipp = (billValue => billValue >= 50 && billValue <= 300 ? 0.15*billValue : 0.2*billValue)

console.log(`the bill was $${billValue},the tip was $${tipp(billValue)} and the total is $${billValue + tipp(billValue)}` );

let BillValue = 40
let Tipp = (BillValue => BillValue >= 50 && BillValue <= 300 ? 0.15*BillValue : 0.2*BillValue)

console.log(`the bill was $${BillValue},the tip was $${tipp(BillValue)} and the total is $${BillValue + tipp(BillValue)}` );

let BillValuE = 430
let Tip = (BillValuE => BillValuE >= 50 && BillValuE <= 300 ? 0.15*BillValuE : 0.2*BillValuE)

console.log(`the bill was $${BillValuE},the tip was $${tipp(BillValuE)} and the total is $${BillValuE + tipp(BillValuE)}`);








const companies =
[
    { name: 'company One', category: 'Finance', start: 1981, end: 2003 },
    { name: 'company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'company Eight', category: 'technology', start: 1981, end: 1989 },
  ]


companies.forEach(Nam => {console.log(Nam.name);

})

// let ten = companies.map(dam => dam.end - dam.start >= 10 ? `${companies.name}` :
ext = function () {companies.map(dam => dam.end -dam.start >= 10 ? console.log(`${dam.name} have been existing for a decade or more`): '')}

ext()

const age = [30,15,10,5,40,80,2,20,21,25]

let adult = age.filter(ages => {
    return ages >= 21
})

console.log(adult);
