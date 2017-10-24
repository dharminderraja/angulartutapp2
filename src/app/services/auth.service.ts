import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
@Injectable()
export class AuthService {

  constructor(
    public angularFireAuth:AngularFireAuth
  ) { }


  // login user using angularfire
  login(email:string, password:string){
    return new Promise((resolve,reject) => {
      this.angularFireAuth.auth.signInWithEmailAndPassword(email,password).then(userData => resolve(userData), error => reject(error));
    })
  }

  //check user authentication status
  getAuth(){
    return this.angularFireAuth.authState.map(auth => auth);
  }

  //logout user
  logout(){
    this.angularFireAuth.auth.signOut();
  }

  //Register new User
  register(email:string, password:string){
    return new Promise((resolve, reject) => {
      this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password).then(userData => resolve (userData),error => reject(error));
      });
  }

}
