import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'bookdirectory', pathMatch: 'full', redirectTo: '/bookdirectory/home' },
  { path: '', pathMatch: 'full', redirectTo: '/bookdirectory/home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
