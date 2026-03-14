let count = 0;

function concluirTarefa(id, element) {
    if(!element.classList.contains('completed')) {
        element.classList.add('completed');
        count++;
        document.getElementById('fill').style.width = (count * 33.3) + "%";

        if(count === 3) {
            setTimeout(showLevelUp, 500);
        }
    }
}

function showLevelUp() {
    const vic = document.getElementById('victory-screen');
    vic.innerHTML = `<img src="vitoria.png" style="width: 80%; animation: zoomIn 0.5s forwards;">`;
    vic.classList.remove('hidden');
    
    // Adiciona a lâmina no inventário
    document.getElementById('slot-1').innerHTML = `<img src="laminas.png" style="width:100%">`;
}
