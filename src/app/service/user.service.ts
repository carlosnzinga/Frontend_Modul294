import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import { User } from '../data/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly entityURL = 'Member';

  constructor(private http: HttpClient) {
  }

  public getList(): Observable<User[]> {
    return this.http.get<User[]>(environment.backendBaseUrl + this.entityURL);
  }



}
