import firebase from 'firebase/app';
import 'firebase/auth';
import { config } from './config';

const Firebase = firebase.initializeApp(config.firebase);

export const Providers = {
  github: new firebase.auth.GithubAuthProvider().addScope('repo'),
};

export const auth = firebase.auth();
export default Firebase;
