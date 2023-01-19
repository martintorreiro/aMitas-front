import { v4 } from "uuid";

export const Concepts = ({ users }) => {
 
  return (
    <ul className="concepts-list">
      {users.map((user) => {
        console.log(user);
        const concepts = user.concepts.map((concept) => {
          
          return concept ? (
            <li key={v4()}>
              <div>
                <h4>{concept.concept}</h4>
                <p>
                  Ha sido pagado por <strong>{user.name}</strong>
                </p>
              </div>
              <div>
                <h4>{concept.amount} $</h4>
              </div>
            </li>
          ) : null;
        });
        
        return concepts;
      })}
    </ul>
  );
};
