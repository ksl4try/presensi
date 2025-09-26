import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';   // ⟵ tambah ini

import { addIcons } from 'ionicons';
import { eyeOutline, eyeOffOutline } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,          // ⟵ dan masukkan ke sini
  ],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email = '';
  password = '';
  showPassword = false;

  constructor(private router: Router) {
    addIcons({ 'eye-outline': eyeOutline, 'eye-off-outline': eyeOffOutline });
  }

  togglePassword() { this.showPassword = !this.showPassword; }

  onLogin() {
    const emailOk = this.isEmailValid(this.email);
    const pwdOk = this.password?.length >= 3;
    if (emailOk && pwdOk) this.router.navigateByUrl('/tabs/tab1', { replaceUrl: true });
    else alert('Periksa kembali email dan password.');
  }

  private isEmailValid(v: string): boolean {
    if (!v) return false;
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    return re.test(v);
  }
}
