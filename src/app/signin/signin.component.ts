// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-signin',
//   templateUrl: './signin.component.html',
//   styleUrls: ['./signin.component.css']
// })
// export class SigninComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }



// import { Component, OnInit } from '@angular/core';
// import { Router} from '@angular/router';
// import { AuthServiceService } from '../Service/auth-service.service';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent implements OnInit {
//   form: any = {
//     firstName: null,
//     lastName: null,
//     username: null,
//     email: null,
//     password: null,
//     gender: null,
//     phoneNo: null
//   };
//   isSuccessful = false;
//   isSignUpFailed = false;
//   errorMessage = '';

//   constructor(private authService: AuthServiceService,private router:Router ) { }
  
//   ngOnInit(): void {
//   }

//   onSubmit(): void {
//     const { firstName, lastName, username, email, password, gender, phoneNo } = this.form;
//     this.authService.register(firstName, lastName, username, email, password, gender, phoneNo).subscribe(
//       data => {
//         console.log(data);
//         this.isSuccessful = true;
//         this.isSignUpFailed = false;
//        this.router.navigate(['/login'])
//       },
//       err => {
//         this.errorMessage = err.error.message;
//         this.isSignUpFailed = true;
//       }
//     );
//   }
// }