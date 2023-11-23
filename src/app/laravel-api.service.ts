import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

interface Utilisateur {
  name: string;
  id: number;
  delay: number;
  message: string;
}

interface ApiRequest {
  user: string;
  delay: number;
}

@Injectable({
  providedIn: 'root'
})
export class LaravelApiService {

  private _reponses = new BehaviorSubject<Utilisateur[]>([]);
  private dataStore: { utilisateurs: Utilisateur[] } = { utilisateurs: [] };
  readonly appels_termines = this._reponses.asObservable();

  constructor(private http: HttpClient) { }

  envoieRequete(pUser: string, pDelay: number) {
    const requestObject: ApiRequest = { "user": pUser, "delay": pDelay };

    return this.http.post<Utilisateur>('http://gsb.schaffter.etu.lmdsio.fr/api/test_api', requestObject)
      .subscribe(
      data => {
        this.dataStore.utilisateurs.push(data);
        this._reponses.next(this.dataStore.utilisateurs);
      },
      error => console.log('Erreur appel API', error)
    );
  }
}
