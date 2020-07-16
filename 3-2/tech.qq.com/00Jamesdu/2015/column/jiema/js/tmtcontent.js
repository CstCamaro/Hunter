var _arr = [];
var _tmp = {};
var _num = 0;
var _isend = false;
var getlistContent = function() {
	window.ninja_callback = function(data) {
		var _num = 0;
		var _str = '';
		var _strs = '';
		var _len = data.length;
		for (var i = 0; i < _len; i++) {
			_arr[i] = data[i];
		}
		window.votnum = function(callback) {
			var _num = 0;
			if (typeof(callback.data) != 'undefined') {
				_num = callback.data.commentnum;
			}
			_str += '<h2 name="goAccessAnchor0">';
			_str += '<a class="color_black" href="' + _arr[0].n_url + '" target="_blank">' + _arr[0].n_title + '</a></h2>';
			_str += '<div class="detail"><div>' + _arr[0].n_describe;
			// _str += '<a href="' + _arr[0].n_url + '" target="_blank">[详细]</a></div>';
			_str += '</div>';
			_str += '<span class="fr plLink" title="评论">';
			_str += '<a class="heli_com321" href="http://coral.qq.com/' + _arr[0].n_commet_id + '" target="_blank">';
			_str += _num + '</a></span></div>';
			$('.txt').html(_str);
			$('.loading').remove();
			_str = '<a href="' + _arr[0].n_url + '" target="_blank">';
			_str += '<img title="' + _arr[0].n_title + '" alt="" src="' + _arr[0].n_image + '" width="660" height="330"></a>';
			$('.dibg').html(_str);
			_arr.shift();
			var substrname = function(name, len) {
					var _tmpname = '';
					if (name.length > len) {
						_tmpname = name.substring(0, len * 1 - 1) + "...";
					} else {
						_tmpname = name
					};
					return _tmpname;
				}
			var getlist = function() {
				for (var j = 0; j < 8; j++) {
					_tmp = _arr.shift();
					if (_tmp != undefined) {
						_strs += '<li><a target="_blank" href="' + _tmp.n_url + '">';
						_strs += '<img src="' + _tmp.n_image + '"><h3>' + _tmp.n_title + '</h3>';
						_strs += '<p>' + substrname(_tmp.n_describe, 50) + '</p><span>\u7b2c' + _tmp.n_times + '\u671f</span></a></li>';
					} else {
						_isend = true;
						break;
					}
				}
				$('.leftbottom').find('ul').append(_strs);
			}
			getlist();
			$('#row1more').click(function() {
				_strs = '';
				if (_num == 6 || _isend == true) {
					window.open('http://tech.qq.com/l/tmt/tmt.htm');
				} else {
					_num++;
					getlist();
				}
			})
		}
		$.getScript('http://coral.qq.com/article/' + _arr[0].n_commet_id + '/commentnum?callback=votnum')
	}
	$.getScript('http://yc.open.qq.com/ninja/index.php?c=index&a=product&columnId=8&start=0&format=js')
}
$(function() {
	$.getScript("//mat1.gtimg.com/ping.js", function() {
		if (typeof pgvMain == "function") {
			pgvMain();
		}
	});
	getlistContent();
}); /*  |xGv00|37e0298907aa52a3cdbddf06e6f0ae75 */