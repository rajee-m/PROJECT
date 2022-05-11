import { NgModule } from "@angular/core";
import { Routes, RouterModule} from    "@angular/router";
import { AppComponent } from "./app.component";
import { RegistrationComponent } from "./registration/registration.component";
import { UserdetailsComponent } from "./userdetails/userdetails.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";

const routes:Routes = [
        {path: 'registration', component: RegistrationComponent},
        {path: 'registration/:id', component: RegistrationComponent},
        {path: 'userdetails', component: UserdetailsComponent},
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