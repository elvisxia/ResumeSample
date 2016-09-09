(function () {
    "use strict"


    var roaming = Windows.Storage.ApplicationData.current.roamingSettings;

    Windows.UI.WebUI.WebUIApplication.addEventListener("suspending", function (args) {
        roaming["currentUri"] = window.location.href;
        //save the other informations of the page
    });

    window.onload = function () {
        document.getElementById("myBtn").onclick = function () {
            window.location.href = "ms-appx:///index.html";
        }
    }
    

})();