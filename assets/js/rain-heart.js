var supportsES6 = function() {
  try {
    new Function("(a = 0) => a");
    return true;
  }
  catch (err) {
    return false;
  }
}();




var Let_it_fall = (function (window, document) {

  'use strict';
  if (!supportsES6) return false;

  // A (snow) field contains many (snow) flakes
  const fieldName = 'field';
  const flakeName = 'flake';

  const month = new Date().getMonth(); // 0-11 !!!
  const date = new Date().getDate(); // 1-31

  // Note: SVGs need to be the same size. 
  // Here they are all designed at 96 x 96 px

  const flakes = {

    christmas : {
      name : 'christmas',
      animation : 'falling-christmas',

      // Any specific styles
      style : '',

      // Activation period boolean test
      active : (month === 11),

      // The different size of each flake (rem).
      // They appear left to right repeated across the screen in this order too:
      sizes : [8, 6, 4, 2],

      // Note: the whole SVG isn't here because the size needs to be dynamically generated upon HTML insertion.
      // If multiple paths are required for one SVG then group <g> them. 
      path : [
        // snowflake - tesco.com
        `<path d="M38.2 65l1-9.7 6.8-3.8v7.8L38.2 65zM58 65l-8-5.8v-7.8l6.8 4 1 9.6zm9.8-17l-9 3.8-6.6-3.8 7-4 8.6 4zm-39.4 0l8.7-4 7 4-6.5 3.8-8.8-4zM58 31l-1 9.6-7 4v-8l8-5.7zm-19.8 0l7.8 5.5v8l-6.7-3.8-1-9.8zm12-17L60.5 3.5l2.8 3-13.3 13v12L63 22l-1.7 16 10.2-5.7 5-18.3 4 1-4 14.4 12.2-7 2 3.6-12 7L93 37l-1.3 3.8-18.2-5-10.2 5.8L78 48l-14.7 6.4 10 5.6 18-5 1.2 4-14.3 3.8L90.6 70l-2 3.5L76 66.3l4 14.4-4 1-5-18.2-9.8-5.6L63 73.3 50 64v11.6L63.3 89l-2.8 3L50 81.5V96h-4V81.5L35.4 92l-2.8-3L46 75.8V64.4l-12.8 9.3 1.7-16-10.5 6-5 18-4-1 4-14.3-12.5 7L5 70l13-7.2-14.5-4 1-3.8L23 60l10-5.7L18.3 48l14.4-6.4-10.2-6-18.3 5-1-3.8 14.3-4-12.2-7 2-3.4 12.2 7-4-14.4 4-1 5 18.2 10.4 6-2-16 13 9.2V19.8L32.4 6.3l3-2.8L46 14V0h4v14z"/>`
      ]
    },

    valentines : {
      name : 'valentines',
      animation : 'falling-christmas',
      style : '',
      active : (month === 1 && date === 14),

       // Overide for testing
      active : true,
      
      sizes : [1, 2, 1, 3, 2, 3, 2, 4, 3, 4, 3, 5],
      path : [
        // heart
        `<path d="M48 19.8C57.9 1 77.7 1 87.6 10.4c9.9 9.4 9.9 28.2 0 47C80.6 71.5 62.8 85.6 48 95 33.2 85.6 15.3 71.5 8.4 57.4c-9.9-18.8-9.9-37.6 0-47C18.4 1 38.1 1 48 19.8zm0 3.6C56.6 7 73.9 7 82.5 15.2c8.7 8.2 8.7 24.6 0 41C76.5 68.5 61 80.8 48 89c-13-8.2-28.5-20.5-34.5-32.8-8.7-16.4-8.7-32.8 0-41C22 7 39.4 7 48 23.4z"/>`
      ]
    },

    starwars : {
      name : 'starwars',
      animation : 'falling-starwars',
      style : 'opacity:1',
      active : (month === 4 && date === 4),
      sizes : [3, 3, 5, 5, 7, 7],
      path : [
        // x-wing
        `<path d="M11.2 65.2c-1.8-1.14-3.7-2.1-5.55-3.14-.48-.27-1.58-.75-1.77-1.4-.53-1.78 2.4-2.8 3.28-3.4 4.63-3.05 4.4-3.47 9.47-5.8 1.5-.68 3.12-.6 4.54-1.5 2.35-1.34 4.43-3.08 6.7-4.56 1.5-1 3.67-2.03 5.03-3.28-.48-1.1-.67-.9-1.52-1.76-.03-.43-.2-.72-.12-1.26-.63-.88-1.92-.78-2.78-1-2.95-.8-5.94-1.53-8.83-2.54-2.04.83-2.2.33-4.28 1-.67.23-1.2.85-1.9.9-.58.04-1.07-.5-1.64-.64-2.75.66-5.28 1.54-8.08 2.15-.35.15-.33.67-.5 1-.42-.07-.62-.38-1-.5-.67.04-1.27 0-1.77-.12V37.7c1.34-.08 2.5.02 3.27.5 2.73-.63 5.22-1.5 7.83-2.26 1.28-1.33 1.58-.62 3.28-1.26.48-.57-.7-.32-.38-1.14 2.62-.43 3.37-1.1 6.08-.93 3.7.3 5.82 1.2 9.44 1.9 2.8.5 5.65.9 8.45 1.4.3-1.2-1.15-2-1.9-2.5-2.83-2-5.7-3.9-8.57-5.9-3.27-2.2-6.45-4.4-9.6-6.4-.46.3-.92.5-1.75.4-.42 0-.53-.4-.63-.8-2.77.26-5.27.3-8.2.5-.44.4-.38 1.24-.76 1.66-.47.07-.16-.6-.5-.64-.5-.63-1.48-.7-2.15-1.15 0-.64.2-1.06.6-1.4.4-.1 2.2.5 2.4.9 2.2-.15 6.6-.85 8-.75.4-.08.3-.6.5-.9.6-.27 1.3-.17 2-.27 2.7-.4 5.7-1.2 8.4-.37.1.4.3.87.2 1.5-.7.17-1.6.1-1.7.9 5 2.5 9.95 5.1 14.77 7.8 2.5.1 5.44-1.54 7.95-1.13.43-.1.73-.4 1.1-.6 2.1-.14 4.1-1 6.43-.5.56.43.6 1.68.4 2.5-1.37 1.14-4.77.96-4.8 3.05.65.1 2.16-.6 2.8-.8l.22-.27c4.2-.84 7 1.2 10.96 3 .15.7.06 1.57.27 2.16 2.16-.43 3.86-2.2 6.1-2.3 1.26 0 2.5 1.7 1.44 2.7-.72.7-1.9.86-2.5 1.77.05.6.45.9.4 1.6.43.06.8.18 1.37.1.98 1.5 3.5 1.86 2.98 4.44.6.66 2.15.9 2.9 1.16 3.3 1.05 6.56 2.14 9.83 3.25.94.33 2.55 1.17 3.65.76 1.54-.5 1.46-2 3.53-1.4-.05.6.37 1.4 0 1.9 0 .5.8.2.64.9.17.4-.25.3-.4.5-.56.8-1.1 1.7-1.6 2.5-2.1.37-1.76 1.1-3.8 1.78 0 .58.66.5.66 1-.1.6.2 1.47-.1 1.8-.4.17-.8-.14-1.2-.3-.35-.13-.6-.46-1-.6-.75-.2-1.26.25-2-.1-.16-1.1.46-1.3.74-1.9.6.1 1.53-.2 1.9.1.3-.3.6-.6.8-.96 1.5-2.5-3.9-2.68-4.7-2.85-6.92-1.5-11.9-2.8-18.67-4.9-.1.14.16.3.3.4.84.7 1.57 1.6 2.6 1.97.6.1.83-.17 1.25-.26 4.1 3.7 8.5 7 12.8 10.5 1.5 1.27 3.03 2.5 4.52 3.8.37.3.84.6 1 1-.3.8-.4 1.7-1 2.2-.04.2.06.53 0 .73 0 .1-.22.1-.25.2-.26.62-1.04 1.6-1.9 1.8-.06.6-.2 1.2-.5 1.6-.53 0-1.03.58-1.5.26-1.2 1.2-2.1 2.7-2.65 4.3.22 1.37 1.85 1.7.1 3.13-.35.1-.4-.33-.5-.5-.44-.5-.85-1.1-1.4-1.5h-1.4c.18-.72.57-1.25 1.14-1.62.54 0 1.2-.1 1.24.4.6-.74 2.16-3.8 2.4-4.56.2-.44-.1-.3-.14-.75-.4-1 .3-1.96 1-2.14-.2-.5.3-1.1.2-1.65-.13-.4-.55-.62-.9-.9-1.6-1.1-3.25-2.2-4.9-3.25-3.36-2.2-6.75-4.3-10.1-6.45-.55.1-.44.84-.9 1-3 .2-4.8-1.06-6.8 1.3-2.53-.08-2.5-.2-4.92-.77-.4-.7-.8-1.45-1.25-2.15.2-2.1.3-2 .86-4.02-1.3.7-2.1 1.9-3.25 2.8-.32-.2-.82-.2-1.12-.4-6.77 2.6-13.9 5.1-20.9 7.8-1 .4-1.9.65-2.62 1.5-5.6 1.5-5.42 2.06-11.1 3.3-1 .2-3.24.2-4.2-.4z"/>`,
        // tie-fighter
        `<path d="M75.07.68c-1.5 1-5.2 4.98-5.37 5.8-.12.47-.15.2 1.35 9.54C73.3 29.96 74.2 36.1 74.1 36.6c-.1.54-.46.78-1.84 1.23-1.47.47-12.23-.75-13.02-.84-2.2-.3-4.04-1.2-6.45-2.5-4.7-2.6-9.9-3-13.9 2.5-1.1 1.4-3.5 3.9-5.7 5.3-.5.2-7.2 3.3-9.3 5.2-1.7 1.6-4 2.1-4.6 1.1-.1-.1-.6-2.2-1.2-4.6-4.4-17.7-6.3-23.9-8.2-25.8-1.1-1-5.7-3-7.9-3.3-1.2-.2-1.7.1-1.7 1 0 .7 1.15 8.8 4.2 29.4 1.33 9 1.84 11.3 4.5 21 4.5 16.2 8.1 27.3 9.32 28.6.74.8 1.8.5 4.66-1.37 2.65-1.7 2.55-1.44 2-5.58L23.6 76.2l-1.8-13.86c-.77-5.84-.77-5.7 0-6 1.4-.54 3.25-.63 4.4-.2 1.1.4 5.5.47 8.64.14 2.98-.3 3.6-.1 5.84 1.6 2.6 2.1 3.8 2.4 7.87 2.4 2.8 0 3.46-.1 5.53-1.1 2.95-1.4 4.26-2.6 4.9-4.6.6-1.8 1.4-2.6 4.18-4.1.56-.3 5.9-2.7 8.8-4.8 1.35-.9 3.3-1.2 3.9-.5.3.3.32.47 2.12 6.8 4.1 14.17 7.36 24.97 7.7 25.5.4.64 9.1 2.8 9.5 2.4.5-.42.6.64-1.03-9.82-1.56-9.9-2.55-16.6-3.7-25.3-.9-6.4-5.8-20.53-6.4-22.2-4-11.4-7.22-20.6-7.62-21.3-.38-.75-.9-.96-1.46-.6z"/>`
      ]
    },

    halloween : {
      name : 'halloween',
      animation : 'falling-halloween',
      style : '',
      active : (month === 9 && date === 31),
      sizes : [3,4,5,6,7,8,9,10,11],
      path : [
        // ghost1 - https://chicfetti.com/downloads/ghost-svg-file/
        `<path d="M49.2 1.3c4 1.3 7.6 6 11.2 14.6l1.2 3.6 1.2-2.1c2.4-4.3 6.7-9.7 9-11.2 8.9-5.2 21.3 13 13.7 19.4-2.4 2.4-5.1 1.5-8.8-2.2-2.7-2.7-3-2.7-5.1.6-8.8 11.8-12.4 39.7-6.4 46 4.9 4.6 14.3.6 13-5.4-.9-3.3-5.1-2.1-5.1 1.8 0 1.8-.3 1.8-1.5.6-5.8-4.5 2.7-14 9.7-10.3 8.4 4.3 9.7 19.7 2 29-8.4 10-27.4 12.5-39.2 4.6-9.7-6.3-14.9-17.5-16-35.7-1-10.6-3.1-18.2-6.7-23-1.3-2.1-1.3-2.1-4.6.3-5.4 3.6-7.9 4-8.8 1-1.8-5.2 2.2-15 6.7-17.3 4-1.9 7.3-.6 14.2 6l1.8 1.8 1-3.9C34.6 7.4 42.4-.8 49.1 1.3zm-5.1 21.8c-2.5 1.5-1.9 7 .6 8.2 3.9 2.1 7-2.4 4.5-6.7-1-1.8-3.6-2.7-5.1-1.5zm4.5-9c-.6.6-1 2-.3 3 .3.3.3.3.3-.3l.9-.6c.6 0 1.2.9.6 1.2v.9c1 0 2.1-1.2 2.1-2.1.6-2.5-2-4.3-3.6-2.1zm-6.7-.7c-1.5 1-1.2 4.3.3 4.6 1 .3 1 .3.6-.6-.6-1 .6-1.8 1.3-1l.3.7c0 1.2.6-.6.6-1.5 0-2.2-1.6-3-3-2.2z"/>`,
        // ghost 2 - http://clipart-library.com/clip-art/ghost-silhouette-images-12.htm
        `<path d="M53 1c-2.7.2-8.4 5.9-9.7 11l-2.8 5.5S36.2 27.8 36 27.9c-.7.3-1.3 1-2 1.3-1.4.6-2.1-2-2.2-2-1.7-1.8-3-4-5.2-5.1-2-1-4.2-.7-6.2-.3-1 .3-3 2.7-3.2 3.1l-2 3.5A133.4 133.4 0 009.6 41c-.8 2.5-1.9 5-2.8 7.4-1 2.6-2.6 5-3.1 7.8-.6 3.7 3.3 6.1 10.5-.2 1.3-1.2 6-1 3.2 6.3-1.3 3.6-2 5-2.6 8.8-.4 2 .3 5.3 1 6.5.6 1 3.3.5 3.3.5.8-.3 3.3-2.7 3.3-2.7s8.2-8.3 9-8.2c.2 0 .7-.2 1 .3 1.8 2.5.8 5.7.6 8.4 0 .3.2 1 .6 1.1 1.6.3 3 .2 3.8-1 2.7-4.2 5.8-5.1 6.3-3.4.5 2.2-1.3 7.2-1.4 7.6-1 2-2.3 10.3-.6 13 1.6 2.6 2.2 1.7 2.8 1.6 3.2-.9 5.7-3.4 5.7-3.4.8-.9 1.8-2.8 2.1-3.9 1.6-5 3.7-10 4.6-15.3 1-6 3-4.8 3.6-4.7.3 0 1.4 1.2 1.3 2.5 0 2.5-1.7 9.7 1.6 8.8 6.1-1.7 11.1-10.7 12-17 .6-3.8 0-3.8.9-7.5.1-.7.9-3.2 1.6-2.9 1.8 1 2 3.5 1 6.8-.2.6-.7 2.4-.3 3 0 .2 1.8 1 3 .4C84 60.5 85 58 86 56a56.2 56.2 0 006.4-25 9 9 0 00-4.3-7.7c-2.1-1.5-5-1.6-7.2-1-4 .9-5 2-8.7 3.5-2 .8-5 2-7.1.6a5.3 5.3 0 01-2-3.2c-.3-4.9 5.7-20.5-3.9-21.7l-6-.3zm6 23.8c2.6.3 4.5 5.7 1.1 6.1-2.3.3-4.1-2-6.4-2.5-1.9-.5-2.6 3.5-4.3 2.8-1.1-.4-1-1.8-.9-2.7.1-2.3 1.6-3.7 3-4l7.5.3zm-.7-11.9c.2 0 .7.4 1.1.7 1.2 1 1.4 4.5 1 5l-1.1 1c-.2.2 0 1.2 0 1.4-.3.6-1.1.7-1.8.7-.4 0-1-1.2-1-1.3-1-1.8-.7-4-.2-5.8.3-.8 1-2 2-1.7zm-5 1.9c.3.5.9 2.5.8 3.2 0 .6-.9 1-.9 1.6 0 1.7-1.8 2-2.5.5a5.8 5.8 0 01-.2-4c0-.2.3-1.4.5-1.7.1-.1.9-1.1 1.3-.8l1 1.2z"/>`,
        // witch - https://totallyjamie.com/product/digital-die-cutting-files/holidays-svg-files/halloween-svg-files/halloween-witch-flying-broomstick-1/
        `<path d="M40 16c3 1 3 2-2 4-3 1-4 4-3 6s5 2 9 0l3-1h11l-1 1-1 1 7 3h2l-1 1h-1l3 1c3 2 4 2 6 0 3-1 3 0 0 3v1l5-1 3 1c-4 1-5 2-7 4l-2 2 2-1 4-1c2-1 2 0 0 1-2 3-8 4-14 3-2-1-2-1 0 0s2 1 0 1c-2 1-5-1-7-3l-1-1v1h-1l-3-2 1 2 4 9c0 3 0 3 3 4h2c1-1 2-1 5 1l3 1h2c3-1 8-1 15 1 8 1 8 1 7 2l1 1 1 1v1l-1 1-1 1v3l-1 1v1l-6-1c-9-2-12-3-16-6-2-2-2-2-5-2s-3 0-4-2l-6-2c-2-1-3 5-2 7l1 2 3 2c2 0 2 2 1 2v8l-2-2c-1-3-5-6-14-10h-1v1l4 2c1-1 5 3 5 4l-1 1h-1c1 3-1 7-2 6l-1-4-1-1-1-1c0-2 0-2-2-3l-5-4-3-3-1 1c0 2 0 2-1 0l-1-1c-1 1-2 1-2-1-2-4-1-6 2-9 3-2 3-2 0-2-2 0-2 0-1 1v1c-1 0-2 0-1 1h-3l-5-5-1 1h-2l-1-1-6-2c-7-1-9-2-9-3 0-2 0-1 6 0l9 2h3l4-2 4-5 2-6-1-1-1 1c-2 0-2 0-2-2v-1l-2 1v-1l-2-2c-1 0-2 0 0-1 1-1 0-1-3-2-6-2-6-2 0-2h5l4-4 4-4h9zm-6 34h1l3-3v-2l-2 2-2 3zm-6-3l3-2c2-2 2-2-1 0l-2 2z"/>`
      ]
    }

  };


  // Get the current event, or exit if none.
  let datedEvent = null;
  for (const flake in flakes) {
    if (flakes[flake].active) {
      datedEvent = flakes[flake];
      break;
    }
  }
  if (!datedEvent) return;

  // Destructure object, simplifying property naming.
  const {name, animation, style, active, sizes, path} = datedEvent;



  // Utility array functions
  const _arrSum = arr => arr.reduce((a,b) => a + b, 0);
  const _arrMax = arr => Math.max(...arr);

  const flakeSetWidth = _arrSum(sizes);


  const _getScreenWidthInRem = _ => {

    // Get the root font size (px)
    const rootFontSize = Number(window.getComputedStyle(document.body).getPropertyValue('font-size').match(/\d+/)[0]);

    // Return screen-width in rem
    return parseInt(window.innerWidth / rootFontSize);
  };


  const _getNumberOfFlakes = screenWidthRem => {

    const setsOfFlakes = parseInt(screenWidthRem / flakeSetWidth);

    // Get the number of odd flakes required to fill the remaining screen width:
    let swRemainer = parseInt(screenWidthRem % flakeSetWidth);
    let oddFlakes = 0;

    for (const size of sizes) {
      if (swRemainer - size < 0) break;
      oddFlakes++;
      swRemainer -= size;
    }

    return (setsOfFlakes * sizes.length) + oddFlakes;
  };



  const _getFlakesHtml = totalFlakes => {

    let html = '';
    let count = 0;
    let pathNo = 0;

    while (count < totalFlakes) {

      for (const size of sizes) {

        // The flake SVG
        html += `<svg class="${fieldName}_${flakeName}-${name}" style="width:${size}rem; height:${size}rem; fill-rule:evenodd; animation-name:${animation}; ${style}" viewBox="0 0 96 96">${path[pathNo]}</svg>`;

        // If there's more than one SVG path then step through them:
        pathNo < (path.length - 1) ? pathNo++ : pathNo = 0;

        count++;
        if (count >= totalFlakes) break;
      }
    }

    return html;
  };


  const _insertFieldHtml = totalFlakes => {

    const fieldDiv = document.getElementById(fieldName) || document.createElement('div');
    fieldDiv.id = fieldName;
    fieldDiv.className = `${fieldName}-${name}`;

    // Shift initial position off-screen, by the size of largest flakes diagonal, as it may have a rotation applied.
    const largestSide = _arrMax(sizes);
    const diagonal = Math.sqrt(2 * largestSide * largestSide);
    fieldDiv.setAttribute('style', `transform: translate3d(0, -${diagonal}rem, 0)`);

    fieldDiv.innerHTML =  _getFlakesHtml(totalFlakes);
    document.body.insertBefore(fieldDiv, document.body.childNodes[0]);

  };


  const letThemFall = _ => {  
    const screenWidthRem = _getScreenWidthInRem();
    const totalFlakes = _getNumberOfFlakes(screenWidthRem);
    _insertFieldHtml(totalFlakes);
  };


  // Delay placing the snowflakes into the HTML until after the page has loaded.
  window.addEventListener('load', letThemFall);
  window.addEventListener('resize', letThemFall);

}(window, document));
