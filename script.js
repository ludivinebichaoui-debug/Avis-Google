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
