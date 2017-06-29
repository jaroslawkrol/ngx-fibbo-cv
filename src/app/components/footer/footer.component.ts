import {Component, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
  }

  stackoverflow(event: any) {
    this.animate(event);
    this.redirect(Redirect.STACKOVERFLOW);
  }

  linkedin(event: any) {
    this.animate(event);
    this.redirect(Redirect.LINKEDIN);
  }

  github(event: any) {
    this.animate(event);
    this.redirect(Redirect.GITHUB);
  }

  private redirect(url: string) {
    window.location.href = url;
  }

  private animate(event: any) {
    this.renderer.addClass(event.target, 'tada');
  }
}

export class Redirect {
   static STACKOVERFLOW = 'https://stackoverflow.com/users/6848233/jaroslaw-k';
   static LINKEDIN = 'https://www.linkedin.com/in/jaros%C5%82aw-kr%C3%B3l-1b464211a/';
   static GITHUB = 'https://github.com/jaroslawkrol';
}
