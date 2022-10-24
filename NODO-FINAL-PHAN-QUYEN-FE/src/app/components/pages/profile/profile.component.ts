import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {

  items!: GalleryItem[];

  imageData = data;

  constructor(public gallery: Gallery, public lightbox: Lightbox) {
  }

  ngOnInit(): void {
     /** Basic Gallery Example */

    // Creat gallery items
    this.items = this.imageData.map((item:any) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));


    /** Lightbox Example */

    // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);
  }

}

const data = [
  {
    srcUrl: './assets/img/media/1.jpg',
    previewUrl: './assets/img/media/1.jpg'
  },
  {
    srcUrl: './assets/img/media/2.jpg',
    previewUrl: './assets/img/media/2.jpg'
  },
  {
    srcUrl: './assets/img/media/3.jpg',
    previewUrl: './assets/img/media/3.jpg'
  },
  {
    srcUrl: './assets/img/media/4.jpg',
    previewUrl: './assets/img/media/4.jpg'
  },
  {
    srcUrl: './assets/img/media/5.jpg',
    previewUrl: './assets/img/media/5.jpg'
  },
  {
    srcUrl: './assets/img/media/6.jpg',
    previewUrl: './assets/img/media/6.jpg'
  },
  {
    srcUrl: './assets/img/media/7.jpg',
    previewUrl: './assets/img/media/7.jpg'
  },
  {
    srcUrl: './assets/img/media/8.jpg',
    previewUrl: './assets/img/media/8.jpg'
  },
  {
    srcUrl: './assets/img/media/9.jpg',
    previewUrl: './assets/img/media/9.jpg'
  },
  {
    srcUrl: './assets/img/media/10.jpg',
    previewUrl: './assets/img/media/10.jpg'
  },
  {
    srcUrl: './assets/img/media/11.jpg',
    previewUrl: './assets/img/media/11.jpg'
  },
  {
    srcUrl: './assets/img/media/14.jpg',
    previewUrl: './assets/img/media/14.jpg'
  }
];