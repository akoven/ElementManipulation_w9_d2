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

const clock = document.createElement("time");

clock.innerText = `${Date.now()}`;

document.body.append(clock);
