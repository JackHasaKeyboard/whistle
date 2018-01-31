$(document).ready(function() {
	const xhr = new XMLHttpRequest;
	xhr.open('GET', chrome.runtime.getURL('metal.json'));

	xhr.onreadystatechange = function() {
		if (this.readyState == 4) {
			result = JSON.parse(xhr.responseText);

			Object.keys(result).forEach(function(key, i) {
				$('#metal li:nth-child(' + (i + 1) + ')').html(key + ': <span>' + result[key] + '</span>');

				switch(key) {
					case 'Reclaimed Metal':
					case 'Scrap Metal':
						if (result[key] < 3) {
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
					default:
				}
			});
		}
	};

	xhr.send();
});
