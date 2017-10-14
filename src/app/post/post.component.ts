import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  private postService: PostService;
  private errorMsg: String;
  constructor() { }

  ngOnInit() {
    this.postService.checkAvailability().subscribe(result => {  }, (errMsg) => {
      this.errorMsg = errMsg;
    });
  }
}