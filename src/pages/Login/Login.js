import React, { useState } from "react";
import "./Login.style.css";
import { useStateValue } from "../../ContextApi/StateProvider";
import LoginCompo from "../../components/LoginCompo/LoginCompo";
import RegisterCompo from "../../components/ResisterCompo/ResisterCompo";

const Login = () => {
  const [{ user }, dispatch] = useStateValue();

  const [register, setRegister] = useState(false);

  return (
    <div>
      {register ? (
        <RegisterCompo
          user={user}
          dispatch={dispatch}
          setRegister={setRegister}
        />
      ) : (
        <LoginCompo user={user} dispatch={dispatch} setRegister={setRegister} />
      )}
    </div>
  );
};

export default Login;
