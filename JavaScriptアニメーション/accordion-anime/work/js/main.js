document.querySelectorAll(".list-tit").forEach(title => {
    title.addEventListener("click", () => {
        const content = title.nextElementSibling;
        if (content.style.height && content.style.height !== "0px") {
            content.style.height = "0px";
        } else {
            content.style.height = content.scrollHeight + "px";
        }
    })
}

)