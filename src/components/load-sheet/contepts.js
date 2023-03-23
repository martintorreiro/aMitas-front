import { v4 } from "uuid";

export const Concepts = ({ expenses }) => {
 
  return (
    <ul className="concepts-list"> 
 
      {expenses.map((expense) => {
        console.log(expense);
          
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
        })
      }
    </ul>
  );
};

export default Concepts;
