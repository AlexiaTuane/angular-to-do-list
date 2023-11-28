import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list-app';
}

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule // Adicione o FormsModule aos imports aqui
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule {}