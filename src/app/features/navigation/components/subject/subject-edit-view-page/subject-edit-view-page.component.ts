import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subject-edit-view-page',
  templateUrl: './subject-edit-view-page.component.html',
  styleUrls: ['./subject-edit-view-page.component.scss','../../../../../shared/styles/common-styles.scss']
})
export class SubjectEditViewPageComponent implements OnInit{
  SUBJECT_ID!: number;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.SUBJECT_ID = this.activatedRoute.snapshot.params['ID'];
  }
}
