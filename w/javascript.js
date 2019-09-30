/*var formFields = document.querySelectorAll('input');
var student = {};
var studentBase = [];
console.log(formFields);

var fieldName = formFields[0].getAttribute('name');
console.log(fieldName);
student[fieldName] = formFields[0].value;

studentBase.push(student);
console.log(studentBase);
console.log(student);*/
var formFields = document.querySelectorAll('input');
console.log(formFields);

var student = {};
var studentBase = [];
var block=document.querySelector('#block');
var button = document.querySelector('#input_btn');
button.onclick = function (e) {
    e.preventDefault();
    block.classList.toggle('block1');
    for (var i = 0; i < formFields.length; i++) {
       
        var fieldName = formFields[i].getAttribute('name');
        student[fieldName] = formFields[i].value;
    }
    studentBase.push(student);
    var block= document.querySelector('#block');
    var fiel = document.createElement('div');
    for(var key in student)
    {
         fiel.innerHTML+=(student[key]);
          block.appendChild(fiel);
    }
    


}


 

  