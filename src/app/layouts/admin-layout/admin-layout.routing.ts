import { AuthGuard } from '../../helper/auth.guard';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { Role } from '../../models/role'
import {SimulationComponent} from "../../simulation/simulation.component";
import {ProfilComponent} from "../../profil/profil.component";
import {ProfilIndividusComponent} from "../../profil-individus/profil-individus.component";

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent  
    //     }]
    // }

    // { path: 'dashboard',      component: DashboardComponent , canActivate: [AuthGuard],data: { roles: [Role.bo,Role.admin,Role.user] }  },
    { path: 'dashboard',      component: DashboardComponent , canActivate: [AuthGuard]},
    { path: 'user-profile',   component: UserProfileComponent , canActivate: [AuthGuard] /*,data: { roles: [Role.bo,Role.admin,Role.user] }*/  },
    { path: 'table-list',     component: TableListComponent , canActivate: [AuthGuard],data: { roles: [Role.bo,Role.admin,Role.user] }  },
    { path: 'typography',     component: TypographyComponent , canActivate: [AuthGuard],data: { roles: [Role.bo,Role.admin,Role.user] }  },
    { path: 'icons',          component: IconsComponent , canActivate: [AuthGuard],data: { roles: [Role.bo,Role.admin,Role.user] }  },
    { path: 'maps',           component: MapsComponent , canActivate: [AuthGuard],data: { roles: [Role.bo,Role.admin,Role.user] }  },
    { path: 'notifications',  component: NotificationsComponent , canActivate: [AuthGuard],data: { roles: [Role.bo,Role.admin,Role.user] }  },
    { path: 'upgrade',        component: UpgradeComponent , canActivate: [AuthGuard],data: { roles: [Role.bo,Role.admin,Role.user] }  },
    { path: 'simulation',     component: SimulationComponent, canActivate: [AuthGuard]},
    { path: 'profile',        component: ProfilComponent, canActivate: [AuthGuard]},

];
