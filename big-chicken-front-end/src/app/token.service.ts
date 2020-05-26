import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  url = environment.ApiUrl + 'token';

  constructor(private http: HttpClient) {
  }

  public createAndGetUserIdFromFirebaseToken(token: string): Observable<number> {
    return this.http
      .post<{ id: number }>(this.url, {token})
      .pipe(map(
        (result) => {
          return result.id;
        }
      ));
  }

}
