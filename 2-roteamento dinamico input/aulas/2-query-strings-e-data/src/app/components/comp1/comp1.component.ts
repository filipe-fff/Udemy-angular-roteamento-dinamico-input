import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.scss'
})
export class Comp1Component implements OnInit {
  @Input() name: string = "";

  private readonly _activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
      console.log("ngOnInit Comp1Component");

      console.log("name", this.name);

      console.log("snapshot => ", this._activatedRoute.snapshot.queryParams);
  }
}