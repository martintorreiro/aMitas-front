import { useEffect, useState } from "react";
import { getSharedListService } from "../service";
import { v4 } from "uuid";
import { Link } from "react-router-dom";
import "./myProfile.css";

const MyProfile = ({ userId }) => {
  const [sharedList, setSharedList] = useState([]);
  console.log("adasdads", sharedList);
  const getSharedList = async () => {
    try {
      const resSharedList = await getSharedListService(userId);
      setSharedList(resSharedList);
      console.log("1", resSharedList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSharedList();
  }, []);

  return (
    <>
      <section>
        <ul className="shared-list">
          <li>
            <Link to="/hoja-de-calculo/example">
              <div>
                <h3>Viaje a Japón</h3>
                <span>Una hoja de ejemplo</span>
              </div>
            </Link>
          </li>
          {sharedList.map((sheet) => (
            <li key={v4()}>
              <Link to={`/hoja-de-calculo/${sheet.urlCode}`}>
                <div>
                  <h3>{sheet.title}</h3>
                  <span>{sheet.description}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default MyProfile;
