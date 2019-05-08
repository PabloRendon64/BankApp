import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http: HttpClient) {
  }

  private appendHeaders() {
    let header = new HttpHeaders({ 'Content-Type': 'application/json'});
    return header;
  }

  Post(url: string, body: any) {
    return this.http.post(url, body, { headers: this.appendHeaders() });
  }

  Get(url: string, params?) {
    return this.http.get(url, { headers : this.appendHeaders(), params: params } );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
   public handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      return of(result as T);
    };
  }

}
