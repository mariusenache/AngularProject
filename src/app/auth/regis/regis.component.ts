import { Observable } from 'rxjs';
import { AuthService } from './../../_core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './regis.component.html',
  styleUrls: ['./regis.component.scss']
})
export class RegisComponent implements OnInit {

  loginForm : FormGroup;
  showError! : boolean;
  confirmationValidator = (control: UntypedFormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.loginForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  constructor(private formBuilder : FormBuilder, 
              private authService : AuthService, 
              private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.email, Validators.required]], 
      password: [null, [Validators.required, Validators.minLength(6)]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      name: [null, [Validators.required]],
      surname: [null, [Validators.required]],
      tel: [null, [Validators.required]]
    });
  }

  
  get email(): FormControl{
    return this.loginForm.get("email") as FormControl;
  }
  get password(): FormControl{
    return this.loginForm.get("password") as FormControl;
  }
  get name(): FormControl{
    return this.loginForm.get("name") as FormControl;
  }
  get surname(): FormControl{
    return this.loginForm.get("surname") as FormControl;
  }
  get tel(): FormControl{
    return this.loginForm.get("tel") as FormControl;
  }

  register(): void
  {
    if(this.loginForm.invalid) return;
    const payLoad = {
          email: this.email.value,
          password: this.password.value,
          name: this.name.value,
          surname: this.surname.value,
          tel: this.tel.value
        };

    this.authService.register(payLoad).subscribe({       //  eve.holt@reqres.in
      next: (response) => {
        window.localStorage["token"]=response.token;
        this.router.navigate(["/center"]);
      },
      error: () => {
        this.showError=true;
      },
    });
  }

}






























// import { Component, OnInit } from '@angular/core';
// import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

// import { NzFormTooltipIcon } from 'ng-zorro-antd/form';

// @Component({
//   selector: 'app-regis',
//   templateUrl: './regis.component.html',
//   styleUrls: ['./regis.component.scss']
// })


// export class RegisComponent implements OnInit {
//   validateForm!: UntypedFormGroup;
//   captchaTooltipIcon: NzFormTooltipIcon = {
//     type: 'info-circle',
//     theme: 'twotone'
//   };

//   submitForm(): void {
//     if (this.validateForm.valid) {
//       console.log('submit', this.validateForm.value);
//     } else {
//       Object.values(this.validateForm.controls).forEach(control => {
//         if (control.invalid) {
//           control.markAsDirty();
//           control.updateValueAndValidity({ onlySelf: true });
//         }
//       });
//     }
//   }

//   updateConfirmValidator(): void {
//     /** wait for refresh value */
//     Promise.resolve().then(() => this.validateForm.controls['checkPassword'].updateValueAndValidity());
//   }

//   confirmationValidator = (control: UntypedFormControl): { [s: string]: boolean } => {
//     if (!control.value) {
//       return { required: true };
//     } else if (control.value !== this.validateForm.controls['password'].value) {
//       return { confirm: true, error: true };
//     }
//     return {};
//   };

//   getCaptcha(e: MouseEvent): void {
//     e.preventDefault();
//   }

//   constructor(private fb: UntypedFormBuilder) {}

//   ngOnInit(): void {
//     this.validateForm = this.fb.group({
//       email: [null, [Validators.email, Validators.required]],
//       password: [null, [Validators.required]],
//       checkPassword: [null, [Validators.required, this.confirmationValidator]],
//       nickname: [null, [Validators.required]],
//       phoneNumberPrefix: ['+86'],
//       phoneNumber: [null, [Validators.required]],
//       website: [null, [Validators.required]],
//       captcha: [null, [Validators.required]],
//       agree: [false]
//     });
//   }
// }


