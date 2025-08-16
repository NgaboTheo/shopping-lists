
    
   // alert("hello")
    console.log("hello world")

    //nesting while loop
    let i = 0
    while (i <= 10) {
        console.log('number:', i)
        i++;
        let j = 1;
        while (j<=10) {
            console.log(`${i} * ${j} = ${i*j}`)
            j++
        }
    }

    let num =0
    do{
        console.log('number:', num);
        num++;
    }
    while(num<=10);


    //FIzzBuzz challenge

    for(let x = 0; x <=100; x++){
        if(x %3 === 0 && x%5 ===0){
            console.log("FizzBuzz")
        }
        if (x%3 === 0){
            console.log('Fizz');
        } 
        else if (x % 5 === 0) {
            console.log('Buzz')
        }
        else{
            console.log(x)
        }
    }


    //For Of Loop

    const items = ['Theo', 'Ngabo', ' Theophile', 'Theoneste', 'Josiane', 'Yvone', 'Gloria']
    for(const item of items){
        console.log(item)
    }

let users  = [{
    Name : 'Theo',
    Location: 'Rusizi - Gisagara',
    Gender: 'Male',
    Age: 23,
    School: 'CUR'
}]
    for(const user of users){
        console.log(user)
    }


    //loop over Maps

    const map = new Map();
    map.set('name', 'Ngabo');
    map.set('School', 'CUR');
    for(const [key, value] of map){
        console.log(map)
    }
console.log('-------------------------------------------')
    //For in Loop

    const color = {
        color1: 'Red',
        color2: 'Green',
        color3: 'Yellow',
        color4: 'orange',
        color5: 'black',
        color6: 'blue'
    }
for(const colors in color){
    console.log(color[colors])
}
console.log('----------------------------------------------------------')
//ForEach
let media = ['Twitter', 'linkedin', 'whatapp', 'facebook']
media.forEach((item,index,arr)=>{
    console.log(`${index} - ${item}`, arr)
})
console.log('-------------------------------')
const str = [{
    name: 'Theo',
    age: 23,
    gender: 'male',
    School: 'CUR'
}]

const string = str.filter((strs)=>{
return str
})
console.log(string)


// for forEach

let number = [1,2,3,4,5,6,7,8,9, 10]

const  numbers = []
number.forEach((numb)=>{
    if (numb % 3 === 0) {
        numbers.push(numb)
    }
})
console.log(numbers)

//filter


const companies =[{
    name: 'company one', category: 'finance', start: 1954, ended:2025
},
{name: 'company two', category: 'Retail', start: 1935, ended:2024},

{name: 'company three', category: 'Auto', start: 1964, ended:2021},

{name: 'company four', category: 'retail', start: 1944, ended:2020},

{name: 'company five', category: 'finance', start: 1978, ended:2021},

{name: 'company six', category: 'Technology', start: 1994, ended:2021},

{name: 'company seven', category: 'Auto', start: 1990, ended:2012},

{name: 'company eight', category: 'retail', start: 1964, ended:2015
},
{name: 'company nine', category: 'finance', start: 1954, ended:2024
},
]

const company = companies.filter((campany)=>
    campany.category === 'finance'

)
console.log(company)


const started = companies.filter((starts)=>starts.start >= 1964 && starts.ended === 2023)
console.log(started)

//create array of company names

const names = companies.map((company)=>company.name)

console.log(names)

//create array with just company and category

const companycategory = companies.map((company)=>{
    return {
    name: company.name,
    category: company.category,
}
})
console.log(companycategory)


//create array of object with the name and the length of each company in years

const companyYears = companies.map((companys)=>{
    return{
        name: companys.name,
        length: companys.ended - companys.start+'years'
    }
})
console.log(companyYears)

console.log('-=--------------------------------------------------')

const num1 = [1,2,3,4,5,6,7,8,9,10]
const sum = num1.reduce((accumulator, current)=>{
    return accumulator + current
}, 2)

console.log(sum)

//using for loop   
let sum1 = (acc)=>{
    acc = 6
    for(let curr of num1){
        acc+= curr
    }
    return acc
}
console.log(sum1())
console.log('-------------------------------------------')

const cart = [
    {id: 1, name: 'book', price: 200},

    
    {id: 2, name: 'machine ', price: 400},
    
    {id: 1, name: 'phone', price: 100},
    
    {id: 1, name: 'shoose', price: 200},

]

let total = (prev)=>{
    prev = 0

    for(let prev of cart){
        prev += cart.price;

    }
    return prev
}

console.log('total price is: ', total())


// array method challanges
//challenge1

const info = [
    {fName: 'Theo',
    lName: 'Ngabo',
    email: 'nagbo@gmail.com',
    phone: +250787365376,
    age: 24
    },

    {
        fName: 'Ngabo',
    lName: 'Ngabonziza',
    email: 'nziza@gmail.com',
    phone: +2507873546,
    age: 25
    },

{
    fName: 'Theophile',
    lName: 'Nikuze',
    email: 'theo@gmail.com',
    phone: +2507874323,
    age: 21
    },
{
    fName: 'Theoneste',
    lName: 'Musabye',
    email: 'musabye@gmail.com',
    phone: +2507873534,
    age: 44
    },

{
    fName: 'josiane',
    lName: 'Mugwaneza',
    email: 'jose@gmail.com',
    phone: +25078736654,
    age: 26
    },

    {
        fName: 'Yvone',
    lName: 'Mukayitesi',
    email: 'yvone@gmail.com',
    phone: +25078736645,
    age: 43
    },

    {
        fName: 'Grolia',
    lName: 'Ineza',
    email: 'ineza@gmail.com',
    phone: +2507873324,
    age: 2
    }
];

const people = info
.filter((inform)=>inform.age <=30)
.map((information)=>({
    name: information.fName + ' ' +information.lName,
    email: information.email,
}))
console.log(people)

//challenge2


const numb = [-1,43,65,-64,6,9,-4,23]

const fitlNumbers = numb
.filter((numb)=> numb > 0)
.reduce((acc, curr)=> acc+curr, 0)


console.log(fitlNumbers)


//challenge3

const words = ['coder', 'programmer', 'develooper']
const Uword = words.map((word)=>{
    return word[0].toUpperCase() + word.slice(1, word.length)
})
console.log(Uword)


//INTRODUCTION TO DOM


const main = document.getElementById('main');
//main.innerHTML = '<h1> Hy Theo</p>'
console.log(document.getElementById('main'))



document.getElementById('app-title').title = 'shopping list'
document.getElementById('app-title').setAttribute('class', 'title')

const title = document.getElementById('app-title')

//get change content

console.log(title.textContent);
title.textContent = 'hello world'
title.innertext = 'hi Ngabo'
title.innerHTML = '<strong> shoop list<strong </strong>'

//change style

title.style.color = 'black'
title.style.backgroundColor = 'green'
title.style.padding = '5px'
title.style.borderRadius= '10px'

document.body.style.padding = '100px'
document.body.style.background = 'skyblue'



//get child element


let output;

const parent = document.querySelector('.parent')

output = parent.children
output = parent.children[0].innerText
output = parent.children[1].className
output = parent.children[2].nodeName


parent.children[1].textContent = 'I have courageous'
parent.children[2].style.color = 'yellow'


parent.firstElementChild.innerText = 'I have two children'
parent.lastElementChild.style.border = '2px solid black'

//get parent element

const child = document.querySelector('.child')

output = child.parentElement
child.parentElement.style.background = 'gray'
child.parentElement.style.paddingLeft = '30px'
child.parentElement.style.color = 'aqua'
child.parentElement.style.fontSize = '20px'
child.parentElement.style.border = '2px solid cyan'
child.parentElement.style.maxWidth = '20%'




//sibling element

const secondItem = document.querySelector('.child:nth-child(1)')

output = secondItem
output = secondItem.nextElementSibling;

secondItem.nextElementSibling.style.color = 'blue'
//secondItem.previousElementSibling.style.color = 'orange'



output = parent.childNodes
output = parent.childNodes[0].textContent

console.log(output)
