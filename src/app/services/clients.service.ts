import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
//models
import { Client } from '../models/client.model';
//Shared Service
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private _http: HttpClientService) {

  }

  public getClients(): Observable<Client[]> {
    const url = environment.urlServiceClient;
    return this._http.Get(url).pipe(
      tap( (clients: Client[]) => clients ),
      catchError(this._http.handleError<Client[]>(''))
    );
  }

  public putClient(body: Client): Observable<Client> {
    const url = environment.urlServiceClient;
    return this._http.Post(url, body).pipe(
      tap( (client: Client) => client ),
      catchError(this._http.handleError<Client>(''))
    );
  }

  // public getClients(): Observable<any> {
  //   const url = environment.urlServiceClient;
  //   return this._http.Get(url).pipe(
  //     map( (clients: AngularFireList<Client>) => clients.snapshotChanges().pipe(map(c => c)) ),
  //     catchError(this._http.handleError<any>(''))
  //   );
  // }

}
