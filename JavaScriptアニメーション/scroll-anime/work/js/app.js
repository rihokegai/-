const boxes = document.querySelectorAll(".scroll-in");
const callback = (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("displayed");
        } else {
            entry.target.classList.remove("displayed");
        }
        
    });
};

const io = new IntersectionObserver(callback);

boxes.forEach (box => {
    io.observe(box);
});