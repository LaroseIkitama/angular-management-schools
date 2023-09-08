import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report-card-view-page',
  templateUrl: './report-card-view-page.component.html',
  styleUrls: ['./report-card-view-page.component.scss','../../../../../shared/styles/common-styles.scss']
})
export class ReportCardViewPageComponent implements OnInit {
  STUDENT_ID!: number;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.STUDENT_ID = this.activatedRoute.snapshot.params['studentId'];
  }

}
