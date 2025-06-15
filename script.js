function getToken() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

function copiarClabe() {
    const clabe = document.getElementById("clabe").innerText;
    navigator.clipboard.writeText(clabe).then(() => {
        alert("✅ CLABE copiada al portapapeles");
    });
}

fetch('datos.json')
    .then(res => res.json())
    .then(data => {
        const token = getToken();
        const datos = data[token];

        if (datos) {
            document.getElementById('nombre').innerText = datos.nombre;
            document.getElementById('clabe').innerText = datos.clabe;
            document.getElementById('banco').innerText = datos.banco;
        } else {
            document.getElementById('info').classList.add('oculto');
            document.getElementById('error').classList.remove('oculto');
        }
    });
