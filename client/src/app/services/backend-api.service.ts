import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  private base_url = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  getMetadata(filepath: string): Observable<any> {
    return this.httpClient.get(this.base_url + "/file?path=" + encodeURIComponent(filepath)).pipe(tap(x => console.log(x)))
  }

  getAllFiles(filepath: string): Observable<any> {
    return this.httpClient.get(this.base_url + "/files_recursively?path=" + encodeURIComponent(filepath))
  }

  writeMetadata(filepath: string, tags: any): Observable<any> {
    const url = this.base_url + "/modifyTags?path=" + encodeURIComponent(filepath);
    return this.httpClient.post(url, tags).pipe(tap(x => console.log(x)))
  }
}
