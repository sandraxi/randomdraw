var data = [{
        "id": 1,
        "length": 12.5,
        "height": 12.5,
        "width": 12.5,
        "img": "Drawing_044.jpg"
    },
    {
        "id": 2,
        "length": 35.6,
        "height": 3.7,
        "width": 35.6,
        "img": "Drawing_045.jpg"
    },
    {
        "id": 3,
        "length": 20.8,
        "height": 20.8,
        "width": 20.8,
        "img": "Drawing_046.jpg"
    },
    {
        "id": 4,
        "length": 3.7,
        "height": 3.7,
        "width": 3.7,
        "img": "Drawing_047.jpg"
    },
    {
        "id": 5,
        "length": 15.7,
        "height": 15.7,
        "width": 15.7,
        "img": "Drawing_048.jpg"
    }];

    /* Render sections from data */
    /* var template = document.getElementById('section').innerHTML;*/
    function myFunction() {
    var rheight = data[Math.floor(Math.random() * data.length)].height;
    var rlength = data[Math.floor(Math.random() * data.length)].length;
    var rwidth = data[Math.floor(Math.random() * data.length)].width;
    var rimg = data[Math.floor(Math.random() * data.length)].img;
    document.getElementById('height').innerHTML = "heigth: "+rheight;
    document.getElementById('length').innerHTML = "length: "+rlength;
    document.getElementById('width').innerHTML = "width: "+rwidth;
    document.getElementById("myImg").src = "img/640/"+rimg;
  }
/* Save reference to sections */
var sections = document.documentElement.querySelectorAll('section');

/* Add scroll event to activate or disactivate sections on view
   and assign srcset attribute of images (to load data only when they are on view) */
var onScroll = function(e) {
  /* Loop through each section */
  for(var i=0; i<sections.length; i++){
    /* Get section, bounding box (dimensions and position in the document) and viewport height */
    var section = sections[i],
        rect = section.getBoundingClientRect();
        vheight = document.documentElement.clientHeight;
    /* Check whether section is in viewport. Bounding rect is relative to viewport.
       If the top is less than the height (bottom of viewport)
       and the bottom more than 0 (top of viewport), then the section is on view */
    if(rect.top < vheight && rect.bottom > 0 ){
      /* Add active class only if it's not there (to avoid repetition) */
      if(section.className.indexOf(' active') < 0) section.className += ' active';
      /* Get all images in the section to assign the srcset */
      var imgs = section.querySelectorAll('img');
      /* Loop through again */
      for(var j=0; j<imgs.length; j++){
        /* Grab each image and update srcset attribute from data-srcset */
        var img = imgs[j];
        if(!img.getAttribute('srcset')) img.setAttribute('srcset', img.getAttribute('data-srcset'));
      }
    }else{
      /* Deactivate (remove active class) if section is not on view */
      section.className.replace(' active', '');
    }
  }
};
/* Add scroll event and run once to have the first view ready */
window.addEventListener('scroll', onScroll);
onScroll();
