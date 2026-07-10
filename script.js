function startFlow() {
    // 1. On affiche immédiatement l'écran de la roue
    document.getElementById('step-avis').classList.add('hidden-step');
    document.getElementById('step-roue').classList.remove('hidden-step');
    
    // 2. On redessine la roue pour qu'elle soit parfaite sur l'iPad
    if (typeof drawWheel === "function") {
        drawWheel();
    }
    
    // Le navigateur va ouvrir le lien Google Avis dans un nouvel onglet juste après.
    // Ainsi, quand le client aura fini et fermera l'onglet Google, il retombera pile sur la roue déjà affichée !
}
function showWheelButton() {

    document.getElementById("waiting").style.display = "block";

    setTimeout(function () {

        document.getElementById("waiting").style.display = "none";

        const btn = document.getElementById("wheelBtn");

        btn.style.display = "inline-block";

        btn.animate([
            {transform:"scale(0.8)",opacity:0},
            {transform:"scale(1.08)",opacity:1},
            {transform:"scale(1)",opacity:1}
        ],{
            duration:600
        });

    },3000);

}
