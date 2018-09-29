import { URL } from './config';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError, retry, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  post(payload: any, url: URL): Observable<any> {
    return this.http.post(url, payload).pipe(catchError(this.handleError));
  }

  // URL to receive any query params, if needed.
  get(url: string): Observable<any> {
    return this.http.get(url).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  list(url: URL): Observable<any> {
    return this.http.get(url).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  put(payload: any, url: URL) {
    console.log('payloaf ' + payload);
    return this.http.put(url, payload, httpOptions).pipe(
      tap(
        data => {
          // TODO: check status of the call
        },
        error => this.handleError
      )
    );
  }

  delete(url: URL) {
    return this.http.delete(url, httpOptions).pipe(
      tap(
        data => {
          // TODO: check status of the call
        },
        error => this.handleError
      )
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
