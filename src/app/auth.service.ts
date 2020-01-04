import {AngularFireAuth} from '@angular/fire/auth';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {firebase} from 'firebaseui-angular';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
  constructor(private angularFireAuth: AngularFireAuth) {
  }

  getFirebaseUser(): Observable<firebase.User | null> {
    return this.angularFireAuth.authState;
  }

  isAuthenticated(): Observable<boolean> {
    return this.getFirebaseUser()
      .pipe(map(
        (user) => {
          return !!user;
        }
      ));
  }

  login() {
  }

  logout(): Promise<void> {
    return this.angularFireAuth.auth.signOut();
  }
}
