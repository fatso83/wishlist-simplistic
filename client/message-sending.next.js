var targetOrigin = '*'; // all

export var tellParent = (topic, data) => {
	window.parent.postMessage({
		topic : topic,
		message: data
	}, targetOrigin);
};
