import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../models/post';
import { PostsService } from '../services/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit, OnDestroy {



  posts: Array<Post>;
  postsSubscription: Subscription;

  constructor(private postsService: PostsService) { }



  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: any[]) => {
        this.posts = posts;
      }
    );
    this.postsService.emitPosts();
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe;
  }

}
