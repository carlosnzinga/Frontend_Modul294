import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import { Department } from '../data/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  readonly backendUrl = 'department';

  constructor(private http: HttpClient) {
  }

  public getList(): Observable<Department[]> {
    return this.http.get<Department[]>(environment.backendBaseUrl + this.backendUrl);
  }




}
