var Module = Module || {};

/**
 *
 *
 */

Module.events = (function()
{
    var module = {},
        widget = '.widget-container'
    ;

    // This module expand a vendor section
    module.expandCollapse = function() {
        var $button = $('.show-more', widget);

        $button.on('click', function() {
            var $parkElement = $(this).parent();

            $parkElement.toggleClass('expanded');
            $parkElement.find('.expanded-content').slideToggle('slow');
        });
    };

    // This module get the park id after click it
    module.getPark = function() {
        var $parkElement = $('.parking-list .single-parking-element', widget),
            id
        ;

        $parkElement.on('click', function() {
            id = $(this).data('parkId');

            console.log('Hai selezionato il parcheggio con id: ' + id);

            // Insert a callback function with id of parking element
        });
    };

    return module;
})();
