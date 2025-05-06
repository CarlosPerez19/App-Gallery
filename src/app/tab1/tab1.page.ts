import { Component } from '@angular/core';
import {Photo50QualityService} from '../services/photo50-quality.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  constructor(public photo50QualityService: Photo50QualityService) {}

  async ngOnInit() {
    await this.photo50QualityService.loadSaved();
  }

  async addPhotoToGallery50Quality() {
    await this.photo50QualityService.addNewToGallery50Quality();
  }
}
