export interface NewUserInterface {
  userName: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface ActionInterface {
  type: string;
  payload: NewUserInterface;
}
