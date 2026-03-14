// Lista de Chefes Iniciais (o jogo gerará novos depois desses)
const bosses = [
    { name: "Procrastinação", hp: 100, maxHp: 100 },
    { name: "Zona de Conforto", hp: 300, maxHp: 300 },
    { name: "Dúvida Paralisante", hp: 600, maxHp: 600 },
    { name: "O Grande Sedentarismo", hp: 1200, maxHp: 1200 }
];

// Lista de Itens que podem ser ganhos ou comprados
const items = [
    { name: "Adaga de Rank E", bonus: "FOR", value: 5 },
    { name: "Manto da Disciplina", bonus: "VIT", value: 10 },
    { name: "Anel do Foco", bonus: "INT", value: 15 },
    { name: "Pergaminho de Sabedoria", bonus: "WIS", value: 20 },
    { name: "Botas da Agilidade", bonus: "AGI", value: 10 }
];

// Lista de Skills que o sistema verifica para desbloqueio
const skillsDatabase = [
    { name: "Arrancada", req: "agi", level: 10, desc: "Dano massivo baseado em Agilidade." },
    { name: "Toque do Dominador", req: "int", level: 15, desc: "Aumenta ganho de ouro temporariamente." },
    { name: "Vontade de Ferro", req: "vit", level: 20, desc: "Reduz o dano de gold do Boss." }
];
