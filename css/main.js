// ===========================
// ZenithTools AI
// main.js
// ===========================

// تأثير ظهور العناصر عند التمرير
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".tool-card, .feature, .price-card, .testimonial, .stat, .faq-item"
).forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all .7s ease";
    observer.observe(el);
});

// تأثير بسيط لأزرار الموقع
document.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "translateY(-3px) scale(1.03)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translateY(0) scale(1)";
    });
});

// رسالة ترحيب
window.addEventListener("load", () => {
    console.log("ZenithTools AI Loaded Successfully");
});
