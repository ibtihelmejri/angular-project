import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

import { User } from '../../app/user-management/user.model';

@Injectable({ providedIn: 'root' })
export class UsersService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  fetchUsers() {
    return this.http
      .get<{ [key: string]: User }>(
        'https://reqres.in/api/users?page=1'
      )
      .pipe(
        map(responseData => {
            console.log('responseData',responseData);
            
          const usersArray: User[] = [];
          usersArray.push(responseData['data'])
        //   for (const key in responseData) {
        //     if (responseData.hasOwnProperty(key)) {
        //       usersArray.push({ ...responseData[key], id: key });
        //     }
        //   }
          return usersArray;
        }),
        catchError(errorRes => {
          // Send to analytics server
          return throwError(errorRes);
        })
      );
  }

 

}
