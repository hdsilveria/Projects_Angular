import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Items, ResponseDelete, RequestCreate } from './model.service'
import { ResponseCreate } from './model.service'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class ItemsService {

  private url = 'http://127.0.0.1:8000/api/tasks'

  constructor(private http: HttpClient) {}

  getItems():Observable<Items> {
    return this.http.get<Items>(this.url)
  }

  createUser(request: RequestCreate): Observable<ResponseCreate> {
    return this.http.post<ResponseCreate>(this.url, request)
  }

  deleteUser(id: String): Observable<ResponseDelete> {
    return this.http.delete<ResponseDelete>(`${this.url}/${id}`)
  }

  editUser(id: String, item: RequestCreate): Observable<ResponseDelete> {
    return this.http.put<ResponseDelete>(`${this.url}/${id}`, item)
  }

}
