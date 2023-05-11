import { v4 } from "uuid";

export const Expenses = ({ expenses, balances }) => {
  return (
    <>
      {!balances && (
        <ul className="concepts-list">
          {expenses.map((expense) => {
            return (
              <li key={v4()}>
                <div>
                  <h4>{expense.concept}</h4>
                  <p>
                    Ha sido pagado por <strong>{expense.name}</strong>
                  </p>
                </div>
                <div>
                  <h4>{expense.amount} $</h4>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Expenses;
