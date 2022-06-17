function Employee(name, surname, base_salary, exp){
    this.name = name;
    this.surname = surname;
    this.base_salary = base_salary;
    this.exp = exp;
}

Employee.prototype.countedSalary = function(exp){
       let countedSalary = this.base_salary;
    
    if (exp > 2 && exp <=5){
        this.countedSalary +=  200;
    }
    if (exp > 5){
        this.countedSalary  = this.countedSalary * 1.2 + 500;
    }
    return countedSalary;
}

function Developer(name, surname, base_salary, exp){
  Employee.call(this, name, surname, base_salary, exp);
}

function Designer(name, surname, base_salary, exp, effectivity){
    this.effectivity = effectivity;
    Employee.call(this,name, surname, base_salary, exp);  
}

Designer.prototype.countedSalary = function(){
    let countedSalary = Employee.prototype.countedSalary.call(this);
    this.countedSalary *= this.effectivity;
}

let count_des = count_dev = 0;


Manager.prototype.countedSalary = function(){
    let countedSalary = Employee.prototype.countedSalary.call(this);
    if (Managers.team.length > 5 && Managers.team.length <=10){
        countedSalary += 200;
    }
    if (team.length > 10){
        countedSalary += 300;
    }
    for (i=0;i<team.length;i++){
        if (typeof (this.team) == Designer){
           count_des++;
        }
    }
    for (i=0;i<team.length;i++){
        if (typeof(this.team) === Developer){
           count_dev++;
        }
    }
    if (count_dev > count_des){
        countedSalary =  countedSalary * 1.1;
    }
    return countedSalary;
}

function Manager (name, surname, base_salary, exp, team){
    this.team = team;
    Employee.call(this, name, surname, base_salary, exp);
}
function Department (){
    this.Managers = [];

}
Department.prototype.giveSalary = function(){

  this.Managers.forEach(function (Manager){Manager.giveSalary(); Manager.team.forEach(function(workers){workers.giveSalary()}) }) 
}

Employee.prototype.giveSalary = function(){
   
   return  console.log(`${this.name} ${this.surname} отримав(-ла) ${this.countedSalary()} шекєлєй`);
    }
  


Designer.prototype = Object.create(Employee.prototype);
Manager.prototype = Object.create(Employee.prototype);
Developer.prototype = Object.create(Employee.prototype);

let Pasha = new Designer("Павло","Лебега", 2000, 4, 1);
let Miko = new Developer("Миколай","Петрович", 2400, 1);
let emp1 = new Developer("Микита","Вікторович", 2100, 4);
let Misha = new Designer("Міша","Павленко", 2000, 2, 0.4);
let Nastya = new Designer("Настя","Янович", 2000, 3, 1);
let man = new Manager("Катерина", "Білокур", 7800, 6, [Pasha,Miko,Misha,Nastya,emp1]);
let department = new Department();
department.Managers.push(man);
department.giveSalary();