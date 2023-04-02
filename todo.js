let div = document.getElementsByClassName('classes')

let ids1 = document.getElementById('ids')
let ids2 = document.getElementById('ids2')
let ids3 = document.getElementById('ids3')
let ids4 = document.getElementById('ids4')


function saveit(){
    localStorage.setItem('store', ids1.value)
    localStorage.setItem('store2', ids2.value)
    localStorage.setItem('store3', ids3.value)
    localStorage.setItem('store4', ids4.value)
      
}


let local = localStorage.getItem('store')
let local2 = localStorage.getItem('store2')
let local3 = localStorage.getItem('store3')
let local4 = localStorage.getItem('store4')
let createB = document.getElementsByClassName('create')
let newd = document.getElementsByClassName('newd')
newd[0].addEventListener('click', function(e){
    if (e.target.matches('button.remove')) {
        e.target.parentElement.remove();
        localStorage.setItem('saved',  newd[0].innerHTML)
    }
});


let prevContent = localStorage.getItem('saved');
if (prevContent) { newd[0].innerHTML = prevContent}





function free (){ 

let paro = document.createElement('p')
let cb =  document.getElementById('check')

if(cb.checked === true){
    paro.style.backgroundColor = 'rgb(200, 34, 2)'
}else{
    paro.style.backgroundColor = 'rgb(2, 78, 100)'
}
let remove = document.createElement('button')
remove.classList.add('remove');
remove.innerHTML = 'REMOVE' 



 

paro.style.color = 'rgb(243, 238, 232)'
paro.style.border = 'solid grey 4px'
paro.style.width = '180px'
paro.style.height = '60px'
paro.setAttribute('align', 'center')
paro.style.flexDirection = 'flex'
paro.style.marginLeft = '910px'
paro.style.borderRadius = '4px'
paro.style.flexDirection = 'row'
paro.style.fontSize = 'small'
paro.innerText = ids1.value + '\n' + ids2.value + '\n' + ids3.value + '\n' + ids4.value
remove.style.marginBottom = '90px'
remove.style.height = '16px'
remove.style.width = '51px'
remove.style.fontSize = '8px'
remove.style.color = 'red'
remove.style.textAlign = 'justify'
paro.appendChild(remove)

let removefunction = () => { 
remove.onclick = function() {
    if(paro){ 
    paro.remove()
    localStorage.setItem('saved',  newd[0].innerHTML)
    }
  

}
}

removefunction()




if(ids1.value !== ''){ 
    if(ids2.value !== ''){ 
        if(ids3.value !== ''){ 

        newd[0].appendChild(paro)
ids1.value = ''
ids2.value = ''
ids3.value = ''
ids4.value = ''
cb.checked = false

localStorage.setItem('saved',  newd[0].innerHTML)


        }else {
            console.log('missing date')
        }

    }else {
        console.log('mising description')
    }
}else {
     console.log('misning value')
}



return paro
}



createB[0].addEventListener('click', free )















