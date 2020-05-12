import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Message } from './dashboard';

@Injectable({
  providedIn: 'root'
})
export class ApiWizbiiService {
  [x: string]: any;
  tokenAccess:string;
  dashBoardRetour:Message[];

  constructor(private httpClient: HttpClient) { 
    
  }

  async getMessage(){
    const responseServeur = await this.POST("https://api.wizbii.com/v1/account/validate",{
      username:"decouverte+2@wizbii.com",
      password:"decouverte",
      client_id:"test",
      grant_type:"password"
    });
    console.log("C'est cassé chef ..." + responseServeur);
  }
  
  private POST(url: string, params: {[key: string]: string}) {
    const P = new HttpParams( {fromObject: params} );
    
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type':'application/x-www-form-urlencoded'
      })
    }

    return this.httpClient.post( url, P, httpOption).toPromise();
  }

  private POST2(url: string): Promise<HttpResponse<string>> {
    return this.httpClient.post( url, {}, {
    observe: 'response',
    responseType: 'text',
    headers: {'Authorization:': this.tokenAccess}
    }).toPromise();
  }

}
