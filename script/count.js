const xhr = new XMLHttpRequest;
xhr.open('GET', 'http://steamcommunity.com/profiles/76561198065277457/inventory/json/440/2');

const metal = {
	'Refined Metal': '2675',
	'Reclaimed Metal': '5564',
	'Scrap Metal': '2674'
}

stock = {};
xhr.onreadystatechange = function() {
	if (this.readyState == 4 /* done */) {
		result = JSON.parse(xhr.responseText);

		for (var grade in metal) {
			var i = 0;

			for (var key in result.rgInventory) {
				var item = result.rgInventory[key];

				if (item.classid == metal[grade]) {
					i++;
				}

				stock[grade] = i;
			}
		}

		Cookies.set('stock', stock);
	}
};

xhr.send();
