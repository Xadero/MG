import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MasterPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
