angular.module('jqLite+trigger', ['jqLite++'])
    .run(function (jqLitePlusPlus) {
        jqLitePlusPlus({

            trigger: function (eventType, extraParameters) {
                //if it's a mouse event, use mouse event init
                var isMouseEvent = /click|mousedown|mouseup|mousemove/.test(eventType);

                extraParameters = extraParameters || {};
                var x = extraParameters.x || 0;
                var y = extraParameters.y || 0;

                var event = document.createEvent(isMouseEvent ? 'MouseEvents' : 'HTMLEvents');
                event[isMouseEvent ? 'initMouseEvent' : 'initEvent'](eventType, true, true, window, 0, x, y, x, y, false, false, false, false, 0, null);
                event.data = extraParameters || {};
                event.eventName = eventType;
                event.target = this;
                this.dispatchEvent(event);
            }

        });
    })
;
