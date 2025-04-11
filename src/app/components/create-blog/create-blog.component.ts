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
  private hour = 0;
  private minute = 0;
  // items = this.blogService.getItems();

  incrementHour(){
    if(this.minute === 12){
      this.minute = 0;
    }
    else{
      this.minute++;
    }
  }

  decrementHour(){
    
  }

  incrementMinute(){
    if(this.minute === 59){
      this.minute = 0;
    }
    else{
      this.minute++;
    }
  }

  decrementMinute(){

  }
  

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
    if(this.blogForm !== undefined) {
      console.log(this.blogForm.value.tag);
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
