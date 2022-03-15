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
// myImg.src =
//   "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt1431045%2F&psig=AOvVaw0uyy9tDANoFVG2uugObE_L&ust=1647464423922000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOCpoqqByfYCFQAAAAAdAAAAABAD";

myImg.setAttribute(
  "src",
  "https://pbs.twimg.com/profile_images/1208234904405757953/mT0cFOVQ_400x400.jpg"
);

stageOne.after(myImg);

//insert likes and dislikes, favorite restaurants, my activites

//Bonus B

console.log("Closest:", liList[1].closest("li")); //can find sibling or parent, but nothing outside of parent

//Bonus C - Countdown Clock
