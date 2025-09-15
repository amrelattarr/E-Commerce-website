import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './Core/layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './Core/layouts/blank-layout/blank-layout.component';
import { LoginComponent } from './Core/auth/login/login.component';
import { RegisterComponent } from './Core/auth/register/register.component';
import { HomeComponent } from './features/home/home.component';
import { ProductsComponent } from './features/products/products.component';
import { BrandsComponent } from './features/brands/brands.component';
import { CategoriesComponent } from './features/categories/categories.component';
import { CartComponent } from './features/cart/cart.component';
import { DetailsComponent } from './features/details/details.component';
import { CheckoutComponent } from './features/checkout/checkout.component';
import { NotfoundComponent } from './features/notfound/notfound.component';
import { authGuard } from './Core/guards/auth-guard';
import { isLoggedGuard } from './Core/guards/is-logged-guard';
import { SubCategoriesComponent } from './features/categories/components/sub-categories/sub-categories.component';
import { WishlistComponent } from './features/wishlist/wishlist.component';
import { AllordersComponent } from './features/allorders/allorders.component';
import { ForgetpasswordComponent } from './Core/auth/forgetpassword/forgetpassword.component';
import { ProfileComponent } from './features/profile/profile.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '' , component: AuthLayoutComponent,canActivate:[isLoggedGuard] , children: [
        {path: 'login', component: LoginComponent , title: 'Login page'},
        {path: 'register', component: RegisterComponent , title: 'Register page'},
        {path: 'forgetpassword', component: ForgetpasswordComponent , title: 'Forget Password page'}
    ]},
    {path: '' , component: BlankLayoutComponent,canActivate:[authGuard] , children: [
        {path:'home',component:HomeComponent, title: 'Home page'},
        {path:'products', component:ProductsComponent, title: 'products page'},
        {path:'brands', component:BrandsComponent, title: 'brands page'},
        {path:'categories', component:CategoriesComponent, title: 'categories page'},
        {path:'subcategories/:id',component:SubCategoriesComponent, title: 'subcategories page'},
        {path:'wishlist',component:WishlistComponent, title: 'wishlist page'},
        {path:'cart', component:CartComponent, title: 'cart page'},
        {path:'allorders', component:AllordersComponent, title: 'All Orders page'},
        {path:'details/:id', component:DetailsComponent, title: 'details page'},
        {path:'checkout/:id', component:CheckoutComponent, title: 'checkout page'},
        {path:'profile', component:ProfileComponent, title: 'User Profile Page'},
        {path: '**', component: NotfoundComponent, title: 'Not Found page'}
    ]},
];
