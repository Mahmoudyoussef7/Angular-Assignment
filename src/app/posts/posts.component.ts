import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../Services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private posts: PostsService,private router:Router) { }
  arrPosts: any = [];
  errMssg = "";
  ngOnInit(): void {
    this.posts.getPosts().subscribe((postData) => {
      this.arrPosts = postData;
    },
      (errData) => { this.errMssg = errData })
  }

  showComments(post:any)
  {
    this.router.navigate(["/posts",post.id])
  }
}
