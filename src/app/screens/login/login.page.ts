import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { userInfo } from 'os';
import { SupabaseService } from 'src/app/services/supabase.service';
import { ListingPage } from '../listing/listing.page';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {
    credentials: FormGroup;

    constructor(
        private fb: FormBuilder,
        private alertController: AlertController,
        private router: Router,
        private loadingController: LoadingController,
        private supabaseService: SupabaseService
    ) {}

    ngOnInit() {
        this.credentials = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
        });
    
    }

    async login() {
        const loading = await this.loadingController.create();
        await loading.present();

        this.supabaseService.signIn(this.credentials.value).then(async user => {
            await loading.dismiss();
            this.router.navigateByUrl('/home/listing', {replaceUrl: true});
        }, async err => {
            await loading.dismiss();
            this.showError('Login Failed', err.message);
        });
    }

    async signUp(){
        const loading = await this.loadingController.create();
        await loading.present();

        this.supabaseService.signUp(this.credentials.value).then(async data => {
            await loading.dismiss();
            this.showError('Signup success', 'Please confirm your email!');
    
        }, async err=> {
            await loading.dismiss();
            const alert = await this.alertController.create({
                header: ('Registration failed, You already signed'),
                message: err.error.msg,
                buttons: ['OK'],
            });
            await alert.present();
        }
    )};


    

    async showError(title, msg) {
        const alert = await this.alertController.create({
            header: title,
            message: msg,
            buttons: ['OK'],
        });
        await alert.present();
    }



}
