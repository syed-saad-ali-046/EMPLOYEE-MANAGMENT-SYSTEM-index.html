let td=document.createElement("td");
let node=document.createTextNode("80"*"30"*"8");
td.appendChild(node);
let element=document.getElementById("t1",);
element.appendChild(td);
//2nd group
var tdi=document.createElement("td");
var nodi=document.createTextNode("450"*"30"*"6");
tdi.appendChild(nodi);
var elements=document.getElementById("t2",);
elements.appendChild(tdi);
//3group
var tdi=document.createElement("td");
var nodi=document.createTextNode("245"*"30"*"8");
tdi.appendChild(nodi);
var elements=document.getElementById("t3",);
elements.appendChild(tdi);
//4th group
var tdi=document.createElement("td");
var nodi=document.createTextNode("545"*"30"*"8");
tdi.appendChild(nodi);
var elements=document.getElementById("t4",);
elements.appendChild(tdi);
//5th group
var tdi=document.createElement("td");
var nodi=document.createTextNode("200"*"30"*"8");
tdi.appendChild(nodi);
var elements=document.getElementById("t5",);
elements.appendChild(tdi);
//6 group
var tdi=document.createElement("td");
var nodi=document.createTextNode("500"*"30"*"8");
tdi.appendChild(nodi);
var elements=document.getElementById("t6",);
elements.appendChild(tdi);
//7group
var tdi=document.createElement("td");
var nodi=document.createTextNode("700"*"30"*"8");
tdi.appendChild(nodi);
var elements=document.getElementById("t7",);
elements.appendChild(tdi);
//8group
var tdi=document.createElement("td");
var nodi=document.createTextNode("30"*"30"*"8");
tdi.appendChild(nodi);
var elements=document.getElementById("t8",);
elements.appendChild(tdi);
//9 group
var tdi=document.createElement("td");
var nodi=document.createTextNode("380"*"30"*"8");
tdi.appendChild(nodi);
var elements=document.getElementById("t9",);
elements.appendChild(tdi);
//10 group
var tdi=document.createElement("td");
var nodi=document.createTextNode("355"*"30"*"6");
tdi.appendChild(nodi);
var elements=document.getElementById("t10",);
elements.appendChild(tdi);
//total number
//slip generator

function calculate()
{
let emp_no=document.getElementById("no").value;
let emp_name=document.getElementById("empnm").value;
let de=document.getElementById("des").value;
let dep=document.getElementById("dp").value;
let expr=document.getElementById("exps").value;
let totwday=document.getElementById("tday").value;
let prsntday=document.getElementById("pd").value;
let ann_sal=document.getElementById("annualsal").value;
let day_of_ot=document.getElementById("ot").value;
let bank=document.getElementById("bnm").value;
let pay_date=document.getElementById("pdate").value;
let bank_acc=document.getElementById("bacnt").value;
let pf_acc=document.getElementById("pf").value;
let pay_month=document.getElementById("mdate").value;
let enopat=/^\d{1,10}$/;
let enmpat=/[A-Za-z].{5,}/;
//check for input entry
if(emp_no=="" || emp_name=="" || de=="" || dep=="" || expr=="" || totwday=="" || prsntday=="" || ann_sal=="" || day_of_ot=="" || bank=="" || pay_date=="" || bank_acc=="" || pf_acc=="" || pay_month=="")
{
alert("enter value");
}
else if(!emp_name.match(enmpat))
{
alert("enter atleast 6 charachter");
}
else if(!emp_no.match(enopat))
{
alert("enter only 10 digit");
}
else if(expr>40)
{
alert("enter experiance again");
}
else if(prsntday>26)
{
alert("present day must be less than 26");
}
else if(day_of_ot>30)
{
alert("over time days must be less than 30");
}
else if(ann_sal<100000)
{
alert("annual salary atleast 100000");
}
else
{
//displaying above 8 values to payslip.
document.getElementById("empid").innerHTML=emp_no;
document.getElementById("name").innerHTML=emp_name;
document.getElementById("designation").innerHTML=de;
document.getElementById("dep").innerHTML=dep;
document.getElementById("bankname").innerHTML=bank;
document.getElementById("pdt").innerHTML=pay_date;
document.getElementById("bano").innerHTML=bank_acc;
document.getElementById("pfano").innerHTML=pf_acc;
document.getElementById("paymonth").innerHTML=pay_month;
//caluculating basic salary
let ann_basic=ann_sal*0.5;
let basic=ann_basic/12;
document.getElementById("basicsal").innerHTML=basic.toFixed(2);
//calculating house rent
let hra=basic*0.4;
document.getElementById("hrent").innerHTML=hra.toFixed(2);
//display conveyance
let ann_conv=19200;
let mon_con=ann_conv/12;
document.getElementById("convey").innerHTML=mon_con;
//calculating overtime
let ot_wages=day_of_ot*800;
document.getElementById("otamt").innerHTML=ot_wages;
//medical insaurance
let ann_medins=6000;
let mon_medins=ann_medins/12;
document.getElementById("medallow").innerHTML=mon_medins;
//Special allowance
let ann_spec=8000;
let mon_spec=ann_spec/12;
document.getElementById("specallow").innerHTML=mon_spec;
//Food allowance
let ann_food=3000;
let mon_food=ann_food/12;
document.getElementById("foodallow").innerHTML=mon_food;
//calculating gross salary
let gross_income=basic+hra+mon_con+ot_wages+mon_medins+mon_spec+mon_food;
document.getElementById("grosssal").innerHTML=gross_income.toFixed(2);
//pf calculation
let employee_contr=basic*0.12;
let employer_contr=basic*0.0367;
let pf=employee_contr-employer_contr;
document.getElementById("pfamt").innerHTML=pf.toFixed(2);
//income tax calculation
let inc_text;
if(ann_sal<= 250000)
 {
 inc_txt=0;
 document.getElementById("itamt").innerHTML=inc_txt.toFixed(2);
 }
 else if(ann_sal>=250001 && ann_sal<=500000)
 {
 inc_txt=ann_sal*0.05/12;
 document.getElementById("itamt").innerHTML=inc_txt.toFixed(2);
 }
 else if(ann_sal>=500001 && ann_sal<=750000)
 {
 inc_txt=ann_sal*0.1/12;
 document.getElementById("itamt").innerHTML=inc_txt.toFixed(2);
 }
 else if(ann_sal>=750001 && ann_sal<=1000000)
 {
 inc_txt=ann_sal*0.15/12;
 document.getElementById("itamt").innerHTML=inc_txt.toFixed(2);
 }
 else if(ann_sal>=1000001 && ann_sal<=1250000)
 {
 inc_txt=ann_sal*0.2/12;
 document.getElementById("itamt").innerHTML=inc_txt.toFixed(2);
 }
 else if(ann_sal>=1250001 && ann_sal<=1500000)
 {
 inc_txt=ann_sal*0.25/12;
 document.getElementById("itamt").innerHTML=inc_txt.toFixed(2);
 }
 else
 {
 inc_txt=ann_sal*0.3/12;
 document.getElementById("itamt").innerHTML=inc_txt.toFixed(2);
 }
 //employee insurance
 let emp_ins=basic*0.005;
 document.getElementById("empins").innerHTML=emp_ins.toFixed(2);
 //leave deduction
 let leavday=totwday-prsntday;
 let leave_ded=basic/totwday*leavday;
 document.getElementById("lvded").innerHTML=leave_ded.toFixed(2);
 //total deduction
 let tot_ded=pf+inc_txt+emp_ins+leave_ded;
 document.getElementById("totded").innerHTML=tot_ded.toFixed(2);
 //net salary
 let net_income=gross_income-tot_ded;
 document.getElementById("netsal").innerHTML=net_income.toFixed(2);
 }
}
