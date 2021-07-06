import React from "react";
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
    <div className="contenedorHome">
      <button onClick={logout} className="navButton">
        Logout
      </button>

      <div className="contenedorCartas">
        <div className="separador"></div>
        <div className="columna">
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
                  key={payload.description + payload.internalTracking}
                />
              );
            })
          ) : (
            <h2 className="Nopressed">Favor cargar los datos</h2>
          )}

          {data ? (
            true
          ) : (
            <button onClick={loadPayload} className="load">
              load data
            </button>
          )}
        </div>
        <div className="separador"></div>
      </div>
    </div>
  );
}

export default Home;
