var doc = {
    setError: function (selector, msg) {
        $(selector).each(function () {
            $(this).css("border", "1px solid red");
            $(this).notify(msg, "error");
        });
    },
    remError: function (selector) {
        $(selector).each(function () {
            $(this).css("border", "");
            $(this).trigger('notify-hide');
        });
    }
}