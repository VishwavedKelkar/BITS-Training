interface Expense {
    id: number;
    amount: number;
    category: string;
    date: Date;
    description: string;
}

let expenses: Expense[] = [];
let currId: number = 0;

const expenseFormEle = document.getElementById('expense-form') as HTMLFormElement;
const expenseListEle = document.getElementById('expense-list') as HTMLUListElement;

if (expenseFormEle && expenseListEle) {
    expenseFormEle.addEventListener('submit', (e) => {
        e.preventDefault();
        const amount = (document.getElementById('amount') as HTMLInputElement).value;
        const category = (document.getElementById('category') as HTMLInputElement).value;
        const date = (document.getElementById('date') as HTMLInputElement).value;
        const description = (document.getElementById('description') as HTMLInputElement).value;

        const exp1: Expense = {
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

        (document.getElementById('amount') as HTMLInputElement).value = '';
        (document.getElementById('category') as HTMLInputElement).value = '';
        (document.getElementById('date') as HTMLInputElement).value = '';
        (document.getElementById('description') as HTMLInputElement).value = '';

        (document.getElementById('description') as HTMLInputElement).focus();
    });

    const filterCategoryEle = document.getElementById('filter-category') as HTMLSelectElement;
    if (filterCategoryEle) {
        filterCategoryEle.addEventListener('change', () => {
            updateListItems();
        });
    }
}

function updateListItems(): void {
    expenseListEle.innerHTML = '';
    const selectedCategory = (document.getElementById('filter-category') as HTMLSelectElement)?.value || '';
    const filteredExpenses = selectedCategory ? expenses.filter(exp => exp.category === selectedCategory) : expenses;

    console.log("Updating List Items with Expenses:", filteredExpenses);

    filteredExpenses.forEach(exp => {
        const li = document.createElement('li');

        li.innerHTML = `
            <span class="label">Description:</span> <span class="value">${exp.description}</span> 
            <span class="label">Amount:</span> <span class="value">${exp.amount}</span> 
            <span class="label">Category:</span> <span class="value">${exp.category}</span> 
            <span class="label">Date:</span> <span class="value">${exp.date.toLocaleDateString()}</span>
            <button class="delete-button" onclick="deleteExpense(${exp.id})">Delete</button>
        `;

        expenseListEle.appendChild(li);
    });
}

function deleteExpense(id: number): void {
    expenses = expenses.filter(exp => exp.id !== id);
    updateListItems();
    saveExpenses();
}

function saveExpenses(): void {
    localStorage.setItem('expenses', JSON.stringify(expenses));
}

function loadExpenses(): void {
    const saved = localStorage.getItem('expenses');
    if (saved) {
        expenses = JSON.parse(saved, (key, value) => {
            if (key === 'date') return new Date(value);
            return value;
        });
        updateListItems();
    }
}

loadExpenses();


