const totalImageCount = 2;
var tempImg = new Image();
var imageList=[];


var tryLoadImage = function(totalImageCount){

    for (let index = 1; index <= totalImageCount; index++) {
        const element = tempImg.src = 'images/bg' + index + '.jpg';
        imageList.appendImage(element);
    }
   
}


tryLoadImage( totalImageCount );

export default imageList;
