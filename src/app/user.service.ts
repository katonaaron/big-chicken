import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';
import {User} from './user.model';
import {flatMap, mergeAll} from 'rxjs/operators';
import {from, Observable, of} from 'rxjs';
import {environment} from '../environments/environment';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: Observable<User>;
  url = environment.ApiUrl + 'users';

  constructor(private http: HttpClient,
              private authService: AuthService,
              private tokenService: TokenService) {
    this.subscribeUser();
  }

  public subscribeUser(): void {
    this.user = this.authService.getFirebaseUser()
      .pipe(flatMap(
        (user) => {
          if (user) {
            return from(
              user.getIdToken()
                .then(
                  (token) => {
                    return this.getUserByFirebaseToken(token);
                  }
                )
            )
              .pipe(mergeAll());
          } else {
            return of<User>(null);
          }
        }
      ));
  }

  public getUserById(id: number): Observable<User> {
    return this.http
      .get<User>(this.url + '/' + id);
  }

  public getUserByFirebaseToken(token: string): Observable<User> {
    return this.tokenService
      .createAndGetUserIdFromFirebaseToken(token)
      .pipe(flatMap(
        (id) => {
          return this.getUserById(id);
        }
      ));
  }

}
