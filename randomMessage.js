const personalPronounArray = ['I ','You ', 'He ', 'She ', 'We ', 'You ', 'They '];
const verbArray = ['play ', 'drive ', 'eat ', 'read ', 'walk ', 'listen ','write '];
const nounArray = ['guitar ','car ','banana ','book ','video game ','music '];
const place = ['in my home.','outside. ', 'in my school.', 'in my bf house.'];

let newWordArr = [];
let ppa = Math.floor(Math.random()*7);
let va = Math.floor(Math.random()*7);
let na = Math.floor(Math.random()*6);
let pl = Math.floor(Math.random()*4);

newWordArr.push(personalPronounArray[ppa]);
newWordArr.push(verbArray[va]);
newWordArr.push(nounArray[na]);
newWordArr.push(place[pl]);

let finishedSentence = newWordArr.join(' ');
console.log(finishedSentence);