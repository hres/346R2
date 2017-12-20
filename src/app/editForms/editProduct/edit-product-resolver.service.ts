// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/take';
// import { Injectable }             from '@angular/core';
// import { Observable }             from 'rxjs/Observable';
// import { Router, Resolve, RouterStateSnapshot,
//          ActivatedRouteSnapshot } from '@angular/router';
// import {ViewProductComponent} from '../../views/viewProduct/view-product.component'
// // import { Crisis, CrisisService }  from './crisis.service';

// @Injectable()
// export class ProductDetailResolver {
//   constructor(private router: Router) {}

//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//     let id = route.paramMap.get('id');
//     this.router.navigate(['/view-product'], id);
//     // return this.cs.getCrisis(id).take(1).map(crisis => {
//     //   if (crisis) {
//     //     return crisis;
//     //   } else { // id not found
//     //     this.router.navigate(['/searchengine']);
//     //     return null;
      
   
//   }
// }