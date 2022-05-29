let name = document.getElementById('name') ;
let prix = document.getElementById('prix') ;
let count = document.getElementById('count') ;
let statu = false
let data  ;
if (localStorage.product != null){
    data = JSON.parse(localStorage.product)
    }else{
    data= []
}
function add(){
 if(name.value !="" && prix.value !="" && count.value !=""){
    let info = {
        name : name.value.toLowerCase(),
        prix : prix.value,
        count: count.value
    }
    
    if(0< count.value && count.value< 101){
        document.getElementById('count').style.borderColor=''
        document.getElementById('count-err').innerHTML=""
        for(var j=0 ; j<count.value ; j++){
            data.push(info)
        }
    }
 
console.log(data)
localStorage.setItem("product",JSON.stringify(data))
 }
clear()    
show()
}
function show(){
let table = ''
for(var i=0 ; i<data.length ; i++){
table += ` <tr>
<th scope="row">${i+1}</th>
<td id="td1">${data[i].name}</td>
<td  id="td2">${data[i].prix}$</td>
<td><button type="submit" class="btn btn-success" onclick="Edit(${i})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
<path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></button></td>
<td><button type="submit" class="btn btn-danger" onclick="Sup(${i})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></button></td>
</tr>`
}
document.getElementById('t').innerHTML=table
let btns = document.getElementById('btn-sup')
if(data.length >0){
    btns.innerHTML=`<button type="submit" class="btn btn-danger my-3" onclick="SupAll()" style="width:255px ;" id="delbtn">Delete ALL (${i})</button></td>`
    console.log(data.length)
    }else{
        btns.innerHTML = ""  
    }

}
function Sup(i){
    data.splice(i,1)
    localStorage.product = JSON.stringify(data)
    show()
}
function SupAll(){
    data.splice(0,data.length)
    localStorage.product = JSON.stringify(data)
    show()
}
function clear(){
    name.value=""
    prix.value=""
    count.value=""
}
function Edit(i){
    btn3 = document.getElementById('edit')
    console.log(data[i].name , data[i].prix, data[i].count)
    document.getElementById('name').value=data[i].name
    document.getElementById('prix').value=data[i].prix
    document.getElementById('count').style.display='none'
    document.getElementById('btn').style.display='none'
    document.getElementById('delbtn').style.display='none'
    btn3.innerHTML=`<button type="submit" class="btn btn-success my-3" style="width:255px ;" id="delbtn2" onclick="Edit2(${i},${i})">Edit</button></td>`
    scroll({
        top : 0 ,
        behavior:"smooth"
    })
}
function Edit2(i,j){
    console.log(data[i].name,data[i].prix)
    document.getElementById("td1").innerHTML=name.value
    document.getElementById("td2").innerHTML=prix.value+"$"
    data[i].name=name.value
    data[j].prix=prix.value
    console.log(data)
    localStorage.setItem("product",JSON.stringify(data))
    document.getElementById('count').style.display='block'
    document.getElementById('delbtn2').style.display='none'
    document.getElementById('btn').style.display='block'
    document.getElementById('delbtn').style.display='none'
    window.scrollTo(0, 10);
    clear()
    show()
    scroll({
        top : 500 ,
        behavior:"smooth"
    })
}
function Search(value){
    let table = ''
    console.log(value.value)
   for(var i=0 ; i<data.length ; i++){
    if(data[i].name.includes(value.value.toLowerCase())) {
        table += ` <tr>
        <th scope="row">${i}</th>
        <td id="td1">${data[i].name}</td>
        <td  id="td2">${data[i].prix}$</td>
        <td><button type="submit" class="btn btn-success" onclick="Edit(${i})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
        </svg></button></td>
        <td><button type="submit" class="btn btn-danger" onclick="Sup(${i})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg></button></td>
        </tr>`
    }
   }
   document.getElementById('t').innerHTML=table
}
function err(err){  
if(err.value ==0 || err.value <0){
    document.getElementById('count').style.borderColor="red"
    document.getElementById('count-err').style.color='red'
    document.getElementById('count-err').innerHTML="It must be greater than zero !!"
   
    }else if(err.value >101 ){
        document.getElementById('count').style.borderColor="red"
    document.getElementById('count-err').style.color='red'
    document.getElementById('count-err').innerHTML="It must be less than 101 !!"
    }else{
        document.getElementById('count').style.borderColor=""
    document.getElementById('count-err').style.color=''
    document.getElementById('count-err').innerHTML=""
    }
}
show()
