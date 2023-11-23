import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {Affichage2Component} from "./affichage2/affichage2.component";
import {FormComponent} from "./form/form.component";
import {Affichage1Component} from "./affichage1/affichage1.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Affichage2Component, FormComponent, Affichage1Component],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testApi';
}
