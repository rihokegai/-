const boxes = document.querySelectorAll(".scroll-in");
const callback = (entries,observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("displayed")
        } 
        
    });
};

const io = new IntersectionObserver(callback);

boxes.forEach (box => {
    io.observe(box);
});