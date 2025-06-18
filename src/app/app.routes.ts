import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
{path:'',redirectTo:'login',pathMatch:'full'},
{
    path:'login',
    component:LoginComponent
},
{
    path:'dashboard',
    loadComponent:()=>import('../app/pages/dashboard/dashboard.component').then(c=>c.DashboardComponent),
    canActivate: [authGuard]
},
{
    path:'account-statement',
    loadComponent:()=>import('../app/pages/account-statement/account-statement.component').then(c=>c.AccountStatementComponent),
    canActivate: [authGuard]
},
{
    path:'profile',
    loadComponent:()=>import('../app/pages/profile/profile.component').then(c=>c.ProfileComponent),
    canActivate: [authGuard]
},
{
    path:'multi-market',
    loadComponent:()=>import('../app/pages/multi-market/multi-market.component').then(c=>c.MultiMarketComponent),
    canActivate: [authGuard]
},
{
    path:'profit-loss',
    loadComponent:()=>import('../app/pages/profit-lose/profit-lose.component').then(c=>c.ProfitLoseComponent),
    canActivate: [authGuard]
},
{
    path:'unsettled-bets',
    loadComponent:()=>import('../app/pages/unsettled-bets/unsettled-bets.component').then(c=>c.UnsettledBetsComponent),
    canActivate: [authGuard]
},
{
    path:'rules',
    loadComponent:()=>import('../app/pages/rules/rules.component').then(c=>c.RulesComponent),
    canActivate: [authGuard]
},
{
    path:'stake-settings',
    loadComponent:()=>import('../app/pages/edit-stake/edit-stake.component').then(c=>c.EditStakeComponent),
    canActivate: [authGuard]
}


];
