window.onload = async function(){
    console.log("task 7-8");
    let data;
    //fetch json file
    try {
        let response = await fetch("./data/iris.json");
        data = await response.json();
    }   catch (err) {
        console.log(err)
    }
    //output parsed json file and map to new array with color parameter
    let irisesWithColors = []
    let possibleColor = ["#5d3fd3","#a73fd3","#d33fb5","#d35d3f","#d3a73f"]
    let randomColor = Math.floor(Math.random()*(possibleColor.length+1));
    irisesWithColors = data.map(obj => {
        return { ...obj, color: possibleColor[randomColor]}
    });
    //filter array 
    irisesWithColors.filter(element => element.sepalWidth >= 4.0)
    console.log(irisesWithColors);
    //calculate petal length average 
    let petalsAverage;
    petalsAverage = irisesWithColors.reduce(function(total,num){
        return total + num.petalLength
    },0)
    petalsAverage = (Math.round(petalsAverage))/irisesWithColors.length;
    console.log(petalsAverage);
    //find petalLength 1
    let findIndexOne;
    findIndexOne = irisesWithColors.find(function(num){
        return (num.petalLength===1.0);
    })
    console.log(findIndexOne);
    //find if there is an item with petalLength >10
    let greaterThanTen;
    greaterThanTen = irisesWithColors.some(function(num){
        return (num.petalLength>10);
    })
    console.log(greaterThanTen);
    //find if there is an item with petalLength exactly at 4.2
    let isFourPointTwo;
    isFourPointTwo = irisesWithColors.some(function(num){
        return (num.petalLength===4.2);
    })
    console.log(isFourPointTwo);
    //find if all objects have petal widths less than 3
    let allLessThree;
    allLessThree = irisesWithColors.every(function(num){
        return (num.petalwidth < 3);
    })
    console.log(allLessThree);
    //find if all objects have sepal widths greater than 1.2
    let allGreater;
    allGreater = irisesWithColors.every(function(num){
        return (num.sepalWidth > 1.2);
    })
    console.log(allGreater);
    //sort irises array
    let irisesWithColorsSorted = [];
    irisesWithColorsSorted = irisesWithColors.toSorted(function(a,b){
        return a.petalWidth-b.petalWidth
    });
    console.log(irisesWithColorsSorted);

    //data visualisation 
    

    //rendering irises, sorted by petal width
    class iris  {
        constructor(x,y,sepalL,sepalW,petalL,petalW,species,color){
            this.x = x;
            this.y = y;
            this.sepalLength = sepalL;
            this.sepalWidth = sepalW;
            this.petalLength = petalL;
            this.petalWidth = petalW;
            this.color = color;
            this.species = species;

            this.petalsDiv = document.createElement('div');
            this.centerDiv = document.createElement('div');
            this.sepalDiv = document.createElement('div');
            this.hoverDiv = document.createElement('div');
            this.textNode1 = document.createTextNode('Sepal Length: '+sepalL+' Sepal Width: '+sepalW+' Petal Length: '+petalL+' Petal Width: '+petalW+' Species: '+species)
            this.hoverDiv.appendChild(this.textNode1);
        }

        renderIrises(){
            this.petalsDiv.style.width = this.petalWidth*20 + 'px';
            this.petalsDiv.style.height = this.petalLength*20 + 'px';
            this.petalsDiv.style.borderRadius = this.petalWidth*40 + 'px';
            this.petalsDiv.style.backgroundColor = this.color;
            this.petalsDiv.style.left = this.x+this.sepalLength*200;
            this.petalsDiv.style.top = this.y;
            this.centerDiv.style.width = this.petalWidth*10 + 'px';
            this.centerDiv.style.height = this.petalLength*10 + 'px';
            this.centerDiv.style.borderRadius = this.petalWidth*20 + 'px';
            this.centerDiv.style.backgroundColor = "#000000";
            this.centerDiv.style.left = this.x+this.sepalLength*200;
            this.centerDiv.style.top = this.y;
            this.sepalDiv.style.display = "inline-block"
            this.petalsDiv.style.display = "inline-block"
            this.centerDiv.style.display = "inline-block"
            this.sepalDiv.style.width = this.sepalWidth*20 + 'px';
            this.sepalDiv.style.height = this.sepalLength + 'px';
            this.sepalDiv.style.backgroundColor = "#00ff00";
            this.sepalDiv.style.left = this.x;
            this.sepalDiv.style.top = this.y -10;

            document.querySelector('main').appendChild(this.petalsDiv);
            document.querySelector('main').appendChild(this.centerDiv);
            document.querySelector('main').appendChild(this.sepalDiv);
            document.querySelector('main').appendChild(this.hoverDiv);

            this.hoverDiv.className = 'hide';
            this.hoverDiv.style.display=('none');
        }
    }

    //contingency
    let garden = {
        visualisationArray: []
    }

    function createGarden(){
        let dataText1 = document.createTextNode('Petal Length Average: '+petalsAverage+'   ');
        document.querySelector('main').appendChild(dataText1);
        let dataText2 = document.createTextNode('Any long petals? '+greaterThanTen+'   ');
        document.querySelector('main').appendChild(dataText2);
        let dataText3 = document.createTextNode('Is there a 4.2? '+isFourPointTwo+'   ');
        document.querySelector('main').appendChild(dataText3);
        let dataText4 = document.createTextNode('Are all petal widths less than 3? '+allLessThree+'   ');
        document.querySelector('main').appendChild(dataText4);
        let dataText5 = document.createTextNode('Are all sepals greater than 1.2? '+allGreater+'   ');
        document.querySelector('main').appendChild(dataText5);
        //render irises
        for(let i = 0;i<irisesWithColorsSorted.length;i++){
            let x = Math.random() * (window.innerWidth);
            let y = Math.random() * 120;
            let sepalsL = irisesWithColorsSorted[i].sepalLength;
            let sepalsW = irisesWithColorsSorted[i].sepalWidth;
            let petalsW = irisesWithColorsSorted[i].petalWidth;
            let petalsL = irisesWithColorsSorted[i].petalLength;
            let petalColor = irisesWithColorsSorted[i].color;
            let irisSpecies = irisesWithColorsSorted[i].species;
            let newIris  = new iris(x,y,sepalsL,sepalsW,petalsL,petalsW,irisSpecies,petalColor);
            garden.visualisationArray.push(newIris);
            console.log(garden.visualisationArray);
        }

        for(let i = 0;i<garden.visualisationArray.length;i++){
            garden.visualisationArray[i].renderIrises();
        }
    }
    createGarden();
}