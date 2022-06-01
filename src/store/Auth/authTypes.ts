export interface UserInterface {
  email: string;
  password: string;
}

export interface ActionInterface {
  type: string;
  payload: UserInterface;
}
