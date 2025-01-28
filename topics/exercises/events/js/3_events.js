window.onload = setup;

function setup(){
    console.log("events!")
    let allSections = document.querySelectorAll(".mouseclick-active-section");
    //   //go through each section and apply the event listener
    for (let element of allSections) {;

        //click event listener for allsections variable
        element.addEventListener("click",introMouseClickCallback);

        //callback function can be external or internal
        function introMouseClickCallback(e){
            console.log("is in now active");
            let cssObj = window.getComputedStyle(this, null);
            //get prop VALUE :: new
            let bgColor = cssObj.getPropertyValue("background-color");
            let backgroundColorArray = getColorObj(bgColor);
            if(this.getAttribute("custom-bool") === "inactive")
            {
            //outer div
            this.style.background = `rgba(
                ${backgroundColorArray[0]},
                ${backgroundColorArray[1]},
                ${backgroundColorArray[2]},
                0.5)`;
            //inner p element
            document.querySelector(`#${this.id} p`).style.background = `rgba(
                ${backgroundColorArray[0]},
                ${backgroundColorArray[1]},
                ${backgroundColorArray[2]},
            0.75)`;
            this.setAttribute('custom-bool','active');
            } else {
                console.log('is now active')
                this.setAttribute("custom-bool","inactive")
                this.style.background = `rgba(
                    ${backgroundColorArray[0]},
                    ${backgroundColorArray[1]},
                    ${backgroundColorArray[2]},
                    1.0)`
                document.querySelector(`#${this.id} p`).style.background =""
            }
        }   

    }//end for loop
    function getColorObj(){
        let substringColor = inColor.substring(
            inColor.indexOf('(') + 1,
            incolor.indexOf(')')
        );
        let rgbArray = [];
        
    }
}
