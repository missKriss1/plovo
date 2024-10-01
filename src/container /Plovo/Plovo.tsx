import DishForm from "../../components/DishForm/DishForm.tsx";
import Dishes from "../../components/Dishes/Dishes.tsx";
import { useState } from "react";
import { IUser } from "../../types";

const Plovo = () => {
  const [users, setUsers] = useState<IUser[]>([
    {
      id: "1",
      name: "Kristina",
      email: "kris@gmail.com",
      online: true,
      role: "Admin",
    },
    {
      id: "2",
      name: "John",
      email: "John@gmail.com",
      online: true,
      role: "User",
    },
    {
      id: "2",
      name: "Jane",
      email: "Jane@gmail.com",
      online: false,
      role: "Editor",
    },
  ]);

  const addNewUser = (newUser: IUser) => {
    setUsers((prevState) => [...prevState, newUser]);
  };
  return (
    <div>
      <main className="container mt-5">
        <div className="row">
          <div className="col mb-2">
            <DishForm addNewUser={addNewUser} />
          </div>
          <div className="col mb-2">
            <Dishes users={users} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Plovo;
