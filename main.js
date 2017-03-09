var carouselImages = [
  {
    image_url: 'https://interfacelift.com/wallpaper/7yz4ma1/03965_sunsetinthecascades_1280x720.jpg',
    title: 'Sunset in the Cascades',
    photographer_id: 'smpoutdoors'
  },
  {
    image_url: 'https://interfacelift.com/wallpaper/7yz4ma1/03958_seljalandsfossiceland_1280x720.jpg',
    title: 'Seljalandsfoss, Iceland',
    photographer_id: 'Robin Kamp'
  },
  {
    image_url: 'https://interfacelift.com/wallpaper/7yz4ma1/03950_godsrays_1280x720.jpg',
    title: 'Gods Rays',
    photographer_id: 'illuminati'
  }
];

var display = document.querySelector('.image');
var nextBtn = document.querySelector('.next-btn');
var prevBtn = document.querySelector('.prev-btn'); 

var imageLinks = carouselImages.map(function(obj) {
  console.log(obj.image_url)
  return obj.image_url;
});

var count = 0; 

function nextImage() {
  if (count < 2) {
    console.log("hey")
    count = count + 1; 
  } else {
    count = 0; 
  }
  display.style.backgroundImage = "url(" + imageLinks[count] + ")"; 
}

function prevImage() {
  if (count === 0) {
    count = 2; 
  } else {
    count = count - 1; 
  }
  display.style.backgroundImage = "url(" + imageLinks[count] + ")";
}

window.onload = function() {
  display.style.backgroundImage = "url(" + imageLinks[count] + ")"; 
}

nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);