function startFlow() {

    document.getElementById("step-avis").classList.add("hidden-step");
    document.getElementById("step-roue").classList.remove("hidden-step");

    if (typeof drawWheel === "function") {

        setTimeout(drawWheel, 100);

    }

}
