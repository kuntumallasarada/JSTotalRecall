                                /* Variables and Datatypes 
                               ----------------------------------*/
/* 
1. How do we assign a value to a variable?
using "=" operator.

2. How do we change the value of a variable?
by reassigning to new value.

3. How do we assign an existing variable to a new variable?
using "=" operator,  the two variables are referencing the same value 
and not that two variables are assigned to each other.

let a=6;
let b=a;
console.log(b);// a and b have same value 6.

4.Remind me, what are declare, assign, and define?
declare - saying what datatype is the variable
assign - assigning a value to the variable
define - defining the scope of the variable like local or global or block scope or constant.

5. What is pseudocoding and why should you do it?
Pseudocoding is writing the logic of the program in a way we understand. example -algorithms.
We don't include any techinical rules of writing a computer program.
It helps to understand what are the steps in writing the program to get the desired output.

6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
  I think there is no fixed percentage of time to say but we should completely understand how to solve a problem before coding.

*/

                                      /* Strings
                             ----------------------------------*/

//Create a variable called firstVariable
let firstVariable;

//Assign it the value of the string "Hello World"
firstVariable = "Hello World";

//Change the value of this variable to some number
firstVariable = 10;

//Store the value of firstVariable in a new variable called secondVariable
let secondVariable = firstVariable;
// console.log(firstVariable);
// console.log(secondVariable);

//Change the value of secondVariable to any string.
secondVariable = "Program";

//What is the value of firstVariable?
 console.log(firstVariable);
 console.log(secondVariable);

//Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the 
//string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.

let yourName = "Sarada";
console.log("Hello , my name is "+ yourName);

                                         /* Booleans
                               ----------------------------------*/

const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a != b);
  console.log(c != d);
 console.log('Name'=== 'Name');
 // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
 console.log(false && false && false && false && false ||true);
 console.log(false == false) 
  console.log(e ==='Kevin');
 console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
 console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
   console.log(48 == '48');


                                          /* The Farm
                                  ----------------------------------*/

let animal = "cow";
if(animal==="cow")
console.log("mooooo");
else 
console.log("Hey! You're not a cow.");

                                       /* Driver's Ed
                            ---------------------------------*/ 

 let age =18;
 if(age >=16)
 console.log("Here are the keys!");
 else 
 console.log("Sorry, you're too young.");

                                         /* Loops
                            ----------------------------------*/

                                      //The basics

// for(let i=0;i<=10;i++)
// console.log(i);

// for(let i=10;i<=400;i++)
// console.log(i);

//for(let i=12;i<=4000;i+=3)
//console.log(i);

                                        // Get even

// for(let i=1;i<=100;i++)
// {
   
//     if(i%2==0)
//     console.log(i + " is a even number");

//     else 
//     console.log(i);
// }

                                    // Give me Five
    
 for(let i=0;i<=100;i++)
 {
    if(i%5 == 0)
    console.log("I found a "+ i+ ". High Five!");
    if(i%3 == 0)
    console.log("I found a "+ i+ ". Three is a crowd!");

 }
                                        // Savings Account


// let bank_account=0;
// for(let i=0;i<=10;i++)
// {
//     bank_account +=i;
// }                    
// console.log(bank_account);    

// let bank_account=0;
// for(let i=1;i<=100;i++){
//     bank_account += i;
// }
// bank_account *=2;
// console.log(bank_account);

                            /* Arrays and Control Flow
                            ----------------------------*/

                            //Talk about it

 /* 1. What are the things in an array called?
         Elements                          
    2. Do Arrays guarantee those things will be in order?
       Yes
    3. What real-life thing could you model with an array?
       Information about a person's personal data :
       [name,age,eye-color,hair-color]---> ["Sarada",44,"black","black"] */

                          // Easy Does It
let quotes=["Color","red","pink"];               

                                //Accessing elements


 const randomThings = [1, 10, "Hello", true];

console.log(randomThings[0]);
randomThings[2] = "World";
console.log(randomThings);

                               //Change values


const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
ourClass[2];
ourClass[4]="Octocat";
ourClass.push("Cloud City");
console.log(ourClass);

                                //Mix It Up

const myArray = [5, 10, 500, 20];
myArray.push("Aegon");
myArray.push("numbers");
myArray.shift();
myArray.unshift("Bob Marley");
myArray.pop();
console.log(myArray);
myArray.reverse();
console.log(myArray);
// Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
// Mutate means changing the data by adding/deleting/reversing . Here the array was mutated and result is 
// that array is in reverse order to the original one.

                                 // Biggie Smalls


// let i=100;
// if(i<100)
// console.log("little number");
// else
// console.log("big number");


                               //Monkey in the Middle

let num=90;
if(num<5)
console.log("little number");
else 
if(num>10)
console.log("big number");
else 
console.log("monkey");

                            //What's in your closet?

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

console.log("Kristyn is rocking that "+ kristynsCloset[2]+" today!");
kristynsCloset.splice(6,0,"raybans");
kristynsCloset.splice(5,1,'stained knit hat');
console.log(kristynsCloset);
console.log(thomsCloset[0][0]);
console.log(thomsCloset[1][0]);
console.log(thomsCloset[2][1]);
console.log("Thom is looking fierce in a  "+ thomsCloset[0][0] +"," + thomsCloset[1][0] +" and "+ thomsCloset[2][1]);

thomsCloset[1][2]="Footie Pajamas";

console.log(thomsCloset);

                                      /* Functions
                                      ---------------*/
                                  
                             //printCool

function printCool(name){
    console.log(`${name} is cool`);
}   
printCool("Sarada");       

                           //calculateCube

function calculateCube(number){
     let volume =number*number*number;
    console.log(`Volume of cube is ${volume}`);
}    
calculateCube(5);                       
 
                          //isVowel
                          function isVowel(av){
                            if(av.length==1){
                                
                               if(av.toLowerCase()=="a")
                               console.log("It's a vowel");
                               else if(av.toLowerCase()=="e")
                               console.log("It's a vowel");
                               else if(av.toLowerCase()=="i")
                               console.log("It's a vowel");
                               else if(av.toLowerCase()=="o")
                               console.log("It's a vowel");
                               else if(av.toLowerCase()=="u")
                               console.log("It's a vowel");
                               else 
                               console.log("It's  not a vowel");
                            }
                            else 
                            console.log("Please enter an alphabet");
                       }    
                          
                       isVowel("king"); 


                       //getTwoLengths

function getTwoLengths(s1,s2){
    //   let a1=s1.length;
    //   let a2 = s2.length;
      let a =[s1.length,s2.length];
      console.log(a);
}  
getTwoLengths("Bobby","String");               

                     //getMultipleLengths

function getMultipleLengths([...args])   
{
    // const normalArray =args;
    // console.log(normalArray);
    let len=[];
    for(let i of args)
    {
      console.log(i);
      console.log(i.length); 
      len.push(i.length); 
    }
console.log(len);

}      
getMultipleLengths(["hello","what","because","a","log"]);   

                        //maxOfThree

function maxOfThree(n1,n2,n3){
   
     if(n1>=n2){

         if(n1>=n3)
         console.log(n1);
         else 
         console.log(n3);
     }
     else if(n1<n2)
     {
        if(n2>=n3)
        console.log(n2);
        else 
        console.log(n3);
       
}   
} 
maxOfThree(20,44,44);                 

                          //printLongestWord

function printLongestWord([...args]){

    let longest="a";
     for(let i of args){
    
            if (i.length > longest.length)
             longest = i;
} 

console.log("The longest word in the array is  "+longest+" and it's length is "+ longest.length);
}  
   
printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]);     



                                    /* Objects
                                    --------------------*/

                                    //Make a user Object

const user ={
  name:"Lovely",
  email:"lovely12@gmail.com",
  age: 20,
  purchased:[]

} ;                                   

                               //Update the User

user.email="love21@gmail.com";
console.log(user.age);
user.age++;
console.log(user);

                            //Adding Keys and Values

user["location"]="India";
console.log(user);

                              //Shopaholic
 
user.purchased.push("carbohydrates");
user.purchased.push("peace of mind");
user.purchased.push("Merino jodhpurs");
console.log(user.purchased[2]);

                              //Object within object

user.friend ={
  name:"Gabby",
  age:25,
  location:"Australia",
  purchased:[]
};  
console.log(user.friend.name);       
console.log(user.friend.location);      
user.friend.age = 55;
user.friend.purchased.push("The One Ring");
user.friend.purchased.push("A latte");
console.log(user.friend.purchased[1]);
console.log(user);

                      //Loops

for(let i=0;i<user.purchased.length;i++){
  console.log(user.purchased[i]);
}     

for(let i=0;i<user.friend.purchased.length;i++){
  console.log(user.friend.purchased[i]);
}     

                        //Functions can operate on objects

function updateUser(){
  user.age++;
  user.name = user.name.toUpperCase();
}       
console.log(user);
updateUser();
console.log(user);

function oldAndLoud(person){
  person.age--;
  person.name = person.name.toLowerCase();
}

oldAndLoud(user);
console.log(user);