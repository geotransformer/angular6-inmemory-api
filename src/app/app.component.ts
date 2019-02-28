import { Component, OnInit } from '@angular/core';
import { PolicyService } from './policy.service';
import { Policy } from './policy.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular6-inmemory-api';
  SERVER_URL: string = "http://localhost:8080/api/";

  policies: any[] = [];
  constructor(private policyService: PolicyService) { }

  ngOnInit() {
    this.policyService.getPolicies().subscribe((data : any[])=>{
        this.policies = data;
    });
  }

  public deletePolicy(policy: Policy){
    this.policyService.deletePolicy(policy.id).subscribe((data : any[])=>{
      const i = this.policies.indexOf(policy);
      console.log(policy);
      console.log(i);
     // this.policies = [...data.slice(0, i), ...data.slice(i+1)];
     this.policies = [...this.policies.slice(0, i), ...this.policies.slice(i+1)];
     //this.policies = this.policies.slice(0, i);
  });
  }
}
