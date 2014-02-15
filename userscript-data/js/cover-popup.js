/* Changes image url to the one for the given size */
function heri_coverSize(url, size) {
    if (url == null) return null;
    size = typeof(size) != 'undefined' ? size : "medium";
    var coverUrl = [];
    var prefix = "";

    // figure out which size is wanted
    switch (size.toLowerCase()) {
        case "large":
        case "l":
            prefix = "L";
            break;
        case "nano":
        case "n":
            prefix = "N";
            break;
        case "tiny":
        case "thumb":
        case "thumbnail":
        case "t":
            prefix = "T";
            break;
        case "small":
        case "s":
            prefix = "S";
            break;
        case "medium":
        case "m":
        default:
            prefix = "M";
    }
    var pos = url.lastIndexOf('/') + 1;  // get index of the image's filename
    coverUrl = url.substr(0,pos)+prefix+url.substr(pos+1);  // replace image's size prefix

    return coverUrl;
}

/* make sure the right image is shown and display popup using 'facebox' plugin */
function heri_popupCover(elm) {
    var newPic = heri_coverSize($(elm).attr('src'), 'l');
    $('div.popup-covers img.popup-cover').attr('src', newPic);
    $.facebox({div: '#comic-gn-popup'});
}

/* change image in popup when clicked */
function heri_clickCover(elm) {
    var newPic = heri_coverSize($(elm).attr('src'), 'l');
    $('div.popup-covers img.popup-cover').attr('src', newPic);
}

/* change image on page when moused over */
function heri_overCover(elm) {
    var medPic = heri_coverSize($(elm).attr('src'), 'm');
    //var lrgPic = heri_coverSize($(elm).attr('src'), 'l');  // no longer needed thanks to 'heri_popupCover'
    $('div.cover_image img.cover_image').attr('src', medPic);
    //$('div.popup-covers img.popup-cover').attr('src', lrgPic);  // no longer needed thanks to 'heri_popupCover'
}

/* JQuery call when DOM is loaded */
$(document).ready(function() {
    // init cover popup
    var imgUrl = $('div.covers img.cover_image').attr('src');
    if (imgUrl != null) {   // only run if there is a cover image
        // insert cover-popup HTML
        var cvrImg = heri_coverSize(imgUrl, 'l');  // get url for image's large version
        $('body').append('<div id="comic-gn-popup" style="display:none;">');  // contents will be cloned by facebox
        $('div#comic-gn-popup').append('<div class="popup-covers">');
        $('div#comic-gn-popup div.popup-covers').append('<img class="popup-cover" src="'+cvrImg+'" />');
        $('div#comic-gn-popup div.popup-covers').append('<div class="thumbnails">');
        $('.cover_thumbnail_set img.cover_image').each(function() {
            // add each thumbnail if exists
            var thmbImg = heri_coverSize($(this).attr('src'), 't');
            $('div#comic-gn-popup div.thumbnails').append('<img src="'+thmbImg+'" onclick="heri_clickCover(this);" />');
        });
        $('div#comic-gn-popup div.popup-covers').append('<br class="clear">');

        // set up mouse events (attach to <img> so we can send 'this' and get the image's source that way)
        //$('div.thumbnails a').removeAttr('onclick');  // remove original page function
        $('.covers, .cover_thumbnail_set').on('click','img.cover_image',function () { heri_popupCover(this); });  // applies to cover & nano-thumbs
        $('.cover_thumbnail_set img.cover_image').mouseover(function () { heri_overCover(this); });
    }
});
