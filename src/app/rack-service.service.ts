import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CellData } from './CellData';
import { Observable } from 'rxjs';
import { RackSample } from './rack-sample';
import { jwt } from './jwt';

@Injectable({
  providedIn: 'root'
})
export class RackServiceService {

  constructor(private http:HttpClient, private router:Router) { }

  authenticate():Observable<jwt>{
    let data = { "username":"Piyush","password":"Piyush"};
    let url = "https://localhost:8443/authenticate";
    return this.http.post<jwt>(url,data);
  }

    JWT:jwt;

    //= 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJQaXl1c2giLCJleHAiOjE1ODQyMDk1ODksImlhdCI6MTU4NDE3MzU4OX0.mNtaoHSSKwB2LzG-_Fdj8cAXb01G8P-61SNZCzH6V5w';

  sendRackData(data:CellData)
  {
    const headers = {'Authorization': 'Bearer '+this.JWT.jwt};
    let url="https://localhost:8443/saverackinfo";
    console.log(jwt);
    return this.http.put(url,data,{headers});
  }

  searchRack(data:number):Observable<RackSample[]>
  {
    console.log(data);
    let jsondata = {'sampleNo' : data};
    const headers = { 'Authorization': 'Bearer '+this.JWT.jwt};
    let url="https://localhost:8443/getrack";
    return this.http.post<RackSample[]>(url,jsondata,{headers});
  }
}
