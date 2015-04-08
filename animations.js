var Animations = function(){};

(function() {

    Animations.merge = function () {
        var animation = new CoreAnimationGroup();

        for (var i = 0; i < arguments.length; i++) {
            if (arguments[i].constructor.name === 'core-animation') {
                animation.appendChild(arguments[i]);
            }

            else if(arguments[i].constructor.name === 'core-animation-group'){
                if(arguments[i].children.length){
                    for(var j = 0; j < arguments[i].children.length; j++){
                        animation.appendChild(arguments[i].children[j]);
                    }
                }
            }
        }

        return animation;
    };

    //region Attention Seekers

    Animations.bounce = function (element, options) {
        var animation = createAnim('bounce', element, mergeProperties({
            duration: 900,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
            keyframes: [
                {transform: 'translate3d(0,0,0)', offset: 0},
                {transform: 'translate3d(0,0,0)', offset: 0.2},
                {transform: 'translate3d(0,-30px,0)', offset: 0.4},
                {transform: 'translate3d(0,-30px,0)', offset: 0.43},
                {transform: 'translate3d(0,0,0)', offset: 0.53},
                {transform: 'translate3d(0,-15px,0)', offset: 0.7},
                {transform: 'translate3d(0,0,0)', offset: 0.8},
                {transform: 'translate3d(0,-15px,0)', offset: 0.9},
                {transform: 'translate3d(0,0,0)', offset: 1}
            ]
        }, options));

        return animation;
    };

    Animations.flash = function (element, options) {
        var animation = createAnim('flash', element, mergeProperties({
            duration: 900,
            keyframes: [
                {opacity: '1', offset: 0},
                {opacity: '0', offset: 0.25},
                {opacity: '1', offset: 0.5},
                {opacity: '0', offset: 0.75},
                {opacity: '1', offset: 1}
            ]
        }, options));

        return animation;
    };

    Animations.pulse = function (element, options) {
        var animation = createAnim('pulse', element, mergeProperties({
            duration: 900,
            keyframes: [
                {transform: 'scale3d(1, 1, 1)', offset: 0},
                {transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.5},
                {transform: 'scale3d(1, 1, 1)', offset: 1}
            ]
        }, options));

        return animation;
    };

    Animations.rotateClockwise = function (element, options) {
        var animation = createAnim('rotateClockwise', element, mergeProperties({
            duration: 900,
            keyframes: [
                {transform: 'none', offset: 0},
                {transform: 'rotate(315deg)', offset: 0.7},
                {transform: 'rotate(360deg)', offset: 1}
            ]
        }, options));

        return animation;
    };

    Animations.rotateCounterClockwise = function (element, options) {
        var animation = createAnim('rotateCounterClockwise', element, mergeProperties({
            duration: 900,
            keyframes: [
                {transform: 'none', offset: 0},
                {transform: 'rotate(-315deg)', offset: 0.7},
                {transform: 'rotate(-360deg)', offset: 1}
            ]
        }, options));

        return animation;
    };

    Animations.rubberBand = function (element, options) {
        var animation = createAnim('rubberBand', element, mergeProperties({
            duration: 900,
            keyframes: [
                {transform: 'scale3d(1, 1, 1)', offset: 0},
                {transform: 'scale3d(1.25, 0.75, 1)', offset: 0.3},
                {transform: 'scale3d(0.75, 1.25, 1)', offset: 0.4},
                {transform: 'scale3d(1.15, 0.85, 1)', offset: 0.5},
                {transform: 'scale3d(.95, 1.05, 1)', offset: 0.65},
                {transform: 'scale3d(1.05, .95, 1)', offset: 0.75},
                {transform: 'scale3d(1, 1, 1)', offset: 1}
            ]
        }, options));

        return animation;
    };

    Animations.shake = function (element, options) {
        var animation = createAnim('shake', element, mergeProperties({
            duration: 900,
            keyframes: [
                {transform: 'translate3d(0, 0, 0)', offset: 0},
                {transform: 'translate3d(-10px, 0, 0)', offset: 0.1},
                {transform: 'translate3d(10px, 0, 0)', offset: 0.2},
                {transform: 'translate3d(-10px, 0, 0)', offset: 0.3},
                {transform: 'translate3d(10px, 0, 0)', offset: 0.4},
                {transform: 'translate3d(-10px, 0, 0)', offset: 0.5},
                {transform: 'translate3d(10px, 0, 0)', offset: 0.6},
                {transform: 'translate3d(-10px, 0, 0)', offset: 0.7},
                {transform: 'translate3d(10px, 0, 0)', offset: 0.8},
                {transform: 'translate3d(-10px, 0, 0)', offset: 0.9},
                {transform: 'translate3d(0, 0, 0)', offset: 1}
            ]
        }, options));

        return animation;
    };

    Animations.swing = function (element, options) {
        var animation = createAnim('swing', element, mergeProperties({
            duration: 900,
            keyframes: [
                {transform: 'translate(0%)', offset: 0},
                {transform: 'rotate3d(0, 0, 1, 15deg)', offset: 0.2},
                {transform: 'rotate3d(0, 0, 1, -10deg)', offset: 0.4},
                {transform: 'rotate3d(0, 0, 1, 5deg)', offset: 0.6},
                {transform: 'rotate3d(0, 0, 1, -5deg)', offset: 0.8},
                {transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1}
            ]
        }, options));

        return animation;
    };

    Animations.tada = function (element, options) {
        var animation = createAnim('tada', element, mergeProperties({
            duration: 900,
            keyframes: [
                {transform: 'scale3d(1, 1, 1)', offset: 0},
                {transform: 'scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)', offset: 0.1},
                {transform: 'scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)', offset: 0.2},
                {transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.3},
                {transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: 0.4},
                {transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.5},
                {transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: 0.6},
                {transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.7},
                {transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: 0.8},
                {transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.9},
                {transform: 'scale3d(1, 1, 1)', offset: 1}
            ]
        }, options));

        return animation;
    };

    Animations.wobble = function (element, options) {
        var animation = createAnim('wobble', element, mergeProperties({
            duration: 900,
            keyframes: [
                {transform: 'translate(0%)', offset: 0},
                {transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)', offset: 0.15},
                {transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)', offset: 0.45},
                {transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)', offset: 0.6},
                {transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)', offset: 0.75},
                {transform: 'translateX(0%)', offset: 1}
            ]
        }, options));

        return animation;
    };

    //endregion

    //region Bouncing Entrances

    Animations.bounceIn = function (element, options) {
        var animation = createAnim('bounceIn', element, mergeProperties({
            duration: 900,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
            keyframes: [
                {transform: 'scale3d(.3, .3, .3)', opacity: '0', offset: 0},
                {transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2},
                {transform: 'scale3d(.9, .9, .9)', offset: 0.4},
                {transform: 'scale3d(1.03, 1.03, 1.03)', opacity: '1', offset: 0.6},
                {transform: 'scale3d(.97, .97, .97)', offset: 0.8},
                {transform: 'scale3d(1, 1, 1)', opacity: '1', offset: 1}
            ]
        }, options));

        showBeforeAnim(animation);

        return animation;
    };

    Animations.bounceInDown = function (element, options) {
        var animation = createAnim('bounceInDown', element, mergeProperties({
            duration: 900,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
            keyframes: [
                {transform: 'translate3d(0, -3000px, 0)', opacity: '0', offset: 0},
                {transform: 'translate3d(0, 25px, 0)', opacity: '1', offset: 0.6},
                {transform: 'translate3d(0, -100px, 0)', offset: 0.75},
                {transform: 'translate3d(0, 5px, 0)', offset: 0.9},
                {transform: 'none', opacity: '1', offset: 1}
            ]
        }, options));

        showBeforeAnim(animation);

        return animation;
    };

    Animations.bounceInUp = function (element, options) {
        var animation = createAnim('bounceInUp', element, mergeProperties({
            duration: 900,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
            keyframes: [
                {transform: 'translate3d(0, 3000px, 0)', opacity: '0', offset: 0},
                {transform: 'translate3d(0, -25px, 0)', opacity: '1', offset: 0.6},
                {transform: 'translate3d(0, 100px, 0)', offset: 0.75},
                {transform: 'translate3d(0, -5px, 0)', offset: 0.9},
                {transform: 'translate3d(0, 0, 0)', opacity: '1', offset: 1}
            ]
        }, options));

        showBeforeAnim(animation);

        return animation;
    };

    Animations.bounceInLeft = function (element, options) {
        var animation = createAnim('bounceInLeft', element, mergeProperties({
            duration: 900,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
            keyframes: [
                {transform: 'translate3d(-3000px, 0, 0)', opacity: '0', offset: 0},
                {transform: 'translate3d(25px, 0, 0)', opacity: '1', offset: 0.6},
                {transform: 'translate3d(-100px, 0, 0)', offset: 0.75},
                {transform: 'translate3d(5px, 0, 0)', offset: 0.9},
                {transform: 'none', opacity: '1', offset: 1}
            ]
        }, options));

        showBeforeAnim(animation);

        return animation;
    };

    Animations.bounceInRight = function (element, options) {
        var animation = createAnim('bounceInRight', element, mergeProperties({
            duration: 900,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
            keyframes: [
                {transform: 'translate3d(3000px, 0, 0)', opacity: '0', offset: 0},
                {transform: 'translate3d(-25px, 0, 0)', opacity: '1', offset: 0.6},
                {transform: 'translate3d(100px, 0, 0)', offset: 0.75},
                {transform: 'translate3d(-5px, 0, 0)', offset: 0.9},
                {transform: 'none', opacity: '1', offset: 1}
            ]
        }, options));

        showBeforeAnim(animation);

        return animation;
    };

    //endregion

    //region Bouncing Exits

    Animations.bounceOut = function (element, options) {
        var animation = createAnim('bounceOut', element, mergeProperties({
            duration: 900,
            keyframes: [
                {transform: 'none', opacity: '1', offset: 0},
                {transform: 'scale3d(.9, .9, .9)', opacity: '1', offset: 0.2},
                {transform: 'scale3d(1.1, 1.1, 1.1)', opacity: '1', offset: 0.5},
                {transform: 'scale3d(1.1, 1.1, 1.1)', opacity: '1', offset: 0.55},
                {transform: 'scale3d(.3, .3, .3)', opacity: '0', offset: 1}
            ]
        }, options));

        hideAfterAnim(animation);

        return animation;
    };

    Animations.bounceOutDown = function (element, options) {
        var animation = createAnim('bounceOutDown', element, mergeProperties({
            duration: 900,
            keyframes: [
                {transform: 'none', opacity: '1', offset: 0},
                {transform: 'translate3d(0, 50px, 0)', opacity: '1', offset: 0.2},
                {transform: 'translate3d(0, -20px, 0)', opacity: '1', offset: 0.4},
                {transform: 'translate3d(0, -20px, 0)', opacity: '1', offset: 0.45},
                {transform: 'translate3d(0, 2000px, 0)', opacity: '0', offset: 1}
            ]
        }, options));

        hideAfterAnim(animation);

        return animation;
    };

    Animations.bounceOutUp = function (element, options) {
        var animation = createAnim('bounceOutUp', element, mergeProperties({
            duration: 900,
            keyframes: [
                {transform: 'none', opacity: '1', offset: 0},
                {transform: 'translate3d(0, 50px, 0)', opacity: '1', offset: 0.2},
                {transform: 'translate3d(0, 20px, 0)', opacity: '1', offset: 0.4},
                {transform: 'translate3d(0, 20px, 0)', opacity: '1', offset: 0.45},
                {transform: 'translate3d(0, -2000px, 0)', opacity: '0', offset: 1}
            ]
        }, options));

        hideAfterAnim(animation);

        return animation;
    };

    Animations.bounceOutLeft = function (element, options) {
        var animation = createAnim('bounceOutLeft', element, mergeProperties({
            duration: 900,
            keyframes: [
                {transform: 'none', opacity: '1', offset: 0},
                {transform: 'translate3d(100px, 0, 0)', opacity: '1', offset: 0.2},
                {transform: 'translate3d(-20px, 0, 0)', opacity: '1', offset: 0.4},
                {transform: 'translate3d(-20px, 0, 0)', opacity: '1', offset: 0.45},
                {transform: 'translate3d(-2000px, 0, 0)', opacity: '0', offset: 1}
            ]
        }, options));

        hideAfterAnim(animation);

        return animation;
    };

    Animations.bounceOutRight = function (element, options) {
        var animation = createAnim('bounceOutRight', element, mergeProperties({
            duration: 900,
            keyframes: [
                {transform: 'none', opacity: '1', offset: 0},
                {transform: 'translate3d(100px, 0, 0)', opacity: '1', offset: 0.2},
                {transform: 'translate3d(-20px, 0, 0)', opacity: '1', offset: 0.4},
                {transform: 'translate3d(-20px, 0, 0)', opacity: '1', offset: 0.45},
                {transform: 'translate3d(2000px, 0, 0)', opacity: '0', offset: 1}
            ]
        }, options));

        hideAfterAnim(animation);

        return animation;
    };

    //endregion

    //region Fade Entrances

    Animations.fadeIn = function (element, options) {
        var animation = createAnim('fadeIn', element, mergeProperties({
            duration: 900,
            keyframes: [
                {opacity: 0},
                {opacity: 1}
            ]
        }, options));

        showBeforeAnim(animation);

        return animation;
    };

    Animations.fadeInDown = function (element, options) {
        var animation = createAnim('fadeInDown', element, mergeProperties({
            duration: 900,
            keyframes: [
                {opacity: '0', transform: 'translate3d(0, -100%, 0)', offset: 0},
                {opacity: '1', transform: 'none', offset: 1}
            ]
        }, options));

        showBeforeAnim(animation);

        return animation;
    };

    Animations.fadeInDownBig = function (element, options) {
        var animation = createAnim('fadeInDownBig', element, mergeProperties({
            duration: 900,
            keyframes: [
                {opacity: '0', transform: 'translate3d(0, -2000px, 0)', offset: 0},
                {opacity: '1', transform: 'none', offset: 1}
            ]
        }, options));

        showBeforeAnim(animation);

        return animation;
    };

    Animations.fadeInLeft = function (element, options) {
        var animation = createAnim('fadeInLeft', element, mergeProperties({
            duration: 900,
            keyframes: [
                {opacity: '0', transform: 'translate3d(-100%, 0, 0)', offset: 0},
                {opacity: '1', transform: 'none', offset: 1}
            ]
        }, options));

        showBeforeAnim(animation);

        return animation;
    };

    Animations.fadeInLeftBig = function (element, options) {
        var animation = createAnim('fadeInLeftBig', element, mergeProperties({
            duration: 900,
            keyframes: [
                {opacity: '0', transform: 'translate3d(-2000px, 0, 0)', offset: 0},
                {opacity: '1', transform: 'none', offset: 1}
            ]
        }, options));

        showBeforeAnim(animation);

        return animation;
    };

    Animations.fadeInRight = function (element, options) {
        var animation = createAnim('fadeInRight', element, mergeProperties({
            duration: 900,
            keyframes: [
                {opacity: '0', transform: 'translate3d(100%, 0, 0)', offset: 0},
                {opacity: '1', transform: 'none', offset: 1}
            ]
        }, options));

        showBeforeAnim(animation);

        return animation;
    };

    Animations.fadeInRightBig = function (element, options) {
        var animation = createAnim('fadeInRightBig', element, mergeProperties({
            duration: 900,
            keyframes: [
                {opacity: '0', transform: 'translate3d(2000px, 0, 0)', offset: 0},
                {opacity: '1', transform: 'none', offset: 1}
            ]
        }, options));

        showBeforeAnim(animation);

        return animation;
    };

    Animations.fadeInUp = function (element, options) {
        var animation = createAnim('fadeInUp', element, mergeProperties({
            duration: 900,
            keyframes: [
                {opacity: '0', transform: 'translate3d(0, 100%, 0)', offset: 0},
                {opacity: '1', transform: 'none', offset: 1}
            ]
        }, options));

        showBeforeAnim(animation);

        return animation;
    };

    Animations.fadeInUpBig = function (element, options) {
        var animation = createAnim('fadeInUpBig', element, mergeProperties({
            duration: 900,
            keyframes: [
                {opacity: '0', transform: 'translate3d(0, 2000px, 0)', offset: 0},
                {opacity: '1', transform: 'none', offset: 1}
            ]
        }, options));

        showBeforeAnim(animation);

        return animation;
    };

    //endregion

    //region Fade Exits

    Animations.fadeOut = function (element, options) {
        var animation = createAnim('fadeOut', element, mergeProperties({
            duration: 900,
            keyframes: [
                {opacity: 1},
                {opacity: 0}
            ]
        }, options));

        hideAfterAnim(animation);

        return animation;
    };

    Animations.fadeOutDown = function (element, options) {
        var animation = createAnim('fadeOutDown', element, mergeProperties({
            duration: 900,
            keyframes: [
                {opacity: '1', transform: 'none', offset: 0},
                {opacity: '0', transform: 'translate3d(0, 100%, 0)', offset: 1}
            ]
        }, options));

        hideAfterAnim(animation);

        return animation;
    };

    Animations.fadeOutDownBig = function (element, options) {
        var animation = createAnim('fadeOutDownBig', element, mergeProperties({
            duration: 900,
            keyframes: [
                {opacity: '1', transform: 'none', offset: 0},
                {opacity: '0', transform: 'translate3d(0, 2000px, 0)', offset: 1}
            ]
        }, options));

        hideAfterAnim(animation);

        return animation;
    };

    Animations.fadeOutLeft = function (element, options) {
        var animation = createAnim('fadeOutLeft', element, mergeProperties({
            duration: 900,
            keyframes: [
                {opacity: '1', transform: 'none', offset: 0},
                {opacity: '0', transform: 'translate3d(-100%, 0, 0)', offset: 1}
            ]
        }, options));

        hideAfterAnim(animation);

        return animation;
    };

    Animations.fadeOutLeftBig = function (element, options) {
        var animation = createAnim('fadeOutLeftBig', element, mergeProperties({
            duration: 900,
            keyframes: [
                {opacity: '1', transform: 'none', offset: 0},
                {opacity: '0', transform: 'translate3d(-2000px, 0, 0)', offset: 1}
            ]
        }, options));

        hideAfterAnim(animation);

        return animation;
    };

    Animations.fadeOutRight = function (element, options) {
        var animation = createAnim('fadeOutRight', element, mergeProperties({
            duration: 900,
            keyframes: [
                {opacity: '1', transform: 'none', offset: 0},
                {opacity: '0', transform: 'translate3d(100%, 0, 0)', offset: 1}
            ]
        }, options));

        hideAfterAnim(animation);

        return animation;
    };

    Animations.fadeOutRightBig = function (element, options) {
        var animation = createAnim('fadeOutRightBig', element, mergeProperties({
            duration: 900,
            keyframes: [
                {opacity: '1', transform: 'none', offset: 0},
                {opacity: '0', transform: 'translate3d(2000px, 0, 0)', offset: 1}
            ]
        }, options));

        hideAfterAnim(animation);

        return animation;
    };

    Animations.fadeOutUp = function (element, options) {
        var animation = createAnim('fadeOutUp', element, mergeProperties({
            duration: 900,
            keyframes: [
                {opacity: '1', transform: 'none', offset: 0},
                {opacity: '0', transform: 'translate3d(0, -100%, 0)', offset: 1}
            ]
        }, options));

        hideAfterAnim(animation);

        return animation;
    };

    Animations.fadeOutUpBig = function (element, options) {
        var animation = createAnim('fadeOutUpBig', element, mergeProperties({
            duration: 900,
            keyframes: [
                {opacity: '1', transform: 'none', offset: 0},
                {opacity: '0', transform: 'translate3d(0, -2000px, 0)', offset: 1}
            ]
        }, options));

        hideAfterAnim(animation);

        return animation;
    };

    //endregion

    //region Flippers

    Animations.flip = function (element, options) {
        var animation = createAnim('flip', element, mergeProperties({
            duration: 900,
            easing: 'ease-in',
            keyframes: [
                {transform: 'perspective(400px) rotate3d(0, 1, 0, -360deg)', offset: 0},
                {transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)', offset: 0.4},
                {transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)', offset: 0.5},
                {transform: 'perspective(400px) scale3d(.95, .95, .95)', offset: 0.8},
                {transform: 'perspective(400px)', offset: 1}
            ]
        }, options));

        return animation;
    };

    Animations.flipInX = function (element, options) {
        var animation = createAnim('flipInX', element, mergeProperties({
            duration: 900,
            easing: 'ease-in',
            keyframes: [
                {transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', opacity: '0', offset: 0},
                {transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', offset: 0.4},
                {transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)', opacity: '1', offset: 0.6},
                {transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)', opacity: '1',offset: 0.8},
                {transform: 'perspective(400px)', opacity: '1', offset: 1}
            ]
        }, options));

        showBeforeAnim(animation);

        return animation;
    };

    Animations.flipOutX = function (element, options) {
        var animation = createAnim('flipOutX', element, mergeProperties({
            duration: 900,
            keyframes: [
                {transform: 'perspective(400px)', opacity: '1', offset: 0},
                {transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', opacity: '1', offset: 0.3},
                {transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', opacity: '0', offset: 1}
            ]
        }, options));

        hideAfterAnim(animation);

        return animation;
    };

    Animations.flipInY = function (element, options) {
        var animation = createAnim('flipInY', element, mergeProperties({
            duration: 900,
            easing: 'ease-in',
            keyframes: [
                {transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: '0', offset: 0},
                {transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', offset: 0.4},
                {transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)', opacity: '1', offset: 0.6},
                {transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)', opacity: '1',offset: 0.8},
                {transform: 'perspective(400px)', opacity: '1', offset: 1}
            ]
        }, options));

        showBeforeAnim(animation);

        return animation;
    };

    Animations.flipOutY = function (element, options) {
        var animation = createAnim('flipOutY', element, mergeProperties({
            duration: 900,
            keyframes: [
                {transform: 'perspective(400px)', opacity: '1', offset: 0},
                {transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', opacity: '1', offset: 0.3},
                {transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: '0', offset: 1}
            ]
        }, options));

        hideAfterAnim(animation);

        return animation;
    };

    //endregion

    //region LightSpeed

    Animations.lightSpeedInRight = function (element, options) {
        var animation = createAnim('lightSpeedInRight', element, mergeProperties({
            duration: 900,
            keyframes: [
                {transform: 'translate3d(100%, 0, 0) skewX(-30deg)', opacity: '0', offset: 0},
                {transform: 'skewX(20deg)', opacity: '1', offset: 0.6},
                {transform: 'skewX(-5deg)', opacity: '1', offset: 0.8},
                {transform: 'none', opacity: '1 ', offset: 1}
            ]
        }, options));

        showBeforeAnim(animation);

        return animation;
    };

    Animations.lightSpeedOutRight = function (element, options) {
        var animation = createAnim('lightSpeedOutRight', element, mergeProperties({
            duration: 900,
            keyframes: [
                {transform: 'none', opacity: '1 ', offset: 0},
                {transform: 'translate3d(100%, 0, 0) skewX(30deg)', opacity: '0', offset: 1}
            ]
        }, options));

        hideAfterAnim(animation);

        return animation;
    };

    Animations.lightSpeedInLeft = function (element, options) {
        var animation = createAnim('lightSpeedInLeft', element, mergeProperties({
            duration: 900,
            keyframes: [
                {transform: 'translate3d(-100%, 0, 0) skewX(-30deg)', opacity: '0', offset: 0},
                {transform: 'skewX(20deg)', opacity: '1', offset: 0.6},
                {transform: 'skewX(-5deg)', opacity: '1', offset: 0.8},
                {transform: 'none', opacity: '1 ', offset: 1}
            ]
        }, options));

        showBeforeAnim(animation);

        return animation;
    };

    Animations.lightSpeedOutLeft = function (element, options) {
        var animation = createAnim('lightSpeedOutLeft', element, mergeProperties({
            duration: 900,
            keyframes: [
                {transform: 'none', opacity: '1 ', offset: 0},
                {transform: 'translate3d(-100%, 0, 0) skewX(30deg)', opacity: '0', offset: 1}
            ]
        }, options));

        hideAfterAnim(animation);

        return animation;
    };

    //endregion

    //region Rotate Entrance

    Animations.rotateIn = function (element, options) {
        var animation = createAnim('rotateIn', element, mergeProperties({
            duration: 900,
            keyframes: [
                {transform: 'rotate3d(0, 0, 1, -200deg)', opacity: '0', transformOrigin: 'center', offset: 0},
                {transform: 'none', opacity: '1', transformOrigin: 'center', offset: 1}
            ]
        }, options));

        showBeforeAnim(animation);

        return animation;
    };

    Animations.rotateInDownLeft = function (element, options) {
        var animation = createAnim('rotateInDownLeft', element, mergeProperties({
            duration: 900,
            keyframes: [
                {transform: 'rotate3d(0, 0, 1, -45deg)', opacity: '0', transformOrigin: 'left bottom', offset: 0},
                {transform: 'none', opacity: '1', transformOrigin: 'left bottom', offset: 1}
            ]
        }, options));

        showBeforeAnim(animation);

        return animation;
    };

    Animations.rotateInDownRight = function (element, options) {
        var animation = createAnim('rotateInDownRight', element, mergeProperties({
            duration: 900,
            keyframes: [
                {transform: 'rotate3d(0, 0, 1, 45deg)', opacity: '0', transformOrigin: 'right bottom', offset: 0},
                {transform: 'none', opacity: '1', transformOrigin: 'right bottom', offset: 1}
            ]
        }, options));

        showBeforeAnim(animation);

        return animation;
    };

    Animations.rotateInUpLeft = function (element, options) {
        var animation = createAnim('rotateInUpLeft', element, mergeProperties({
            duration: 900,
            keyframes: [
                {transform: 'rotate3d(0, 0, 1, 45deg)', opacity: '0', transformOrigin: 'left bottom', offset: 0},
                {transform: 'none', opacity: '1', transformOrigin: 'left bottom', offset: 1}
            ]
        }, options));

        showBeforeAnim(animation);

        return animation;
    };

    Animations.rotateInUpRight = function (element, options) {
        var animation = createAnim('rotateInUpRight', element, mergeProperties({
            duration: 900,
            keyframes: [
                {transform: 'rotate3d(0, 0, 1, -45deg)', opacity: '0', transformOrigin: 'right bottom', offset: 0},
                {transform: 'none', opacity: '1', transformOrigin: 'right bottom', offset: 1}
            ]
        }, options));

        showBeforeAnim(animation);

        return animation;
    };

    //endregion

    //region Rotate Exits

    Animations.rotateOut = function (element, options) {
        var animation = createAnim('rotateOut', element, mergeProperties({
            duration: 900,
            keyframes: [
                {transform: 'none', opacity: '1', transformOrigin: 'center', offset: 0},
                {transform: 'rotate3d(0, 0, 1, 200deg)', opacity: '0', transformOrigin: 'center', offset: 1}
            ]
        }, options));

        hideAfterAnim(animation);

        return animation;
    };

    Animations.rotateOutDownLeft = function (element, options) {
        var animation = createAnim('rotateOutDownLeft', element, mergeProperties({
            duration: 900,
            keyframes: [
                {transform: 'rotate3d(0, 0, 1, 45deg)', opacity: '0', transformOrigin: 'left bottom', offset: 1},
                {transform: 'none', opacity: '1', transformOrigin: 'left bottom', offset: 0}
            ]
        }, options));

        hideAfterAnim(animation);

        return animation;
    };

    Animations.rotateOutDownRight = function (element, options) {
        var animation = createAnim('rotateOutDownRight', element, mergeProperties({
            duration: 900,
            keyframes: [
                {transform: 'rotate3d(0, 0, 1, -45deg)', opacity: '0', transformOrigin: 'right bottom', offset: 1},
                {transform: 'none', opacity: '1', transformOrigin: 'right bottom', offset: 0}
            ]
        }, options));

        hideAfterAnim(animation);

        return animation;
    };

    Animations.rotateOutUpLeft = function (element, options) {
        var animation = createAnim('rotateOutUpLeft', element, mergeProperties({
            duration: 900,
            keyframes: [
                {transform: 'rotate3d(0, 0, 1, -45deg)', opacity: '0', transformOrigin: 'left bottom', offset: 1},
                {transform: 'none', opacity: '1', transformOrigin: 'left bottom', offset: 0}
            ]
        }, options));

        hideAfterAnim(animation);

        return animation;
    };

    Animations.rotateOutUpRight = function (element, options) {
        var animation = createAnim('rotateOutUpRight', element, mergeProperties({
            duration: 900,
            keyframes: [
                {transform: 'rotate3d(0, 0, 1, 45deg)', opacity: '0', transformOrigin: 'right bottom', offset: 1},
                {transform: 'none', opacity: '1', transformOrigin: 'right bottom', offset: 0}
            ]
        }, options));

        hideAfterAnim(animation);

        return animation;
    };

    //endregion

    //region Sliding Entrances

    Animations.slideInDown = function (element, options) {
        var animation = createAnim('slideInDown', element, mergeProperties({
            duration: 900,
            keyframes: [
                {transform: 'translate3d(0, -100%, 0)', offset: 0},
                {transform: 'translate3d(0, 0, 0)', offset: 1}
            ]
        }, options));

        return animation;
    };

    Animations.slideInLeft = function (element, options) {
        var animation = createAnim('slideInLeft', element, mergeProperties({
            duration: 900,
            keyframes: [
                {transform: 'translate3d(-100%, 0, 0)', offset: 0},
                {transform: 'translate3d(0, 0, 0)', offset: 1}
            ]
        }, options));

        return animation;
    };

    Animations.slideInRight = function (element, options) {
        var animation = createAnim('slideInRight', element, mergeProperties({
            duration: 900,
            keyframes: [
                {transform: 'translate3d(100%, 0, 0)', offset: 0},
                {transform: 'translate3d(0, 0, 0)', offset: 1}
            ]
        }, options));

        return animation;
    };

    Animations.slideInUp = function (element, options) {
        var animation = createAnim('slideInUp', element, mergeProperties({
            duration: 900,
            keyframes: [
                {transform: 'translate3d(0, 100%, 0)', offset: 0},
                {transform: 'translate3d(0, 0, 0)', offset: 1}
            ]
        }, options));

        return animation;
    };

    //endregion

    //region Sliding Exits

    Animations.slideOutDown = function (element, options) {
        var animation = createAnim('slideOutDown', element, mergeProperties({
            duration: 900,
            keyframes: [
                {transform: 'translate3d(0, 0, 0)', offset: 0},
                {transform: 'translate3d(0, 100%, 0)', offset: 1}
            ]
        }, options));

        return animation;
    };

    Animations.slideOutLeft = function (element, options) {
        var animation = createAnim('slideOutLeft', element, mergeProperties({
            duration: 900,
            keyframes: [
                {transform: 'translate3d(0, 0, 0)', offset: 0},
                {transform: 'translate3d(-100%, 0, 0)', offset: 1}
            ]
        }, options));

        return animation;
    };

    Animations.slideOutRight = function (element, options) {
        var animation = createAnim('slideOutRight', element, mergeProperties({
            duration: 900,
            keyframes: [
                {transform: 'translate3d(0, 0, 0)', offset: 0},
                {transform: 'translate3d(100%, 0, 0)', offset: 1}
            ]
        }, options));

        return animation;
    };

    Animations.slideOutUp = function (element, options) {
        var animation = createAnim('slideOutUp', element, mergeProperties({
            duration: 900,
            keyframes: [
                {transform: 'translate3d(0, 0, 0)', offset: 0},
                {transform: 'translate3d(0, -100%, 0)', offset: 1}
            ]
        }, options));

        return animation;
    };

    //endregion

    //region Specials

    Animations.hinge = function (element, options) {
        var animation = createAnim('hinge', element, mergeProperties({
            duration: 2100,
            easing: 'ease-in-out',
            keyframes: [
                {transform: 'none', transformOrigin: 'top left', opacity: 1, offset: 0},
                {transform: 'rotate3d(0, 0, 1, 80deg)', transformOrigin: 'top left', opacity: 1, offset: 0.2},
                {transform: 'rotate3d(0, 0, 1, 60deg)', transformOrigin: 'top left', opacity: 1, offset: 0.4},
                {transform: 'rotate3d(0, 0, 1, 80deg)', transformOrigin: 'top left', opacity: 1, offset: 0.6},
                {transform: 'rotate3d(0, 0, 1, 60deg)', transformOrigin: 'top left', opacity: 1, offset: 0.8},
                {transform: 'translate3d(0, 700px, 0)', transformOrigin: 'top left', opacity: 0, offset: 1}
            ]
        }, options));

        hideAfterAnim(animation);

        return animation;
    };

    Animations.rollIn = function (element, options) {
        var animation = createAnim('rollIn', element, mergeProperties({
            duration: 900,
            keyframes: [
                {transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)', opacity: '0', offset: 0},
                {transform: 'none', opacity: '1', offset: 1}
            ]
        }, options));

        showBeforeAnim(animation);

        return animation;
    };

    Animations.rollOut = function (element, options) {
        var animation = createAnim('rollOut', element, mergeProperties({
            duration: 900,
            keyframes: [
                {transform: 'none', opacity: '1', offset: 0},
                {transform: 'translate3d(100%, 0, 0) rotate3d(0, 0, 1, -120deg)', opacity: '0', offset: 1}
            ]
        }, options));

        hideAfterAnim(animation);

        return animation;
    };

    //endregion

    //region Zoom Entrance

    Animations.zoomIn = function (element, options) {
        var animation = createAnim('zoomIn', element, mergeProperties({
            duration: 900,
            keyframes: [
                {transform: 'scale3d(.3, .3, .3)  ', opacity: '0', offset: 0},
                {transform: 'none', opacity: '1', offset: 1}
            ]
        }, options));

        showBeforeAnim(animation);

        return animation;
    };

    Animations.zoomInDown = function (element, options) {
        var animation = createAnim('zoomInDown', element, mergeProperties({
            duration: 900,
            easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
            keyframes: [
                {transform: 'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)', opacity: '0',  offset: 0},
                {transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', opacity: '1', offset: 0.6},
                {transform: 'none', opacity: '1', offset: 1}
            ]
        }, options));

        showBeforeAnim(animation);

        return animation;
    };

    Animations.zoomInLeft = function (element, options) {
        var animation = createAnim('zoomInLeft', element, mergeProperties({
            duration: 900,
            easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
            keyframes: [
                {transform: 'scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)', opacity: '0',  offset: 0},
                {transform: 'scale3d(.475, .475, .475) translate3d(10px, 0, 0)', opacity: '1', offset: 0.6},
                {transform: 'none', opacity: '1', offset: 1}
            ]
        }, options));

        showBeforeAnim(animation);

        return animation;
    };

    Animations.zoomInRight = function (element, options) {
        var animation = createAnim('zoomInRight', element, mergeProperties({
            duration: 900,
            easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
            keyframes: [
                {transform: 'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)', opacity: '0',  offset: 0},
                {transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)', opacity: '1', offset: 0.6},
                {transform: 'none', opacity: '1', offset: 1}
            ]
        }, options));

        showBeforeAnim(animation);

        return animation;
    };

    Animations.zoomInUp = function (element, options) {
        var animation = createAnim('zoomInUp', element, mergeProperties({
            duration: 900,
            easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
            keyframes: [
                {transform: 'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)', opacity: '0',  offset: 0},
                {transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', opacity: '1', offset: 0.6},
                {transform: 'none', opacity: '1', offset: 1}
            ]
        }, options));

        showBeforeAnim(animation);

        return animation;
    };

    //endregion

    //region Zoom Exits

    Animations.zoomOut = function (element, options) {
        var animation = createAnim('zoomOut', element, mergeProperties({
            duration: 900,
            keyframes: [
                {transform: 'none', opacity: '1', offset: 0},
                {transform: 'scale3d(.3, .3, .3)  ', opacity: '0', offset: 1}
            ]
        }, options));

        hideAfterAnim(animation);

        return animation;
    };

    Animations.zoomOutDown = function (element, options) {
        var animation = createAnim('zoomOutDown', element, mergeProperties({
            duration: 900,
            easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
            keyframes: [
                {transform: 'none', opacity: '1', transformOrigin: 'center bottom', offset: 0},
                {transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', opacity: '1',  transformOrigin: 'center bottom', offset: 0.4},
                {transform: 'scale3d(.1, .1, .1) translate3d(0, 2000px, 0)', opacity: '0',  transformOrigin: 'center bottom', offset: 1}
            ]
        }, options));

        hideAfterAnim(animation);

        return animation;
    };

    Animations.zoomOutLeft = function (element, options) {
        var animation = createAnim('zoomOutLeft', element, mergeProperties({
            duration: 900,
            easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
            keyframes: [
                {transform: 'none', opacity: '1', transformOrigin: 'left center', offset: 0},
                {transform: 'scale3d(.475, .475, .475) translate3d(42px, 0, 0)', opacity: '1',  transformOrigin: 'left center', offset: 0.4},
                {transform: 'scale(.1) translate3d(-2000px, 0, 0)', opacity: '0', transformOrigin: 'left center', offset: 1}
            ]
        }, options));

        hideAfterAnim(animation);

        return animation;
    };

    Animations.zoomOutRight = function (element, options) {
        var animation = createAnim('zoomOutRight', element, mergeProperties({
            duration: 900,
            easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
            keyframes: [
                {transform: 'none', opacity: '1', transformOrigin: 'right center', offset: 0},
                {transform: 'scale3d(.475, .475, .475) translate3d(-42px, 0, 0)', opacity: '1',  transformOrigin: 'right center', offset: 0.4},
                {transform: 'scale(.1) translate3d(2000px, 0, 0)', opacity: '0', transformOrigin: 'right center', offset: 1}
            ]
        }, options));

        hideAfterAnim(animation);

        return animation;
    };

    Animations.zoomOutUp = function (element, options) {
        var animation = createAnim('zoomOutUp', element, mergeProperties({
            duration: 900,
            easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
            keyframes: [
                {transform: 'none', opacity: '1', transformOrigin: 'center bottom', offset: 0},
                {transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', opacity: '1',  transformOrigin: 'center bottom', offset: 0.4},
                {transform: 'scale3d(.1, .1, .1) translate3d(0, -2000px, 0)', opacity: '0', transformOrigin: 'center bottom', offset: 1}
            ]
        }, options));

        hideAfterAnim(animation);

        return animation;
    };

    //endregion

    var createAnim = function (name, element, options) {
        var animation = new CoreAnimation();
        animation.keyframes = typeof options.keyframes !== 'undefined' ? options.keyframes : [];

        animation.name = typeof name !== 'undefined' ? name.toLowerCase() : 'unknown';
        animation.applyToChildren = setDefaultAttribute(element, options.applyToChildren, name, 'children', false);
        animation.composite = setDefaultAttribute(element, options.composite, name, 'composite', 'replace');
        animation.duration = setDefaultAttribute(element, options.duration, name, 'duration', 'auto');
        animation.fill = setDefaultAttribute(element, options.fill, name, 'fill', 'auto');
        animation.easing = setDefaultAttribute(element, options.easing, name, 'easing', 'linear');
        animation.delay = setDefaultAttribute(element, options.delay, name, 'delay', 0);
        animation.endDelay = setDefaultAttribute(element, options.endDelay, name, 'enddelay', 0);
        animation.iterations = setDefaultAttribute(element, options.iterations, name, 'iterations', 1);
        animation.iterationStart = setDefaultAttribute(element, options.iterationStart, name, 'iterationstart', 0);
        animation.direction = setDefaultAttribute(element, options.direction, name, 'direction', 'normal');
        animation.playbackRate = setDefaultAttribute(element, options.playbackRate, name, 'playbackrate', 1);
        animation.autoplay = setDefaultAttribute(element, options.autoplay, name, 'autoplay', false);
        animation.hide = setDefaultAttribute(element, options.hide, name, 'hide', true);


        if (element.children.length > 0 && animation.applyToChildren) {
            var array = [];
            array.push(element);
            array.push.apply(array, element.children);
            animation.target = mergeElements(array);
        }
        else {
            animation.target = element;
        }

        return animation;
    },

        setDefaultAttribute = function (element, attr, name, attr_name, def) {
            if (element.hasAttribute('anim-' + name + '-' + attr_name)) {
                attr = element.getAttribute('anim-' + name + '-' + attr_name);
            }

            else {
                attr = typeof attr !== 'undefined' ? attr : def;
            }

            return attr;
        },

        showBeforeAnim = function (animation) {
            animation.addEventListener('core-animation-play', function (e) {
                if (animation.target.constructor.name === 'Array') {
                    var length = animation.target.length;

                    if(animation.hide) {
                        for (var i = 0; i < length; i++) {
                            if (animation.target[i].hasAttribute('hidden')) {
                                animation.target[i].removeAttribute('hidden');
                            }
                        }
                    }
                }

                else {
                    if (animation.target.hasAttribute('hidden') && animation.hide) {
                        animation.target.removeAttribute('hidden');
                    }
                }
            });
        },

        hideAfterAnim = function (animation) {
            animation.addEventListener('core-animation-finish', function (e) {
                if (animation.target.constructor.name === 'Array') {
                    var length = animation.target.length;

                    if(animation.hide){
                        for (var i = 0; i < length; i++) {
                            animation.target[i].setAttribute('hidden', '');
                        }
                    }
                }

                else {
                    if(animation.hide){
                        animation.target.setAttribute('hidden', '');
                    }
                }
            });
        },

        mergeElements = function (array) {
            if (array.constructor.name === 'Array') {
                var length = array.length;

                if (length > 0) {
                    var merged = [];

                    for (var i = 0; i < length; i++) {
                        var element = array[i];
                        var elements = Array.prototype.slice.call(element.querySelectorAll("*"), 0);
                        var elements_length = elements.length;

                        merged.push(element);

                        if (elements_length > 0) {
                            merged.push.apply(merged, elements);
                        }
                    }

                    return merged;
                }
            }
        },

        mergeProperties = function() {
            var frames = {};

            for(var i = 0; i < arguments.length; i++) {
                for (var property in arguments[i]) {
                    if (arguments[i].hasOwnProperty(property)) {
                        frames[property] = arguments[i][property];
                    }
                }
            }

            return frames;
        };
}());
