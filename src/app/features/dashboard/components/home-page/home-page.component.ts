import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { BestEducationDescriptionComponent } from 'src/app/core/components/best-education-description/best-education-description.component';
import { QualityMeetingDescriptionComponent } from 'src/app/core/components/quality-meeting-description/quality-meeting-description.component';
import { TopComputerScienceDescriptionComponent } from 'src/app/core/components/top-computer-science-description/top-computer-science-description.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  ngOnInit() {
    // Set the default selected reason to the first reason's data
    this.selectedReason = this.reason1;
    this.reason1.active = true; // Ensure the first reason is active by default
  }

  // Définir l'état initial des raisons avec leurs descriptions spécifiques et les images du slider
  reason1 = {
    active: false,
    description: "Description de la BEST EDUCATION. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, corporis? Education",
    slides: [
      { imgSrc: 'https://img.freepik.com/photos-gratuite/gens-plan-moyen-obtenant-leur-diplome_23-2148950544.jpg?w=826&t=st=1690632065~exp=1690632665~hmac=61e3ba12a1a27f50aa718255912221df0c98dac9d3ea1240ec5ac5133491c965' },
      { imgSrc: 'https://img.freepik.com/photos-gratuite/concept-collage-html-css-personne_23-2150061972.jpg?w=740&t=st=1690632197~exp=1690632797~hmac=98128f2f52810580cece5cfd6d37f6ca6aabf4075422b6f30b0f3be1846ab396' },
      { imgSrc: 'https://img.freepik.com/photos-gratuite/homme-affaires-africain-attrayant-dans-verres-costume-tenant-papiers_273609-9306.jpg?w=740&t=st=1690632314~exp=1690632914~hmac=4381f33b33fa114c2fc2b2dc38b709b5918b2472042cbc0f0f30d7a936107ed4' }
    ],
    component: BestEducationDescriptionComponent

  };

  reason2 = {
    active: false,
    description: "Description de la TOP COMPUTER SCIENCE. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, corporis?",
    slides: [
      { imgSrc: 'https://img.freepik.com/photos-gratuite/gens-plan-moyen-obtenant-leur-diplome_23-2148950544.jpg?w=826&t=st=1690632065~exp=1690632665~hmac=61e3ba12a1a27f50aa718255912221df0c98dac9d3ea1240ec5ac5133491c965' },
      { imgSrc: 'https://img.freepik.com/photos-gratuite/concept-collage-html-css-personne_23-2150061972.jpg?w=740&t=st=1690632197~exp=1690632797~hmac=98128f2f52810580cece5cfd6d37f6ca6aabf4075422b6f30b0f3be1846ab396' },
      { imgSrc: 'https://img.freepik.com/photos-gratuite/homme-affaires-africain-attrayant-dans-verres-costume-tenant-papiers_273609-9306.jpg?w=740&t=st=1690632314~exp=1690632914~hmac=4381f33b33fa114c2fc2b2dc38b709b5918b2472042cbc0f0f30d7a936107ed4' }
    ],
    component: TopComputerScienceDescriptionComponent
  };

  reason3 = {
    active: false,
    description: "Description de la QUALITY MEETING. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, corporis?",
    slides: [
      { imgSrc: 'https://img.freepik.com/photos-gratuite/gens-plan-moyen-obtenant-leur-diplome_23-2148950544.jpg?w=826&t=st=1690632065~exp=1690632665~hmac=61e3ba12a1a27f50aa718255912221df0c98dac9d3ea1240ec5ac5133491c965' },
      { imgSrc: 'https://img.freepik.com/photos-gratuite/concept-collage-html-css-personne_23-2150061972.jpg?w=740&t=st=1690632197~exp=1690632797~hmac=98128f2f52810580cece5cfd6d37f6ca6aabf4075422b6f30b0f3be1846ab396' },
      { imgSrc: 'https://img.freepik.com/photos-gratuite/homme-affaires-africain-attrayant-dans-verres-costume-tenant-papiers_273609-9306.jpg?w=740&t=st=1690632314~exp=1690632914~hmac=4381f33b33fa114c2fc2b2dc38b709b5918b2472042cbc0f0f30d7a936107ed4' }
    ],
    component: QualityMeetingDescriptionComponent
  };

  // Variable pour stocker la raison sélectionnée
  selectedReason: any;
  @ViewChild('descriptionContainer', { read: ViewContainerRef }) descriptionContainer!: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }


  // Fonction pour afficher la section du slider en fonction de la raison sélectionnée
  toggleReasonContent(reason: any) {
    // Désactiver la raison précédemment sélectionnée
    if (this.selectedReason) {
      this.selectedReason.active = false;

    }

    // Activer la raison sélectionnée
    reason.active = true;


    // Mettre à jour la raison sélectionnée
    this.selectedReason = reason;

    // Load the description component for the selected reason
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(reason.component);
    this.descriptionContainer.createComponent(componentFactory);
  }
}
