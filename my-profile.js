// console.log('It works!')

// const myDocument = document.body;
const stageOne = document.createElement('h1');
stageOne.id = 'header';
stageOne.innerText = "DeadPool\'s Profile"
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
const arrLi = ['ewedwe','gfdfe','etewte','atge']

const unorderedList = (arr) =>{
    const ul = document.createElement('ul')
    arr.forEach(str => {
    let li = document.createElement('li');
    li.innerText = str;
    ul.append(li);
});

document.body.append(ul);
}

unorderedList(arrLi)
