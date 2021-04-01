import { Component, VERSION } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

type Post = { bookid: string; title: string };
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  post: Post;

  constructor(httpClient: HttpClient) {
    const post$: Observable<Post> = httpClient.get<Post>("/assets/data.json");
    post$.subscribe(post => {
      this.post = post;
      console.log(post);
    });
  }
}
