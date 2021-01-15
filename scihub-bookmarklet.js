
var scihub_url = 'https://sci-hub.tw';

var scihub_download = scihub_url+'/'+window.location.href;

var panel = window.document.createElement('div');
panel.style = 'background: yellow none no-repeat scroll 0px 0px; border-color: rgb(0, 0, 0) transparent; border-style: solid none; border-width: 1px 0px 2px; border-image: none 100% / 1 / 0 stretch; color: rgb(68, 68, 68); margin: 0px; padding: 6px; clear: both; font-size: 14px; font-family: arial; position: fixed; top: 0px; left: 0px; width: 100%; z-index: 2147483647; text-align: center;';

var nobr = window.document.createElement('nobr');

var link = window.document.createElement('a');
link.style = 'color:red;font-weight:bold;text-decoration:underline;';
link.href = scihub_download;
link.target = '_blank';
link.innerHTML = 'Sci-Hub Download';

nobr.appendChild(link);
panel.appendChild(nobr);
window.document.body.appendChild(panel);

