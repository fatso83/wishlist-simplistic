//not varing the definitions here -> ends up in the global scope
checkJustOne = function(list) {
	var count = list.count ? list.count() : list.length;

	if (count > 1)
		console.error(
				"Logical error: we should never be"
				+ " able to store a user with a certain"
				+ "address more than once");
};
