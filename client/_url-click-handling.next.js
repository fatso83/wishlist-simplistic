// handle url clicks differently depending on whether we run in an iframe

var askParentWindowToOpenLink = (url) => {
	tellParent('open_url', { url : url} );
};

export var externalUrlClickHandler = (event, template) => {
	if(!features.iframe) {
		// do nothing special - the default is to open the link
		return true;
	} else {
		var url =  event.currentTarget.href;
		event.preventDefault();
		askParentWindowToOpenLink(url);
		return false;
	}
};
