$(document).ready(function() {
    $.ajax({
        type: 'GET',
        url: 'https://talaikis.com/api/quotes/random/',
        success: function(data) {
            $("blockquote").append(data.quote);
            $("footer").append("— " + data.author);
            $("#tweet-quote").attr("href", "http://twitter.com/share?text=" + data.quote + " —" + data.author);
        }
    });

    $("#get-quote-btn").on('click', function() {
        $.ajax({
            type: 'GET',
            url: 'https://talaikis.com/api/quotes/random/',
            success: function(data) {
                $("blockquote").empty();
                $("footer").empty();
                $("blockquote").append(data.quote);
                $("footer").append("— " + data.author);
                $("#tweet-quote").attr("href", "http://twitter.com/share?text=" + data.quote + " —" + data.author);
            }
        });
    });
});

