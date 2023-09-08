import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit-view-page',
  templateUrl: './user-edit-view-page.component.html',
  styleUrls: ['./user-edit-view-page.component.scss','../../../../../../shared/styles/common-styles.scss']
})
export class UserEditViewPageComponent implements OnInit {
  USER_ID!: number;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.USER_ID = this.activatedRoute.snapshot.params['ID'];
  }
}
