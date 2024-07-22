import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landingPage.component';
import { OuerMenuComponent } from './ouer-menu/ouer-menu.component';
import { HowToOrderComponent } from './how-to-order/how-to-order.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule,
    LandingPageComponent,
    OuerMenuComponent,
    HowToOrderComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
