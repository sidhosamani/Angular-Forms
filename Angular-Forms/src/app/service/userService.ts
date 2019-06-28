import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable()
export class UserService{
    
    constructor(private http: HttpClient){}

    listUser(): Observable<any>{
        return this.http.get("http://localhost:8000/list").pipe(catchError(this.handleError))
    }

    private handleError(error: Response): Observable<any> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return throwError(error || 'Server error');
    }
}