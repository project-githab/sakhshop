import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-c-footer',
  imports: [],
  templateUrl: './c-footer.html',
  styleUrl: './c-footer.css',
})
export class CFooter implements OnInit {

  currentYear!: number;

  ngOnInit() {
    const today = new Date();

    this.currentYear = today.getFullYear();
  }
}
