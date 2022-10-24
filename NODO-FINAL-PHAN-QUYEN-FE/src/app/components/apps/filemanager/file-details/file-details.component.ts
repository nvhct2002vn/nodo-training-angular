import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { OwlOptions } from 'ngx-owl-carousel-o';
import { fromEvent } from "rxjs";
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-file-details',
  templateUrl: './file-details.component.html',
  styleUrls: ['./file-details.component.scss']
})
export class FileDetailsComponent implements OnInit {
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


    let ltr = document.querySelectorAll('#myonoffswitch54');
    let rtl = document.querySelectorAll('#myonoffswitch55');
    fromEvent(ltr, 'click').subscribe(() => {
      this.customOptions = { ...this.customOptions, rtl: false } // this will make the carousel refresh
    })
    fromEvent(rtl, 'click').subscribe(() => {
      this.customOptions = { ...this.customOptions, rtl: true } // this will make the carousel refresh
    })

    if(document.querySelector('body')?.classList.contains('rtl')){
      this.customOptions = { ...this.customOptions, rtl: true } // this will make the carousel refresh
    }
  }

  customOptions: OwlOptions = {
    loop: true,
    rtl: false,
    navText: [ '<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>' ],
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  slidesStore = [
    {id: '1', src:'./assets/img/files/01.jpg', alt: 'img', size:'45kb', title: 'Image1.jpg'},
    {id: '2', src:'./assets/img/files/02.jpg', alt: 'img', size:'92kb', title: 'Image2.jpg'},
    {id: '3', src:'./assets/img/files/03.jpg', alt: 'img', size:'56kb', title: 'Image3.jpg'},
    {id: '4', src:'./assets/img/files/04.jpg', alt: 'img', size:'68kb', title: 'Image4.jpg'},
    {id: '5', src:'./assets/img/files/05.jpg', alt: 'img', size:'244kb', title: 'Image5.jpg'},
    {id: '5', src:'./assets/img/files/06.jpg', alt: 'img', size:'258kb', title: 'Image6.jpg'},
  ]

  
 
}

  const data = [
    {
      srcUrl: './assets/img/files/01.jpg',
      previewUrl: './assets/img/files/01.jpg'
    },
    {
      srcUrl: './assets/img/files/02.jpg',
      previewUrl: './assets/img/files/02.jpg'
    },
    {
      srcUrl: './assets/img/files/03.jpg',
      previewUrl: './assets/img/files/03.jpg'
    },
    {
      srcUrl: './assets/img/files/04.jpg',
      previewUrl: './assets/img/files/04.jpg'
    },
    {
      srcUrl: './assets/img/files/05.jpg',
      previewUrl: './assets/img/files/05.jpg'
    },
    {
      srcUrl: './assets/img/files/06.jpg',
      previewUrl: './assets/img/files/06.jpg'
    }
  ];