// console.log('It works!')

// const myDocument = document.body;
const stageOne = document.createElement("h1");
stageOne.id = "header";
stageOne.innerText = "DeadPool's Profile";
document.body.appendChild(stageOne);

// 1A
// const ul = document.createElement('ul')
// const liOne = document.createElement('li')
// liOne.innerText = 'ewedwe';
// const liTwo = document.createElement('li');
// liTwo.innerText = 'gfdfe';
// const liThree = document.createElement('li');
// liThree.innerText = 'etewte';
// const liFour = document.createElement('li');
// liFour.innerText = 'atge';
// ul.append(liOne, liTwo, liThree, liFour);
// document.body.append(ul)

//1B
const arrLi = ["ewedfgdwe", "gdfgdffdfe", "etedfgwte", "atdfgdgge"];

const unorderedList = (arr) => {
  const ul = document.createElement("ul");
  arr.forEach((str) => {
    let li = document.createElement("li");
    li.innerText = str;
    ul.append(li);
  });

  document.body.append(ul);
};

unorderedList(arrLi);

//Phase 2
document.querySelector("h1").setAttribute("class", "name");
document.querySelector("ul").setAttribute("class", "my-details");
const liList = document.querySelectorAll("li");
liList.forEach((li) => {
  li.setAttribute("class", "detail");
});

//Phase 3

const myLocation = document.createElement("div");

const clock = document.createElement("span");
// const time = Date(Date.now());

setInterval(() => {
  let time = new Date(Date.now());
  clock.innerText = `${time}`;
}, 1000);
myLocation.append(
  `I live in City, State, and it's currently `,
  clock,
  ` here.`
);
// myLocation.innerHTML = `<div>I live in City, State, and it's currently ${clock} here.</div>`
document.body.append(myLocation);

//Bonus A
const myImg = document.createElement("img");

myImg.setAttribute(
  "src",
  "https://pbs.twimg.com/profile_images/1208234904405757953/mT0cFOVQ_400x400.jpg"
);

stageOne.after(myImg);

//insert likes and dislikes, favorite restaurants, my activites

//Bonus B

console.log("Closest:", liList[1].closest("li")); //can find sibling or parent, but nothing outside of parent

//Bonus C - Countdown Clock
const countdownClock = document.createElement("div");

const birthday = new Date('August 23');
// console.log(birthday.valueOf())
setInterval(() => {

    let current = new Date(Date.now());
    birthday.setYear(current.getFullYear());
    //all time is referenced to GMT
    const seconds = new Date(birthday - current).getSeconds();
    const minutes = new Date(birthday - current).getMinutes();
    const hours = new Date(birthday - current).getHours();
    const days = new Date(birthday - current).getDate();
    const months = new Date(birthday - current).getMonth();
    const formatting = `Months: ${months} Days: ${days} Hours: ${hours} Minutes: ${minutes} Seconds: ${seconds}`;
    countdownClock.innerText = `${formatting}`;
  }, 1000);

//   if()

  document.body.append(countdownClock);
  countdownClock.setAttribute("class","countdown")
