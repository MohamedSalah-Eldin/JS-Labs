var y = document.getElementById('Stu_Rec');
y.addEventListener('click', Stu_data);
function Stu_data()
{
    fetch('./StudentsRecords.json')
    .then((response) => response.json())
    .then(data => {return data.Student.map(item  => list.appendChild(new Option(item .firstName+' '+item .lastName, item .id)).cloneNode(true));})
       //console.log(`${data.Student[0].firstName} ${data.Student[0].lastName}`);
}

let selectedd = document.getElementById("list");
selectedd.onchange=function()
{
    document.getElementById("output").innerHTML = "";
    let selected_id=selectedd.value;
fetch('./StudentsRecords.json').then(response => response.json())
.then(data => {
  output.innerHTML += data.Student[selected_id-1].firstName + "<br>";
  output.innerHTML += data.Student[selected_id-1].lastName + "<br>";
  output.innerHTML += data.Student[selected_id-1].Level + "<br>";
  output.innerHTML += data.Student[selected_id-1].Grade;
})
}


var x = document.getElementById('Reset');
x.addEventListener('click', Reset_Records);
function Reset_Records() 
{
        var i, L = list.options.length - 1;
        for(i = L; i >= 0; i--) {
            list.remove(i);
        }
        document.getElementById("output").innerHTML = "";   
}
