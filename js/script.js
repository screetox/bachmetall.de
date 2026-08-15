const year = new Date().getFullYear();
if (year == '2026') {
    document.getElementById('copyright').innerHTML = '© 2026 Bach Metall';
} else {
    document.getElementById('copyright').innerHTML = '© 2026-' + year + ' Bach Metall';
}

function loadGoogleMap() {
    const container = document.getElementById('google-map-container');
    const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2676.258340045658!2d9.617405464213947!3d47.87332531446734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479bb1a1d4c78219%3A0x13df473d8c276f59!2zUHJldcOfZW5ow6R1c2xlIDEvMiwgODgyNzMgRnJvbnJldXRlLVByZXXDn2VuaMOkdXNsZQ!5e0!3m2!1sde!2sde!4v1786750007453!5m2!1sde!2sde";

    const iframe = document.createElement('iframe');
    iframe.src = embedUrl;
    iframe.loading = "lazy";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";

    container.innerHTML = '';
    container.appendChild(iframe);
}
