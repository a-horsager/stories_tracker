import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private Projects = new ReplaySubject(1);
  public projects$ = this.Projects.asObservable();
  private serveraddress = 'http://127.0.0.1:5001/'

  constructor(private http: HttpClient) { }

  getProjects() {
    var apifunc = 'getprojects'
    var posturl: string;

    posturl = this.serveraddress + apifunc;

    console.log(posturl)

    var res = this.http.post(posturl, undefined);

    res.subscribe(x => {
      this.Projects.next(x);
    })
  }
}
