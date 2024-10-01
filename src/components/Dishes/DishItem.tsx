import { IUser } from '../../types';
import * as React from 'react';

interface Props {
  user: IUser
}

const DishItem: React.FC <Props> = ({user}) => {
  return (
    <div>
      <div className="item mb-3 ms-5">
        <div className="row justify-content-between">
          <div className="col-12">
            <h5 className="item-name">{user.name}</h5>
            <p className="item-email">{user.email}</p>
            <p className="item-online">{user.online ? 'Online' : 'Offline'}</p>
            <p className="item-role">{user.role}</p>
          </div>
        </div>
        <hr/>
      </div>

    </div>
  );
};

export default DishItem;