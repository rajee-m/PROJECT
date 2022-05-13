import { NgModule } from "@angular/core";
import { Routes, RouterModule} from    "@angular/router";
import { AppComponent } from "./app.component";
import { RegistrationComponent } from "./registration/registration.component";

import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";

const routes:Routes = 
    [       
        //this is local
        {path: '', component: AppComponent},
        {path: 'registration', component: RegistrationComponent},
        {path: 'registration/:id', component: RegistrationComponent},
        {path: '**', component:PagenotfoundComponent}
];

@NgModule(
    {
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    }
)

export class AppRoutingModule
{

}