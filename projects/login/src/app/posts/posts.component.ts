import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from "../../../_services/posts.service";

import Swal from 'sweetalert2';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[] = [];

  constructor(private postsService: PostsService, private router: Router) {
    this.postsService.getPosts().subscribe((data: any) => {
      this.posts = data;
    })
  }

  showComments(id: string){
    this.router.navigate(['posts', id, 'comments']);
  }

  msgModal = (id: any, name: string, body: string, email: string) => {
    Swal.fire({
      icon: 'info',
      html: '<h1 class="mb-3" align="center">' + id + name + '</h1>' +
            '<b><h6 class="mb-3" align="left">Nombre completo:</h6></b>' +
            '<i><h6 class="mb-3" align="justify">' + name + ' ' + body + '</h6></i>' +
            '<b><h6 class="mb-3" align="left">Email:</h6></b>' +
            '<i><h6 class="mb-3" align="justify">' + email + '</h6></i>',
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Aceptar',
      confirmButtonColor: 'black',
    })
  }

  ngOnInit(): void {
  }

}
