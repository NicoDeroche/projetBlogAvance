import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post';
import { PostsService } from '../services/posts.service';



@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.scss']
})
export class PostlistitemComponent implements OnInit {

  /* un seul attribut : un post*/
  @Input() post: Post;
  @Input() index: number;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }
  /* evenements IHM */
  
  onLike() {
    this.postsService.likePost(this.index);
  }

  onDislike() {
    this.postsService.dislikePost(this.index);
  }

  onDelete() {
    this.postsService.deletePost(this.index);
  }

}
