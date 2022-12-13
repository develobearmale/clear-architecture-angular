import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({providedIn:'root'})
export class UserService{

    constructor(private httpClient: HttpClient){
    }

    public getAll(){
        return this.httpClient.get(
            `${environment.backend.dummyjson.host+environment.backend.dummyjson.apis.users}`
          );
    }

}