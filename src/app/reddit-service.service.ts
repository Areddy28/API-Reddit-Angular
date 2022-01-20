import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RedditService {
  // urlBase: string = "https://www.reddit.com/r/aww/.json";
  

  constructor(private http:HttpClient) { }

  GetAllRedditList(): Observable<any> {

    let fullURL: string = "https://www.reddit.com/r/aww/.json";
    let result: Observable<any> = this.http.get(fullURL); 
    return result; 
  }
}
