import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  postemploye(data: any) {
    return this.http.post<any>("http://localhost:3000/posts", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getemploye() {
    return this.http.get<any>("http://localhost:3000/posts")
      .pipe(map((res: any) => {
        return res;
      }))
  }

  updateemploye(data: any, id:number) {
    return this.http.put<any>("http://localhost:3000/posts/"+id,data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  deleteEmploye(id:number) {
    return this.http.delete<any>("http://localhost:3000/posts/"+id)
      .pipe(map((res: any) => {
        return res;
      }))
  }

}
