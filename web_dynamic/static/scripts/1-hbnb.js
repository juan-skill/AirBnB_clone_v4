#!/usr/bin/node
$(document).ready(function () {
    let amenity_list = {}
    let arrays = [];
    $("input[type=checkbox]").click(function () {
	if (this.checked) {
	    amenity_list[$(this).attr("data-id")] = $(this).attr("data-name");
	} else {
	    delete amenity_list[$(this).attr("data-id")]
	}
	if (arrays) {
	    arrays = []
	}
	Object.values(amenity_list).map(function(key) {
	    arrays.push(key)
	});
	$("div.amenities H4").text(arrays.join(", "));
    });
});
