import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { VendedorInicioComponent } from './vendedor-inicio/vendedor-inicio.component';
import { authGuard } from './auth.guard';
import { NgModule } from '@angular/core';


export const routes: Routes = [
{
    component: HomeComponent,
    path: '',
    
},
{
    component: VendedorComponent,
    path: 'vendedor',
    
},
{
    component: VendedorInicioComponent,
    path: 'vendedor-inicio',
    canActivate: [authGuard],
    
}

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
