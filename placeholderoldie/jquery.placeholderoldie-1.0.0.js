/*
 *  Project: placeholderoldie
 *  Description: Add placeholders in old version of IE
 *  Author: Murilo Siqueira
 *  License: MIT
 */

; (function ($) {
    var placeholderoldie = "placeholderoldie";


    function Plugin(element) {
        this.element = element;
        this._name = placeholderoldie;
        this.init();
    }

    Plugin.prototype = {
        init: function () {
            // /MSIE ([0-9]+\.\d+);/.test(navigator.userAgent);

            // if (Number(RegExp.$1) < 10 && Number(RegExp.$1) > 6) {
                $("[placehold]").addClass("ph-old-ie");
                $(".ph-old-ie").css("color", "#666");

                $("[placehold]").each(function () {
                    $(this).val($(this).attr("placehold"));
                });

                $("[placehold]").on({
                    keypress: function () {
                        if ($(this).val() == $(this).attr("placehold")) { $(this).val(""); }

                        $(this).css("color", $("input:not([placehold])").css("color"));
                    },

                    keydown: function (e) {
                        var value = ($(this).val() == $(this).attr("placehold")) ? true : false;

                        if ($(this).val() == $(this).attr("placehold")) {
                            placeHolder(this, value);
                            if (e.which == 46 || (e.which >= 33 && e.which <= 40)) {
                                return false;
                            }
                        } else {
                            this.onselectstart = function () { return true; }
                        }
                    }
                });

                $("[placehold]").on("keyup focusout", function () {
                    if ($(this).val() == $(this).attr("placehold")) {
                        $(this).css("color", "#666")
                    }

                    if ($(this).val() == "") {
                        $(this).val($(this).attr("placehold"));
                        placeHolder(this, true);
                        $(this).css("color", "#666")
                    }
                });

                $("[placehold]").on("click dblclick", function () {
                    var value = ($(this).val() == $(this).attr("placehold")) ? true : false;

                    placeHolder(this, value);
                });
            // }
        }
    };

    $.fn[placeholderoldie] = function () {
        this.each(function () {
            if (!$.data(this, "plugin_" + placeholderoldie)) {
                $.data(this, "plugin_" + placeholderoldie, new Plugin(this));
            }
        });
    };

    function placeHolder(field, value) {
        field.onselectstart = function () { return !value; }

        var range = field.createTextRange();
        range.collapse(value);
        range.select();
    }
})($);