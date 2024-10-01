import { IUser } from "../../types";
import React from "react";
import DishItem from "./DishItem.tsx";

interface Props {
  users: IUser[];
}

const Dishes: React.FC<Props> = ({ users }) => {
  return (
    users && (
      <>
        <h3 className="text-center">New users</h3>
        {users.map((user) => (
          <DishItem key={user.id} user={user} />
        ))}
      </>
    )
  );
};

export default Dishes;
