import { Component, EventEmitter, Output } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Number {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-method3',
  templateUrl: './method3.component.html',
  styleUrls: ['./method3.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, NgFor, MatInputModule, FormsModule],
})

export class Method3Component {
  private apiUrl = 'http://localhost:3086';
  constructor(private http: HttpClient) {}
  @Output() selectedOption = new EventEmitter<string>();

  postData(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
   this.http.post<any>(`${this.apiUrl}/documents/word-sentences` , data).subscribe(
    response => {

      console.log(response);
    },
    error => {
      console.error(error);
    }
  );
}

selectedValue: number=0;
selectedValue2: number=0;

  numbers: Number[] = [
    {value: 1, viewValue: '1'},
    {value: 2, viewValue: '2'},
    {value: 3, viewValue: '3'}
  ];

  verificar(){
    let data = {
      count: this.selectedValue,
      minWordLength: this.selectedValue2
    }

    this.postData(data);
    console.log();
  }
}
