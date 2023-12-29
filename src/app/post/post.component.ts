import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  blogPosts: any;
  errorMessage: any;

  constructor(
    private blogService: BlogService, 
    private spinner: NgxSpinnerService) {}

ngOnInit() {
  this.getPosts();
  
}

  getPosts() {
      this.spinner.show();
      this.blogService.getPosts().subscribe(
        (data) => {
          this.blogPosts = data;
          this.spinner.hide();
          console.log(data);
        },
          (error) => {
            this.errorMessage = error.status + ": " + error.error.message;
            this.spinner.hide();
            console.log(error); 
          }
      )
  }

 

}
