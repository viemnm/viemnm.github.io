
$(document).ready(function (e) {
    var url      = window.location.href;
    var viewName = "home"
    var url_list = url.split("#")
    var url_view =  url_list[url_list.length - 1]
    if (url_view == "work_with_us"){
        viewName = "work_with_us"
    }else if(url_view == "about"){
        viewName = "about"
    }else if(url_view == "service"){
        viewName = "service"
    }
    function showView(viewName) {
        $('.view').hide();
        $('#' + viewName).show();
    }

    showView(viewName);
    $('[data-launch-view]').click(function (e) {
        e.preventDefault();
        var viewName = $(this).attr('data-launch-view');

        var url      = window.location.href;
        var url_list = url.split("#")
        window.location.href = url_list[0] + "#" + viewName
        showView(viewName);
    });

});
