    inputX.addEventListener("input", checkCoordinates);
    inputY.addEventListener("input", checkCoordinates);
    inputZ.addEventListener("input", checkCoordinates);

    function checkCoordinates() {
        let x_coordinate = inputX.value;
        let y_coordinate = inputY.value;
        let z_coordinate = inputZ.value;

        if (x_coordinate === "44.4" && y_coordinate === "-73.2" && z_coordinate === "21.0") {
            container.classList.remove("active");
            container.classList.add("close");
            hacked.classList.remove("close");
            hacked.classList.add("active");
        } 

        console.log(x_coordinate);
        console.log(y_coordinate);
        console.log(z_coordinate);
    };
