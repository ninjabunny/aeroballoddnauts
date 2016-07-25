var pendragonData = [
	"http://themaverickmuse.com/wp-content/uploads/2014/09/oba-card-pendragon-captain.jpg",
	"http://themaverickmuse.com/wp-content/uploads/2014/09/oba-card-pendragon-figurehead.jpg",
	"http://themaverickmuse.com/wp-content/uploads/2014/09/oba-card-pendragon-deckmarshall.jpg",
	"http://themaverickmuse.com/wp-content/uploads/2014/09/oba-card-pendragon-gunmarshall.jpg",
	"http://themaverickmuse.com/wp-content/uploads/2014/09/oba-card-pendragon-squadmarshall.jpg",
	"http://themaverickmuse.com/wp-content/uploads/2014/11/oba-card-pendragon-chivvierr.jpg",
	"http://themaverickmuse.com/wp-content/uploads/2014/09/oba-card-pendragon-gunschampion.jpg",
	"http://themaverickmuse.com/wp-content/uploads/2014/09/oba-card-pendragon-squadchampion.jpg",
	"http://themaverickmuse.com/wp-content/uploads/2014/09/oba-card-pendragon-shadowcaster.jpg",
	"http://themaverickmuse.com/wp-content/uploads/2014/09/oba-card-pendragon-gunbots.jpg",
	"http://themaverickmuse.com/wp-content/uploads/2014/09/oba-card-pendragon-fusebots.jpg",
	"http://themaverickmuse.com/wp-content/uploads/2014/09/oba-card-pendragon-deckpaws.jpg",
	"http://themaverickmuse.com/wp-content/uploads/2014/09/oba-card-pendragon-deckpaws.jpg",
	"http://themaverickmuse.com/wp-content/uploads/2014/09/oba-card-pendragon-deckpaws.jpg",
	"http://themaverickmuse.com/wp-content/uploads/2014/09/oba-card-pendragon-marksmen.jpg",
	"http://themaverickmuse.com/wp-content/uploads/2014/09/oba-card-pendragon-marksmen.jpg",
	"http://themaverickmuse.com/wp-content/uploads/2014/09/oba-card-pendragon-marksmen.jpg",
	"http://themaverickmuse.com/wp-content/uploads/2014/09/oba-card-pendragon-cannoneers.jpg",
	"http://themaverickmuse.com/wp-content/uploads/2014/09/oba-card-pendragon-cannoneers.jpg",
	"http://themaverickmuse.com/wp-content/uploads/2014/09/oba-card-pendragon-cannoneers.jpg",
	"http://themaverickmuse.com/wp-content/uploads/2014/09/oba-card-pendragon-armouredfiends.jpg",
	"http://themaverickmuse.com/wp-content/uploads/2014/09/oba-card-pendragon-armouredfiends.jpg",
	"http://themaverickmuse.com/wp-content/uploads/2014/09/oba-card-pendragon-armouredfiends.jpg",
	"http://themaverickmuse.com/wp-content/uploads/2014/09/oba-card-pendragon-fiends.jpg",
	"http://themaverickmuse.com/wp-content/uploads/2014/09/oba-card-pendragon-fiends.jpg",
	"http://themaverickmuse.com/wp-content/uploads/2014/09/oba-card-pendragon-fiends.jpg"
];


(function() {
	//populate images
	while (pendragonData.length > 0) {
		var tempUrl = pendragonData.splice(Math.floor(Math.random() * pendragonData.length), 1);
		$('#thediv').prepend('<img src="' + tempUrl + '"><img>');
	}
	// bind some stuff on images
	$('img').click(function() {
		if ($(this).hasClass('selected')) {
			// discard card
			$(this)
				.removeClass('selected')
				.addClass('discarded')
				.appendTo($('#thediv'));
		} else if ($('img').hasClass('selected')) {
			//rig
			var tempUrl = $(this).attr('src');
			$(this).attr('src', $('img.selected').attr('src'));
			$('img.selected').attr('src', tempUrl).removeClass('selected');

		} else {
			//select card
			$(this).addClass('selected');
		}

	});
})(this)