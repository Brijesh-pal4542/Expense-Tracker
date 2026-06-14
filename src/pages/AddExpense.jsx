import { useEffect, useState } from "react";
import "./AddExpense.css";

function AddExpense() {

const [expenses, setExpenses] = useState(() => {
  return JSON.parse(localStorage.getItem("expenses")) || [];
});
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "Food",
    date: ""
  });

  /* Save Expenses */

  useEffect(() => {
    localStorage.setItem(
      "expenses",
      JSON.stringify(expenses)
    );
  }, [expenses]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !formData.title ||
      !formData.amount ||
      !formData.date
    ) {
      alert("Please fill all fields");
      return;
    }

    const newExpense = {
      id: Date.now(),
      title: formData.title,
      amount: Number(formData.amount),
      category: formData.category,
      date: formData.date
    };

    setExpenses([
      newExpense,
      ...expenses
    ]);

    setFormData({
      title: "",
      amount: "",
      category: "Food",
      date: ""
    });
  };

  const deleteExpense = (id) => {

    const updatedExpenses =
      expenses.filter(
        (expense) =>
          expense.id !== id
      );

    setExpenses(updatedExpenses);
  };

  return (
    <div className="add-expense-page">

      <h1>Add Expense</h1>

      <form
        className="expense-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="title"
          placeholder="Expense Title"
          value={formData.title}
          onChange={handleChange}
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Bills</option>
          <option>Entertainment</option>
          <option>Health</option>
        </select>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />

        <button type="submit">
          Add Expense
        </button>

      </form>

      <div className="expense-history">

        <h2>Expense History</h2>

        {expenses.length === 0 ? (

          <p>No expenses added yet.</p>

        ) : (

          expenses.map((expense) => (

            <div
              key={expense.id}
              className="expense-item"
            >

              <div>

                <h3>
                  {expense.title}
                </h3>

                <p>
                  {expense.category}
                </p>

                <small>
                  {expense.date}
                </small>

              </div>

              <div className="expense-right">

                <span>
                  ₹{expense.amount}
                </span>

                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteExpense(expense.id)
                  }
                >
                  Delete
                </button>

              </div>

            </div>

          ))

        )}

      </div>

    </div>
  );
}

export default AddExpense;