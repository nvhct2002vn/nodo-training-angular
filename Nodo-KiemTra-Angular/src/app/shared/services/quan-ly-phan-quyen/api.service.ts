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

    getAllNhomQuyen() {
        return this.http.get(ApiConstant.nhom_quyen, httpOptions);
    }

    getAllNhomQuyenMenu() {
        return this.http.get(ApiConstant.nhom_quyen_menu, httpOptions);
    }

    getAllRightItem() {
        return this.http.get(ApiConstant.right_item, httpOptions);
    }

    getAllRightQuyen() {
        return this.http.get(ApiConstant.right_quyen, httpOptions);
    }

    getByNhomQuyenMenu(id: number) {
        return this.http.get(`${ApiConstant.right_quyen}/getByNhomQuyenMenu?idNhomQuyenMenu=${id}`, httpOptions);
    }

    createRightQuyen(data: any[]) {
        return this.http.post(ApiConstant.right_quyen, data, httpOptions);
    }

    deleteById(idNQ: number, idDel: any[]) {
        return this.http.get(`${ApiConstant.right_quyen}/deleteById?idNQ=${idNQ}&idDel=${idDel}`, httpOptions);
    }
}
