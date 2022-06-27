import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { NewUserInterface } from './authTypes';

export const registerUser = (user: NewUserInterface) => {
  const { email, password } = user;
  return createUserWithEmailAndPassword(auth, email, password).then(
    (userCredential) => userCredential.user
  );
};
