Template.page.wishes = function () {
	var ids = [44,22,31,1234];

	return ids.map(function (id, index) {
		return {
			id : id,
			description : description(),
			title: title(),
			price : price(),
			images : images(),
			show: index === 0? 'in' : ''
		};
	});
};


var title = function () {
	return getRandomVal([
		'Kenwood KM0220', 'Mummi tallerken',
		'Bestemorservice', 'Ny tannbørste'
	]);
};

var description = function () {
	return getRandomVal([
		'km0220 Titanium tilgjengelig fra Lefdal og Elkjøp',
		"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
	]);
};

var price = function () {
	return 500 + Math.round((Math.random() + 0.1) * 50) * 100;
};

var images = function () {
//	return getRandomVal([
	return [
		'http://getbootstrap.com/2.3.2/assets/img/bootstrap-mdo-sfmoma-01.jpg',
		'http://getbootstrap.com/2.3.2/assets/img/bootstrap-mdo-sfmoma-02.jpg',
		'http://getbootstrap.com/2.3.2/assets/img/bootstrap-mdo-sfmoma-03.jpg'
	].map(function (img, i) { return {url : img, index : i, active : i === 0 ? 'active' : ''}; });
};

