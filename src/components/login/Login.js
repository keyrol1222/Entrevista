import React from 'react'
import { useHistory } from "react-router-dom";

function Login(e) {
    const [user,setUser] = React.useState('');
  const [password,setPassword] = React.useState('');
  const [error,setError] = React.useState('');
  let history = useHistory();

  let contador = 3;
  const login = async (e) => {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "username": user,
      "password": password
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("/api/membership/login", requestOptions)
      .then(response => response.json())
      .then(result => {
       if(result.responseObject){
         //puede continuar
         
         localStorage.setItem('logged', true);
         history.push('/home'); 
       }
       else{
         //error en lso datoss de login 
        contador--;
        alert('Datos incorrectos' + contador)
        if(contador === 0){
          // no mas intentos
          history.push("/error");

        }
       }
      })
      .catch(error => console.log('error', error));

  }

    return (
        <div>
            <h1>Hola mundo</h1>
     <form onSubmit={login}>
     <label htmlFor="UsuarioInput">Usuario</label>
     <input type="text" placeholder="Usuario" id="UsuarioInput" 
     className="input" onChange={(e) => setUser(e.target.value)} maxLength="10" required/>

     <label htmlFor="ContraInput">Contraseña</label>
     <input type="password" placeholder="Contraseña" 
     id="ContraInput" className="input" onChange={(e) => setPassword(e.target.value)} 
     required pattern="([0-z])\w+"/>

     <button type="submit" value="submit">Login</button>
     </form>
        </div>
    )
}

export default Login
