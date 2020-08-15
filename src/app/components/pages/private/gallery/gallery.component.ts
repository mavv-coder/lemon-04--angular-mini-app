import { Component } from '@angular/core';
import { GalleryService } from '../../../../services/gallery/gallery.service';
import { ApiPictureEntity } from '../../../../../api';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  pictureList: ApiPictureEntity[] = [];
  currentScale: number = 1;
  currentPicture: ApiPictureEntity;

  constructor(public galleryService: GalleryService) {
    this.galleryService.getApiPictureListPromise().then((list) => {
      this.pictureList = list;
      this.currentPicture = list[0];
    });
  }

  zoomIn(): void {
    this.currentScale = this.currentScale + 1;
  }

  zoomOut(): void {
    this.currentScale = this.currentScale - 1;
  }

  handleNextPic(): void {
    const index =
      this.pictureList.findIndex((el) => el.id === this.currentPicture.id) + 1;
    this.setCurrentPicture(this.pictureList[index]);
  }

  handlePreviousPic(): void {
    const index =
      this.pictureList.findIndex((el) => el.id === this.currentPicture.id) - 1;
    this.setCurrentPicture(this.pictureList[index]);
  }

  setCurrentPicture(pic: ApiPictureEntity): void {
    this.currentPicture = pic;
  }
}
