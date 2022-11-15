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

let intervalTime = setInterval(() => {
  let mainId = document.getElementById('zoovu-assistant');
  mainId.setAttribute('class', 'zoovu-main');

  let elemButtonSelected = document.getElementsByClassName('page-selector');
  for (let i = 0; i < elemButtonSelected.length; i++) {
    let strCounter = i + 1;

    let isExist = elemButtonSelected[i]
      .getAttribute('class')
      .indexOf('is-selected');
    if (isExist !== -1) {
      mainId.setAttribute('class', 'zoovu-main step-' + strCounter);
    }
    elemButtonSelected[i].addEventListener('click', () => {
      mainId.removeAttribute('class');
      mainId.setAttribute('class', 'zoovu-main step-' + strCounter);
    });
  }
}, 1000);

// clearInterval(intervalTime);

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
