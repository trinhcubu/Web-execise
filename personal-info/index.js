var textWrapper = document.querySelector('.title .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.title .letter',
        scale: [0.5, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 100,
        delay: (el, i) => 70 * (i + 1)
    }).add({
        targets: '.title .line',
        scaleX: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=875',
        delay: (el, i, l) => 80 * (l - i)
    }).add({
        targets: '.title',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 600
    });

// add project link ủrl

function openPopup() {
    // var addicon=document.getElementsByClassName("add-icon");
    // if (addicon.style.display === "block") {
    //     addicon.style.display = "none";
    // } else {
    //     addicon.style.display = "block";
    // }
    var popup = document.getElementById("add-Pro");
    if (popup.style.display === "none") {
        popup.style.display = "block";
    } else {
        popup.style.display = "none";
    }

}

function addLink() {

    var popup = document.getElementById("add-Pro");
    var icon_add =document.getElementsByClassName("add-icon")[0];
    if (popup.style.display === "none") {
        popup.style.display = "block";
        icon_add.style.display="none";

    } else {

        try {
            var name = document.getElementById('NameURL').value;
            var urlInput = document.getElementById('textInput').value;
            var trimmedUrlInput = urlInput.trim();
            try {
                new URL(trimmedUrlInput.trim())
                if (!urlInput) {
                    throw new Error("Bạn chưa nhập vào hộp văn bản!");
                }
                else {
                    // var urlInput = document.getElementById('textInput');

                    var projectsList = document.querySelector('.projects');

                    var liTag = document.createElement('li');
                    liTag.className = "myproject";

                    var aTag = document.createElement('a');
                    aTag.setAttribute('href', urlInput);
                    aTag.setAttribute('target', '_blank');
                    aTag.className = "project-item";
                    if (!name) aTag.textContent = "new_Project";
                    else {
                        aTag.textContent = name;
                    }

                    liTag.appendChild(aTag);
                    projectsList.appendChild(liTag);
                }
            } catch (error) {
                alert("URL sai cú pháp!!!");
            }
        } catch (error) {
            alert(error.message);
        }
        document.getElementById('textInput').value = '';
        popup.style.display = "none";
        icon_add.style.display="block";
    }
}

