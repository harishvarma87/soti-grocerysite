import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { ProductspageComponent } from './pages/productspage/productspage.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';


const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full' },
    {path:'home', component:HomepageComponent, canActivate:[AuthGuard]},
    {path:'products/:catId', component:ProductspageComponent, canActivate:[AuthGuard]},
    {path:'products/sub/:catId/:subId', component:ProductspageComponent, canActivate:[AuthGuard]},
    {path:'products/details/:id', component:ProductDetailsPageComponent, canActivate:[AuthGuard]},
    {path:'about', component:AboutpageComponent, canActivate:[AuthGuard]},
    {path:'contact', component:ContactpageComponent},
    {path:'register', component:RegisterPageComponent},
    {path:'login', component:LoginPageComponent},
    {path:'**', component:ErrorComponent }

]


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]

})
export class AppRoutingModule{}