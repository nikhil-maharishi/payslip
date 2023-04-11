let addBtn = document.getElementById('add_btn');
let dy_input = document.getElementById('dynamic_input');
let generate = document.getElementById('btn');
let earn_deduct_static = document.getElementById('EnD');
let static_form = document.getElementById('static_form');


let Earning = new Array();
let Deduction = new Array();
let Reimbursement = new Array();



addBtn.addEventListener('click', (e) => {


    let values = ['Select a value', 'Earning', 'Deduction', 'Reimbursement'];

    const earn_deduct = document.createElement('select');
    earn_deduct.setAttribute('type', 'select');
    earn_deduct.setAttribute('placeholder', 'Select a value');
    earn_deduct.id = 'earn_deduct_dy';

    for (const val of values) {
        var option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        earn_deduct.appendChild(option);
    }



    const Type = document.createElement('input');
    Type.setAttribute('type', 'text');
    Type.setAttribute('placeholder', 'Type');
    Type.id = 'dy_type';

    const amount = document.createElement('input');
    amount.setAttribute('type', 'text');
    amount.setAttribute('placeholder', 'Amount');
    amount.id = 'dy_amount'


    const flex = document.createElement('div');
    flex.className = "flex";
    flex.id = "flex";
    flex.setAttribute('style', 'display: flex; align-items: center; justify-content: space-around; margin-bottom:15px;');

    let remove_btn = document.createElement('input');
    remove_btn.setAttribute('type', 'button');
    remove_btn.setAttribute('value', 'Remove');
    remove_btn.setAttribute('style', 'background-color:rgb(238,160,50); border:none; color:white; border-radius:5px; padding:7px; padding-left:30px; padding-right:30px');
    remove_btn.id = "remove_btn";
    remove_btn.addEventListener('click', (e) => {
        remove_btn.parentElement.remove();
    })
    dy_input.appendChild(flex);
    flex.appendChild(earn_deduct);
    flex.appendChild(Type);
    flex.appendChild(amount);
    flex.appendChild(remove_btn);

    let dy_Type = document.getElementById('dy_type');
    let dy_amount = document.getElementById('dy_amount');
    let dy_earn_deduct = document.getElementById('earn_deduct_dy');


    dy_Type.value = type_static.value;
    dy_amount.value = amount_static.value;
    dy_earn_deduct.value = earn_deduct_static.value;



    if (earn_deduct_static.value == "Earning") {
        console.log('r')
        let myobj = {};
        myobj.type = type_static.value;
        myobj.amount = amount_static.value;
        Earning.push(myobj)
        // Earning.push(type_static.value, amount_static.value);

    } if (earn_deduct_static.value == "Deduction") {
        let myobj = {};
        myobj.type = type_static.value;
        myobj.amount = amount_static.value;
        Deduction.push(myobj)

        // Deduction.push(type_static.value, amount_static.value);

    } if (earn_deduct_static.value == "Reimbursement") {
        let myobj = {};
        myobj.type = type_static.value;
        myobj.amount = amount_static.value;
        Reimbursement.push(myobj)

        // Reimbursement.push(type_static.value, amount_static.value);

    }

    type_static.value = "";
    amount_static.value = "";
    earn_deduct_static.value = "";

    earn_deduct.id = "";
    Type.id = "";
    amount.id = "";

    console.log(Earning.length, Deduction.length, Reimbursement.length)


})

let emp_id = document.getElementById('emp_id');
let department = document.getElementById('department');
let designation = document.getElementById('designation');
let username = document.getElementById('name');
let salary_slip = document.getElementById('salary_slip');
let date = document.getElementById('date');
let month = document.getElementById('month');
let earning_table = document.getElementById('earning');
let deduction_table = document.getElementById('deduction');
let Reimbursement_table = document.getElementById('reimbursement');
let type_static = document.getElementById('type');
let amount_static = document.getElementById('amount');
let gross_earning = document.getElementById('gross_earning');
let total_deduction = document.getElementById('total_deduction');
let total_reimbursement = document.getElementById('total_reimbursement');
let net_salary = document.getElementById('net_salary');


generate.addEventListener('click', (e) => {
    console.log('d');
    emp_id.innerHTML = document.getElementById('emp_id_input').value;
    department.innerHTML = document.getElementById('department_input').value;
    designation.innerHTML = document.getElementById('designation_input').value;
    username.innerHTML = document.getElementById('name_input').value;
    salary_slip.innerHTML = document.getElementById('salary_slip_input').value;
    date.innerHTML = document.getElementById('date_input').value;
    month.innerHTML = document.getElementById('month_input').value;

    if (earning_table) {
        for (var i = 0; i < Earning.length; i++) {
            let row = earning_table.insertRow();

            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);

            cell1.innerHTML = Earning[i]['type'];
            cell2.innerHTML = Earning[i]['amount'];

            cell1.setAttribute('style', 'padding: 8px;');
            cell2.setAttribute('style', 'padding: 8px; text-align: right;');
            console.log();

        }

    }
    if (deduction_table) {
        for (var i = 0; i < Deduction.length; i++) {
            let row = deduction_table.insertRow();

            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);

            cell1.innerHTML = Deduction[i]['type'];
            cell2.innerHTML = Deduction[i]['amount'];

            cell1.setAttribute('style', 'padding: 8px;');
            cell2.setAttribute('style', 'padding: 8px; text-align: right;');

        }

    }
    if (Reimbursement_table) {
        for (var i = 0; i < Reimbursement.length; i++) {
            let row = Reimbursement_table.insertRow();

            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);

            cell1.innerHTML = Reimbursement[i]['type'];
            cell2.innerHTML = Reimbursement[i]['amount'];

            cell1.setAttribute('style', 'padding: 8px;');
            cell2.setAttribute('style', 'padding: 8px; text-align: right;');

        }

    }

    gross_earning.innerHTML = addValues(Earning, 'amount');
    total_deduction.innerHTML = addValues(Deduction, 'amount');
    total_reimbursement.innerHTML = addValues(Reimbursement, 'amount');
    let g_earn = gross_earning.innerHTML;
     let t_deduct = total_deduction.innerHTML;
     let t_reimburse = total_reimbursement.innerHTML;
    let n_sal = (g_earn - t_deduct) + t_reimburse;
    net_salary.innerHTML = n_sal
    console.log(g_earn,t_deduct,t_reimburse)



})

document.getElementById("doPrint").addEventListener("click", function () {
    var printContents = document.getElementById('printDiv').innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
});

function addValues(input, field) {
    var output = [];
    for (var i = 0; i < input.length; ++i) {
        output.push(Number(input[i][field]));
    }
    var sum = output.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    );
    return sum;
}

