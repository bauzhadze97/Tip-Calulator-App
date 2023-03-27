const bill = document.getElementById('bill').value;
const customTip = document.getElementById('custom').value;
const people = document.getElementById('numberpeople').value;
const button = document.querySelectorAll('.tip button').value;
const tipvalue = document.getElementById('tipvalue').value;

button.forEach((button) => {
    button.addEventlistener("click", (e) => {
        let tipvalue = e.target.innerText;
        tipvalue = tipvalue.substr(0, tipvalue.lenght -1);
        if (bill.value === "") return;
        if (people.value === "") people.value = 1;
        calculateTip(
            parseFloat(bill.value),
            parseInt(tipvalue),
            parseInt(people.value)
        );
    });
});