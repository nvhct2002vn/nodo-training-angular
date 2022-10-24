import { fromEvent } from 'rxjs';
import * as sidebarFn from '../sidebar/sidebar';
let body = document.querySelector('body');
let html = document.querySelector('html');

export function localStorageBackUp() {
  let html = document.querySelector('html')?.style;
  let body:any = document.querySelector('body');
  if (localStorage.getItem('dashplexlight-primary-color') !== null) {
    body?.classList.add('light-theme');
    let light = document.getElementById('myonoffswitch1') as HTMLInputElement;
    light.checked = true;

    body?.classList.remove('dark-theme', 'transparent-theme');
    html?.setProperty(
      '--primary-bg-color',
      localStorage.getItem('dashplexlight-primary-color')
    );
    html?.setProperty(
      '--primary-bg-hover',
      localStorage.getItem('dashplexlight-primary-color')
    );
    html?.setProperty(
      '--primary-bg-border',
      localStorage.getItem('dashplexlight-primary-color')
    );
  }
  if (localStorage.getItem('dashplexdark-primary-color') !== null) {
    body?.classList.add('dark-theme');
    let dark = document.getElementById('myonoffswitch2') as HTMLInputElement;
    dark.checked = true;

    body?.classList.remove('light-theme', 'transparent-theme');

    html?.setProperty(
      '--primary-bg-color',
      localStorage.getItem('dashplexdark-primary-color')
    );
    html?.setProperty(
      '--primary-bg-hover',
      localStorage.getItem('dashplexdark-primary-color')
    );
    html?.setProperty(
      '--primary-bg-border',
      localStorage.getItem('dashplexdark-primary-color')
    );
  }
  if (localStorage.getItem('dashplextransparent-primary-color') !== null) {
    body?.classList.add('transparent-theme');
    let transparent = document.getElementById('myonoffswitchTransparent') as HTMLInputElement; 
    transparent.checked = true;
    
    body?.classList.remove('light-theme', 'dark-theme');
    html?.setProperty(
      '--primary-bg-color',
      localStorage.getItem('dashplextransparent-primary-color')
    );
  }
  if (localStorage.getItem('dashplextransparent-bg-color') !== null) {
    body?.classList.add('transparent-theme');
    let transparent = document.getElementById(
      'myonoffswitchTransparent'
    ) as HTMLInputElement;
    transparent.checked = true;

    body?.classList.remove('light-theme', 'dark-theme');
    html?.setProperty(
      '--transparent-body',
      localStorage.getItem('dashplextransparent-bg-color')
    );
  }
  if (
    localStorage.getItem('dashplextransparent-bgImg-primary-color') !== null ||
    localStorage.getItem('dashplexBgImage') !== null
  ) {
    body?.classList.add('transparent-theme');
    let transparent = document.getElementById(
      'myonoffswitchTransparent'
    ) as HTMLInputElement;
    transparent.checked = true;

    body?.classList.remove('light-theme', 'dark-theme');
    let img: any = localStorage.getItem('dashplexBgImage');
    html?.setProperty(
      '--primary-bg-color',
      localStorage.getItem('dashplextransparent-bgImg-primary-color')
    );
    body?.classList.add(img);
  }
  if (localStorage.getItem('dashplexdark') !== null) {
    // add
    body?.classList.add('dark-theme');
    // remove
    body?.classList.remove('light-theme');
    body?.classList.remove('transparent-theme');
    body?.classList.remove('bg-img1');
    body?.classList.remove('bg-img2');
    body?.classList.remove('bg-img3');
    body?.classList.remove('bg-img4');
  }
  if (localStorage.getItem('dashplextransparent') !== null && localStorage.getItem('dashplexBgImage') == null) {
    // add
    body?.classList.add('transparent-theme');
    // remove
    body?.classList.remove('light-theme');
    body?.classList.remove('dark-theme');
    body?.classList.remove('bg-img1');
    body?.classList.remove('bg-img2');
    body?.classList.remove('bg-img3');
    body?.classList.remove('bg-img4');
  }
  if (localStorage.getItem('dashplexBgImage') !== null) {
    // add
    body?.classList.add('transparent-theme');
    body?.classList.add(localStorage.getItem('dashplexBgImage'));
    // remove
    body?.classList.remove('light-theme');
    body?.classList.remove('dark-theme');
    body?.classList.remove('header-light');

  }
  if (localStorage.getItem('dashplexrtl') !== null) {
    let styleId = document.querySelector('#style');
    //add
    body?.classList.add('rtl');
    document.querySelector('html')?.setAttribute('dir', 'rtl');
    styleId?.setAttribute(
      'href',
      './assets/plugins/bootstrap/css/bootstrap.rtl.css'
    );
    //remove
    body?.classList.remove('ltr');
    sidebarFn.checkHoriMenu();
  }
  if (localStorage.getItem('dashplexHorizontal') !== null) {
    let mainContent = document.querySelector('.main-content');
    let mainMenu = document.querySelector('.main-menu');
    let mainContainer = document.querySelector('.main-container');
    let mainContainer1 = document.querySelector('.main-container-1');
    let mainHeader = document.querySelector('.main-header');
    let mainBody1 = document.querySelector('.main-body-1');
    //add
    body?.classList.add('horizontalmenu');
    mainContent?.classList.add('hor-content');
    mainHeader?.classList.add('hor-header');
    mainContainer?.classList.add('container');
    mainContainer1?.classList.add('container');
    

    mainMenu?.classList.add('main-navbar', 'hor-menu');
    // remove
    mainHeader?.classList.remove('sticky', 'side-header');
    body?.classList.remove(
      'sidenav-toggled',
      'horizontalmenu-hover',
      'leftmenu',
      'main-body'
    );
    mainContent?.classList.remove('side-content');
    mainContainer?.classList.remove('container-fluid');
    mainContainer1?.classList.remove('main-sidebar-header');
    mainBody1?.classList.remove('main-sidebar-body');
    mainMenu?.classList.remove(
      'main-sidebar',
      'main-sidebar-sticky',
      'side-menu'
    );
    setTimeout(() => {
      sidebarFn.parentNavActive();
      let menuIcon = document.querySelectorAll('.menu-icon');
      menuIcon?.forEach((e) => e.classList.remove('sidemenu-icon'));
      menuIcon?.forEach((e) => e.classList.add('hor-icon') );
    }, 100);
    sidebarFn.checkHoriMenu();
  }
  if (localStorage.getItem('dashplexHorizontalHover') !== null) {
    let mainContent = document.querySelector('.main-content');
    let mainMenu = document.querySelector('.main-menu');
    let mainContainer = document.querySelector('.main-container');
    let mainContainer1 = document.querySelector('.main-container-1');
    let mainHeader = document.querySelector('.main-header');
    let mainBody1 = document.querySelector('.main-body-1');
    //add
    body?.classList.add('horizontalmenu', 'horizontalmenu-hover');
    mainContent?.classList.add('hor-content');
    mainContainer?.classList.add('container');
    mainContainer1?.classList.add('container');
    mainHeader?.classList.add('hor-header');
    mainMenu?.classList.add('main-navbar', 'hor-menu');
    // remove
    body?.classList.remove('leftmenu', 'main-body', 'sidenav-toggled');
    mainHeader?.classList.remove('sticky');
    mainContent?.classList.remove('side-content');
    mainContainer?.classList.remove('container-fluid');
    mainMenu?.classList.remove(
      'main-sidebar',
      'main-sidebar-sticky',
      'side-menu'
      );
      mainContainer1?.classList.remove('main-sidebar-header');
      mainBody1?.classList.remove('main-sidebar-body');
      
      setTimeout(() => {
        sidebarFn.parentNavActive();
        let menuIcon = document.querySelectorAll('.menu-icon');
        menuIcon.forEach((e) => e.classList.add('hor-icon'));
        menuIcon.forEach((e) => e.classList.remove('sidemenu-icon'));
    }, 100);
    sidebarFn.checkHoriMenu();
  }
}

export function handleThemeUpdate(cssVars: any) {
  const root: any = document.querySelector(':root');
  const keys = Object.keys(cssVars);

  keys.forEach((key) => {
    root.style.setProperty(key, cssVars[key]);
  });
}
// to check the value is hexa or not
const isValidHex = (hexValue: any) =>
  /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hexValue);

const getChunksFromString = (st: any, chunkSize: any) =>
  st.match(new RegExp(`.{${chunkSize}}`, 'g'));
// convert hex value to 256
const convertHexUnitTo256 = (hexStr: any) =>
  parseInt(hexStr.repeat(2 / hexStr.length), 16);
// get alpha value is equla to 1 if there was no value is asigned to alpha in function
const getAlphafloat = (a: any, alpha: any) => {
  if (typeof a !== 'undefined') {
    return a / 255;
  }
  if (typeof alpha != 'number' || alpha < 0 || alpha > 1) {
    return 1;
  }
  return alpha;
};
// convertion of hex code to rgba code
export function hexToRgba(hexValue: any, alpha = 1) {
  if (!isValidHex(hexValue)) {
    return null;
  }
  const chunkSize = Math.floor((hexValue.length - 1) / 3);
  const hexArr = getChunksFromString(hexValue.slice(1), chunkSize);
  const [r, g, b, a] = hexArr.map(convertHexUnitTo256);
  return `rgba(${r}, ${g}, ${b}, ${getAlphafloat(a, alpha)})`;
}

export function dynamicLightPrimaryColor(primaryColor: any, color: any) {
  primaryColor.forEach((item: any) => {
    const cssPropName = `--primary-${item.getAttribute('data-id')}`;
    const cssPropName1 = `--primary-${item.getAttribute('data-id1')}`;
    const cssPropName2 = `--primary-${item.getAttribute('data-id2')}`;
    handleThemeUpdate({
      [cssPropName]: hexToRgba(color),
      [cssPropName1]: hexToRgba(color),
      [cssPropName2]: hexToRgba(color),
    });
  });
}
export function dynamicDarkPrimaryColor(primaryColor: any, color: any) {
  primaryColor.forEach((item: any) => {
    const cssPropName = `--primary-${item.getAttribute('data-id')}`;
    const cssPropName1 = `--primary-${item.getAttribute('data-id1')}`;
    const cssPropName2 = `--primary-${item.getAttribute('data-id2')}`;
    handleThemeUpdate({
      [cssPropName]: hexToRgba(color),
      [cssPropName1]: hexToRgba(color),
      [cssPropName2]: hexToRgba(color),
    });
  });
}
export function dynamicTrasnsparentPrimaryColor(primaryColor: any, color: any) {
  primaryColor.forEach((item: any) => {
    const cssPropName = `--primary-${item.getAttribute('data-id')}`;
    const cssPropName1 = `--primary-${item.getAttribute('data-id1')}`;
    const cssPropName2 = `--primary-${item.getAttribute('data-id2')}`;
    handleThemeUpdate({
      [cssPropName]: hexToRgba(color),
      [cssPropName1]: hexToRgba(color),
      [cssPropName2]: hexToRgba(color),
    });
  });
}
export function dynamicBgTrasnsparentPrimaryColor(
  primaryColor: any,
  color: any
) {
  primaryColor.forEach((item: any) => {
    const cssPropName1 = `--transparent-${item.getAttribute('data-id5')}`;
    handleThemeUpdate({
      [cssPropName1]: hexToRgba(color),
    });
  });
}
export function dynamicBgImgTrasnsparentPrimaryColor(
  primaryColor: any,
  color: any
) {
  primaryColor.forEach((item: any) => {
    const cssPropName = `--primary-${item.getAttribute('data-id')}`;
    const cssPropName1 = `--primary-${item.getAttribute('data-id1')}`;
    const cssPropName2 = `--primary-${item.getAttribute('data-id2')}`;
    handleThemeUpdate({
      [cssPropName]: hexToRgba(color),
      [cssPropName1]: hexToRgba(color),
      [cssPropName2]: hexToRgba(color),
    });
  });
}

export function customClickFn() {
  let ltr = document.querySelectorAll('#myonoffswitch54');
  let rtl = document.querySelectorAll('#myonoffswitch55');
  let vertical = document.querySelectorAll('#myonoffswitch34');
  let horizontal = document.querySelectorAll('#myonoffswitch35');
  let horizontalHover = document.querySelectorAll('#myonoffswitch111');
  let lightBtn = document.getElementById('myonoffswitch1') as HTMLInputElement;
  let darkBtn = document.getElementById('myonoffswitch2') as HTMLInputElement;
  let TransparentBtn = document.getElementById('myonoffswitchTransparent') as HTMLInputElement;
  let lightMenu: any = document.querySelector('#myonoffswitch3')  as HTMLInputElement;
  let colorMenu: any = document.querySelector('#myonoffswitch4')  as HTMLInputElement;
  let darkMenu: any = document.querySelector('#myonoffswitch5')  as HTMLInputElement;
  let lightHeader: any = document.querySelector('#myonoffswitch6')  as HTMLInputElement;
  let darkHeader: any = document.querySelector('#myonoffswitch8')  as HTMLInputElement;
  let colorHeader: any = document.querySelector('#myonoffswitch7')  as HTMLInputElement;
  let defaultTheme: any = document.querySelector('#myonoffswitch9')  as HTMLInputElement;
  let boxed: any = document.querySelector('#myonoffswitch10')  as HTMLInputElement;
  let fixedLayout: any = document.querySelector('#myonoffswitch11')  as HTMLInputElement;
  let scrollableLayout: any = document.querySelector('#myonoffswitch12')  as HTMLInputElement;
  
  let mainContent = document.querySelector('.main-content');
  let menuIcon = document.querySelectorAll('.menu-icon');
  let mainMenu = document.querySelector('.main-menu');
  let mainContainer = document.querySelectorAll('.main-container');
  let mainContainer1 = document.querySelector('.main-container-1');
  let mainHeader = document.querySelector('.main-header');
  let mainBody1 = document.querySelector('.main-body-1');
  let styleId = document.querySelector('#style');
  // LTR
  fromEvent(ltr, 'click').subscribe(() => {
    ltrFn();
  });
  // RTL
  fromEvent(rtl, 'click').subscribe(() => {
    //add
    body?.classList.add('rtl');
    html?.setAttribute('dir', 'rtl');
    styleId?.setAttribute(
      'href',
      './assets/plugins/bootstrap/css/bootstrap.rtl.css'
    );
    //remove
    body?.classList.remove('ltr');
    sidebarFn.checkHoriMenu();
    localStorage.setItem('dashplexrtl', 'true');
    localStorage.removeItem('dashplexltr');
  });
  // Layouts
  fromEvent(vertical, 'click').subscribe(() => {
    verticalFn();
  });

  fromEvent(horizontal, 'click').subscribe(() => {
    horizontalFn();
  });
  function horizontalFn(){
    //add
    body?.classList.add('horizontalmenu');
    mainContent?.classList.add('hor-content');
    mainHeader?.classList.add('hor-header');
    mainContainer.forEach(e => e.classList.add('container'));
    mainContainer1?.classList.add('container');
    menuIcon?.forEach((e) => {
      e.classList.add('hor-icon');
    });
    mainMenu?.classList.add('main-navbar', 'hor-menu');
    // remove
    mainHeader?.classList.remove('sticky', 'side-header');
    body?.classList.remove(
      'sidenav-toggled',
      'horizontalmenu-hover',
      'leftmenu',
      'main-body'
    );
    mainContent?.classList.remove('side-content');
    mainContainer.forEach(e => e.classList.remove('container-fluid'));
    mainContainer1?.classList.remove('main-sidebar-header');
    mainBody1?.classList.remove('main-sidebar-body');
    mainMenu?.classList.remove(
      'main-sidebar',
      'main-sidebar-sticky',
      'side-menu'
    );
    menuIcon?.forEach((e) => {
      e.classList.remove('sidemenu-icon');
    });
    setTimeout(() => {
      sidebarFn.parentNavActive();
    }, 300);
    sidebarFn.checkHoriMenu();
    localStorage.setItem('dashplexHorizontal', 'true');
    localStorage.removeItem('dashplexvertical');
    localStorage.removeItem('dashplexHorizontalHover');
  }
  fromEvent(horizontalHover, 'click').subscribe(() => {
    horizontalHoverFn();
  });
  function horizontalHoverFn(){
    //add
    body?.classList.add('horizontalmenu', 'horizontalmenu-hover');
    mainContent?.classList.add('hor-content');
    mainContainer.forEach(e => e.classList.add('container'));
    mainContainer1?.classList.add('container');
    mainHeader?.classList.add('hor-header');
    mainMenu?.classList.add('main-navbar', 'hor-menu');
    menuIcon.forEach((e) => e.classList.add('hor-icon'));
    // remove
    body?.classList.remove('leftmenu', 'main-body', 'sidenav-toggled');
    mainHeader?.classList.remove('sticky');
    mainContent?.classList.remove('side-content');
    mainContainer.forEach(e => e.classList.remove('container-fluid'));
    mainMenu?.classList.remove(
      'main-sidebar',
      'main-sidebar-sticky',
      'side-menu'
    );
    mainContainer1?.classList.remove('main-sidebar-header');
    mainBody1?.classList.remove('main-sidebar-body');
    menuIcon.forEach((e) => e.classList.remove('sidemenu-icon'));

    setTimeout(() => {
      sidebarFn.parentNavActive();
    }, 300);
    sidebarFn.checkHoriMenu();

    localStorage.setItem('dashplexHorizontalHover', 'true');
    localStorage.removeItem('dashplexvertical');
    localStorage.removeItem('dashplexHorizontal');
  }
  // Theme
  fromEvent(lightBtn, 'click').subscribe(() => {
    lightBtn.checked = true;
    // add
    body?.classList.add('light-theme');
    // remove
    body?.classList.remove('dark-theme');
    body?.classList.remove('transparent-theme');
    body?.classList.remove('bg-img1');
    body?.classList.remove('bg-img2');
    body?.classList.remove('bg-img3');
    body?.classList.remove('bg-img4');
    localStorage.setItem('dashplexlight', 'true');
    localStorage.removeItem('dashplexdark');
    localStorage.removeItem('dashplextransparent');
    checkOptions();
  });
  fromEvent(darkBtn, 'click').subscribe(() => {
    darkBtn.checked = true;
    // add
    body?.classList.add('dark-theme');
    // remove
    body?.classList.remove('light-theme');
    body?.classList.remove('transparent-theme');
    body?.classList.remove('bg-img1');
    body?.classList.remove('bg-img2');
    body?.classList.remove('bg-img3');
    body?.classList.remove('bg-img4');
    localStorage.setItem('dashplexdark', 'true');
    localStorage.removeItem('dashplexlight');
    localStorage.removeItem('dashplextransparent');

    if(!(body?.classList.contains('header-light') || body?.classList.contains('color-header'))){
      body?.classList.add('header-dark')
    }
    checkOptions();
  });
  fromEvent(TransparentBtn, 'click').subscribe(() => {
    TransparentBtn.checked = true;
    // add
    body?.classList.add('transparent-theme');
    // remove
    body?.classList.remove('light-theme');
    body?.classList.remove('dark-theme');
    body?.classList.remove('bg-img1');
    body?.classList.remove('bg-img2');
    body?.classList.remove('bg-img3');
    body?.classList.remove('bg-img4');
    localStorage.setItem('dashplextransparent', 'true');
    localStorage.removeItem('dashplexdark');
    localStorage.removeItem('dashplexlight');
    checkOptions()
  });
  // layout width  style
  fromEvent(defaultTheme, 'click').subscribe(() => {
    body?.classList.add('layout-fullwidth');
    body?.classList.remove('layout-boxed');
    sidebarFn.checkHoriMenu();
  });
  fromEvent(boxed, 'click').subscribe(() => {
    body?.classList.add('layout-boxed');
    body?.classList.remove('layout-fullwidth');
    sidebarFn.checkHoriMenu();
  });
  // layout position
  fromEvent(fixedLayout, 'click').subscribe(() => {
    body?.classList.add('fixed-layout');
    body?.classList.remove('scrollable-layout');
  });
  fromEvent(scrollableLayout, 'click').subscribe(() => {
    body?.classList.add('scrollable-layout');
    body?.classList.remove('fixed-layout');
  });
  // menu
  fromEvent(lightMenu, 'click').subscribe(() => {
    body?.classList.add('light-menu');
    body?.classList.remove('color-menu');
    body?.classList.remove('dark-menu');
  });
  fromEvent(colorMenu, 'click').subscribe(() => {
    body?.classList.add('color-menu');
    body?.classList.remove('light-menu');
    body?.classList.remove('dark-menu');
  });
  fromEvent(darkMenu, 'click').subscribe(() => {
    body?.classList.add('dark-menu');
    body?.classList.remove('color-menu');
    body?.classList.remove('light-menu');
  });
  // header
  fromEvent(lightHeader, 'click').subscribe(() => {
    body?.classList.add('header-light');
    body?.classList.remove('color-header');
    body?.classList.remove('header-dark');
  });
  fromEvent(darkHeader, 'click').subscribe(() => {
    body?.classList.add('header-dark');
    body?.classList.remove('header-light');
    body?.classList.remove('color-header');
  });
  fromEvent(colorHeader, 'click').subscribe(() => {
    body?.classList.add('color-header');
    body?.classList.remove('header-light');
    body?.classList.remove('header-dark');
  });
}

export function removeForTransparent() {
  if (body?.classList.contains('header-light')) {
    body?.classList.remove('header-light');
  }
  // color header
  if (body?.classList.contains('color-header')) {
    body?.classList.remove('color-header');
  }
  // dark header
  if (body?.classList.contains('header-dark')) {
    body?.classList.remove('header-dark');
  }

  // light menu
  if (body?.classList.contains('light-menu')) {
    body?.classList.remove('light-menu');
  }
  // color menu
  if (body?.classList.contains('color-menu')) {
    body?.classList.remove('color-menu');
  }
  // dark menu
  if (body?.classList.contains('dark-menu')) {
    body?.classList.remove('dark-menu');
  }
}

export function checkOptions() {
  // light header
  if (body?.classList.contains('header-light')) {
    let headerLight = document.getElementById('myonoffswitch6') as HTMLInputElement;
    headerLight.checked = true;
  }
  // color header
  if (body?.classList.contains('color-header')) {
    let colorLight = document.getElementById('myonoffswitch7') as HTMLInputElement;
    colorLight.checked = true;
  }
  // dark header
  if (body?.classList.contains('header-dark')) {
    let headerDark = document.getElementById('myonoffswitch8') as HTMLInputElement;
    headerDark.checked = true;
  }

  // light menu
  if (body?.classList.contains('light-menu')) {
    let lightMenu = document.getElementById('myonoffswitch3') as HTMLInputElement;
    lightMenu.checked = true;
  }
  // color menu
  if (body?.classList.contains('color-menu')) {
    let colorMenu = document.getElementById('myonoffswitch4') as HTMLInputElement;
    colorMenu.checked = true;
  }
  // dark menu
  if (body?.classList.contains('dark-menu')) {
    let darkMenu = document.getElementById('myonoffswitch5') as HTMLInputElement;
    darkMenu.checked = true;
  }
  // rtl
  if (body?.classList.contains('rtl')) {
    let rtl = document.getElementById('myonoffswitch55') as HTMLInputElement;
    rtl.checked = true;
  }
  // horizontal
  if (body?.classList.contains('horizontalmenu')) {
    let horizontal = document.getElementById('myonoffswitch35') as HTMLInputElement;
    horizontal.checked = true;
  }
  // horizontalHover
  if (body?.classList.contains('horizontalmenu-hover')) {
    let horizontalHover = document.getElementById('myonoffswitch111') as HTMLInputElement;
    horizontalHover.checked = true;
  }
}

let myVarVal;
export function updateChanges() {
  let primaryColorVal = getComputedStyle(document.documentElement).getPropertyValue('--primary-bg-color').trim();

  //get variable
  myVarVal =
    localStorage.getItem('dashplexlight-primary-color') ||
    localStorage.getItem('dashplexdark-primary-color') ||
    localStorage.getItem('dashplextransparent-primary-color') ||
    localStorage.getItem('dashplextransparent-bgImg-primary-color') ||
    primaryColorVal;

  let colorData1 = hexToRgba(myVarVal, 0.1);
  document.querySelector('html')?.style.setProperty('--primary01', colorData1);
  let colorData2 = hexToRgba(myVarVal, 0.2);
  document.querySelector('html')?.style.setProperty('--primary02', colorData2);

  let colorData5 = hexToRgba(myVarVal, 0.5);
  document.querySelector('html')?.style.setProperty('--primary05', colorData5);
  let colorData8 = hexToRgba(myVarVal, 0.8);
  document.querySelector('html')?.style.setProperty('--primary08', colorData8);
  let colorData05 = hexToRgba(myVarVal, 0.05);
  document.querySelector('html')?.style.setProperty('--primary005', colorData05);
}
updateChanges()

export function verticalFn(){
  let mainContent = document.querySelector('.main-content');
  let menuIcon = document.querySelectorAll('.menu-icon');
  let mainMenu = document.querySelector('.main-menu');
  let mainContainer = document.querySelectorAll('.main-container');
  let mainContainer1 = document.querySelector('.main-container-1');
  let mainHeader = document.querySelector('.main-header');
  let mainBody1 = document.querySelector('.main-body-1');
  //add
  body?.classList.add('leftmenu', 'main-body');
  mainContent?.classList.add('side-content');
  mainHeader?.classList.add('sticky', 'side-header');
  mainMenu?.classList.add('main-sidebar', 'main-sidebar-sticky', 'side-menu');
  mainContainer.forEach(e => e.classList.add('container-fluid'));
  mainContainer1?.classList.add('main-sidebar-header');
  mainBody1?.classList.add('main-sidebar-body');
  menuIcon?.forEach((e) => {
    e.classList.add('sidemenu-icon');
  });
  //remove
  body?.classList.remove('horizontalmenu', 'horizontalmenu-hover');
  mainHeader?.classList.remove('hor-header');
  mainContent?.classList.remove('hor-content');
  mainContainer.forEach(e => e.classList.remove('container'));
  mainContainer1?.classList.remove('container');
  mainMenu?.classList.remove('main-navbar', 'hor-menu');
  menuIcon?.forEach((e) => {
    e.classList.remove('hor-icon');
  });

  document.querySelector('.slide-left')?.classList.add('d-none');
  document.querySelector('.slide-right')?.classList.add('d-none');
  document.querySelector('.slide-leftRTL')?.classList.add('d-none');
  document.querySelector('.slide-rightRTL')?.classList.add('d-none');

  localStorage.setItem('dashplexvertical', 'true');
  localStorage.removeItem('dashplexHorizontal');
  localStorage.removeItem('dashplexHorizontalHover');
}
export function ltrFn(){
  let styleId = document.querySelector('#style');
  //add
  body?.classList.add('ltr');
  html?.setAttribute('dir', 'ltr');
  styleId?.setAttribute(
    'href',
    './assets/plugins/bootstrap/css/bootstrap.css'
  );
  //remove
  body?.classList.remove('rtl');
  sidebarFn.checkHoriMenu();
  localStorage.setItem('dashplexltr', 'true');
  localStorage.removeItem('dashplexrtl');
}