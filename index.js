 const header = document.getElementById("header");
      const logo = header.querySelector("h3");
      const links = document.querySelectorAll("#nav a");
      const menuBtn = document.getElementById("menu-btn");
      const nav = document.getElementById("nav");

      function applyHeaderStyles(isActive) {
        if (isActive) {
          header.classList.add("bg-white/80", "backdrop-blur-md", "shadow-lg");
          logo.classList.add("text-black");
          links.forEach((a) => a.classList.add("text-black"));
        } else {
          header.classList.remove(
            "bg-white/80",
            "backdrop-blur-md",
            "shadow-lg"
          );
          logo.classList.remove("text-black");
          links.forEach((a) => a.classList.remove("text-black"));
        }
      }

      window.addEventListener("scroll", () => {
        applyHeaderStyles(window.scrollY > 50);
      });

      header.addEventListener("mouseenter", () => applyHeaderStyles(true));
      header.addEventListener("mouseleave", () =>
        applyHeaderStyles(window.scrollY > 50)
      );

      menuBtn.addEventListener("click", () => nav.classList.toggle("hidden"));


      window.addEventListener("scroll", () => {
        const header = document.getElementById("header");
        if (window.scrollY > 50) {
          header.classList.add("bg-white/80", "backdrop-blur-md", "shadow-lg");
          header.querySelector("h3").classList.add("text-black");
          document
            .querySelectorAll("#nav ul li a")
            .forEach((a) => a.classList.add("text-black"));
        } else {
          header.classList.remove(
            "bg-white/80",
            "backdrop-blur-md",
            "shadow-lg"
          );
          header.querySelector("h3").classList.remove("text-black");
          document
            .querySelectorAll("#nav ul li a")
            .forEach((a) => a.classList.remove("text-black"));
        }
      });

      const slider = document.querySelector(".slider");
      const slides = document.querySelectorAll(".slide");
      const prev = document.querySelector(".prev");
      const next = document.querySelector(".next");
      const dots = document.querySelectorAll(".dot");

      let index = 0;
      function updateSlider() {
        slider.style.transform = `translateX(-${index * 100}vw)`;
        dots.forEach((dot, i) => dot.classList.toggle("bg-white", i === index));
      }
      next.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        updateSlider();
      });
      prev.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        updateSlider();
      });
      dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
          index = i;
          updateSlider();
        });
      });

      setInterval(() => {
        index = (index + 1) % slides.length;
        updateSlider();
      }, 4000);