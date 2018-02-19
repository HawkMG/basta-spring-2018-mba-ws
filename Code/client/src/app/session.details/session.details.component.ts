import { Component, OnInit } from '@angular/core';
import { Session } from '../models/session';
import { SessionsService } from '../services/session.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-session-details',
    templateUrl: './session.details.component.html',
})
export class SessionDetailsComponent implements OnInit {
    public session: Session;

    constructor(
        private readonly _sessionsService: SessionsService,
        private readonly _router: Router,
        private readonly _activatedRoute: ActivatedRoute
    ) {}

    public ngOnInit(): void {
        const id = this._activatedRoute.snapshot.params['id'];
        this._sessionsService.getSessionById(id).subscribe(session => (this.session = session));
    }
}
