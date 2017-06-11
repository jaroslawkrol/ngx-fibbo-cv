import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  stackoverflow() {
    this.redirect(Redirect.STACKOVERFLOW);
  }

  linkedin() {
    this.redirect(Redirect.LINKEDIN);
  }

  github() {
    this.redirect(Redirect.GITHUB);
  }

  private redirect(url: string) {
    window.location.href = url;
  }
}

export class Redirect {
   static STACKOVERFLOW = 'https://stackoverflow.com/users/6848233/jaroslaw-k';
   static LINKEDIN = 'https://www.linkedin.com/in/jaros%C5%82aw-kr%C3%B3l-1b464211a/';
   static GITHUB = 'https://github.com/jaroslawkrol';
}
