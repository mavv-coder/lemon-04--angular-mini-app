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
  isPlayingGallery: boolean = false;
  intervalActivated: any;
  pictureListPagination: ApiPictureEntity[] = [];
  fistPaginationItem: number = 0;
  lastPaginationItem: number = 3;

  constructor(public galleryService: GalleryService) {
    this.galleryService.getApiPictureListPromise().then((list) => {
      this.pictureList = list;
      this.currentPicture = list[0];
      this.setPictureListPagination();
    });
  }

  setPictureListPagination(action = 'none'): void {
    if (action === 'sum' && this.lastPaginationItem < this.pictureList.length) {
      this.fistPaginationItem += 3;
      this.lastPaginationItem += 3;
    } else if (action === 'rest' && this.fistPaginationItem > 0) {
      this.fistPaginationItem -= 3;
      this.lastPaginationItem -= 3;
    }
    const newList = this.pictureList.slice(
      this.fistPaginationItem,
      this.lastPaginationItem
    );
    this.pictureListPagination = newList;
  }

  zoomIn(): void {
    this.currentScale = this.currentScale + 1;
  }

  zoomOut(): void {
    this.currentScale = this.currentScale - 1;
  }

  checkIfLastIndex(): boolean {
    return (
      this.currentPicture.id ===
      this.pictureList[this.pictureList.length - 1].id
    );
  }

  handleNextPic(): void {
    if (this.checkIfLastIndex()) {
      this.setCurrentPicture(this.pictureList[0]);
    } else {
      const index =
        this.pictureList.findIndex((el) => el.id === this.currentPicture.id) +
        1;
      this.setCurrentPicture(this.pictureList[index]);
    }
  }

  handlePlayGallery(): void {
    if (!this.isPlayingGallery) {
      this.isPlayingGallery = true;
      this.intervalActivated = setInterval(() => {
        this.handleNextPic();
      }, 2000);
    } else {
      this.isPlayingGallery = false;
      clearInterval(this.intervalActivated);
    }
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
