import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { UserInterface } from './authTypes';

export const registerUser = (user: UserInterface) => {
  const { email, password } = user;
  return createUserWithEmailAndPassword(auth, email, password).then(
    (userCredential) => userCredential.user
  );
};
