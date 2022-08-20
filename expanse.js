function getId(data) {
    return document.getElementById(data);
}
function getValue(data) {
    const money = parseFloat(getId(data).value);
    const mone = money.toFixed(2);
    return parseFloat(mone);
}
function setValue(data, val) {
    getId(data).value = val;
}
function getText(data) {
    return getId(data).innerText;
}
function setText(data, val) {
    getId(data).innerText = val;
}
getId('calculate').addEventListener('click', function () {
    const total = getValue("food") + getValue("rent") + getValue("cloth");
    const income = getValue("income");
    setText("total", total);
    setText("balance", income - total);
    setText("remaining-balance", income - total);

})
getId('save-btn').addEventListener('click', function () {
    const income = getValue("income");
    const save = getValue("save");
    const saving = (income * save) / 100;
    const savings = saving.toFixed(2);
    const balanc = parseFloat(getText("balance"));
    const balance = balanc.toFixed(2);
    setText("save-balance", savings);
    setText("remaining-balance", balance - savings);

})