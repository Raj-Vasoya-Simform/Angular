import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../services/photos.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css'],
})
export class PhotoShowComponent implements OnInit{
  photoUrl: any = '';

  constructor(private photoService: PhotosService) {
    this.fetchPhoto();
  }

  ngOnInit(): void {

  }

  fetchImage() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.photoService.getPhoto().subscribe((response) => {
      this.photoUrl = response.urls.regular;
    });
  }
}
