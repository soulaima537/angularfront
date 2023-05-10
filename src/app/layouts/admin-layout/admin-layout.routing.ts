import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { Appeloffre } from 'src/app/core/Model/appeloffre';
import { AppeloffreAvComponent } from 'src/app/modules/appeloffre/appeloffre-av/appeloffre-av.component';
import { ListappelComponent } from 'src/app/modules/appeloffre/listappel/listappel.component';
import { DemandeachatoperateurComponent } from 'src/app/modules/appeloffre/demandeachatoperateur/demandeachatoperateur.component';
import { ListdevisComponent } from 'src/app/modules/appeloffre/listdevis/listdevis.component';
import { ListoffreComponent } from 'src/app/modules/appeloffre/listoffre/listoffre.component';
import { DetailsappelComponent } from 'src/app/modules/appeloffre/detailsappel/detailsappel.component';
import { DetailsdevisComponent } from 'src/app/modules/appeloffre/detailsdevis/detailsdevis.component';
import { CreateappelComponent } from 'src/app/modules/appeloffre/createappel/createappel.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'appelOffre',           component: ListappelComponent },
    { path: 'demandeAchatOperateur',           component: DemandeachatoperateurComponent},
    {path:'devisfournisseur',      component:ListdevisComponent },
    {path:'listeoffre', component:ListoffreComponent},
    {path:'detaildevis', component:DetailsdevisComponent},
    {path:'calcul', component:AppeloffreAvComponent},
    {path:'getbyetat', component:DetailsappelComponent},
    {path:'ajouterAppel' , component:CreateappelComponent}
];
