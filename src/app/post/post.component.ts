import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Http, URLSearchParams, RequestOptions } from '@angular/http';
import { Post } from './model/Post';
import { Comment } from './model/Comment';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  private postService: PostService;
  private errorMsg: String;
  private msg: String = "";
  private responseComment: Comment;
  private responsePost: Post;


  private http: Http;


  constructor(http: Http) {
    this.http = http;
    this.postService = new PostService(http);

  }
  ngOnInit() {
    this.postService.checkAvailability().subscribe(response => { this.msg = response; });
    let post = new Post();
    post.date = new Date();
    post.dogId = "1";
    post.id = "2";
    post.likeCount = 3;
    post.message = "heelloouuu du kleiner wutz";
    post.subject = "1234567890"
    post.time = "13:12:45";
    this.postService.postCreate(post).subscribe(response => {
    this.responsePost = response;
      let comment = new Comment();
      comment.postId = this.responsePost.id;
      comment.id = "5";
      comment.message = "Noah ist ein Kamel";
      comment.dogId = "1234234";
      this.postService.postComment(comment).subscribe(reponse => { this.responseComment = reponse });
      console.log(this.responseComment);
    });
    console.log(this.responsePost);



  }
}
