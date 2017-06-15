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

  private navigateTo(route: string[]) {
    this.router.navigate(route);
  }
}

class Routing {
  static EDUCATION = ['/education'];
  static EXPERIENCE = ['/experience'];
}
