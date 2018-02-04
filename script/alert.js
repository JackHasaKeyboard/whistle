var stock = Cookies.getJSON('stock');

for (grade in stock) {
	$('#metal ul').append('<li>' + grade + ': <span>' + result[grade] + '</span></li>');

	switch(grade) {
		case 'Reclaimed Metal':
		case 'Scrap Metal':
			if (result[grade] < 3) {
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
