import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PostsService } from "../../../../_services/posts.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private postsService: PostsService) {
    this.activatedRoute.params.subscribe((params => {
      this.postsService.getComments(params['id']).subscribe((data: any) => {
        this.comments = data;
      })
    }))
  }

  ngOnInit(): void {
  }

}
