import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiConstant} from "../constants/api-constant";

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

    login(username: string, password: string): Observable<any> {
        return this.http.post(
            ApiConstant.login,
            {
                username,
                password,
            }
        );
    }

    logout(): Observable<any> {
        return this.http.post(ApiConstant.logout, {}, httpOptions);
    }

    //Start Category
    searchCategory(req: any, pageable: any): Observable<any> {
        let options = httpOptions;
        options['params'] = pageable;
        return this.http.post(`${ApiConstant.category}/search`, req, options);
    }

    createCategory(data: any): Observable<any> {
        return this.http.post(ApiConstant.category, data, httpOptions);
    }

    updateCategory(data: any, id: number): Observable<any> {
        return this.http.put(`${ApiConstant.category}/${id}`, data, httpOptions);
    }

    deleteCategory(id: number): Observable<any> {
        return this.http.delete(`${ApiConstant.category}/${id}`, httpOptions);
    }

    getAllCategory(): Observable<any> {
        return this.http.get(ApiConstant.category, httpOptions);
    }

    //End Category

    //Start Product
    searchProduct(req: any, pageable: any): Observable<any> {
        httpOptions['params'] = pageable;
        return this.http.post(`${ApiConstant.product}/search`, req, httpOptions);
    }

    createProduct(data: any): Observable<any> {
        return this.http.post(ApiConstant.product, data, httpOptions);
    }

    updateProduct(data: any, id: number): Observable<any> {
        return this.http.put(`${ApiConstant.product}/${id}`, data, httpOptions);
    }

    deleteProduct(id: number): Observable<any> {
        return this.http.delete(`${ApiConstant.product}/${id}`, httpOptions);
    }

    //End Product

    getAllAuthor() {
        return this.http.get(ApiConstant.author, httpOptions);
    }
}
