import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Navbar } from './components/navbar/navbar';
import { Home } from './sections/home/home';
import { Skills } from './sections/skills/skills';
import { Projects } from './sections/projects/projects';
import { Experience } from './sections/experience/experience';
import { Education } from './sections/education/education';
import { Contact } from './sections/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    Navbar,
    Home,
    Skills,
    Projects,
    Experience,
    Education,
    Contact,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}