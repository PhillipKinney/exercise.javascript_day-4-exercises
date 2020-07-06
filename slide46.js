var animate
const buttons = document.querySelectorAll('button')
for(var i = 0; i < buttons.length; i++)
    {
        buttons[i].addEventListener('click', function()
            {
                var direction= event.target.id;
                animate = setInterval(function(){moveImage(direction); }, 60);
            });
        document.addEventListener('mousedown', function(){clearInterval(animate);});    
        document.addEventListener('keydown', function(){clearInterval(animate)});
    }

function moveImage(direction)
{
       //Right
       if(direction === 'KeyD') {        
        // imgObjStyleDirection = imgObjStyle.left;
         //imgObjStyleDirection = parseInt(imgObjStyleDirection) + 10 + 'px';
         imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
     }
 
     //Left
     if(direction === 'KeyA') {
         //imgObjStyleDirection = imgObjStyle.left;
         //imgObjStyleDirection = parseInt(imgObjStyleDirection) - 10 + 'px';
         imgObj.style.left = parseInt(imgObj.style.top) - 10 + 'px';
     }
     //Up
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
