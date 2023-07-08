import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';


@Component({
  selector: 'app-method1',
  templateUrl: './method1.component.html',
  styleUrls: ['./method1.component.scss']
})
export class Method1Component {
    private apiUrl = 'http://localhost:3086';
     constructor(private http: HttpClient) {}

     postData(data: any) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      });
     this.http.post<any>(`${this.apiUrl}/documents/word-frequency` , data).subscribe(
      response => {
        this.count = response.count
        console.log(response);
      },
      error => {
        console.error(error);
      }
    );
  }

    searchedWord: string = '';
    count: number = 0;

  verificar() {
    let data = {
      "word": this.searchedWord
    };

   this.postData(data);
   }
}