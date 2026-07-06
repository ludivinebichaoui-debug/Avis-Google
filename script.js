function startFlow() {
    // Laisse un léger délai de 300ms pour que le navigateur ouvre l'onglet Google avant de changer d'écran
    setTimeout(() => {
        document.getElementById('step-avis').classList.add('hidden-step');
        document.getElementById('step-roue').classList.remove('hidden-step');
        
        // Redessine instantanément la roue pour l'iPad
        if (typeof drawWheel === "function") {
            drawWheel();
        }
    }, 300);
}
