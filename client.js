//console.log('hello');
$(document).ready(onReady);

function onReady(){
    console.log('jquery is loaded');
    $('#submitButton').on('click', submitEmployee);
    // $('#hello').append('Welcome to my Page!');
    // $('#hello').addClass('red');
    // $('#submit').on('click', handleSubmit);
}


//The application should have an input form that collects _employee first name, last name, ID number, job title, annual salary_.

let employeeArray = [];

function addEmployee(){
    console.log('addEmployee');
    $( '#firstName' ).on( 'click', addFirstName );
    $( '#lastName' ).on( 'click', addLastName );
    $( '#idNumber' ).on( 'click', addIdNumber );
    $( '#jobTitle' ).on( 'click', addJobTitle );
    $('#annualSalary').on('click', addAnnualSalary);
  
    displayCount();
  
  
  }

function submitEmployee(){
    console.log('in submitEmployee');
    let newEmployee = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        idNumber: $('#idNumber').val(),
        jobTitle: $('#jobTitle').val(),
        annualSalary: $('#annualSalary').val()
    }
    employeeArray.push(newEmployee);
}