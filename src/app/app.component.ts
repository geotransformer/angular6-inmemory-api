import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular6-inmemory-api';
  SERVER_URL: string = "http://localhost:8080/api/";

  policies: any[] = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(this.SERVER_URL + 'policies').subscribe((data : any[])=>{
        console.log(data);
        this.policies = data;
    })
  }
}
