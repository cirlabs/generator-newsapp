'use strict';

var App = App || {};

App = {
    init: function () {
        App.social();
        App.animateHeader();
    },
    social: function () {
        var headline = encodeURIComponent("Explore conditions in one of Richmond's worst housing complexes"),
            url = window.location.href;

        $('#myModal').on('show.bs.modal', function () {
            $('.twitter-button').attr('href', 'https://twitter.com/intent/tweet?via=cironline&text='+headline+' '+url);

            $('.facebook-button').on('click', function () {
                window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(url), 'facebook-share-dialog', 'width=626,height=436');
                return false;
            });

            $('.email-button').attr('href', 'mailto:friend@example.com&subject=Read this: '+headline)
        });
    },
    animateHeader: function () {
        // Pin header
        $('.header').headroom({
            'tolerance': 5,
            'offset': 205,
            'classes': {
                'initial': 'animated',
                'pinned': 'fadeInDown',
                'unpinned': 'fadeOutUp',
                'top': 'headroom--top',
                'notTop': 'headroom--not-top'
            }
        });
    }
}

jQuery(document).ready(function($) {
    App.init();

    console.log('You are ready to build a news app!');
    $('#jquery-version').text($.fn.jquery);
});