var animaticIndex = {};
var animaticIndexList = [];

function Animatic (element, frameCount) {
  this.active = false;
  this.element = element;
  this.frame = 0;
  this.frameCount = element.dataset.frames;
  this.frameDirectory = element.id;
  this.frameRate = 80;
  this.triggerElement = document.getElementById(element.id + '-trigger');
}

Animatic.prototype.refresh = function () {
  this.element.style.backgroundImage = "url('assets/animatics/" + this.frameDirectory + "/" + this.frame + ".png')";
};

Animatic.prototype.ascend = function () {
  var timeoutFunction;
  function timeoutFunction () {
    this.frame += 1;
    if (this.active && this.frame < this.frameCount) {
      this.refresh();
      setTimeout(timeoutFunction.bind(this), this.frameRate);
    }
  }
  setTimeout(timeoutFunction.bind(this), this.frameRate);
};

Animatic.prototype.descend = function () {
  var timeoutFunction;
  function timeoutFunction () {
    this.frame -= 1;
    if (!this.active && this.frame >= 0) {
      this.refresh();
      setTimeout(timeoutFunction.bind(this), this.frameRate);
    }
  }
  setTimeout(timeoutFunction.bind(this), this.frameRate);
};

function collectAnimatics () {
  var animatics;
  var i;
  mainPageOnload();
  animatics = document.getElementsByTagName('animatic');
  for (i=0 ; i<animatics.length ; i++) {
    animaticIndex[animatics[i].id] = new Animatic (animatics[i]);
    animaticIndexList.push(animatics[i].id);
  }
  initializeAnimatics();
}

function initializeAnimatics () {
  var i;
  for (i=0 ; i<animaticIndexList.length ; i++) {
    animaticIndex[animaticIndexList[i]].triggerElement.onmouseenter = function () {
      this.ascend();
      this.active = true;
    }.bind(animaticIndex[animaticIndexList[i]]);
    animaticIndex[animaticIndexList[i]].triggerElement.onmouseleave = function () {
      this.descend();
      this.active = false;
    }.bind(animaticIndex[animaticIndexList[i]]);
  }
}

window.onload = collectAnimatics;
