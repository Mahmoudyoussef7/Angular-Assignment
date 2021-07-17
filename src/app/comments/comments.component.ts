import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsComponent } from '../posts/posts.component';
import { CommentService } from '../Services/comment.service';
import { IComment } from '../Shared Classes and types/IComment';
import { IPost } from '../Shared Classes and types/IPost';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments: IComment[] = [];
  postComments: IComment[] =[];
  errMsg = ""
  counter=0;
  constructor(private activiatRoute: ActivatedRoute, private commentService: CommentService) { }
  post: any;
  ngOnInit(): void {
    this.post = this.activiatRoute.snapshot.paramMap.get('id');
    this.commentService.getComments().subscribe(
      commentData => {
        this.comments = commentData;
        for (const i of this.comments) {
          if (i.postId == this.post) {
            this.postComments[this.counter++] = i;
          }
        }

      }); 
  }
}
