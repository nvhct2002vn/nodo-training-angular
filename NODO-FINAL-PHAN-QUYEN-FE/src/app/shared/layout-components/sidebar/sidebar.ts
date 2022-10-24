import { fromEvent } from "rxjs";

export function switcherArrowFn() {
  let slideLeft:any = document.querySelector('.slide-left');
  let slideRight:any = document.querySelector('.slide-right');

  fromEvent(slideLeft, 'click').subscribe(() => {
    slideClick();
  });
  fromEvent(slideRight, 'click').subscribe(() => {
    slideClick();
  });

  // used to remove is-expanded class and remove class on clicking arrow buttons
  function slideClick() {
    let slide = document.querySelectorAll<HTMLElement>('.slide');
    let slideMenu = document.querySelectorAll<HTMLElement>('.slide-menu');
    slide.forEach((element, index) => {
      if (element.classList.contains('is-expanded') == true) {
        element.classList.remove('is-expanded');
      }
    });
    slideMenu.forEach((element , index) => {
      if (element.classList.contains('open') == true) {
        element.classList.remove('open');
        element.style.display = 'none';
      }
    });
  }

  

  
  checkHoriMenu();

  let slideLeftLTR:any = document.querySelector('.slide-left');
  let slideRightLTR:HTMLElement | any = document.querySelector('.slide-right');

  fromEvent(slideLeftLTR, 'click').subscribe(() => {
    let menuWidth:any = document.querySelector<HTMLElement>('.main-body-1');
    let menuItems:any = document.querySelector<HTMLElement>('.menu-nav');
    let marginLeftValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginLeft.split('px')[0])) + 100;

    if (marginLeftValue < 0) {
      // menuItems.style.marginRight = 0;
      menuItems.style.marginLeft = Number(menuItems.style.marginLeft.split('px')[0]) + 100 + 'px';
      if (menuWidth?.offsetWidth < menuItems.scrollWidth) {
        document.querySelector('.slide-left')?.classList.remove('d-none');
        document.querySelector('.slide-right')?.classList.remove('d-none');
      }
    } else {
      document.querySelector('.slide-left')?.classList.add('d-none');
    }

    if (marginLeftValue >= 0) {
      // menuItems.style.marginRight = 0;
      menuItems.style.marginLeft = '0px';
      if (menuWidth?.offsetWidth < menuItems.scrollWidth) {
        document.querySelector('.slide-left')?.classList.add('d-none');
      }
    }
    
    // to remove dropdown when clicking arrows in horizontal menu
    let subNavSub = document.querySelectorAll<HTMLElement>('.sub-nav-sub');
    subNavSub.forEach((e) => {
      e.style.display = '';
    });
    let subNav = document.querySelectorAll<HTMLElement>('.nav-sub');
    subNav.forEach((e) => {
      e.style.display = '';
    });
    //
  });
  fromEvent(slideRightLTR , 'click').subscribe(() => {
   let menuWidth:any = document.querySelector<HTMLElement>('.main-body-1');
    let menuItems:any = document.querySelector<HTMLElement>('.menu-nav');
    let marginLeftValue =Math.ceil(Number(window.getComputedStyle(menuItems).marginLeft.split('px')[0])) - 100;
    let check = menuItems.scrollWidth - menuWidth?.offsetWidth;
    if (marginLeftValue > -check) {
      // menuItems.style.marginRight = 0;
      menuItems.style.marginLeft = Number(menuItems.style.marginLeft.split('px')[0]) - 100 + 'px';
    } else {
      // menuItems.style.marginRight = 0;
      menuItems.style.marginLeft = -check + 'px';
      document.querySelector('.slide-right')?.classList.add('d-none');
    }
    if (marginLeftValue != 0) {
      document.querySelector('.slide-left')?.classList.remove('d-none');
    }
    // to remove dropdown when clicking arrows in horizontal menu
    let subNavSub = document.querySelectorAll<HTMLElement>('.sub-nav-sub');
    subNavSub.forEach((e) => {
      e.style.display = '';
    });
    let subNav = document.querySelectorAll<HTMLElement>('.nav-sub');
    subNav.forEach((e) => {
      e.style.display = '';
    });
    //
  });

  let slideLeftRTL: any = document.querySelector('.slide-leftRTL');
  let slideRightRTL: any = document.querySelector('.slide-rightRTL');

  fromEvent(slideLeftRTL, 'click').subscribe(() => {
    let menuItems: any = document.querySelector<HTMLElement>('.menu-nav');
    let marginRightValue =
      Math.ceil(
        Number(window.getComputedStyle(menuItems).marginRight.split('px')[0])
      ) + 100;

    if (marginRightValue < 0) {
      menuItems.style.marginLeft = '0px';
      menuItems.style.marginRight = Number(menuItems.style.marginRight.split('px')[0]) + 100 + 'px';
        document.querySelector('.slide-rightRTL')?.classList.remove('d-none');
        document.querySelector('.slide-leftRTL')?.classList.remove('d-none');
    } else {
      document.querySelector('.slide-leftRTL')?.classList.add('d-none');
    }

    if (marginRightValue >= 0) {
      // document.querySelector('.slide-leftRTL')?.classList.add('d-none');
      menuItems.style.marginLeft = '0px';
      menuItems.style.marginRight = '0px';
    }
    // to remove dropdown when clicking arrows in horizontal menu
    let subNavSub = document.querySelectorAll<HTMLElement>('.sub-nav-sub');
    subNavSub.forEach((e) => {
      e.style.display = '';
    });
    let subNav = document.querySelectorAll<HTMLElement>('.nav-sub');
    subNav.forEach((e) => {
      e.style.display = '';
    });
    //
  });
  fromEvent(slideRightRTL, 'click').subscribe(() => {
    let menuWidth: any =
      document.querySelector<HTMLElement>('.main-body-1');
    let menuItems: any = document.querySelector<HTMLElement>('.menu-nav');
    let marginRightValue = Math.ceil( Number(window.getComputedStyle(menuItems).marginRight.split('px')[0])) - 100;
    let check = menuItems.scrollWidth + (0 - menuWidth?.offsetWidth);
    if (marginRightValue > -check) {
      menuItems.style.marginLeft = '0px';
      menuItems.style.marginRight = Number(menuItems.style.marginRight.split('px')[0]) - 100 + 'px';

    } else {
      menuItems.style.marginLeft = '0px';
      menuItems.style.marginRight = -check + 'px';
      document.querySelector('.slide-rightRTL')?.classList.add('d-none');
    }

    if (marginRightValue != 0) {
      document.querySelector('.slide-leftRTL')?.classList.remove('d-none');
    }
    // to remove dropdown when clicking arrows in horizontal menu
    let subNavSub = document.querySelectorAll<HTMLElement>('.sub-nav-sub');
    subNavSub.forEach((e) => {
      e.style.display = '';
    });
    let subNav = document.querySelectorAll<HTMLElement>('.nav-sub');
    subNav.forEach((e) => {
      e.style.display = '';
    });
  });
}
export function checkHoriMenu() {
 setTimeout(()=>{
  let menuWidth:any = document.querySelector<HTMLElement>('.main-body-1');
  let menuItems:any = document.querySelector<HTMLElement>('.menu-nav');

  let marginLeftValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginLeft.split('px')[0]));
  let marginRightValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginRight.split('px')[0]));
  let check = menuItems.scrollWidth + (0 - menuWidth?.offsetWidth);

  if (document.querySelector('body')?.classList.contains('ltr')) {
    menuItems.style.marginRight = 0;
  } else {
    menuItems.style.marginLeft = 0;
  }


  if (marginLeftValue != 0 ) {
    document.querySelector('.slide-right')?.classList.remove('d-none');
  } 
  if (marginRightValue != 0) {
    document.querySelector('.slide-rightRTL')?.classList.remove('d-none');
  } 
  if (marginLeftValue != -check) {
    document.querySelector('.slide-left')?.classList.remove('d-none');
  }
  if (marginRightValue != -check) {
    document.querySelector('.slide-leftRTL')?.classList.remove('d-none');
  }
  // if (menuItems.scrollWidth > menuWidth?.offsetWidth) {
  //   document.querySelector('.slide-left')?.classList.remove('d-none');
  //   document.querySelector('.slide-right')?.classList.remove('d-none');
  //   document.querySelector('.slide-leftRTL')?.classList.remove('d-none');
  //   document.querySelector('.slide-rightRTL')?.classList.remove('d-none');
  // }
  if ( marginRightValue == 0){
    document.querySelector('.slide-leftRTL')?.classList.add('d-none');
  }
  if (marginLeftValue !== 0){
    document.querySelector('.slide-left')?.classList.remove('d-none');
  }
  if (marginLeftValue == 0){
    document.querySelector('.slide-left')?.classList.add('d-none');
  }
  if (marginRightValue !== 0){
    document.querySelector('.slide-leftRTL')?.classList.remove('d-none');
  }
  if (menuItems.scrollWidth <= menuWidth?.offsetWidth) {
    document.querySelector('.slide-left')?.classList.add('d-none');
    document.querySelector('.slide-right')?.classList.add('d-none');
    document.querySelector('.slide-leftRTL')?.classList.add('d-none');
    document.querySelector('.slide-rightRTL')?.classList.add('d-none');
  } 
  else{
    document.querySelector('.slide-right')?.classList.remove('d-none');
    document.querySelector('.slide-rightRTL')?.classList.remove('d-none');
  }
 },200)
}

export function parentNavActive(){
  let slideItemActive = document.querySelector('.nav-sub-link.active:not([href="/"])');
  let SubslideItemActive = document.querySelector('.sub-nav-sub .nav-sub-link.active:not([href="/"])');
  if(slideItemActive){
    slideItemActive.parentElement?.parentElement?.parentElement?.classList.add('active')
    slideItemActive.parentElement?.classList.remove('active')
    
  }
  if(SubslideItemActive){
    SubslideItemActive.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.classList.add('active')
    SubslideItemActive.parentElement?.parentElement?.parentElement?.classList.add('active')
  }
}


