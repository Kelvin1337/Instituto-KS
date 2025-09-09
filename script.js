document.addEventListener("DOMContentLoaded", () => {
    // 1️⃣ FAQ Accordion
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        item.querySelector(".faq-question").addEventListener("click", () => {
            item.classList.toggle("active");
        });
    });

    // 2️⃣ Notas musicais animadas
    const hero = document.querySelector(".hero-section");
    const notesContainer = document.createElement("div");
    notesContainer.classList.add("notes-container");
    hero.appendChild(notesContainer);

    const notes = ["🎵","🎶","🎼","🎹","🎷","🎺","🥁"];
    function createNote() {
        const note = document.createElement("span");
        note.classList.add("note");
        note.textContent = notes[Math.floor(Math.random() * notes.length)];
        note.style.left = Math.random() * 100 + "vw";
        note.style.fontSize = (Math.random() * 20 + 15) + "px";
        note.style.animationDuration = (Math.random() * 5 + 5) + "s";
        notesContainer.appendChild(note);

        // Remove a nota após a animação
        setTimeout(() => { note.remove(); }, 10000);
    }

    setInterval(createNote, 500);

    // 3️⃣ Slider de cursos (scroll suave)
    const slider = document.querySelector(".courses-slider");
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
        isDown = true;
        slider.classList.add("active");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => { isDown = false; slider.classList.remove("active"); });
    slider.addEventListener("mouseup", () => { isDown = false; slider.classList.remove("active"); });
    slider.addEventListener("mousemove", (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // scroll-fast
        slider.scrollLeft = scrollLeft - walk;
    });
});
