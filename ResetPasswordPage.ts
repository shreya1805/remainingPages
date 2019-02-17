import {Component} from '@angular/core'

export class ResetPasswordPage
{
    constructor(
        public emailAddress?:string,
        public oldpassword?:string,
        public newpassword?:string){

    }
}