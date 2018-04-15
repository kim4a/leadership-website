window.onload = function(e) {
	window.addEventListener('resize', fixMenuBar);
	document.getElementById('menubartoggle').addEventListener('click', function() { toggleMenuBar(null); });
	fixMenuBar();
}

function fixMenuBar() {
	if (window.innerWidth > 1000) {
		toggleMenuBar(true);
	}
	else {
		toggleMenuBar(false);
	}
}

function toggleMenuBar(close) {
	var menubaritems = document.getElementsByClassName('menubaritem');
	if (close || close == null && menubaritems[1].style.display == "none") {
		for (var i = 1; i < menubaritems.length; i++) {
			menubaritems[i].style.display = "inline-block";
		}
	}
	else {
		for (var i = 1; i < menubaritems.length; i++) {
			menubaritems[i].style.display = "none";
		}
	}
}
