import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  constructor(private http: HttpClient) { }

  createUsers(data) {
    return this.http.post('http://localhost:3000/users', data).toPromise();
  }

  retriveUsers() {
    return this.http.get('http://localhost:3000/users').toPromise();
  }
  deleteUserList(id) {
    return this.http.delete(`http://localhost:3000/users/${id}`).toPromise();

  }
  updateUserList(id, data){
    return this.http.put(`http://localhost:3000/users/${id}`, data).toPromise();
  }
}
