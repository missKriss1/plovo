import React, { useState } from "react";
import { IUser, IUserMutation } from "../../types";

interface DishFormProps {
  addNewUser: (newUser: IUser) => void;
}

const DishForm: React.FC<DishFormProps> = ({ addNewUser }) => {
  const [newUser, setNewUser] = useState<IUserMutation>({
    name: "",
    email: "",
    online: false,
    role: "",
  });

  const ChangeUser = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setNewUser((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setNewUser({
        ...newUser,
        online: true,
      });
    } else {
      setNewUser({
        ...newUser,
        online: false,
      });
    }
  };

  const OnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      newUser.name.trim() !== "" &&
      newUser.email.trim() !== "" &&
      newUser.role !== ""
    ) {
      addNewUser({
        id: String(new Date()),
        ...newUser,
      });
      setNewUser({
        name: "",
        email: "",
        online: false,
        role: "",
      });
    } else {
      alert("Fill in the blanks");
    }
  };
  return (
    <div>
      <form onSubmit={OnSubmit}>
        <h3 className="text-center">Add new user</h3>

        <div className="form-group mb-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={newUser.name}
            onChange={ChangeUser}
            id="name"
            name="name"
            className="form-control"
          />
        </div>

        <div className="form-group mb-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={newUser.email}
            onChange={ChangeUser}
            id="email"
            name="email"
            className="form-control"
          />
        </div>

        <div className="mb-3 form-check">
          <label className="form-check-label">Online</label>
          <input
            type="checkbox"
            checked={newUser.online}
            onChange={onCheckboxChange}
            name="online"
            className="form-check-input"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Role</label>
          <select
            className="form-select"
            name="role"
            value={newUser.role}
            onChange={ChangeUser}
          >
            <option value="User">User</option>
            <option value="Editor">Editor</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        <button className="btn btn-primary">Add</button>
      </form>
    </div>
  );
};

export default DishForm;
