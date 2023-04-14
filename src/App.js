import React, { useEffect, useState } from "react";
import "./App.css";
import Users from "./Components/Users";
import Form from "./Components/Form";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [state, setState] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      await axios({
        url: `https://jsonplaceholder.typicode.com/users`,
        method: "get",
      }).then((res) => {
        setUsers(res.data);
      });
    })();
  }, []);

  return (
    <div className="App">
      <ToastContainer 
        theme="dark"
      />
      {state === 0 ? (
        <Users setState={setState} users={users} setUsers={setUsers} />
      ) : (
        <Form setState={setState} setUsers={setUsers} users={users} />
      )}
    </div>
  );
};

export default App;
