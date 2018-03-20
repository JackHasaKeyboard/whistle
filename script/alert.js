var stock = Cookies.getJSON('stock');

$(document).ready(function() {
	for (var grade in stock) {
		$('#metal ul').append('<li>' + grade + ': <span>' + stock[grade] + '</span></li>');

		switch(grade) {
			case 'Reclaimed Metal':
			case 'Scrap Metal':
				if (stock[grade] < 3) {
					chrome.browserAction.setIcon({
						path: {
							'16': '../img/warning_red.png'
						}
					});
				} else {
					chrome.browserAction.setIcon({
						path: {
							'16': '../img/ok.png'
						}
					});
				}
		}
	}
});
