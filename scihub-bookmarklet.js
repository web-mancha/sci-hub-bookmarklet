
var scihub_domains = [
    'https://sci-hub.se',
    'https://sci-hub.st',
    'https://sci-hub.do'
];

var panel = window.document.createElement('div');
panel.style = 'background: yellow none no-repeat scroll 0px 0px; border-color: rgb(0, 0, 0) transparent; border-style: solid none; border-width: 1px 0px 2px; border-image: none 100% / 1 / 0 stretch; color: rgb(68, 68, 68); margin: 0px; padding: 6px; clear: both; font-size: 14px; font-family: arial; position: fixed; top: 0px; left: 0px; width: 100%; z-index: 2147483647; text-align: center;';

var nobr = window.document.createElement('nobr');

var link = window.document.createElement('a');
link.style = 'color:red;font-weight:bold;padding:0.5em;';
link.innerHTML = 'Sci-Hub Download';

nobr.appendChild(link);

for (i = 0; i < scihub_domains.length; i++) {

    var scihub_download_url = scihub_domains[i]+'/'+window.location.href;

    var link = window.document.createElement('a');
    link.style = 'color:blue;font-weight:bold;text-decoration:underline;font-size:12px;padding:0.5em;';
    link.href = scihub_download_url;
    link.target = '_blank';
    link.innerHTML = '[Mirror '+(i+1)+']';

    nobr.appendChild(link);
}

panel.appendChild(nobr);
window.document.body.appendChild(panel);
