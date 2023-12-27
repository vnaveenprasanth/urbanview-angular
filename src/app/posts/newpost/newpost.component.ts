import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrl: './newpost.component.css'
})

export class NewpostComponent {
  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.postForm = this.formBuilder.group({
      title: '',
      description: '',
      location: '',
      tags: '',
      images: '',
      videos: '',
      post_type: '',
      enable_event: false,
      start_date: '',
      end_date: ''
    });
  }

  onSubmit(): void {
    console.log(this.postForm.value);
  }
}
