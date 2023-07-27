var Name = document.querySelector('#name');
var URL = document.querySelector('#url');
var Submit = document.querySelector('#submit');
var container;
if(localStorage.getItem('listURL') != null)
{
    container = JSON.parse(localStorage.getItem('listURL', container));
    displayURL()
}
else{
    container = [];
}
function createURL()
{
   let checkName = document.querySelector('#checkName');
   let checkURL = document.querySelector('#checkURL');
    console.log(checkName , checkURL);
    if(Name.value == ''){
        checkName.innerHTML = 'Name is required';
        checkName.classList.replace('d-none','d-block');
        Name.focus();
    }
    else if(URL.value == '')
    {
        checkURL.innerHTML = 'Url Field is required';
        checkURL.classList.replace('d-none','d-block');
        URL.focus();
    }
    else{
    let resultURL = {
        name: Name.value,
        url:URL.value,
    }
    container.push(resultURL);
    Name.value = '';
    URL.value = '';
    checkName.classList.replace('d-block','d-none');
    checkURL.classList.replace('d-block','d-none');
    }
    localStorage.setItem('listURL', JSON.stringify(container));
    displayURL();
}
Submit.addEventListener('click',function(){ createURL() });
function displayURL()
{
    let cartona='';
    for(let i=0;i<container.length;i++)
    {
        cartona+=`<div class="result py-5">
        <div class="p-3 d-flex align-items-center justify-content-between w-50 my-1">
        <span class="me-auto fw-bold">${container[i].name}</span>
        <div>
        <a href="${container[i].url}" class="btn btn-outline-info m-auto me-2" target ='_blank' id="visit">Visit</a>
        <button class="btn btn-outline-danger m-auto " onclick="deleteURL(${i})" id="delete">Delete</button>
        </div>
        </div>
        </div>`;
    }
    document.querySelector('#result').innerHTML = cartona;
}
function deleteURL(i)
{
    container.splice(i,1);
    localStorage.setItem('listURL', JSON.stringify(container));
    displayURL()
}