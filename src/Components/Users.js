import React, { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

const Input = styled.input`
  width: 75%;
`;

const Users = ({ users, setState, setUsers }) => {
  const [search, setSearch] = useState("");
  const handleRemove = (id) => {
    const newUsers = users.filter((user) => id !== user.id);
    setUsers(newUsers);
    toast.success("User removed");
  };
  return (
    <div className="users_root">
      <div className="users_list">
        <div className="search-bar">
          <Input
            type="text"
            placeholder="search here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => setState(1)}>+ Add user</button>
        </div>
        <div className="users_main">
          <table className="users_table">
            <thead className="users_thead">
              <tr className="users_tr">
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone No.</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="users_tbody">
              {users &&
                users.length > 0 &&
                users
                  .filter(
                    (user) =>
                      String(user.name).toLowerCase().includes(search) ||
                      String(user.email).toLowerCase().includes(search)
                  )
                  .map((user, i) => (
                    <tr className="users_tr" key={user.id}>
                      <td>{i + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td
                        className="removeSpan"
                        style={{ color: "red" }}
                        onClick={() => handleRemove(user.id)}
                      >
                        <span>Remove</span>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
