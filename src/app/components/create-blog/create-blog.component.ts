import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';
import { BlogService } from '../../services/blog.service';
import { CreateBlogService } from '../../services/create-blog.service';


@Component({
  selector: 'app-create-blog',
  imports: [ReactiveFormsModule],
  templateUrl: './create-blog.component.html',
  styleUrl: './create-blog.component.css'
})
export class CreateBlogComponent {
  blogForm: FormGroup;
  content = new FormControl('');
  // items = this.blogService.getItems();

  

  constructor(
    private createBlogService: CreateBlogService,
    private formBuilder: FormBuilder,
  ) {
    this.blogForm = this.formBuilder.group({
      author: [''],
      content: [''],
      title: [''],
      tag: [''],
      date_published: [new Date()]
    });
  }
  Blog = {
    id: 0,
    author: "",
    content: "",
    date_published: new Date(),
    tag: "",
    tags: ["", ""],
    title: "33",
  }

  onSubmit(): void {
    // Process checkout data herev
    console.log('party')
    console.log(this.blogForm.value);
    if(this.blogForm !== undefined) {
      console.warn('Your order has been submitted', this.blogForm.value);
      if (this.blogForm.valid) {
        this.createBlogService.saveBlog(this.blogForm.value).subscribe(
          response => {
            console.log('Blog saved:', response);
          },
          error => {
            console.error('Error saving blog:', error);
          });

        
      }
      this.blogForm.reset();
    }
    
  }

}
