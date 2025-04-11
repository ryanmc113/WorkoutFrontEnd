import { Component } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { CommonModule } from '@angular/common';

interface Blogs {
  id: number;
  title: string;
  author: string;
  tags: string;
  tag: string;
  content: string;
  date_published: string;
}

@Component({
  selector: 'app-blog',
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
  // template: `<ul>
  //   @for (blog title blogs; track blog.title) {
  //   <li>{{ blog.title }}</li>
  //   }
  // </ul>`,
})
export class BlogComponent {
  blogs: Blogs[] = [];
  constructor(private blogService: BlogService) {
  }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe((data) => {
      console.log(data);
      this.blogs = data;
    });
  }

}
