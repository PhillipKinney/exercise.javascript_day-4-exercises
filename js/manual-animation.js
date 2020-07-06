const buttons = document.querySelectorAll("button");
for(var i=0; i<buttons.length;i++) {
    let currentButton = buttons[i];
    currentButton.addEventListener('mouseenter', () => changeToCoral(event.target));
    currentButton.addEventListener('mouseleave', () => backToNormal(event.target));
    currentButton.addEventListener('click', ()=> moveImage(event.target.id))
}

function changeToCoral(eventTarget) {
    eventTarget.style.backgroundColor = "coral";
}

function changeToWhite() {
    eventTarget.style.backgroundColor = "white";
}

function backToNormal(eventTarget) {
    eventTarget.style.backgroundColor='';
}

function moveImage(direction) {
    let imgObjStyle = imgObj.style;
    let imgObjStyleDirection;

    //Right
    if(direction === 'KeyD') {        
       // imgObjStyleDirection = imgObjStyle.left;
        //imgObjStyleDirection = parseInt(imgObjStyleDirection) + 10 + 'px';
        imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
    }

    //Up
    if(direction === 'KeyA') {
        //imgObjStyleDirection = imgObjStyle.left;
        //imgObjStyleDirection = parseInt(imgObjStyleDirection) - 10 + 'px';
        imgObj.style.left = parseInt(imgObj.style.top) - 10 + 'px';
    }
    //Left
    if(direction === 'KeyW') {
        //imgObjStyleDirection = imgObjStyle.top;
        //imgObjStyleDirection = parseInt(imgObjStyleDirection) - 10 + 'px';
        imgObj.style.top = parseInt(imgObj.style.left) - 10 + 'px';
    }

    //Down
    if(direction === 'KeyS') {
        //imgObjStyleDirection = imgObjStyle.top;
        //imgObjStyleDirection = parseInt(imgObjStyleDirection) + 10 + 'px';
        imgObj.style.top = parseInt(imgObj.style.top) + 10 + 'px';
    }
}

function init() {
    imgObj = document.getElementById('myImage');
    imgObj.style.position = 'relative';
    imgObj.style.left = '10px';
    imgObj.style.top = '10px';
}


window.onload = init;