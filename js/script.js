const year = new Date().getFullYear();
if (year == '2026') {
    document.getElementById('copyright').innerHTML = '© 2026 Bach Metall';
} else {
    document.getElementById('copyright').innerHTML = '© 2026-' + year + ' Bach Metall';
}
