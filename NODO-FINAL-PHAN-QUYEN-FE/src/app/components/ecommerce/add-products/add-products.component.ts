import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
// dropzone
files: File[] = [];
filesPreview: File[] = [];
filesDisabled: File[] = [];
disable = true;

onSelect(event:any) {
  // console.log(event);
  this.files.push(...event.addedFiles);
}

onRemove(event:any) {
  // console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}
onPreviewFileSelect(event:any) {
  // console.log(event);
  this.filesPreview.push(...event.addedFiles);
}

onPreviewFileRemove(event:any) {
  // console.log(event);
  this.filesPreview.splice(this.filesPreview.indexOf(event), 1);
}
}
