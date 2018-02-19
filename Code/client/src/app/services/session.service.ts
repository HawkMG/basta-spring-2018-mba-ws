import { Session } from '../models/session';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class SessionsService {
    constructor(private readonly _http: HttpClient) {}

    public getAllSessions(): Observable<Array<Session>> {
        const url = this._getUrl('sessions');
        return this._http.get<Array<Session>>(url);
    }

    public getSessionById(id: string): Observable<Session> {
        const url = this._getUrl(`sessions/${id}`);
        return this._http.get<Session>(url);
    }

    private _getUrl(path: string): string {
        return `${environment.apiRoot}${path}`;
    }
}
