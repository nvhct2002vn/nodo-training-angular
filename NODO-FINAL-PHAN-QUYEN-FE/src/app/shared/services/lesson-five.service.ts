import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class LessonFiveService {

    readonly MOCK_API_URL = 'https://6321344dfd698dfa29f3e429.mockapi.io/api/v1';

    constructor(private http: HttpClient) {
    }

    getStaffs(): Observable<any> {
        return this.http.get(`${this.MOCK_API_URL}/staffs`);
    }

    getDetailStaff(id: number): Observable<any> {
        return this.http.get(`${this.MOCK_API_URL}/staffs/${id}`);
    }

    addStaff(payload: any): Observable<any> {
        return this.http.post(`${this.MOCK_API_URL}/staffs`, payload);
    }

    updateStaff(payload: any): Observable<any> {
        return this.http.put(`${this.MOCK_API_URL}/staffs/${payload.id}`, payload);
    }

    deleteStaff(id: number): Observable<any> {
        return this.http.delete(`${this.MOCK_API_URL}/staffs/${id}`);
    }
}
