import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Grade } from 'src/app/core/models/grade';
import { Student } from 'src/app/core/models/student';
import { StudentService } from 'src/app/core/services/student.service';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.scss']
})
export class ReportCardComponent implements OnInit {
  @Input() STUDENT_ID!: number;
  @ViewChild('htmlData') htmlData!: ElementRef;

  grades!: Grade[];
  student!: Student;

  totalGrades: number = 0;
  totalCoef: number = 0;
  moyenneGenerale: number = 0;

  constructor(
    private studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadGradesAndCalculateMoyenne(this.STUDENT_ID);
    this.loadStudent(this.STUDENT_ID);

    console.table(this.student);
  }
  private loadStudent(studentId: number) {
    this.studentService.getStudent(studentId).subscribe(
      student => { this.student = student }
    )
  }

  private loadGradesAndCalculateMoyenne(studentId: number) {
    this.studentService.getGradesOfStudent(studentId).subscribe(
      grades => {
        this.totalGrades = grades.length;
        this.calculateTotalCoefficient(grades);
        this.calculateMoyenne();
      }
    );
  }

  private calculateTotalCoefficient(grades: Grade[]) {
    this.totalCoef = 0;
    this.grades = grades;

    for (let index = 0; index < this.grades.length; index++) {
      this.totalCoef += this.grades[index].subject.coefficient;
    }
  }

  private calculateMoyenne() {
    let sommeNote = 0;

    for (let index = 0; index < this.grades.length; index++) {
      sommeNote += this.grades[index].score * this.grades[index].subject.coefficient;
    }

    if (this.totalCoef !== 0) {
      this.moyenneGenerale = sommeNote / this.totalCoef;
    }
  }


  /* generatePDF() {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('School Name', doc.internal.pageSize.getWidth() / 2, 20,);

    // ... Autres détails de l'étudiant et informations du bulletin

    doc.save('student_report_card.pdf');
  } */

  generatePDF() {
    html2canvas(this.htmlData.nativeElement).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${this.student.full_name}_${this.student.classroom.name}_${this.student.classroom.level}_report_card.pdf`);
    });
  }

  goback() {
    this.router.navigate(['/navigation/students/list']);
  }

}
