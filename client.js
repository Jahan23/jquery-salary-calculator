//console.log('hello');
$(document).ready(onReady);

function onReady(){
    console.log('jquery is loaded');
    $('#submit').on('click', submitEmployee);
    $('#employeeList').on('click', '.deleteBtn', deleteItem);
    $('#monthlyTotal').on('click', '.deleteBtn', deleteItem);

function deleteItem(){
    console.log('in delete');
    $(this).parent().remove();
    // remove that person from the DOM;
}

//The application should have an input form that collects _employee first name, last name, ID number, job title, annual salary_.

let employeeArray = [];


function submitEmployee(){
    console.log('in submitEmployee');
    let newEmployee = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        idNumber: $('#idNumber').val(),
        jobTitle: $('#jobTitle').val(),
        annualSalary: $('#annualSalary').val(),
    }
    employeeArray.push(newEmployee);

    console.log('this the the array', employeeArray);
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
    // // setter
     //$('#wrapper').append('<button class="extraBtn">click me</button>');
    displayEmployee(employeeArray);

    let monthlySalary = 0;
    for(let i=0; i<employeeArray.length; i++){
      monthlySalary = monthlySalary + (employeeArray[i].annualSalary);
    }

    monthlySalary = monthlySalary / 12;
    
    $('#total').remove();
    if (monthlySalary > 20000){
      $('#monthlyTotal').append(`<p id="total" class="red-background">total: ${monthlySalary}</p>`)
    }else {
      $('#monthlyTotal').append(`<p id="total" class="green-background">total: ${monthlySalary}</p>`)
    }

    console.log(monthlySalary);

    displayEmployee();

}

 function displayEmployee(arrayParam){
    $('#employeeList').empty();
    console.log("in displayEmployee");
    for(let i = 0; i < employeeArray.length; i++){
        $('#employeeList').append(`
        <li>
            ${employeeArray[i].firstName} ${employeeArray[i].lastName}, ${employeeArray[i].idNumber}, ${employeeArray[i].jobTitle},
            ${employeeArray[i].annualSalary}
            <button class="deleteBtn">delete</button>
        </li>
        `)
    }
 }
}


