core-animation
==============

See the [component page](https://www.polymer-project.org/0.5/docs/elements/core-animation.html) for more information.


# Animations

Easy to use API inspired on [Animate.css](https://github.com/daneden/animate.css) animations.

## Usage

```javascript
  function animStuff(){
    var anim = Animations.bounce(event.target, { delay: 100 }); // Animations.animation.(target or [targets], options) 
    anim.play(); //see the full list of available animations below
  }
  ```
  
  You can even `merge` animations like this
  ```javascript
  function animStuff(){
    var anim = Animations.merge(Animations.bounce(event.target, { delay: 100 }), Animations.fadeIn(event.target)); // Animations.merge.(arguments) even CoreAnimationGroup objects
    anim.play(); // anim is CoreAnimationGroup object
  }
  ```
  
  There is also a `hide` property-attribute in some animations, that stands for **show/hide** element on animation **play/finish**.
  It simply **sets/removes** attribute `hidden`. By default it's set to `true`.
  It's required, because when your element's `opacity` reaches `0` your element is not currently hidden and can be clicked etc. That's why we have `hide` attribute. 
  
  
  If you want to add same animation to the parent's children. 
  For example you have:
  ```html
  <div>
    <button></button>
    <button></button>
  </div>
  ```
  
  And you want to add every button to div's animation target. Simply set div's animation property `applyToChildren` to `true`.
  
## HTML (optional)
You can also specify options in HTML attributes `anim-animation-option`

```html
  <custom-el anim-bounce-duration="500" anim-bounce-iterations="2" onclick="animStuff();">
    <!-- Some cool stuff here -->
  </custom-el>
  ```
  
## Available animations  
Attention Seekers
* `bounce`
* `flash`
* `pulse`
* `rotateClockwise`
* `rotateCounterClockwise`
* `rubberBand`
* `shake`
* `swing`
* `tada`
* `wobble`

Bouncing Entrances
* `bounceIn`
* `bounceInDown`
* `bounceInUp`
* `bounceInLeft`
* `bounceInRight`

Bouncing Exits
* `bounceOut`
* `bounceOutDown`
* `bounceOutUp`
* `bounceOutLeft`
* `bounceOutRight`

Fade Entrances
* `fadeIn`
* `fadeInDown`
* `fadeInDownBig`
* `fadeInLeft`
* `fadeInLeftBig`
* `fadeInRight`
* `fadeInRightBig`
* `fadeInUp`
* `fadeInUpBig`
 
Fade Exits
* `fadeOut`
* `fadeOutDown`
* `fadeOutDownBig`
* `fadeOutLeft`
* `fadeOutLeftBig`
* `fadeOutRight`
* `fadeOutRightBig`
* `fadeOutUp`
* `fadeOutUpBig`

Flippers
* `flip`
* `flipInX`
* `flipInY`
* `flipOutX`
* `flipOutY`

LightSpeed
* `lightSpeedInRight`
* `lightSpeedOutRight`
* `lightSpeedInLeft`
* `lightSpeedOutLeft`

Rotate Entrance
* `rotateIn`
* `rotateInDownLeft`
* `rotateInDownRight`
* `rotateInUpLeft`
* `rotateInUpRight`

Rotate Exits
* `rotateOut`
* `rotateOutDownLeft`
* `rotateOutDownRight`
* `rotateOutUpLeft`
* `rotateOutUpRight`

Sliding Entrances
* `slideInDown`
* `slideInLeft`
* `slideInRight`
* `slideInUp`

Sliding Exits
* `slideOutDown`
* `slideOutLeft`
* `slideOutRight`
* `slideOutUp`

Specials
* `hinge`
* `rollIn`
* `rollOut`

Zoom Entrance
* `zoomIn`
* `zoomInDown`
* `zoomInLeft`
* `zoomInRight`
* `zoomInUp`

Zoom Exits
* `zoomOut`
* `zoomOutDown`
* `zoomOutLeft`
* `zoomOutRight`
* `zoomOutUp`
