import { useState, useEffect } from "react";
import "./Categories.css";

function Categories() {
  const [expenses, setExpenses] = useState(() =>
    JSON.parse(localStorage.getItem("expenses")) || []
  );

  useEffect(() => {
    const handleStorage = () => {
      setExpenses(
        JSON.parse(localStorage.getItem("expenses")) || []
      );
    };

    window.addEventListener("storage", handleStorage);

    return () =>
      window.removeEventListener(
        "storage",
        handleStorage
      );
  }, []);

  const categories = {};

  expenses.forEach((expense) => {
    const category = expense.category || "Others";

    categories[category] =
      (categories[category] || 0) +
      Number(expense.amount);
  });

  const categoryData = Object.entries(categories);

  const grandTotal = expenses.reduce(
    (sum, expense) =>
      sum + Number(expense.amount),
    0
  );

  return (
    <div className="categories-container">
      <div className="categories-header">
        <h2>Expense Categories</h2>
        <h3>Total: ₹{grandTotal}</h3>
      </div>

      {categoryData.length === 0 ? (
        <div className="empty-category">
          No expenses added yet.
        </div>
      ) : (
        <div className="categories-grid">
          {categoryData.map(([category, total]) => (
            <div
              className="category-card"
              key={category}
            >
              <div className="category-icon">
                📂
              </div>

              <div className="category-info">
                <h3>{category}</h3>
                <p>₹{total}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Categories;