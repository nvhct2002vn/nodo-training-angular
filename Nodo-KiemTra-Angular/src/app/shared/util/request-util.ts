import { HttpParams } from '@angular/common/http';

export interface Pagination {
    page: number;
    size: number;
    sort: string[];
}

export interface Search {
    query: string;
}

export interface SearchWithPagination extends Search, Pagination {}

export const createRequestOption = (req?: any): HttpParams => {
    let options: HttpParams = new HttpParams();

    // console.log('abc', this.req);
    if (req) {
        Object.keys(req).forEach(key => {
            if (key !== 'sort' && req[key] !== null && req[key] !== undefined) {
                options = options.set(key, req[key]);
            }
        });

        if (req.sort) {
            req.sort.forEach((val?: any) => {
                options = options.append('sort', val);
            });
        }
    }
    return options;
};
