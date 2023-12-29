import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
//import { MetaDefinition } from '@angular/platform-browser';


@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  singlePosts: any;
  errorMessage: any;
  id!: string;

  constructor(
    private blogService: BlogService, 
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute
    ) {}


  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.getSinglePosts();
    
  }

  
    
  getSinglePosts() {
      this.spinner.show();
      this.blogService.getSinglePosts(this.id).subscribe(
        (data) => {
          this.singlePosts = data;
          this.spinner.hide();
        },
          (error) => {
            this.errorMessage = error.status + ": " + error.error.message;
            this.spinner.hide();
            console.log(error); 
          }
      )
  }

 
}
