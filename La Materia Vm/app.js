function SlideShow(id) {
	this.container = document.getElementById(id);
  this.leftBtn = this.container.querySelector('.w3-display-left');
  this.rightBtn = this.container.querySelector('.w3-display-right');
  this.slideIndex = 1;
  var that = this;
  
  this.init = function() {
  	this.showDivs(this.slideIndex);
  };
  this.plusDivs = function(n) {
    this.showDivs(this.slideIndex += n);
  };
  this.showDivs = function(n) {
    var x = this.container.getElementsByClassName("mySlides");
    if (n > x.length) {this.slideIndex = 1}    
    if (n < 1) {this.slideIndex = x.length}
    for (var i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    x[this.slideIndex-1].style.display = "block";  
  };
  this.leftBtn.addEventListener('click', function() {
    that.plusDivs(-1);
  });
  this.rightBtn.addEventListener('click', function() {
    that.plusDivs(1);
  });
}

var foo = new SlideShow('foo');
foo.init();

var bar = new SlideShow('bar');
bar.init();

var third = new SlideShow('third');
third.init();

var fourth = new SlideShow('fourth')
fourth.init()

