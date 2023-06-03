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
    return this.httpClient.get(this.base_url + "/file?path=" + encodeURIComponent(filepath));
  }

  getAllFiles(filepath: string): Observable<any> {
    return this.httpClient.get(this.base_url + "/files_recursively?path=" + encodeURIComponent(filepath))
  }

  findFile(filename: string, directory: string): Observable<any> {
    const url = this.base_url + "/findFile";
    const queryParams = `?name=${encodeURIComponent(filename)}&dir=${encodeURIComponent(directory)}`;
    return this.httpClient.get(url + queryParams)
  }

  writeMetadata(filepath: string, tags: any): Observable<any> {
    const url = this.base_url + "/modifyTags?path=" + encodeURIComponent(filepath);
    return this.httpClient.post(url, tags);
  }

  renameFile(oldFile: string, pattern: string): Observable<boolean> {
    const url = this.base_url + "/renameFile";
    return this.httpClient.post<boolean>(url, { currentFile: oldFile, pattern: pattern });
  }
}
