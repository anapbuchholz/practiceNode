import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-method2',
  templateUrl: './method2.component.html',
  styleUrls: ['./method2.component.scss']
})
export class Method2Component {
  private apiUrl = 'http://localhost:3086';
  constructor(private http: HttpClient) {}
  
    postData(data: any) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      });
     this.http.post<any>(`${this.apiUrl}/documents/word-sentences` , data).subscribe(
      response => {
        this.items = response.items;
        console.log(response);
      },
      error => {
        console.error(error);
      }
    );
  }
  
  items: string[] = [];
  searchedWord: string = '';
  
  verificar() {
    let data = {
      "word": this.searchedWord
    }
    this.postData(data);
   }
}
