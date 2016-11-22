var Module = Module || {};

/**
 *
 *
 */

Module.common = (function()
{
    var module = {},
        templatePath = '/templates/',
        widgetContainerTemplate = templatePath + 'widgetContainerTemplate.html',
        parkingListTemplate = templatePath + 'parkingListTemplate.html',
        jsonUrl = $('.widget-container').data('jsonUrl')
    ;

    // Render container of widget
    var renderWidgetContainerTemplate = function(json) {
        $.get(widgetContainerTemplate, function(template) {
            var rendered = Mustache.render(template, json);
            $('.widget-container').html(rendered);

            Module.events.expandCollapse();
        });
    };

    // Render list of parking element
    var renderparkingListTemplate = function(json) {
        $.get(parkingListTemplate, function(template) {
            var rendered = Mustache.render(template, json);
            $('.parking-list').html(rendered);

            Module.events.getPark();
        });
    };

    var render = function(json) {
        renderWidgetContainerTemplate(json);
        renderparkingListTemplate(json);
    };

    // Execute all render
    module.render = function() {
        var json = Module.jsonData;

        // Controll if exists url in data
        if(jsonUrl) {
            $.getJSON( jsonUrl, function( data ) {
                json = data;
            });
        };

        render(json);
    }();

    return module;
})();
