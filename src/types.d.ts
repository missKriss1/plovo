export interface IUser {
  id: string;
  name: string;
  email: string;
  online: boolean;
  role: string;
}

export interface IUserMutation {
  name: string;
  email: string;
  online: boolean;
  role: string;
}