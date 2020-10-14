import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
const GET_URL="https://cs251-outlab-6.herokuapp.com/initial_values/";
const POST_URL="https://cs251-outlab-6.herokuapp.com/add_new_feedback/";
export interface submit{
  name: string,
   email: string,
  feedback: string,
  comment: string
}
@Injectable()
export class FormService {

  constructor(private http: HttpClient)
   { }

  private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // Return an observable with a user-facing error message.
  return throwError(
    'Something bad happened; please try again later.');
}

get(): Observable<submit>{
  return this.http.get<submit>(GET_URL,{responseType:'json'}).pipe(catchError(this.handleError)
    );
}

post(Data): Observable<submit>{
  return this.http.post<submit>(POST_URL,Data)
    .pipe(
      catchError(this.handleError)
    );
}

}