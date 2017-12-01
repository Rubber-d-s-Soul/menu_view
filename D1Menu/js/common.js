$(function() {
    console.log("読み込む");
    $('.dropdown-trigger').dropdown({
        'constrainWidth': false
    });


    $(conf_dom.center).on("mouseenter", function() {
        console.log("header hide");
        $(conf_dom.header).hide("normal");
        $(conf_dom.class.card_title).hide("normal");
    });

    $(conf_dom.center).on("mouseleave", function() {
        console.log("header show");
        $(conf_dom.header).show("normal");
        $(conf_dom.class.card_title).show("normal");
    });

    $('.fixed-action-btn').floatingActionButton({
        direction: 'top',
        hoverEnabled: false
    });

    $(document).ready(function() {
        $('.tooltipped').tooltip();
    });
});

var conf_dom = {
    header: "header",
    center: "center",
    class: {
        card_title: ".card-title"
    }
}