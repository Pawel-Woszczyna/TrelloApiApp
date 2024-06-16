import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CONFIG } from './environment/environment.json';
import { getToken } from './environment/environment'

localStorage.setItem('token', getToken.API_TOKEN);

@Injectable({ providedIn: 'root' })
export class EndPointService {
  constructor(private http: HttpClient) {}

  token = localStorage.getItem('token');

  getListsData(): Observable<object> {
    return this.http.get(
      `https://api.trello.com/1/boards/645b4c890187c7d4a3557b0e/lists/?&key=${CONFIG.API_KEY}&token=${this.token}`, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }
    ) as Observable<object>;
  }
  
  getCardData(): Observable<object> {
    return this.http.get(
      `https://api.trello.com/1/boards/645b4c890187c7d4a3557b0e/cards/?&key=${CONFIG.API_KEY}&token=${this.token}`, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }
    ) as Observable<object>;
  }

  deleteCard(id: string): Observable<object> {
    return this.http.delete(
      `https://api.trello.com/1/cards/${id}?&key=${CONFIG.API_KEY}&token=${this.token}`
    ) as Observable<object>;
  }

  editCard(id: string, name: string): Observable<object> {
    return this.http.put(
      `https://api.trello.com/1/cards/${id}?&key=${CONFIG.API_KEY}&token=${this.token}&name=${name}`, {}
    ) as Observable<object>;
  }

  addCard(id: string, addNewCardName: string): Observable<object> {
    return this.http.post(
      `https://api.trello.com/1/cards?&key=${CONFIG.API_KEY}&token=${this.token}&idList=${id}&name=${addNewCardName}`, {}
    ) as Observable<object>;
  }

  editList(id: string, name: string): Observable<object> {
    return this.http.put(
      `https://api.trello.com/1/lists/${id}?&key=${CONFIG.API_KEY}&token=${this.token}&name=${name}`, {}
    ) as Observable<object>;
  }

  addList(idBoard: string, addNewList: string): Observable<object> {
    return this.http.post(
      `https://api.trello.com/1/lists?&name=${addNewList}&idBoard=${idBoard}&key=${CONFIG.API_KEY}&token=${this.token}`, {}
    ) as Observable<object>;
  }


  deleteList(id: string): Observable<object> {
    return this.http.put(
      `https://api.trello.com/1/lists/${id}/closed?&key=${CONFIG.API_KEY}&token=${this.token}&value=true`, {}
    ) as Observable<object>;
  }
}

