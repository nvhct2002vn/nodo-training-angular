import {environment} from "../../../environments/environment";

export const ApiConstant = {
    login: `${environment.service.authDomain}/api/login`,
    logout: `${environment.service.authDomain}/api/logout`,
    category: `${environment.service.apiDomain}/api/categories`,
    product: `${environment.service.apiDomain}/api/products`,


    author: `${environment.service.localhost}/api/v1/author`,
    publisher: `${environment.service.localhost}/api/v1/publisher`,
    book: `${environment.service.localhost}/api/v1/book`,
    borrow_books: `${environment.service.localhost}/api/v1/borrow-books`,
    you_read: `${environment.service.localhost}/api/v1/you-read`,

    nhom_quyen: `${environment.service.localhost}/api/v1/nhom-quyen`,
    nhom_quyen_menu: `${environment.service.localhost}/api/v1/nhom-quyen-menu`,
    menu_item: `${environment.service.localhost}/api/v1/menu-item`,
    right_item: `${environment.service.localhost}/api/v1/right-item`,
    right_quyen: `${environment.service.localhost}/api/v1/right-quyen`,

};
