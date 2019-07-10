/* classe metier representant un post */

export class Post {

    title: string;
    content: string;
    loveIts: number;
    created_at: Date;

    constructor(title, content) {
        this.title = title;
        this.content = content;
        this.created_at = new Date();
        this.loveIts = 0;
    }

    /* incremente les likes*/
    incLike() {
        this.loveIts++;
    }

    /*decremente les likes*/
    decLike() {
        this.loveIts--;
    }

}