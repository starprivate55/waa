window.onload = function() {
    document.getElementById("waa").textContent = function() {
        let output = "";
        for (let i = 0; i < 10000; i++)
            output += "わー"
        return output
    }();

    document.getElementById("menu-btn").onclick = function() {
        this.classList.toggle('open');
        this.classList.toggle('close');
    }

}