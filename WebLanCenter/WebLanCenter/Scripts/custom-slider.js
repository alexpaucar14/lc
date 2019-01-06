! function(e) {
    "use strict";
    var o = {},
        i = e(window),
        n = e(document);
    e("body"), e(".progress-bar"), e(".countdown"), e(".counter");
    e.fn.exists = function() {
        return this.length > 0
    }, o.preloader = function() {
        e("#load").fadeOut(), e("#loading").delay(0).fadeOut("slow")
    }, o.goToTop = function() {
        var o = e("#back-to-top");
        o.hide(), i.scroll(function() {
            i.scrollTop() > 100 ? o.fadeIn() : o.fadeOut()
        }), o.on("click", function() {
            return e("body,html").animate({
                scrollTop: 0
            }, 1e3), !1
        })
    }, o.megaMenu = function() {
        e("#menu-1").megaMenu({
            logo_align: "left",
            links_align: "left",
            socialBar_align: "left",
            searchBar_align: "right",
            trigger: "hover",
            effect: "fade",
            effect_speed: 400,
            sibling: !0,
            outside_click_close: !0,
            top_fixed: !1,
            sticky_header: !0,
            sticky_header_height: 250,
            menu_position: "horizontal",
            full_width: !1,
            mobile_settings: {
                collapse: !0,
                sibling: !0,
                scrollBar: !0,
                scrollBar_height: 400,
                top_fixed: !1,
                sticky_header: !1,
                sticky_header_height: 200
            }
        })
    }, window.onload = function() {
        o.preloader(), o.goToTop()
    }, n.ready(function() {
        try{
            o.megaMenu(),o.mediaPopups(),o.carousel()
        }catch(e){
        }
    })
}(jQuery);