//与原生交互方法
(function() {
		//	判断访问终端
		window._browserType = function() {
			var u = navigator.userAgent;
			//IOS
			if(!!u.match(/\(i[^;]+;(U;)? CPU.+Mac OS X/)) {
				return 'IOS'
			}
			//Abdroid
			if(u.indexOf('Android') > -1 || u.indexOf('Adr') > -1) {
				return 'Android'
			}
		};

		//JS 调用 APP
		window._JCA = {
			action: function(_fn, params) {
				if(!local.get('AppName')) {
				alert('请先下载APP')
				return
			}
			switch(_browserType()) {
				case 'IOS':
					window.webkit.messageHandler[_fn].postMessage(params);
					break;
				case 'Android':
					window.webkit.messageHandler[_fn].postMessage(JSON.stringify(params));
					break;
			}
		},
		/*发送cookie*/
		_sendCookie: function(obj) {
				var _fn = 'callSaveCookieString';
				var params = {
					'message': ''
				}
				params = Object.assign(params, obj)
				_JCA.action(fn, params)
			},
		/*打开相册*/
		_callAlbum: function(obj, cb) {
				/*回调*/
				_ACJ[obj.callBack] = function(r) {
					cb(JSON.parse(r).message)
				};
				var _fn = 'callPhotoAlbumAction';
				obj.callBack = '_ACJ.' + obj.callBack;
				var params = {
					'method': '',
					'PassportID': '',
					'PassportName': '',
					'PowerKey': '',
					'Avatar': '',
					'maxSelectCount': '',
					'type': '',
					'url': '',
					'Origin': ''
				};
				params = Object.assign(params, obj);
				_JCA.action(_fn, params);
			}
	}
		/*APP 调用 JS*/
		window._ACJ = {};
})()