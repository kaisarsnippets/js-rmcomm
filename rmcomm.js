// Remove comments
function rmcomm(str, remove_html_comments) {
    remove_html_comments = remove_html_comments || false;
    str = str.replace(/\\\/\//g, '__KCRMCOMMREGEXBARS__'); 
    var rx = /\/\*[\s\S]*?\*\/|(?<!:)\/\/.*$/gm;
    str = str.replace(rx, '');
    if (remove_html_comments) {
        rx = /<!--[\s\S]*?-->/gm;
        str = str.replace(rx, '');
    } str = str.replace(/__KCRMCOMMREGEXBARS__/g, '\\//');
    return str;
}
