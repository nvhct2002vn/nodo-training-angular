import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, fromEvent, Subject} from 'rxjs';
import {debounceTime, takeUntil} from 'rxjs/operators';
import {Router} from '@angular/router';

// Menu
export interface Menu {
    headTitle?: string;
    headTitle2?: string;
    path?: string;
    title?: string;
    icon?: string;
    type?: string;
    badgeType?: string;
    badgeValue?: string;
    badgeClass?: string;
    active?: boolean;
    bookmark?: boolean;
    children?: Menu[];
}

@Injectable({
    providedIn: 'root',
})
export class NavService implements OnDestroy {
    private unsubscriber: Subject<any> = new Subject();
    public screenWidth: BehaviorSubject<number> = new BehaviorSubject(
        window.innerWidth
    );

    // Search Box
    public search: boolean = false;

    // Language
    public language: boolean = false;

    // Mega Menu
    public megaMenu: boolean = false;
    public levelMenu: boolean = false;
    public megaMenuColapse: boolean = window.innerWidth < 1199 ? true : false;

    // Collapse Sidebar
    public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;

    // For Horizontal Layout Mobile
    public horizontal: boolean = window.innerWidth < 991 ? false : true;

    // Full screen
    public fullScreen: boolean = false;

    constructor(private router: Router) {
        this.setScreenWidth(window.innerWidth);
        fromEvent(window, 'resize')
            .pipe(debounceTime(1000), takeUntil(this.unsubscriber))
            .subscribe((evt: any) => {
                this.setScreenWidth(evt.target.innerWidth);
                if (evt.target.innerWidth < 991) {
                    this.collapseSidebar = true;
                    this.megaMenu = false;
                    this.levelMenu = false;
                }
                if (evt.target.innerWidth < 1199) {
                    this.megaMenuColapse = true;
                }
            });
        if (window.innerWidth < 991) {
            // Detect Route change sidebar close
            this.router.events.subscribe((event) => {
                this.collapseSidebar = true;
                this.megaMenu = false;
                this.levelMenu = false;
            });
        }
    }

    ngOnDestroy() {
        this.unsubscriber.next;
        this.unsubscriber.complete();
    }

    private setScreenWidth(width: number): void {
        this.screenWidth.next(width);
    }

    MENUITEMS: Menu[] = [
        // {
        //     title: 'Angular Training',
        //     icon: 'grid',
        //     type: 'link',
        //     active: true,
        //     path: '/pages/training',
        // },
        // {
        //     title: 'Lesson One',
        //     icon: 'grid',
        //     type: 'link',
        //     active: true,
        //     path: '/pages/les-one',
        // },
        // {
        //     title: 'Lesson Two',
        //     icon: 'grid',
        //     type: 'link',
        //     active: true,
        //     path: '/pages/les-two',
        // },
        // {
        //     title: 'Lesson Three',
        //     icon: 'grid',
        //     type: 'link',
        //     active: true,
        //     path: '/pages/les-three',
        // },
        // {
        //     title: 'Lesson Four',
        //     icon: 'grid',
        //     type: 'link',
        //     active: true,
        //     path: '/pages/les-four',
        // },
        // {
        //     title: 'Lesson Five',
        //     icon: 'grid',
        //     type: 'link',
        //     active: true,
        //     path: '/pages/les-five',
        // },
        // {
        //     title: 'Tác Giả',
        //     icon: 'users',
        //     type: 'link',
        //     active: true,
        //     path: '/pages/tac-gia',
        // },
        // {
        //     title: 'Nhà Xuất Bản',
        //     icon: 'users',
        //     type: 'link',
        //     active: true,
        //     path: '/pages/nha-xuat-ban',
        // },
        // {
        //     title: 'Sách',
        //     icon: 'book',
        //     type: 'link',
        //     active: true,
        //     path: '/pages/sach',
        // },
        // {
        //     title: 'Bạn đọc',
        //     icon: 'user',
        //     type: 'link',
        //     active: true,
        //     path: '/pages/ban-doc',
        // },
        // {
        //     title: 'Mượn sách',
        //     icon: 'book',
        //     type: 'link',
        //     active: true,
        //     path: '/pages/muon-sach',
        // },
        {
            title: 'Phân quyền',
            icon: 'user',
            type: 'link',
            active: true,
            path: '/pages/phan-quyen',
        },
        // {
        //     title: 'Quản lý mapping danh mục',
        //     icon: 'share-2',
        //     type: 'link',
        //     active: false,
        //     path: '/category-mapping-management',
        // },
        // {
        //     title: 'Quản lý sản phẩm',
        //     icon: 'package',
        //     type: 'link',
        //     active: false,
        //     path: '/product-management',
        // },
        // {
        //     headTitle: 'DASHBOARD',
        // },
        // {
        //     title: 'Dashboard',
        //     icon: 'home',
        //     type: 'sub',
        //     active: true,
        //     children: [
        //         {path: '/dashboard/dashboard01', title: 'Dashboard01', type: 'link'},
        //         {path: '/dashboard/dashboard02', title: 'Dashboard02', type: 'link'},
        //     ],
        // },
        // {
        //     title: 'ECommerce',
        //     icon: 'shopping-bag',
        //     type: 'sub',
        //     active: false,
        //     children: [
        //         {path: '/eCommerce/dashboard', title: 'Dashboard', type: 'link'},
        //         {path: '/eCommerce/shop', title: 'Shop', type: 'link'},
        //         {
        //             path: '/eCommerce/product-details', title: 'Product Details',
        //             type: 'link',
        //         },
        //         {path: '/eCommerce/cart', title: 'Cart', type: 'link'},
        //         {path: '/eCommerce/checkout', title: 'Checkout', type: 'link'},
        //         {path: '/eCommerce/wishlist', title: 'Wishlist', type: 'link'},
        //         {path: '/eCommerce/add-products', title: 'Add Products', type: 'link'},
        //     ],
        // },
        // {
        //     title: 'Crypto Currencies',
        //     icon: 'credit-card',
        //     type: 'sub',
        //     active: false,
        //     children: [
        //         {path: '/crypto-currencies/dashboard', title: 'Dashboard', type: 'link'},
        //         {
        //             path: '/crypto-currencies/buy',
        //             title: 'Buy & Sell',
        //             type: 'link',
        //         },
        //         {path: '/crypto-currencies/market-captial', title: 'Market Captial', type: 'link'},
        //         {
        //             path: '/crypto-currencies/my-wallet',
        //             title: 'My wallet',
        //             type: 'link',
        //         },
        //         {
        //             path: '/crypto-currencies/currency-exchange',
        //             title: 'Currency exchange',
        //             type: 'link',
        //         },
        //     ],
        // },
        // {
        //     headTitle: 'COMPONENTS',
        // },
        //
        // {
        //     title: 'Elements',
        //     icon: 'database',
        //     type: 'sub',
        //     active: false,
        //     children: [
        //         {path: '/elements/accordion', title: 'Accordion', type: 'link'},
        //         {path: '/elements/alerts', title: 'Alerts', type: 'link'},
        //         {path: '/elements/avatar', title: 'Avatar', type: 'link'},
        //         {path: '/elements/buttons', title: 'Buttons', type: 'link'},
        //         {path: '/elements/breadcrumbs', title: 'Brudcrumbs', type: 'link'},
        //         {path: '/elements/badges', title: 'Badges', type: 'link'},
        //         {path: '/elements/collpase', title: 'Collpase', type: 'link'},
        //         {path: '/elements/dropdown', title: 'Dropdown', type: 'link'},
        //         {path: '/elements/list-group', title: 'List Group', type: 'link'},
        //         {path: '/elements/media-object', title: 'Media Object', type: 'link'},
        //         {path: '/elements/modals', title: 'Modals', type: 'link'},
        //         {path: '/elements/navigation', title: 'Navigation', type: 'link'},
        //         {path: '/elements/pagination', title: 'Pagination', type: 'link'},
        //         {path: '/elements/popover', title: 'Popover', type: 'link'},
        //         {path: '/elements/progress', title: 'Progress', type: 'link'},
        //         {path: '/elements/spinners', title: 'Spinners', type: 'link'},
        //         {path: '/elements/thumbnails', title: 'Thumbnails', type: 'link'},
        //         {path: '/elements/typography', title: 'Typography', type: 'link'},
        //         {path: '/elements/tooltips', title: 'Tooltips', type: 'link'},
        //         {path: '/elements/toast', title: 'Toast', type: 'link'},
        //         {path: '/elements/tags', title: 'Tags', type: 'link'},
        //         {path: '/elements/tabs', title: 'Tabs', type: 'link'},
        //     ],
        // },
        // {
        //     title: 'Advanced Ui',
        //     icon: 'shield',
        //     type: 'sub',
        //     active: false,
        //     children: [
        //         {path: '/advanced-ui/cards', title: 'Cards', type: 'link'},
        //         {path: '/advanced-ui/carousel', title: 'Carousel', type: 'link'},
        //         {path: '/advanced-ui/chat', title: 'Chat', type: 'link'},
        //         {path: '/advanced-ui/contacts', title: 'Contacts', type: 'link'},
        //         {path: '/advanced-ui/calendar', title: 'Calendar', type: 'link'},
        //         {path: '/advanced-ui/draggable-cards', title: 'Draggable cards', type: 'link'},
        //         {path: '/advanced-ui/notifications', title: 'Notifications', type: 'link'},
        //         {path: '/advanced-ui/ratings', title: 'Ratings', type: 'link'},
        //         {path: '/advanced-ui/search', title: 'Search', type: 'link'},
        //         {
        //             title: 'Sweet Alert', path: '/advanced-ui/sweet-alerts',
        //             type: 'link',
        //         },
        //         {path: '/advanced-ui/timeline', title: 'Timeline', type: 'link'},
        //         {path: '/advanced-ui/treeview', title: 'Treeview', type: 'link'},
        //         {path: '/advanced-ui/userlist', title: 'Userlist', type: 'link'},
        //     ],
        // },
        //
        // {
        //     headTitle: 'APPLICATIONS',
        // },
        // {
        //     title: 'Apps', icon: 'grid', type: 'sub', active: false, children: [
        //         {path: '/apps/widgets', title: 'Widgets', type: 'link'},
        //         {
        //             title: 'Maps',
        //             icon: 'navigation',
        //             type: 'sub',
        //             active: false,
        //             children: [{path: 'apps/maps/leaflet', title: 'Leaflet', type: 'link'}],
        //         },
        //         {
        //             title: 'Mail',
        //             icon: 'shopping-bag',
        //             type: 'sub',
        //             active: false,
        //             children: [
        //                 {path: 'apps/mail/mail-inbox', title: 'Mail Inbox', type: 'link'},
        //                 {path: 'apps/mail/mail-compose', title: 'Mail Compose', type: 'link'},
        //                 {path: 'apps/mail/view-mail', title: 'View Mail', type: 'link'},
        //             ],
        //         },
        //         {
        //             title: 'File manager',
        //             icon: 'shopping-bag',
        //             type: 'sub',
        //             active: false,
        //             children: [
        //                 {path: 'apps/filemanager/file-attachments', title: 'File Attachments', type: 'link'},
        //                 {path: 'apps/filemanager/file-details', title: 'File details', type: 'link'},
        //                 {path: 'apps/filemanager/file-manager', title: 'File manager', type: 'link'},
        //                 {path: 'apps/filemanager/file-managerlist', title: 'File managerlist', type: 'link'},
        //             ],
        //         },
        //         {
        //             title: 'Blog',
        //             icon: 'shopping-bag',
        //             type: 'sub',
        //             active: false,
        //             children: [
        //                 {path: 'apps/blog/blog-details', title: 'Blog Details', type: 'link'},
        //                 {path: 'apps/blog/blog-page', title: 'Blog Page', type: 'link'},
        //                 {path: 'apps/blog/blog-post', title: 'Blog Post', type: 'link'},
        //             ],
        //         },
        //     ],
        // },
        //
        // {
        //     headTitle: 'TABLES & ICONS',
        // },
        // {
        //     title: 'Icons',
        //     icon: 'activity',
        //     type: 'sub',
        //     active: false,
        //     children: [
        //         {path: '/icons/fontawsome', title: 'Font Awsome', type: 'link'},
        //         {
        //             path: '/icons/material-design-icons',
        //             title: 'Material Design Icons',
        //             type: 'link',
        //         },
        //         {
        //             path: '/icons/simple-line-icons',
        //             title: 'Simple Line Icons',
        //             type: 'link',
        //         },
        //         {path: '/icons/feather-icons', title: 'Feather Icons', type: 'link'},
        //         {path: '/icons/ionic-icons', title: 'Ionic Icons', type: 'link'},
        //         {path: '/icons/flag-icons', title: 'Flag Icons', type: 'link'},
        //         {path: '/icons/pe7-icons', title: 'Pe7 Icons', type: 'link'},
        //         {path: '/icons/themify-icons', title: 'Themify Icons', type: 'link'},
        //         {path: '/icons/tyicons', title: 'Typicons', type: 'link'},
        //         {path: '/icons/weather-icons', title: 'Weather Icons', type: 'link'},
        //         {path: '/icons/material-icons', title: 'Material Svgs', type: 'link'},
        //     ],
        // },
        // {
        //     title: 'Tables',
        //     icon: 'layout',
        //     type: 'sub',
        //     active: false,
        //     children: [
        //         {
        //             path: '/tables/default-tables',
        //             title: 'Default Table',
        //             type: 'link',
        //         },
        //         {path: '/tables/data-tables', title: 'Data Table', type: 'link'},
        //     ],
        // },
        //
        // {
        //     headTitle: 'FORMS & CHARTS',
        // },
        // {
        //     title: 'Charts',
        //     icon: 'bar-chart',
        //     type: 'sub',
        //     active: false,
        //     children: [
        //         {path: '/charts/apex-charts', title: 'apex-charts', type: 'link'},
        //         {path: '/charts/chartjs', title: 'chartjs-charts', type: 'link'},
        //         {path: '/charts/e-charts', title: 'Echarts', type: 'link'},
        //         {path: '/charts/chartlist', title: 'chartlist', type: 'link'},
        //     ],
        // },
        // {
        //     title: 'Forms',
        //     icon: 'file',
        //     type: 'sub',
        //     active: false,
        //     children: [
        //         {path: '/forms/form-elements', title: 'Form Elements', type: 'link'},
        //         {
        //             path: '/forms/advanced-forms',
        //             title: 'Advanced Forms',
        //             type: 'link',
        //         },
        //         {path: '/forms/form-layouts', title: 'Form Layouts', type: 'link'},
        //         {
        //             path: '/forms/form-validation',
        //             title: 'Form Validations',
        //             type: 'link',
        //         },
        //         {path: '/forms/form-wizards', title: 'Form Wizards', type: 'link'},
        //         {path: '/forms/form-editor', title: 'Form Editor', type: 'link'},
        //         {
        //             path: '/forms/form-element-sizes',
        //             title: 'Form Elements Sizes',
        //             type: 'link',
        //         },
        //     ],
        // },
        //
        // {
        //     headTitle: 'OTHER PAGES',
        // },
        //
        // {
        //     title: 'Pages',
        //     icon: 'layers',
        //     type: 'sub',
        //     active: false,
        //     children: [
        //         {
        //             title: 'Authentication',
        //             icon: 'shopping-bag',
        //             type: 'sub',
        //             active: false,
        //             children: [
        //                 {path: '/custom-pages/sign-in', title: 'Sign In', type: 'link'},
        //                 {path: '/custom-pages/sign-up', title: 'Sign Up', type: 'link'},
        //                 {
        //                     path: '/custom-pages/forget-password',
        //                     title: 'Forget Password',
        //                     type: 'link',
        //                 },
        //                 {
        //                     path: '/custom-pages/reset-password',
        //                     title: 'Reset Password',
        //                     type: 'link',
        //                 },
        //                 {
        //                     path: '/custom-pages/lockscreen',
        //                     title: 'Lock Screen',
        //                     type: 'link',
        //                 },
        //                 {
        //                     path: '/custom-pages/under-construction',
        //                     title: 'Under Construction',
        //                     type: 'link',
        //                 },
        //                 {
        //                     path: '/error-pages/error-404',
        //                     title: 'Error 404',
        //                     type: 'link',
        //                 },
        //                 {
        //                     path: '/error-pages/error-500',
        //                     title: 'Error 500',
        //                     type: 'link',
        //                 },
        //             ],
        //         },
        //
        //         {path: '/pages/profile', title: 'Profile', type: 'link'},
        //         {
        //             path: '/pages/notification-list',
        //             title: 'Notifiction List',
        //             type: 'link',
        //         },
        //         {path: '/pages/about-us', title: 'About us', type: 'link'},
        //         {path: '/pages/settings', title: 'Settings', type: 'link'},
        //
        //         {path: '/pages/invoice', title: 'Invoice', type: 'link'},
        //         {path: '/pages/pricing', title: 'Pricing', type: 'link'},
        //         {path: '/pages/gallery', title: 'Gallery', type: 'link'},
        //         {path: '/pages/faqs', title: 'FAQS', type: 'link'},
        //         {path: '/pages/empty-page', title: 'Empty Page', type: 'link'},
        //         {path: '/switcher', title: 'Switcher', type: 'link'},
        //
        //         {
        //             path: '/custom-pages/success-message',
        //             title: 'Success message',
        //             type: 'link',
        //         },
        //         {
        //             path: '/custom-pages/danger-message',
        //             title: 'Danger message',
        //             type: 'link',
        //         },
        //         {
        //             path: '/custom-pages/warning-message',
        //             title: 'Warning message',
        //             type: 'link',
        //         },
        //     ],
        // },
        // {
        //     title: 'Submenu',
        //     icon: 'menu',
        //     type: 'sub',
        //     active: false,
        //     children: [
        //         {path: '', title: 'Submenu-1', type: 'empty'},
        //         {
        //             title: 'Submenu-2',
        //             type: 'sub',
        //             active: false,
        //             children: [
        //                 {path: '', title: 'Submenu-2.1', type: 'empty'},
        //                 {path: '', title: 'Submenu-2.2', type: 'empty'},
        //             ],
        //         },
        //     ],
        // },
        // {
        //     title: 'Utilities',
        //     icon: 'clock',
        //     type: 'sub',
        //     active: false,
        //     children: [
        //         {path: '/utilities/background', title: 'Background', type: 'link'},
        //         {path: '/utilities/border', title: 'Border', type: 'link'},
        //         {path: '/utilities/display', title: 'Display', type: 'link'},
        //         {path: '/utilities/flex', title: 'Flex', type: 'link'},
        //         {path: '/utilities/height', title: 'Height', type: 'link'},
        //         {path: '/utilities/margin', title: 'Margin', type: 'link'},
        //         {path: '/utilities/padding', title: 'Padding', type: 'link'},
        //         {path: '/utilities/position', title: 'Position', type: 'link'},
        //         {path: '/utilities/width', title: 'Width', type: 'link'},
        //         {path: '/utilities/extras', title: 'Extras', type: 'link'},
        //     ],
        // },
    ];

    // Array
    items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
