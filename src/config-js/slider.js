function Slider(index,event) {
    this.startX;this.startY;
    this.endX; this.endY;
    this.distanceX; this.distanceY;
    this.index = index;
    this.event = event;
}

Slider.prototype.start = function(){  
            this.startX = this.event.targetTouches[0].clientX;
            this.startY = this.event.targetTouches[0].clientY;
};

Slider.prototype.move = function(data){
                    this.endX = this.event.changedTouches[0].clientX;
                    this.endY = this.event.changedTouches[0].clientY;
                    this.distanceX = Math.abs(this.startX - this.endX);
                    this.distanceY = Math.abs(this.startY - this.endY);
                    if (this.distanceX > this.distanceY) { //如果X绝对距离大于Y绝对距离
                        this.event.preventDefault();
                        var distance = this.endX-this.startX;
                          return distance;
                    }
};

Slider.prototype.moveY = function(data){
                    this.endX = this.event.changedTouches[0].clientX;
                    this.endY = this.event.changedTouches[0].clientY;
                    this.distanceX = Math.abs(this.startX - this.endX);
                    this.distanceY = Math.abs(this.startY - this.endY);
                    if (this.distanceX < this.distanceY) { //如果X绝对距离大于Y绝对距离
                        this.event.preventDefault();
                        var distance = this.endY-this.startY;
                          return distance;
                    }
};

Slider.prototype.end = function(data){
                    this.endX = this.event.changedTouches[0].clientX;
                    this.endY = this.event.changedTouches[0].clientY;
                    this.distanceX = Math.abs(this.startX - this.endX);
                    this.distanceY = Math.abs(this.startY - this.endY);
                    if (this.distanceX > this.distanceY) { //如果X绝对距离大于Y绝对距离
                        var distance = this.endX-this.startX;
                          return distance;
                    }
};
var slider = new Slider();
export default{
    slider :slider
}