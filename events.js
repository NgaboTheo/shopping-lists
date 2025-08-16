//first way
const clearBtn = document.querySelector('#clear')

function onClear(){
const list = document.querySelector('.list')
list.innerHTML = '';

// const listItem = list.querySelector('.item-button')
// listItem.forEach((item)=>item.remove())


}
setTimeout(()=> clearBtn.removeEventListener('click', onClear), 5000)
//setTimeout(()=> clearBtn.click(), 5000)

//second way


// clearBtn.onclick = ()=>{
//     alert('clear items')
// }


//third way


// clearBtn.addEventListener('click', ()=>{
// alert('delete items')
// console.log('delete items')
// })


//about log
const logo = document.querySelector('h2')
const onclick = console.log('click logo')
const onDoubleclick = ()=>{
    if(document.body.style.backgroundColor !== 'cyan'){
        document.body.style.backgroundColor ='cyan'
        document.body.style.color = 'black'
    }else{
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
    }
}
const onRightclick = () => console.log('right click event')
const onMouseDown = () => console.log('mouse down click event')
const onMouseUp = () => console.log('mouse up click event')
const onMouseWheel = () => console.log('mouse wheel click event')
const onMouseOver = () => console.log('mouse over event')
const onMouseOut = () => console.log('mouse out event')
const onDragStart = () => console.log('drag start event')
const onDrag = () => console.log('drag event')
const onDragEnd = () => console.log('drag end event')
// logo.addEventListener('click', onclick)

// logo.addEventListener('dblclick', onDoubleclick)

// logo.addEventListener('contextmenu', onRightclick)

// logo.addEventListener('mousedown', onMouseDown)
// logo.addEventListener('mouseup', onMouseUp)
// logo.addEventListener('wheel', onMouseWheel)
// logo.addEventListener('mouseover', onMouseOver)
// logo.addEventListener('mouseout', onMouseOut)
// logo.addEventListener('dragstart', onDragStart)
// logo.addEventListener('drag', onDrag)
// logo.addEventListener('dragend', onDragEnd)


function onClick(e){
    console.log(e.target)
}
logo.addEventListener('click', onClick)


document.body.addEventListener('click',(e)=>{
    // console.log(e.target)
    // console.log(e.type)
    // console.log(e.timeStamp)

    // console.log(e.clientX)
    // console.log(e.clientY)

    // console.log(e.offsetX)
    // console.log(e.offsetY)

    // console.log(e.pageX)
    // console.log(e.pageY)

//     console.log(e.screenX)
//     console.log(e.screenY)
})

// const ondrag = (e)=>{
//     document.querySelector('h2').textContent = `X${e.clientX} Y${e.clientY}`

// }
// logo.addEventListener('click', onClick)
// logo.addEventListener('drag',ondrag)


//keyboard events

const inputitem = document.getElementById('input-item')
// const onKeypress = (e)=>{
//     console.log('keypress')
// }

// const onkeyUp = (e)=>{
//     console.log('keyUp')
// }
// inputitem.addEventListener('keypress', onKeypress)
// inputitem.addEventListener('keyup', onkeyUp)

// const onkeyDown = (e)=>{
//     //key
//     console.log(e.key)
//     document.querySelector("h2").innerText = e.key

// }
// inputitem.addEventListener('keydown', onkeyDown)

// const onkeyDown = (e)=>{
//     //key
//     if(e.key === 'Enter'){
//         alert('you pressed enter')
//     }
//     document.querySelector("h2").innerText = e.key
// if(e.keyCode === 13){
//     alert('press enter')
// }

//code
// console.log(e.code)
// document.querySelector('h2').innerText = e.code


// if(e.repeat){
//     console.log('you are holding '+e.key)
// }



// console.log('shift:'+e.shiftkey)
// console.log('contol:'+e.ctrkey)
// console.log("alt:"+e.altkey)
// }
// inputitem.addEventListener('keydown', onkeyDown)




const priority = document.getElementById('priority-input')
const checkbox = document.getElementById('checkbox')
const heading = document.querySelector('h2')


function onInput(e){
heading.textContent = e.target.value;

}
function onChecked(e){
    const isChecked = e.target.value
heading.textContent = isChecked ? 'checked': 'not checked'
}
function onFocus(){
    console.log('is focused')
    inputitem.style.outlineStyle = 'solid'
    inputitem.style.outlineWidth = '2px'
    inputitem.style.outlineColor = 'green'

}
function onBlur(){
    console.log('input is not focused')
    inputitem.style.outlineStyle = 'none'
}
inputitem.addEventListener('input', onInput)
priority.addEventListener('change', onInput)
checkbox.addEventListener('change',onChecked)
inputitem.addEventListener('focus',onFocus)
inputitem.addEventListener('blur', onBlur)


const form = document.getElementById('item-form')
function onSubmit(e){
    e.preventDefault()

    const item = document.getElementById('input-item').value;
    const priority = document.getElementById('priority-input').value;
    const checkbox = document.getElementById('checkbox').value

    if(item === ' ' || priority ===  '0' || checkbox === ''){
        alert('please fill all fields')
        return;
    }
    console.log(item, priority,checkbox)
}
form.addEventListener('submit', onSubmit)




//
// const button = document.querySelector('.add-button');

// button.addEventListener('click', (e)=>{
//     alert('button was clicked')
//     e.stopPropagation();
// })

// const div = document.querySelector('.list')
// div.addEventListener('click', ()=>{
//     alert('div was clicked')
// })

// form.addEventListener('click', ()=>{
//     alert("form was clicked")
// })


const itemButton = document.querySelectorAll('.item-button')
itemButton.forEach((item) => {
    item.addEventListener('click', (e)=>{
        e.target.style.color = 'red'
        //e.target.remove()
    })
});

