import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(
    private _http  : HttpClient
  ) { }
addCompany(data: any){
 return this._http.post<any>(environment._api+"/api/admin/user",data)
}

}
