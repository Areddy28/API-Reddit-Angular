import { Component } from '@angular/core';
import { RedditService } from './reddit-service.service';
import { Convert, Reddit } from './Reddit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [RedditService]
})
export class AppComponent {
  title = 'APIReddit';
  reddit: Reddit = {}; 

  constructor(private redditAPI : RedditService) {}

  GetRedditList(){
    this.redditAPI.GetAllRedditList().subscribe(
      (response:any) => {
        console.log(response);
        let redditjson = Convert.RedditToJson(response);
        let reddit = Convert.toReddit(redditjson);
        this.reddit = reddit;
      }
    );
  }
  

}
