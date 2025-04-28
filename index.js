let nomeHeroi = "Marcos"
let nivelXp = 7500

if (nivelXp >= 0 && nivelXp <= 1000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de: Ferro! XP menor do que 1000");
} else if (nivelXp >= 1001 && nivelXp <= 2000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de: Bronze! XP entre 1001 e 2000");
} else if (nivelXp >= 2001 && nivelXp <= 5000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de: Prata! XP entre 2001 e 5000");
} else if (nivelXp >= 5001 && nivelXp <= 7000){
    console.log("O Herói de nome " + nomeHeroi + " está no nível de: Ouro! XP entre 5001 e 7000");
} else if (nivelXp >= 7001 && nivelXp <= 8000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de: Platina! XP entre 7001 e 8000");
} else if (nivelXp >= 8001 && nivelXp <= 9000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de: Ascendente! XP entre 8001 e 9000");
} else if (nivelXp >= 9001 && nivelXp <= 10000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de: Imortal! XP entre 9001 e 10000"); 
} else {
    console.log("O Herói de nome " + nomeHeroi + " está em um nível acima de 10000!");
}
