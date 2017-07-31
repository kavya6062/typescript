function EmpDetl (empID:number,empName:string, emailID?:string){
     var empInfo ={
         empID:empID,
         empName:empName,
         emailId:null
     }
     if(emailID != undefined){
         empInfo.emailId = emailID;
     }

     return empInfo;
}

var emp1 = EmpDetl(1001, "Vishal");
console.log(emp1);

var emp2 = EmpDetl(1001, "Ram" , "ram@gmail.com" );
console.log(emp2);


