import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvancedFormsComponent } from './advanced-forms/advanced-forms.component';
import { FormEditorComponent } from './form-editor/form-editor.component';
import { FormElementSizesComponent } from './form-element-sizes/form-element-sizes.component';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormWizardsComponent } from './form-wizards/form-wizards.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'advanced-forms',
        component: AdvancedFormsComponent
      },
      {
        path: 'form-elements',
        component: FormElementsComponent
      },
      {
        path: 'form-element-sizes',
        component: FormElementSizesComponent
      },
      {
        path: 'form-layouts',
        component: FormLayoutsComponent
      },
      {
        path: 'form-editor',
        component: FormEditorComponent
      },
      {
        path: 'form-validation',
        component: FormValidationComponent
      },
      {
        path: 'form-wizards',
        component: FormWizardsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
