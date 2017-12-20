import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { EditProductComponent } from './edit-product.component';

@Injectable()
export class SaveFormsGuard implements CanDeactivate<EditProductComponent> {

  canDeactivate(component: EditProductComponent) {

        return component.areFormsSaved ? component.areFormsSaved() : true;


}
}