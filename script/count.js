const steamUserInventory = require('steam-user-inventory');
const fs = require('fs');

stock = {};
steamUserInventory('76561198065277457', '440/2/').then(function(data) {
	['Refined Metal', 'Reclaimed Metal', 'Scrap Metal'].forEach(function(grade) {
		var i = 0;

		data.forEach(function(item) {
			if (item.name == grade) {
				i += 1;
			}
		});

		stock[grade] = i;
	});

	fs.writeFile('../metal.json', JSON.stringify(stock));
});
