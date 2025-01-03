import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-generic',
  standalone: true,
  imports: [],
  templateUrl: './generic.component.html',
  styleUrl: './generic.component.scss'
})
export class GenericComponent implements OnInit {
  @Input() set role(value: string) {
    console.log("value", value);
  }

  private readonly _activatedRoute = inject(ActivatedRoute);

  ngOnInit(){
      console.log("data", this._activatedRoute.snapshot.data);
  }
}