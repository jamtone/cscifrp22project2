
//Get image container that contains all images
const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

//get each image for structure and use like an array - use queryall as it is more than one image
const img=document.querySelectorAll(imgs)    

//use let as the variable for each image index will be reassigned
let idx = 0
let interval = setInterval(run, 2000)   //This function runs ever 2 seconds in increasing the index

function run(){     //function to change index idx value every two seconds 
    idx++           
    changeImage()   //function to do the actual change function for next
}
    /*the changeImage() function works by changing the traslator value
     * on the .image-container class - use negative value to slide image right to left
     */
function changeImage() {  
    //reset the index value using list of all images that are a node list of all images
    if (idx > img.length - 1) { //check if the index is in range 0 through 3
        idx = 0
    } else if (idx < 0) {
    idx = img.length-1
    }
    
    img.style.transform = `translateX(${(-idx*500)}px))`

}
function resetInterval(){
    clearInterval(interval) //Clear current interval
    interval = setInterval(run, 2000)
}

rightBtn.addEventListener('click', () => {
    idx++

    changeImage()
    resetInterval()
})

lefttBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})