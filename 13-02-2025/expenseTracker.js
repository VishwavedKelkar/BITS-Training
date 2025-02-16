var expenses = [];
var currId = 0;
var expenseFormEle = document.getElementById('expense-form');
var expenseListEle = document.getElementById('expense-list');
if (expenseFormEle && expenseListEle) {
    expenseFormEle.addEventListener('submit', function (e) {
        e.preventDefault();
        var amount = document.getElementById('amount').value;
        var category = document.getElementById('category').value;
        var date = document.getElementById('date').value;
        var description = document.getElementById('description').value;
        var exp1 = {
            id: currId++,
            amount: parseFloat(amount),
            category: category,
            date: new Date(date),
            description: description
        };
        expenses.push(exp1);
        console.log(exp1);
        updateListItems();
        saveExpenses();
        document.getElementById('amount').value = '';
        document.getElementById('category').value = '';
        document.getElementById('date').value = '';
        document.getElementById('description').value = '';
        document.getElementById('description').focus();
    });
    var filterCategoryEle = document.getElementById('filter-category');
    if (filterCategoryEle) {
        filterCategoryEle.addEventListener('change', function () {
            updateListItems();
        });
    }
}
function updateListItems() {
    var _a;
    expenseListEle.innerHTML = '';
    var selectedCategory = ((_a = document.getElementById('filter-category')) === null || _a === void 0 ? void 0 : _a.value) || '';
    var filteredExpenses = selectedCategory ? expenses.filter(function (exp) { return exp.category === selectedCategory; }) : expenses;
    console.log("Updating List Items with Expenses:", filteredExpenses);
    filteredExpenses.forEach(function (exp) {
        var li = document.createElement('li');
        li.innerHTML = "\n            <span class=\"label\">Description:</span> <span class=\"value\">".concat(exp.description, "</span> \n            <span class=\"label\">Amount:</span> <span class=\"value\">").concat(exp.amount, "</span> \n            <span class=\"label\">Category:</span> <span class=\"value\">").concat(exp.category, "</span> \n            <span class=\"label\">Date:</span> <span class=\"value\">").concat(exp.date.toLocaleDateString(), "</span>\n            <button class=\"delete-button\" onclick=\"deleteExpense(").concat(exp.id, ")\">Delete</button>\n        ");
        expenseListEle.appendChild(li);
    });
}
function deleteExpense(id) {
    expenses = expenses.filter(function (exp) { return exp.id !== id; });
    updateListItems();
    saveExpenses();
}
function saveExpenses() {
    localStorage.setItem('expenses', JSON.stringify(expenses));
}
function loadExpenses() {
    var saved = localStorage.getItem('expenses');
    if (saved) {
        expenses = JSON.parse(saved, function (key, value) {
            if (key === 'date')
                return new Date(value);
            return value;
        });
        updateListItems();
    }
}
loadExpenses();
