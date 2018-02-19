import { Component, OnInit } from '@angular/core';
import { Session } from '../models/session';
import { SessionsService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-session-list',
    templateUrl: './session.list.component.html',
})
export class SessionListComponent implements OnInit {
    public sessions: Array<Session>;

    constructor(private readonly _sessionsService: SessionsService, private readonly _router: Router) {}

    public ngOnInit(): void {
        this._sessionsService.getAllSessions().subscribe(result => (this.sessions = result));
    }

    // DI Sample
    // public foo(): void {
    // test
    // const sut = new SpeakerListComponent(new FakeSessionService(), null);
    // real runtime
    //  const sut = new SpeakerListComponent(new SessionService(), null);
    // }

    public navigateToSession(id: string) {
        this._router.navigate(['sessions', id]);
    }
}
