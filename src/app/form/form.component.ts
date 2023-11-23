import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LaravelApiService} from "../laravel-api.service";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  delay:FormControl = new FormControl('');
  user: FormControl = new FormControl('');

  constructor (public laravel_api: LaravelApiService){

  }

  apiRequest(){
    this.laravel_api.envoieRequete(
      this.user.value,
      this.delay.value
    )
  }

}
