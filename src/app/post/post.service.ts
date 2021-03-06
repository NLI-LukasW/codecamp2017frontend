import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Post } from './model/Post';
import { Comment } from './model/Comment';


import 'rxjs/Rx'

@Injectable()
export class PostService {

    private url = '/post/available';
    private postCommentUrl = '/post/comment';
    private postUrl = '/post/create';

    private configUrl = '/api/validation/getProperties';


    private headers: Headers;
    private requestOptions: RequestOptions;

    constructor(private http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.requestOptions = new RequestOptions({ headers: this.headers });
    }

    public getValidationResultWithValidationMission(validaitonMission: String): Observable<String> {
        return this.http.post(this.url, JSON.stringify(validaitonMission), this.requestOptions).map((response: Response) => { console.log(response.json()); return response.json() }).catch(this.handleError);
    }


    public getAvailableConfiguration(): Observable<String> {
        let answer = this.http.get(this.configUrl).map((response: Response) => response.json()).catch(this.handleError);
        console.log(answer);
        return answer;
    }

    public postComment(comment: Comment): Observable<Comment> {
        let answer = this.http.post(this.postCommentUrl, JSON.stringify(comment), this.requestOptions).map(this.extractData).catch(this.handleError);
        console.log(answer);
        return answer;
    }

    public postCreate(post: Post): Observable<Post> {
        let answer = this.http.post(this.postUrl, JSON.stringify(post), this.requestOptions).map(this.extractData).catch(this.handleError);
        console.log(answer);
        return answer;
    }

    public checkAvailability(): Observable<String> {
        let answer = this.http.get(this.url).map(this.extractBody).catch(this.handleError);
        console.log(answer);
        return answer;
    }

    private extractData(res: Response) {
        let body = res.json();
        console.log(body);
        return body || {};
    }

    private extractBody(res: Response) {
        let body = res.text();  // If response is a JSON use json()
        if (body) {
            return body;
        } else {
            return {};
        }
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
