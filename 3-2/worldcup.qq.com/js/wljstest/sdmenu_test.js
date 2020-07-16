function SDMenu(id) {
	if (!document.getElementById || !document.getElementsByTagName)
		return false;
	this.menu = document.getElementById(id);
	this.submenus = this.menu.getElementsByTagName("div");
	this.remember = false;
	this.speed = 100;
	this.markCurrent = true;
	this.oneSmOnly = true;
}
SDMenu.prototype.init = function(r) {
	var mainInstance = this;
	
	for (var i = 0; i < this.submenus.length; i++)
	{
		this.submenus[i].getElementsByTagName("span")[0].onclick = function() {
			mainInstance.toggleMenu(this.parentNode);
		}
	};
	
		var links = this.menu.getElementsByTagName("a");
		var divs1 = document.getElementById("rightcontent0").getElementsByTagName("div");
		var divs2 = document.getElementById("rightcontent1").getElementsByTagName("div");

		function t(i,j){
			this.onmouseoverFunc=function(){
				for (var s = 0; s < links.length; s++){
					if (links[s].className!="current")
						links[s].className=(s==i)?"onmouse":"offmouse";
				}
			}
			this.onmouseoutFunc=function(){
				for (var s = 0; s < links.length; s++){
					if (links[s].className!="current")
						links[s].className=(s==i)?"offmouse":"";
				}
			}
			this.clickFunc=function(){
				var pflag=0;
				for (var s = 0; s < links.length; s++){
					links[s].className=(i==s)?"current":"";
					if (flag==0)
						divs1[s].className=(i==s)?"dis":"undis";
					else
						divs2[s].className=(i==s)?"dis":"undis";
					}
					if (flag==0)
					{pid_full=divs1[i].id;
					}else{pid_full=divs2[i].id;}
					
					var url_str='http://worldcup.qq.com/master/'+pid_full+'.htm';
					startHTTPXML(url_str);
					
			}
		}
			
		for (var i = 0; i < links.length; i++){
			var eachobj=new t(i,r);
				links[i].onclick=eachobj.clickFunc;
				links[i].onmouseover=eachobj.onmouseoverFunc;
				links[i].onmouseout=eachobj.onmouseoutFunc;
			}
		
	if (this.remember) {
		var regex = new RegExp("sdmenu_" + encodeURIComponent(this.menu.id) + "=([01]+)");
		var match = regex.exec(document.cookie);
		if (match) {
			var states = match[1].split("");
			for (var i = 0; i < states.length; i++)
				this.submenus[i].className = (states[i] == 0 ? "collapsed" : "");
		}
	}
};
SDMenu.prototype.toggleMenu = function(submenu) {
	if (submenu.className == "collapsed")
		this.expandMenu(submenu);
	else
		this.collapseMenu(submenu);
};
SDMenu.prototype.expandMenu = function(submenu) {
	var fullHeight = submenu.getElementsByTagName("span")[0].offsetHeight;
	var links = submenu.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++)
		fullHeight += links[i].offsetHeight;
	var moveBy = Math.round(this.speed * links.length);
	
	var mainInstance = this;
	var intId = setInterval(function() {
		var curHeight = submenu.offsetHeight;
		var newHeight = curHeight + moveBy;
		if (newHeight < fullHeight)
			submenu.style.height = newHeight + "px";
		else {
			clearInterval(intId);
			submenu.style.height = "";
			submenu.className = "";
			mainInstance.memorize();
		}
	}, 30);
	this.collapseOthers(submenu);
};
SDMenu.prototype.collapseMenu = function(submenu) {
	var minHeight = submenu.getElementsByTagName("span")[0].offsetHeight;
	var moveBy = Math.round(this.speed * submenu.getElementsByTagName("a").length);
	var mainInstance = this;
	var intId = setInterval(function() {
		var curHeight = submenu.offsetHeight;
		var newHeight = curHeight - moveBy;
		if (newHeight > minHeight)
			submenu.style.height = newHeight + "px";
		else {
			clearInterval(intId);
			submenu.style.height = "";
			submenu.className = "collapsed";
			mainInstance.memorize();
		}
	}, 30);
};
SDMenu.prototype.collapseOthers = function(submenu) {
	if (this.oneSmOnly) {
		for (var i = 0; i < this.submenus.length; i++)
			if (this.submenus[i] != submenu && this.submenus[i].className != "collapsed")
				this.collapseMenu(this.submenus[i]);
	}
};
SDMenu.prototype.expandAll = function() {
	var oldOneSmOnly = this.oneSmOnly;
	this.oneSmOnly = true;
	for (var i = 0; i < this.submenus.length; i++)
		if (this.submenus[i].className == "collapsed")
			this.expandMenu(this.submenus[i]);
	this.oneSmOnly = oldOneSmOnly;
};
SDMenu.prototype.collapseAll = function() {
	for (var i = 0; i < this.submenus.length; i++)
		if (this.submenus[i].className != "collapsed")
			this.collapseMenu(this.submenus[i]);
};
SDMenu.prototype.memorize = function() {
	if (this.remember) {
		var states = new Array();
		for (var i = 0; i < this.submenus.length; i++)
			states.push(this.submenus[i].className == "collapsed" ? 0 : 1);
		var d = new Date();
		d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
		document.cookie = "sdmenu_" + encodeURIComponent(this.menu.id) + "=" + states.join("") + "; expires=" + d.toGMTString() + "; path=/";
	}
};/*  |xGv00|79f4dc704abfcda149a5feadac9a04fb */