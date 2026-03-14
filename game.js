let tarefasConcluidas = 0;

function concluirTarefa(id) {
    const btn = document.getElementById('btn-' + id);
    if (!btn.disabled) {
        btn.disabled = true;
        btn.style.backgroundColor = "#00ff00";
        tarefasConcluidas++;
        
        if (tarefasConcluidas === 3) {
            liberarRecompensa();
        }
    }
}

function liberarRecompensa() {
    // Mostra a tela de vitória com a sua imagem
    const victory = document.getElementById('victory-screen');
    victory.innerHTML = `
        <div style="text-align:center; padding-top: 10vh;">
            <img src="vitoria.png" style="width: 70%; border: 3px solid #00ffff;">
            <h1 style="color:#00ffff; text-shadow: 0 0 10px #00ffff;">MÉRITO RECONHECIDO!</h1>
            <button onclick="document.getElementById('victory-screen').classList.add('hidden')" 
                    style="padding: 15px 30px; background: none; border: 1px solid #00ffff; color: #00ffff; cursor: pointer;">
                CONTINUAR ASCENSÃO
            </button>
        </div>
    `;
    victory.classList.remove('hidden');

    // Adiciona a arma ao inventário
    document.getElementById('slot-1').innerHTML = `<img src="laminas.png" style="width:100%; height:100%; object-fit:cover;">`;
}
