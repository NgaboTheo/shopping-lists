// Window using when js is loding first

// //first method
// window.onload = ()=>{
//     document.querySelector('h1').innerHTML = '<img src = "theo1.jpg" width="70px"> '
// }

//second method

// window.addEventListener('load', ()=>{
//     'load'
//     document.querySelector('h1').innerHTML = '<img src = "theo1.jpg" width="70px"> '
// })

//third method
window.addEventListener('load', ()=>{
    'DOM'
    document.querySelector('h1').innerHTML = '<img src = "theo2.jpg" width="70px"> '
})

window.addEventListener('resize',()=>{
    document.querySelector(
        'h1'
    ).innerText = `resized ${window.innerWidth}x ${window.innerHeight}y`
})

window.addEventListener('scroll',()=>{
    console.log(`scolled: ${window.scrollX}x ${window.scrollY}`)

    if(window.scrollY > 70){
        document.body.style.backgroundColor = '#79b381ff'
        document.body.style.color = '#eed85aff'
    }else{
        document.body.style.backgroundColor = '#6f95b9ff'
        document.body.style.color = '#f0c2a8ff'
    }
    
})
window.addEventListener('focus', ()=>{
    document.querySelectorAll('p')
    forEach((p) => {
        p.style.color = 'rgba(158, 157, 149, 1)'
    });
})

window.addEventListener('blur', ()=>{
    document.querySelectorAll('p')
    forEach((p) => {
        p.style.color = 'rgba(17, 17, 16, 1)'
    });
})
