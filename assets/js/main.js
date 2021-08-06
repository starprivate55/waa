window.onload = function() {
    let menu = {
        twitter: "https://twitter.com/starprivate55",
        instagram: "https://instagram.com/starprivate55",
        youtube: "https://youtube.com/starprivate55",
        tgrgroup: "https://tgrgroup.jp",
    };


    Object.keys(menu).forEach(key => {
        console.log('key:' + key + ' value:' + menu[key]);
        document.getElementById(key).onclick = function() {
            location.href = menu[key];
        };
    });


    document.getElementById("waa").textContent = function() {
        let output = "";
        for (let i = 0; i < 10000; i++)
            output += "わー"
        return output
    }();
}