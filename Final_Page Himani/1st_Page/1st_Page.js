window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transition", () => {
        document.removeChild("loader");


    })
})

function myfunction1() {
    if (confirm("You are not allowed to this Page!!!Please contact the admin!"));

    else

        confirm("If you are accessing for educational purpose. Contact:9857014043");

}

function purchasefunction()
{
    window.open("login.html", "_blank");
}

