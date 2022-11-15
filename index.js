// Task 2
// Write your JavaScript here
// Hint: Think about listening to events when the assistant navigates

// let btn = document.createElement('button');
// console.log('aTag1-->', btn);
// btn.innerHTML = 'Submit';
// btn.type = 'submit';
// btn.name = 'formBtn';
// // document.body.appendChild(btn);
// document.getElementById('question-3119344').after(btn);
// console.log('aTag222-->', btn);

// const el = document.getElementById('box');
// console.log(el);

// const pTegg = document.createElement('p');

// el.appendChild(pTegg);

// page-selector is-selected visited

// var c = document.querySelector('.container-0-0-45');
// c.appendChild(document.createElement('div'));

// console.log('ccc-->', c);

// Add button in result

let aTag = document.createElement('a');
// console.log('aTag-->', aTag);
aTag.setAttribute('href', 'https://zoovudemos.com/Dyson/index.html');

aTag.setAttribute('target', '_blank');

// let spanTag = document.createElement('span');

// console.log('spanTag-->', spanTag);
aTag.setAttribute('class', 'picon-p-add-news');

aTag.innerHTML += 'Visit Demo Store';

let dQl = document.getElementsByClassName('product-footer');
// console.log('dQl-->', dQl);
setInterval(() => {
  let newDql = dQl[0];
  // console.log('newDql-->', newDql);
  newDql.appendChild(aTag);
}, 500);

// add button listener

var elemButtonSelected = document.getElementsByClassName('is-selected');
// console.log('elemButton->', elemButton);

setInterval(() => {
  var elemButton1 = document.querySelectorAll("[data-index='0']");
  console.log('elemButton1->', elemButton1);
  var elemButton2 = document.querySelectorAll("[data-index='1']");
  console.log('elemButton2->', elemButton2);
  var elemButton3 = document.querySelectorAll("[data-index='2']");
  console.log('elemButton3->', elemButton3);

  if (
    document.getElementsByClassName('is-selected') &&
    document.querySelectorAll("[data-index='0']")
  ) {
    elemButton1[0].classList.add('step-1');
    var mainId = document.getElementById('zoovu-assistant');
    if (
      document.getElementById('zoovu-assistant') &&
      document.getElementsByClassName('step-1')
    ) {
      mainId.setAttribute('class', 'zoovu-main');
      var zooMain = document.getElementsByClassName('zoovu-main');
      if (document.getElementsByClassName('zoovu-main')) {
        zooMain[0].classList.add('step-1');
        // zooMain[0].classList.remove('step-1');
      }
    }
  }
  // if (
  //   document.getElementsByClassName('is-selected') &&
  //   document.querySelectorAll("[data-index='1']")
  // ) {
  //   elemButton2[0].classList.add('step-2');
  //   var mainId = document.getElementById('zoovu-assistant');

  //   if (
  //     document.getElementById('zoovu-assistant') &&
  //     document.getElementsByClassName('step-2')
  //   ) {
  //     mainId.setAttribute('class', 'zoovu-main');
  //     var zooMain = document.getElementsByClassName('zoovu-main');
  //     if (document.getElementsByClassName('zoovu-main')) {
  //       zooMain[0].classList.add('step-2');
  //       // zooMain[0].classList.remove('step-1');
  //     }
  //   }
  // }
  // if (
  //   document.getElementsByClassName('is-selected') &&
  //   document.querySelectorAll("[data-index='2']")
  // ) {
  //   elemButton3[0].classList.add('step-3');
  //   var mainId = document.getElementById('zoovu-assistant');

  //   if (
  //     document.getElementById('zoovu-assistant') &&
  //     document.getElementsByClassName('step-3')
  //   ) {
  //     mainId.setAttribute('class', 'zoovu-main');
  //     var zooMain = document.getElementsByClassName('zoovu-main');
  //     if (document.getElementsByClassName('zoovu-main')) {
  //       zooMain[0].classList.add('step-3');
  //       // zooMain[0].classList.remove('step-1');
  //     }
  //   }
  // }

  // var elemButton1 = document.getElementsByClassName('is-selected')[0];
  // console.log('elemButton1->', elemButton1);

  // var elemButton2 = document.getElementsByClassName('is-selected')[1];
  // console.log('elemButton2->', elemButton2);
  // var elemButton3 = document.getElementsByClassName('is-selected')[2];
  // console.log('elemButton3->', elemButton3);
  // if (document.getElementsByClassName('is-selected')) {
  //   if (document.getElementsByClassName('is-selected')[0]) {
  //     elemButton1[0].classList.add('step-1');
  //     var elmSelectedBtn = document.getElementsByClassName('step-1');
  //     var mainId = document.getElementById('zoovu-assistant');
  // if (
  //   document.getElementById('zoovu-assistant') &&
  //   document.getElementsByClassName('step-1')
  // ) {
  //   mainId.setAttribute('class', 'zoovu-main');
  //   var zooMain = document.getElementsByClassName('zoovu-main');
  //   if (document.getElementsByClassName('zoovu-main')) {
  //     zooMain[0].classList.add('step-1');
  //     // zooMain[0].classList.remove('step-1');
  //   }
  // }
  //   }
  // } else {
  //   elemButton1[0].classList.remove('step-1');
  // }
}, 1000);

// let doc = document.querySelectorAll('.container-0-0-45')[0].after(aTag);
// console.log('doc->', doc);

// /Test

// let cDoc = document.getElementsByClassName('container-0-0-45');
// console.log('cDoc->', cDoc);
// let fDoc = cDoc[0];
// console.log('fDoc->', fDoc);

// if (!document.getElementById('question-3119344')) {
//   let doc = document.getElementById('question-3119344').appendChild(aTag);
//   console.log('doc->', doc);
// } else {
//   return;
// }

// let aTag = document.createElement('a');
// console.log('aTag1-->', aTag);
// aTag.setAttribute('href', '/news_events/');

// let spanTag = document.createElement('span');

// console.log('spanTag-->', spanTag);
// spanTag.setAttribute('class', 'picon-p-add-news');

// aTag.appendChild(spanTag);

// aTag.innerHTML += 'Read more news';

// console.log('aTag_l-->', aTag);

// document.getElementById('question-3119344').appendChild(aTag);

// const eAll = document.getElementsByClassName('is-selected');
// eAll[0].classList.add('otherclass');

// document.ready(() => {
// const eAll = document.getElementsByClassName('is-selected');
// setInterval(() => {
//   console.log('eAll-->', eAll[0]);
//   eAll[0].classList.add('otherclass');
// }, 1000);

// });
