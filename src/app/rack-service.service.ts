import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CellData } from './CellData';
import { Observable } from 'rxjs';
import { RackSample } from './rack-sample';

@Injectable({
  providedIn: 'root'
})
export class RackServiceService {

  constructor(private http:HttpClient, private router:Router) { }

  
  sendRackData(data:CellData)
  {
    const headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJQaXl1c2giLCJleHAiOjE1ODQyMDk1ODksImlhdCI6MTU4NDE3MzU4OX0.mNtaoHSSKwB2LzG-_Fdj8cAXb01G8P-61SNZCzH6V5w'};
    let url="";
    return this.http.put(url,data,{headers});
  }

  searchRack(data:string):Observable<RackSample[]>
  {
    const headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJQaXl1c2giLCJleHAiOjE1ODQyMDk1ODksImlhdCI6MTU4NDE3MzU4OX0.mNtaoHSSKwB2LzG-_Fdj8cAXb01G8P-61SNZCzH6V5w'};
    let url="";
    return this.http.post<RackSample[]>(url,data,{headers});
  }
}
