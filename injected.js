var debug = false

if (~document.title.toLowerCase().indexOf('color hunt') || debug) {
	console.info('add copy function');
	var script = document.createElement('script')
	var text = `copy = function(str) {
  var $input = $('<input type="text" />').val(str).appendTo($('body')).css({
    position: 'absolute',
    top: '-100%',
    left: '-100%',
    opacity: '0'
  }).select();
  if (!document.execCommand('copy')) {
    console.warn('unnable to copy "' + str + '"!');
  }
  $input.remove();
  return str;
};

$('body').on('click', '.place span', function (e) {
  e.preventDefault()
  e.stopPropagation()
  console.info('copy "' + copy($(this).text().toUpperCase()) + '"')
})`
	
	script.innerHTML = text

	script.type = 'text/javascript'
	document.body.appendChild(script)

	var style = document.createElement('style')
	style.type = 'text/css'
	style.innerHTML = `.place span { cursor: copy }`
	document.head.appendChild(style)
}

/*
<style type="text/css">div.image {max-width: 256px;max-height: 256px;background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDU2MSA1NjEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2MSA1NjE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0iY29udGVudC1jb3B5Ij4KCQk8cGF0aCBkPSJNMzk1LjI1LDBoLTMwNmMtMjguMDUsMC01MSwyMi45NS01MSw1MXYzNTdoNTFWNTFoMzA2VjB6IE00NzEuNzUsMTAyaC0yODAuNWMtMjguMDUsMC01MSwyMi45NS01MSw1MXYzNTcgICAgYzAsMjguMDUsMjIuOTUsNTEsNTEsNTFoMjgwLjVjMjguMDUsMCw1MS0yMi45NSw1MS01MVYxNTNDNTIyLjc1LDEyNC45NSw0OTkuOCwxMDIsNDcxLjc1LDEwMnogTTQ3MS43NSw1MTBoLTI4MC41VjE1M2gyODAuNVY1MTAgICAgeiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=)}</style>
*/