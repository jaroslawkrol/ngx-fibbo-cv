import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  toEducationPage(): void {
    this.navigateTo(Routing.EDUCATION);
  }

  toExperiencePage(): void {
    this.navigateTo(Routing.EXPERIENCE);
  }

  toSkillsPage(): void {
    this.navigateTo(Routing.SKILLS);
  }

  toPersonalPage(): void {
    this.navigateTo(Routing.PERSONAL);
  }

  private navigateTo(route: string[]) {
    this.router.navigate(route);
  }
}

class Routing {
  static EDUCATION = ['/education'];
  static EXPERIENCE = ['/experience'];
  static SKILLS = ['/skills'];
  static PERSONAL = ['/personal']
}
