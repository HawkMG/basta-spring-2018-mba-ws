import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SessionListComponent } from './session.list/session.list.component';
import { SessionsService } from './services/session.service';
import { SessionDetailsComponent } from './session.details/session.details.component';

const ROUTES = [
    {
        path: '',
        component: SessionListComponent,
    },
    {
        path: 'sessions/:id',
        component: SessionDetailsComponent,
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/',
    },
];
@NgModule({
    declarations: [AppComponent, NavComponent, SessionListComponent, SessionDetailsComponent],
    imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(ROUTES, { useHash: true })],
    providers: [
        // {provide: SessionsService, useClass: SessionsService}
        SessionsService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
