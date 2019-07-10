import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/post';

@Injectable()
export class PostsService {

    /* liste des posts*/
    posts: Post[] = [];

    postsSubject = new Subject<Post[]>();


    /**
     * emission des posts
     */
    emitPosts() {
        this.postsSubject.next(this.posts);
    }

    /**
     * creation d'un post
     * @param newPost 
     */
    createNewPost(newPost: Post) {
        this.posts.push(newPost);
        this.emitPosts();
    }


    likePost(i:number){
        this.posts[i].incLike();
      }
    
      dislikePost(i:number){
        this.posts[i].decLike();
      }
    
      /**
       * suppression d'un post
       * @param i index du post
       */
      deletePost(i:number){
        this.posts.splice(i,1);
        this.emitPosts();
      }
}
