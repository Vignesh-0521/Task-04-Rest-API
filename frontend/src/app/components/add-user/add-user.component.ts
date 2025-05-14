import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  userForm: FormGroup;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      userId: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.userForm.invalid) return;

    this.userService.addUser(this.userForm.value).subscribe({
      next: (res) => {
        this.successMessage = 'User added successfully!';
        this.errorMessage = '';
        
        // Reset form and clear validation state
        this.userForm.reset();
        Object.keys(this.userForm.controls).forEach((key) => {
          this.userForm.controls[key].setErrors(null);
          this.userForm.controls[key].markAsPristine();
          this.userForm.controls[key].markAsUntouched();
        });
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Failed to add user.';
        this.successMessage = '';
      }
    });
  }
}