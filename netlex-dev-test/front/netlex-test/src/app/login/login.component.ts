import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

import { Observable, catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  styles: [`
  .login-bg {
    background-image: url('../../../../assets/images/unsplash_m_7p45JfXQo.png');
    background-size: cover;
    background-position: center;
  }
  `]
})

export class LoginComponent{

  username: string = '';
  password: string = '';
  private apiUrl = 'http://localhost:3086';

  constructor(private http: HttpClient) {}

  postData(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post<any>(`${this.apiUrl}/users/login` , data).subscribe(
      response => {
        localStorage.setItem('token', response.token)
        console.log(response);
      },
      error => {
        localStorage.setItem('token', "Diante da impossibilidade de resgatar o token, essa string foi inserida para fins de teste")
        console.error(error);
      }
    );
}

  logar(){
    let data={
        "email": this.username,
        "password": this.password
    };

  this.postData(data);
  }
}

