import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  hide = true; // Eigenschaft, die die Anzeige/Verstecken des Passworts kontrolliert
  private validTokens: string[] = ['123', '456', '789'];

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      token: ['', [Validators.required, this.tokenValidator.bind(this)]]
    });
  }

  // Validator zur Überprüfung des Tokens
  tokenValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value && !this.validTokens.includes(control.value)) {
      return { invalidToken: true };
    }
    return null;
  }

  // Login-Funktion
  onLogin(): void {
    if (this.loginForm.valid) {
      // Wenn das Formular gültig ist, wird der Benutzer zur Türsteuerungsseite weitergeleitet
      this.router.navigate(['/door-control']);
    }
  }
}
