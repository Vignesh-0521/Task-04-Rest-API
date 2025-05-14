import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent {
  commentForm = this.fb.group({
    userId: ['', Validators.required],
    text: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private commentService: CommentService) {}

  onSubmit(): void {
    if (this.commentForm.valid) {
      this.commentService.addComment(this.commentForm.value).subscribe({
        next: () => {
          alert('Comment added!');
          this.resetForm();
        },
        error: err => console.error('Add comment error:', err)
      });
    }
  }

  private resetForm(): void {
    this.commentForm.reset();
    
    // Directly access form controls to avoid implicit 'any' errors
    this.commentForm.controls.userId.setErrors(null);
    this.commentForm.controls.userId.markAsPristine();
    this.commentForm.controls.userId.markAsUntouched();
  
    this.commentForm.controls.text.setErrors(null);
    this.commentForm.controls.text.markAsPristine();
    this.commentForm.controls.text.markAsUntouched();
  }
}