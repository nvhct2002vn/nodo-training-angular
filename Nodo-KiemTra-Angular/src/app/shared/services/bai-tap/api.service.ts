import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiConstant} from "../../constants/api-constant";

let httpOptions: any = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
        // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type,Accept, x-client-key, x-client-token, x-client-secret"
    })
};

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private http: HttpClient) {
    }

    getAllNhaXuatBan() {
        return this.http.get(ApiConstant.publisher, httpOptions);
    }

    createNhaXuatBan(data: any) {
        return this.http.post(ApiConstant.publisher, data, httpOptions);
    }

    updateNhaXuatBan(id: number, data: any) {
        return this.http.put(`${ApiConstant.publisher}/${id}`, data, httpOptions);
    }

    deleteNhaXuatBan(id: number) {
        return this.http.delete(`${ApiConstant.publisher}/${id}`, httpOptions);
    }

    //------- tác giả -------

    getAllTacGia() {
        return this.http.get(ApiConstant.author, httpOptions);
    }

    createTacGia(data: any) {
        return this.http.post(ApiConstant.author, data, httpOptions);
    }

    updateTacGia(id: number, data: any) {
        return this.http.put(`${ApiConstant.author}/${id}`, data, httpOptions);
    }

    deleteTacGia(id: number) {
        return this.http.delete(`${ApiConstant.author}/${id}`, httpOptions);
    }

    //---------------- sách --------------
    getAllSach() {
        return this.http.get(ApiConstant.book, httpOptions);
    }

    createSach(data: any) {
        return this.http.post(ApiConstant.book, data, httpOptions);
    }

    updateSach(id: number, data: any) {
        return this.http.put(`${ApiConstant.book}/${id}`, data, httpOptions);
    }

    deleteSach(id: number) {
        return this.http.delete(`${ApiConstant.book}/${id}`, httpOptions);
    }

    //---------------- Bạn đọc --------------
    getAllBanDoc() {
        return this.http.get(ApiConstant.you_read, httpOptions);
    }

    createBanDoc(data: any) {
        return this.http.post(ApiConstant.you_read, data, httpOptions);
    }

    updateBanDoc(id: number, data: any) {
        return this.http.put(`${ApiConstant.you_read}/${id}`, data, httpOptions);
    }

    deleteBanDoc(id: number) {
        return this.http.delete(`${ApiConstant.you_read}/${id}`, httpOptions);
    }

    //---------------- sách --------------
    getAllMuonSach() {
        return this.http.get(ApiConstant.borrow_books, httpOptions);
    }

    createMuonSach(data: any) {
        return this.http.post(ApiConstant.borrow_books, data, httpOptions);
    }

    updateMuonSach(id: number, data: any) {
        return this.http.put(`${ApiConstant.borrow_books}/${id}`, data, httpOptions);
    }

    deleteMuonSach(id: number) {
        return this.http.delete(`${ApiConstant.borrow_books}/${id}`, httpOptions);
    }

}
