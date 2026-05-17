import { createContext, useContext, useState, useEffect } from "react";

const FinanceContext = createContext();

export function FinanceProvider({ children }) {

    const [budget, setBudget] = useState(() =>
        Number(localStorage.getItem("budget")) || 0
    );

    const [incomes, setIncomes] = useState(() => {
        const saved = localStorage.getItem("incomes");
        return saved ? JSON.parse(saved) : [];
    });

    const [expenses, setExpenses] = useState(() => {
        const saved = localStorage.getItem("expenses");
        return saved ? JSON.parse(saved) : [];
    });

    // Save to localStorage whenever data changes
    useEffect(() => {
        localStorage.setItem("incomes", JSON.stringify(incomes));
    }, [incomes]);
    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }, [expenses]);
    useEffect(() => {
        localStorage.setItem("budget", budget);
    }, [budget]);

    // ADD
    const addIncome = (entry) => {
        setIncomes((prev) => [...prev, { id: Date.now(), ...entry }]);
    };
    const addExpense = (entry) => {
        setExpenses((prev) => [...prev, { id: Date.now(), ...entry }]);
    };

    // DELETE
    const deleteIncome = (id) => {
        setIncomes((prev) => prev.filter((i) => i.id !== id));
    };
    const deleteExpense = (id) => {
        setExpenses((prev) => prev.filter((e) => e.id !== id));
    };

    // EDIT
    const editIncome = (id, updatedEntry) => {
        setIncomes((prev) =>
            prev.map((i) => (i.id === id ? { ...i, ...updatedEntry } : i)),
        );
    };
    const editExpense = (id, updatedEntry) => {
        setExpenses((prev) =>
            prev.map((e) => (e.id === id ? { ...e, ...updatedEntry } : e)),
        );
    };

    const totalIncome = incomes.reduce((sum, i) => sum + Number(i.amount), 0);
    const totalExpense = expenses.reduce((sum, e) => sum + Number(e.amount), 0);
    const balance = totalIncome - totalExpense;
    const clearAll = () => {
        setIncomes([]);
        setExpenses([]);
        localStorage.removeItem("expenses");
        localStorage.removeItem("incomes");
        localStorage.removeItem("budget");
    };

    // BUDGET
    const remainingBudget = Number(budget - totalExpense);
    const rawPercentage = budget > 0 ? (totalExpense / budget) * 100 : 0;
    const displayPercentage = Math.min(rawPercentage, 100).toFixed(1);

    const recentActivity = [...incomes.map(i => ({ ...i, type: 'income' })),
    ...expenses.map(e => ({ ...e, type: 'expense' }))]
        .sort((a, b) => b.id - a.id) // newest first (id is Date.now())
        .slice(0, 4);

    return (
        <FinanceContext.Provider
            value={{ recentActivity, rawPercentage, displayPercentage, budget, setBudget, remainingBudget, totalIncome, addIncome, incomes, expenses, totalExpense, addExpense, balance, clearAll, deleteIncome, deleteExpense, editIncome, editExpense, }}
        >
            {children}
        </FinanceContext.Provider>
    );
}
export const useFinance = () => useContext(FinanceContext);

// any function that calls setExpenses or setIncomes will automatically trigger the useEffect
// and sync to localStorage. You never have to manually call localStorage.setItem anywhere else.
