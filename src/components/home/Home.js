import React from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import List from "../listado/List";
import "./css/home.css";

function Home(props) {
  const logged = localStorage.getItem("logged");
  const [data, setData] = React.useState();
  let history = useHistory();

  const loadPayload = () => {
    if (logged) {
      fetch(`/api/packages/getPending?username={username}`)
        .then((response) => response.json())
        .then((result) => {
          setData(result.responseObject);
          console.log(data);
        })
        .catch((error) => console.log("error", error));
    }
  };

  const logout = () => {
    localStorage.removeItem("logged");
    history.push("/");
  };
  return (
    <div>
      <button onClick={logout}>Logout</button>
      <button onClick={loadPayload}>load data</button>

      <div className="contenedor">
        {data ? (
          data.map((payload) => {
            return (
              <List
                description={payload.description}
                weight={payload.weight}
                priceToPay={payload.priceToPay}
                supplier={payload.supplier}
                courier={payload.courier}
                courierTracking={payload.courierTracking}
                internalTracking={payload.internalTracking}
              />
            );
          })
        ) : (
          <h2>no se puede presentar los datos</h2>
        )}
      </div>
    </div>
  );
}

export default Home;
