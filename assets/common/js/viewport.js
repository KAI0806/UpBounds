var userAgent = window.navigator.userAgent.toLowerCase();

if((navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') == -1) || navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('edenTABET') > 0){
	document.write('<meta name = "viewport" content = "width = 1280">');
} else if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || (navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0 && navigator.userAgent.indexOf('edenTABET') == -1)){
	document.write('<meta name="viewport" content="width=device-width; initial-scale=1.0">');
}