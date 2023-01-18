let theme_id = "light";

window.onload = function clickTheme() {
    let radios = document.getElementsByName("selected_topic");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].value == localStorage.getItem("theme_id")) {
            radios[i].checked = true;
            break;
        }
    }
    theme_id = localStorage.getItem("theme_id");

    console.log(theme_id);
    if (theme_id == 'light') {
        document.getElementById("theme_initial").href = '/theme_light.css';
    }
    else {
        document.getElementById("theme_initial").href = '/theme_dark.css';
    }
}

function clickTheme() {
    if(localStorage.getItem("theme_id" !== '')) { 
        theme_id = localStorage.getItem("theme_id", theme_id); 
    }
    
    let radios = document.getElementsByName("selected_topic");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            theme_id = (radios[i].value);
            localStorage.setItem("theme_id", theme_id);
            break;
        }
    }
    
    console.log(theme_id);
    if (theme_id == 'light') {
        document.getElementById("theme_initial").href = '/theme_light.css';
    }
    else { 
        document.getElementById("theme_initial").href = '/theme_dark.css';
    }
} 