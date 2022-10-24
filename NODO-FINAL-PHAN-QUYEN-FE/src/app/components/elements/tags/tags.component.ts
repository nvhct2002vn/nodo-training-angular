import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  selectedCompanies:any;
  companies: any[] = [];
  companiesNames = ['jQuery', 'Angular', 'Vue', 'React'];

  ngOnInit() {
      this.companiesNames.forEach((c, i) => {
          this.companies.push({ id: i, name: c });
      });
  }

  addTagFn(name:any) {
      return { name: name, tag: true };
  }

}
