import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

/* ── Reusable SVG Icons ── */
const GitHubSVG = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

const LinkedInSVG = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
  </svg>
);

const EmailSVG = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
  </svg>
);

const PhoneSVG = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58z" />
  </svg>
);
const WhatsAppSVG = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <path d="M13.601 2.326A7.85 7.85 0 0 0 8.05.03C3.74.03.24 3.53.24 7.84c0 1.38.36 2.73 1.05 3.92L.2 15.8l4.17-1.09a7.8 7.8 0 0 0 3.68.94h.01c4.31 0 7.81-3.5 7.81-7.81a7.76 7.76 0 0 0-2.27-5.51ZM8.05 14.3a6.5 6.5 0 0 1-3.32-.91l-.24-.14-2.48.65.66-2.42-.16-.25a6.48 6.48 0 0 1-1-3.47c0-3.59 2.93-6.52 6.54-6.52 1.74 0 3.38.68 4.61 1.91a6.48 6.48 0 0 1 1.91 4.61c0 3.6-2.93 6.54-6.52 6.54Zm3.58-4.88c-.2-.1-1.16-.57-1.34-.64-.18-.07-.31-.1-.44.1-.13.2-.5.64-.61.77-.11.13-.22.15-.42.05-.2-.1-.83-.3-1.58-.95-.58-.52-.97-1.16-1.08-1.36-.11-.2-.01-.3.08-.4.08-.08.2-.22.3-.33.1-.11.13-.2.2-.33.07-.13.03-.24-.02-.34-.05-.1-.44-1.05-.6-1.44-.16-.38-.32-.33-.44-.34h-.37c-.13 0-.34.05-.52.24-.18.2-.68.66-.68 1.61s.7 1.87.8 2c.1.13 1.38 2.1 3.34 2.95.47.2.84.32 1.13.41.48.15.91.13 1.25.08.38-.06 1.16-.47 1.32-.92.16-.45.16-.84.11-.92-.05-.08-.18-.13-.38-.23Z" />
  </svg>
);

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrollTopVisible, setScrollTopVisible] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  // const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  // const [formStatus, setFormStatus] = useState({ type: "", text: "" });
  // const [isSending, setIsSending] = useState(false);
  const carouselRef = useRef(null);

  /* ── EmailJS init ── */
  useEffect(() => {
    emailjs.init("WrORHq1Rlg4HU_hIl");
  }, []);
  /* ── Scroll Reveal ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ── Active Nav + Scroll-to-top ── */
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((sec) => { if (window.scrollY >= sec.offsetTop - 130) current = sec.id; });
      setActiveNav(current);
      setScrollTopVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Carousel (infinite scroll) ── */
  useEffect(() => {
    const track = carouselRef.current;
    if (!track) return;
    const cards = Array.from(track.children);
    cards.forEach((card) => {
      const clone = card.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      track.appendChild(clone);
    });
    let isPaused = false;
    let position = 0;
    let animId;
    const onEnter = () => { isPaused = true; };
    const onLeave = () => { isPaused = false; };
    track.addEventListener("mouseenter", onEnter);
    track.addEventListener("mouseleave", onLeave);
    const animate = () => {
      if (!isPaused) {
        position -= 0.5;
        const halfWidth = track.scrollWidth / 2;
        if (Math.abs(position) >= halfWidth) position = 0;
        track.style.transform = `translateX(${position}px)`;
      }
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animId);
      track.removeEventListener("mouseenter", onEnter);
      track.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // /* ── Email Send ── */
  // const sendEmail = () => {
  //   const { name, email, message } = formData;
  //   if (!name || !email || !message) {
  //     setFormStatus({ type: "error", text: "⚠️ Please fill in all fields." });
  //     return;
  //   }
  //   if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  //     setFormStatus({ type: "error", text: "⚠️ Please enter a valid email address." });
  //     return;
  //   }
  //   setIsSending(true);
  //   emailjs
  //     .send("service_eb6q8q8", "template_z8zt0z8", { from_name: name, from_email: email, message, to_name: "Mohammed Wael" })
  //     .then(() => {
  //       setFormStatus({ type: "success", text: "✅ Message sent successfully! I'll get back to you soon." });
  //       setFormData({ name: "", email: "", message: "" });
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       setFormStatus({ type: "error", text: "❌ Something went wrong. Please try again or email me directly." });
  //     })
  //     .finally(() => {
  //       setIsSending(false);
  //       setTimeout(() => setFormStatus({ type: "", text: "" }), 6000);
  //     });
  // };

  const scrollToContact = () => document.getElementById("contact").scrollIntoView({ behavior: "smooth" });

  const navItems = ["home", "about", "education", "skills", "experience", "services", "projects", "Volanteering", "testimonials"];

  return (
    <>
      {/* ══ NAVBAR ══ */}
      <nav id="navbar">
        <a href="#home" className="nav-logo-link" aria-label="Home">
          <img src={`${import.meta.env.BASE_URL}image/My_logo.png`} alt="Logo" className="nav-logo-img" style={{
            width: "80px", height: "80px", margin: "auto", borderRadius: "50%", objectFit: "cover",
            background: " var(--bg)", border: "2px solid var(--accent2)"
          }} />
        </a>
        <ul className="nav-pills" role="list">
          {navItems.map((id) => (
            <li key={id}>
              <a href={`#${id}`} className={activeNav === id ? "active" : ""}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="nav-cta">
          Contact
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </a>
        <button className="hamburger" aria-label="Open menu" aria-expanded={sidebarOpen} onClick={() => setSidebarOpen(true)}>
          <span></span><span></span><span></span>
        </button>
      </nav>

      {/* ══ SIDEBAR OVERLAY ══ */}
      <div className={`sidebar-overlay${sidebarOpen ? " visible" : ""}`} onClick={() => setSidebarOpen(false)}></div>

      {/* ══ SIDEBAR ══ */}
      <aside className={`sidebar${sidebarOpen ? " open" : ""}`} aria-hidden={!sidebarOpen}>
        <button className="sidebar-close" aria-label="Close menu" onClick={() => setSidebarOpen(false)}>
          <i className="fas fa-times"></i>
        </button>
        <div className="sidebar-logo">
          <a href="#home" className="logo-display-box nav-logo-img" aria-label="Home"></a>
          <span>Mohammed Wael</span>
        </div>
        <nav className="sidebar-nav">
          {[["#home", "Home"], ["#about", "About"], ["#education", "Education"], ["#skills", "Skills"],
          ["#experience", "Experience"], ["#services", "Services"], ["#projects", "Projects"],
          ["#Volanteering", "Volanteering"], ["#testimonials", "Testimonials"]].map(([href, label]) => (
            <a key={href} href={href} onClick={() => setSidebarOpen(false)}>{label}</a>
          ))}
          <a href="#contact" className="sidebar-cta" onClick={() => setSidebarOpen(false)}>📩 Contact Me</a>
        </nav>

        {/* LinkedIn logo at bottom of sidebar */}
        <div style={{ marginTop: "auto", paddingTop: "2rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div className="hero-socials">
            <a href="https://github.com/mohammedwael7" className="soc-btn" title="GitHub" target="_blank" rel="noopener"><GitHubSVG /></a>
            <a href="https://www.linkedin.com/in/m0hamedwael" className="soc-btn" title="LinkedIn" target="_blank" rel="noopener"><LinkedInSVG /></a>
            <a href="mailto:mohammedwaelgadallah@gmail.com" className="soc-btn" title="Email" target="_blank"><EmailSVG /></a>
            <a href="https://wa.me/201034320898" className="soc-btn" title="WhatsApp" target="_blank"><WhatsAppSVG /></a>
            <a href="tel:+201034320898" className="soc-btn" title="phone" target="_blank"><PhoneSVG /></a>

          </div>
          <br />
          <div>
            <a href="#home" rel="noopener"
              title="LinkedIn" onClick={() => setSidebarOpen(false)} >
              <img src={`${import.meta.env.BASE_URL}image/My_logo.png`}
                alt="Mohammed Wael Logo"
                style={{
                  width: "100px", height: "100px", margin: "auto", borderRadius: "50%", objectFit: "cover",
                  border: "2px solid var(--accent2)"
                }} />
            </a>
          </div>
        </div>
      </aside>

      {/* ══ HERO ══ */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name">Mohammed Wael</h1>
          <p className="hero-role">Software Engineer</p>
          <p className="hero-sub">Building modern websites with high performance using .NET</p>
          <div className="hero-btns">
            <a href="#projects" className="btn-blue">
              <svg viewBox="0 0 16 16" fill="currentColor" width="15" height="15" aria-hidden="true">
                <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z" />
              </svg>
              View My Work
            </a>
            <a href="https://drive.google.com/file/d/1Blk3jeis8_5ydTAcSSa5LcJGRxFc_cVQ/view?usp=drive_link" className="btn-dark" target="_blank" rel="noopener">
              <svg viewBox="0 0 16 16" fill="currentColor" width="15" height="15" aria-hidden="true">
                <path d="M.5 9.9V14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V9.9a.5.5 0 0 0-1 0V14H1.5V9.9a.5.5 0 0 0-1 0z" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 1 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
              </svg>
              CV Download
            </a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/mohammedwael7" className="soc-btn" title="GitHub" target="_blank" rel="noopener"><GitHubSVG /></a>
            <a href="https://www.linkedin.com/in/m0hamedwael" className="soc-btn" title="LinkedIn" target="_blank" rel="noopener"><LinkedInSVG /></a>
            <a href="mailto:mohammedwaelgadallah@gmail.com" className="soc-btn" title="Email" target="_blank"><EmailSVG /></a>
            <a href="https://wa.me/201034320898" className="soc-btn" title="WhatsApp" target="_blank"><WhatsAppSVG /></a>
            <a href="tel:+201034320898" className="soc-btn" title="Phone" target="_blank"><PhoneSVG /></a>

          </div>
        </div>
        <div className="hero-photo">
          <div className="photo-wrap">
            <div className="photo-bg"></div>
            <div className="photo-ring-spin"></div>
            <div className="photo-ring-mask"></div>
          </div>
        </div>
      </section>

      {/* ══ ABOUT ══ */}
      <section className="alt-bg" id="about">
        <div className="reveal">
          <div className="section-label">GET TO KNOW ME</div>
          <div className="section-title">
            About Me
            <div className="underline"></div>
          </div>
          <div className="tl-card">
            <div style={{ fontSize: "1.2rem", textAlign: "center" }}>
              <span style={{ color: "aqua", fontSize: "1.5rem" }}>
                Junior Full Stack Developer specializing in .NET technologies and scalable web solutions.
              </span><br />
              Experienced in building 5+ full-cycle web projects and implementing 15+ complex features.
              I focus on writing Maintainable Code and improving Application Performance,
              resulting in a 15–20% boost in development efficiency.
              <br /><br />
              Core Tech: .NET Core, ASP.NET MVC, Entity Framework, C#, JavaScript, SQL Server, and Responsive CSS.
            </div>
          </div>
        </div>
      </section>

      {/* ══ EDUCATION ══ */}
      <section id="education">
        <div className="reveal">
          <div className="section-label">My ACADEMIC BACKGROUND</div>
          <div className="section-title">
            Education &amp; Certificates
            <div className="underline"></div>
          </div>
        </div>

        <p className="sub-heading" style={{ fontSize: "2rem" }}>Education:</p>
        <div className="tl-item">
          <div className="tl-dot"></div>
          <div className="flex-card-container">
            <div className="logo-display-box">
              <img src={`${import.meta.env.BASE_URL}image/University_Logo.jfif`} alt="Zagazig University Logo" loading="lazy" />
            </div>
            <div className="card-info-content">
              <div className="tl-period">Oct 2023 – Present</div>
              <div className="tl-role">Bachelor of Science – Computer Science</div>
              <div className="tl-org">Zagazig University</div>
              <div className="tl-desc">Studying core CS topics like Programming Languages, Algorithms and Data Structures.</div>
            </div>
          </div>
        </div>

        <p className="sub-heading" style={{ fontSize: "2rem" }}>Certificates:</p>
        <div className="content-grid">
          <div className="timeline reveal">
            {/* Creativa */}
            <div className="tl-item">
              <div className="tl-dot"></div>
              <div className="flex-card-container">
                <div className="logo-display-box">
                  <img src={`${import.meta.env.BASE_URL}image/Itida logo.png`} alt="Creativa Innovation Hubs Logo" loading="lazy" />
                </div>
                <div className="card-info-content">
                  <div className="tl-period">Feb 2026 • 3-Day Intensive Training (21 Hours)</div>
                  <div className="tl-role">Freelancing Workshop</div>
                  <div className="tl-org">Creativa Innovation Hubs – ITIDA</div>
                  <div style={{ margin: "15px 0" }}>
                    <i className="fa-solid fa-certificate" style={{ color: "#f59e0b" }}></i>
                    <a href="https://drive.google.com/file/d/1mphe1GeACsp0U_iud0iWkHbCbb1l1BZr/view?usp=drive_link" className="btn-link" target="_blank" rel="noopener" style={{ fontSize: "1.1rem", marginLeft: "6px" }}>View Certificate</a>
                  </div>
                  <a href="https://www.linkedin.com/feed/update/urn:li:activity:7432074812258189312/" target="_blank" rel="noopener" className="soc-btn" title="View on LinkedIn"><LinkedInSVG /></a>
                </div>
              </div>
            </div>

            {/* PA – Programming Foundations */}
            <div className="tl-item">
              <div className="tl-dot"></div>
              <div className="flex-card-container">
                <div className="logo-display-box">
                  <img src={`${import.meta.env.BASE_URL}image/Programming_advice_logo.png`} alt="Programming Advices Academy Logo" loading="lazy" />
                </div>
                <div className="card-info-content">
                  <div className="tl-role">Programming Foundations</div>
                  <div className="tl-org">Programming Advices Academy</div>
                  <div style={{ margin: "15px 0" }}>
                    <i className="fa-solid fa-certificate" style={{ color: "#f59e0b" }}></i>
                    <a href="https://drive.google.com/file/d/1__QhIufHwVX9eFg1M1seOnLo6qGL1oMU/view?usp=drive_link" className="btn-link" style={{ fontSize: "1.1rem", marginLeft: "6px" }} target="_blank" rel="noopener">View Certificate</a>
                  </div>
                </div>
              </div>
            </div>

            {/* PA – Algorithms L1 */}
            <div className="tl-item">
              <div className="tl-dot"></div>
              <div className="flex-card-container">
                <div className="logo-display-box">
                  <img src={`${import.meta.env.BASE_URL}image/Programming_advice_logo.png`} alt="Programming Advices Academy Logo" loading="lazy" />
                </div>
                <div className="card-info-content">
                  <div className="tl-role">Algorithms &amp; Problem-Solving Level 1</div>
                  <div className="tl-org">Programming Advices Academy</div>
                  <div style={{ margin: "15px 0" }}>
                    <i className="fa-solid fa-certificate" style={{ color: "#f59e0b" }}></i>
                    <a href="https://drive.google.com/file/d/15MZLbPIGGfu9lxu2x3ruW6WwjajlbMuI/view?usp=drive_link" className="btn-link" style={{ fontSize: "1.1rem", marginLeft: "6px" }} target="_blank" rel="noopener">View Certificate</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline reveal">
            {/* PA – C++ L1 */}
            <div className="tl-item">
              <div className="tl-dot"></div>
              <div className="flex-card-container">
                <div className="logo-display-box">
                  <img src={`${import.meta.env.BASE_URL}image/Programming_advice_logo.png`} alt="Programming Advices Academy Logo" loading="lazy" />
                </div>
                <div className="card-info-content">
                  <div className="tl-role">Programming Using C++ - Level 1</div>
                  <div className="tl-org">Programming Advices Academy</div>
                  <div style={{ margin: "15px 0" }}>
                    <i className="fa-solid fa-certificate" style={{ color: "#f59e0b" }}></i>
                    <a href="https://drive.google.com/file/d/1B1TSoiIfKHvoTJSotUszoDXbOY2a6P62/view?usp=drive_link" className="btn-link" style={{ fontSize: "1.1rem", marginLeft: "6px" }} target="_blank" rel="noopener">View Certificate</a>
                  </div>
                </div>
              </div>
            </div>

            {/* PA – Algorithms L1 Solutions */}
            <div className="tl-item">
              <div className="tl-dot"></div>
              <div className="flex-card-container">
                <div className="logo-display-box">
                  <img src={`${import.meta.env.BASE_URL}image/Programming_advice_logo.png`} alt="Programming Advices Academy Logo" loading="lazy" />
                </div>
                <div className="card-info-content">
                  <div className="tl-role">Algorithms &amp; Problem-Solving Level 1 Solutions</div>
                  <div className="tl-org">Programming Advices Academy</div>
                  <div style={{ margin: "15px 0" }}>
                    <i className="fa-solid fa-certificate" style={{ color: "#f59e0b" }}></i>
                    <a href="https://drive.google.com/file/d/1pEPHMn_El7kVHXGKX0od19LRYjaoLknv/view?usp=drive_link" className="btn-link" style={{ fontSize: "1.1rem", marginLeft: "6px" }} target="_blank" rel="noopener">View Certificate</a>
                  </div>
                </div>
              </div>
            </div>

            {/* PA – Algorithms L2 */}
            <div className="tl-item">
              <div className="tl-dot"></div>
              <div className="flex-card-container">
                <div className="logo-display-box">
                  <img src={`${import.meta.env.BASE_URL}image/Programming_advice_logo.png`} alt="Programming Advices Academy Logo" loading="lazy" />
                </div>
                <div className="card-info-content">
                  <div className="tl-role">Algorithms &amp; Problem-Solving Level 2</div>
                  <div className="tl-org">Programming Advices Academy</div>
                  <div style={{ margin: "15px 0" }}>
                    <i className="fa-solid fa-certificate" style={{ color: "#f59e0b" }}></i>
                    <a href="https://drive.google.com/file/d/1-z45A7DYBx6xVvakJ9SdJFOt1FopZZII/view?usp=drive_link" className="btn-link" style={{ fontSize: "1.1rem", marginLeft: "6px" }} target="_blank" rel="noopener">View Certificate</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SKILLS ══ */}
      <section className="alt-bg" id="skills">
        <div className="reveal">
          <div className="section-label">What I Work With</div>
          <div className="section-title">
            Technical Skills
            <div className="underline"></div>
          </div>
        </div>
        <div className="skills-grid reveal">
          <div className="skill-card">
            <div className="skill-cat">Frontend</div>
            <div className="tl-desc">Turning ideas into interactive and visually stunning web pages that adapt to any device.</div>
            <div className="underline" style={{ width: "100%" }}></div>
            <div className="skill-tags">
              <span className="skill-tag devicon-html5-plain i-html"> HTML</span>
              <span className="skill-tag devicon-css3-plain i-css"> CSS</span>
              <span className="skill-tag devicon-javascript-plain i-js"> JavaScript</span>
              <span className="skill-tag devicon-bootstrap-plain i-bootstrap"> Bootstrap</span>
              <span className="skill-tag devicon-react-original-wordmark i-react"> React</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-cat">Backend</div>
            <div className="tl-desc">Powering applications with solid and efficient server-side logic.</div>
            <div className="underline" style={{ width: "100%" }}></div>
            <div className="skill-tags">
              <span className="skill-tag devicon-csharp-plain i-csharp"> C#</span>
              <span className="skill-tag devicon-dotnetcore-plain i-dotnet"> ASP.NET Core</span>
              <span className="skill-tag fas fa-cubes i-oop"> OOP</span>
              <span className="skill-tag devicon-microsoftsqlserver-plain i-sql"> SQL Server</span>
              <span className="skill-tag fas fa-database i-db"> Database</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-cat">Programming</div>
            <div className="tl-desc">Cracking problems and coding challenges with smart solutions.</div>
            <div className="underline" style={{ width: "100%" }}></div>
            <div className="skill-tags">
              <span className="skill-tag devicon-cplusplus-plain i-cpp"> C++</span>
              <span className="skill-tag fas fa-puzzle-piece i-prob"> Problem Solving</span>
              <span className="skill-tag fas fa-code-branch i-algo"> Algorithms</span>
              <span className="skill-tag fas fa-sitemap i-ds"> Data Structure</span>
              <span className="skill-tag devicon-matlab-plain i-matlab"> MATLAB</span>
              <span className="skill-tag fas fa-desktop i-os"> OS</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-cat">Tools</div>
            <div className="tl-desc">Working smarter with modern dev tools for clean and maintainable code.</div>
            <div className="underline" style={{ width: "100%" }}></div>
            <div className="skill-tags">
              <span className="skill-tag devicon-git-plain i-git"> Git</span>
              <span className="skill-tag devicon-github-original"> GitHub</span>
              <span className="skill-tag devicon-visualstudio-plain i-vs"> VS</span>
              <span className="skill-tag devicon-vscode-plain i-vscode"> VS Code</span>
              <span className="skill-tag fas fa-magic i-clean"> Clean Code</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══ EXPERIENCE ══ */}
      <section id="experience">
        <div className="reveal">
          <div className="section-label">My Journey</div>
          <div className="section-title">
            Experience
            <div className="underline"></div>
          </div>
        </div>
        <div className="timeline reveal">
          {/* DEPI */}
          <div className="tl-item">
            <div className="tl-dot"></div>
            <div className="flex-card-container">
              <div className="logo-display-box">
                <img src={`${import.meta.env.BASE_URL}image/depi_logo.jpg`} alt="DEPI Logo" loading="lazy" />
              </div>
              <div className="card-info-content">
                <div className="tl-period">Nov 2025 – Present</div>
                <div className="tl-role">.NET Full-Stack Intern</div>
                <div className="tl-org">Digital Egypt Pioneers Initiative (DEPI)</div>
                <div className="tl-desc">
                  <span className="Challenge">Challenge:</span><br />
                  Learning full-stack development and applying best practices in real projects.<br />
                  <span className="Action">Action:</span><br />
                  Trained on ASP.NET, C#, SQL Server, and front-end technologies, while collaborating in an agile environment.<br />
                  <span className="Result">Result:</span><br />
                  Gained practical experience building full-stack applications following professional software engineering practices.
                </div>
              </div>
            </div>
          </div>

          {/*Itida Web Diploma */}
          <div className="tl-item">
            <div className="tl-dot"></div>
            <div className="flex-card-container">
              <div className="logo-display-box">
                <img src={`${import.meta.env.BASE_URL}image/Itida logo.png`} alt="Itida Logo" loading="lazy" />
              </div>
              <div className="card-info-content">
                <div className="tl-period">Nov 2025 – Feb 2026</div>
                <div className="tl-role">Web Development Intern</div>
                <div className="tl-org">Creativa Innovation Hubs – ITIDA</div>
                <div className="tl-desc">
                  <span className="Challenge">Challenge:</span><br />
                  Learning front-end web development and building real-world web applications.<br />
                  <span className="Action">Action:</span><br />
                  Trained on HTML, CSS, JavaScript, and basic backend concepts, while collaborating with mentors and peers and applying software engineering principles.<br />
                  <span className="Result">Result:</span><br />
                  Gained practical experience creating clean, well-structured web applications.
                </div>
                <div style={{ margin: "15px 0" }}>
                  <i className="fa-solid fa-certificate" style={{ color: "#f59e0b" }}></i>
                  <a href="https://drive.google.com/file/d/1x7o9208R0q0v3EZHqeFY7FCzu-_Sfa1w/view?usp=drive_link" className="btn-link" style={{ fontSize: "1.1rem", marginLeft: "6px" }} target="_blank" rel="noopener">View Certificate</a>
                </div>
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7427091533859848192/" target="_blank" rel="noopener" className="soc-btn" title="View on LinkedIn"><LinkedInSVG /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section className="alt-bg" id="services">
        <div className="reveal">
          <div className="section-label">What I OFFER</div>
          <div className="section-title">
            Services
            <div className="underline"></div>
          </div>
        </div>
        <div className="proj-grid reveal">
          <div className="proj-card service-card">
            <div className="proj-icon">🌐</div>
            <div className="proj-title">Web Development</div>
            <div className="proj-desc">Building modern, scalable web applications using ASP.NET Core and .NET technologies with clean architecture, secure authentication, and optimized performance.</div>
            <div className="proj-tech"><span>ASP.NET Core</span><span>.NET</span><span>REST API</span></div>
          </div>
          <div className="proj-card service-card">
            <div className="proj-icon">🎨</div>
            <div className="proj-title">Web Design</div>
            <div className="proj-desc">Designing responsive and user-friendly interfaces with a focus on usability, accessibility, and seamless user experience across different devices and screen sizes.</div>
            <div className="proj-tech"><span>HTML</span><span>CSS</span><span>Bootstrap</span></div>
          </div>
          <div className="proj-card service-card">
            <div className="proj-icon">⚙️</div>
            <div className="proj-title">Application Development</div>
            <div className="proj-desc">Developing robust desktop and web-based applications with efficient business logic, maintainable code structure, and integration with external services and APIs.</div>
            <div className="proj-tech"><span>C#</span><span>.NET</span><span>OOP</span></div>
          </div>
          <div className="proj-card service-card">
            <div className="proj-icon">🗄️</div>
            <div className="proj-title">Database Development</div>
            <div className="proj-desc">Designing and managing relational databases using SQL Server, including schema design, performance optimization, stored procedures, and secure data handling.</div>
            <div className="proj-tech"><span>SQL Server</span><span>EF Core</span><span>T-SQL</span></div>
          </div>
        </div>

        {/* Pricing Plans
        <div id="pricing" style={{ marginTop: "4rem" }}>
          <div className="reveal">
            <div className="section-header-centered">
              <h2>Pricing Plans</h2>
              <div className="underline"></div>
              <p>Choose the plan that fits your project. Transparent pricing, no hidden fees.</p>
            </div>
          </div>
          <div className="pricing-grid reveal">
            <div className="price-card">
              <div className="price-tag">STARTER</div>
              <div className="price-icon"><i className="fas fa-rocket"></i></div>
              <h3>Basic</h3>
              <div className="price-amount"><span>$</span>25–149 <small>/project</small></div>
              <p className="price-desc">Perfect for small landing pages and simple static websites.</p>
              <ul className="price-features">
                <li><i className="fas fa-check"></i> Up to 3–6 Pages</li>
                <li><i className="fas fa-check"></i> Responsive Design</li>
                <li><i className="fas fa-check"></i> Contact Form</li>
                <li className="disabled"><i className="fas fa-times"></i> Database Integration</li>
                <li className="disabled"><i className="fas fa-times"></i> User Authentication</li>
                <li className="disabled"><i className="fas fa-times"></i> API Development</li>
              </ul>
              <button className="btn-price" onClick={scrollToContact}>Get Started</button>
            </div>
            <div className="price-card popular">
              <div className="price-tag">POPULAR</div>
              <div className="price-icon"><i className="fas fa-balance-scale"></i></div>
              <h3>Balance</h3>
              <div className="price-amount"><span>$</span>349 <small>/project</small></div>
              <p className="price-desc">Ideal for business websites with database and user management.</p>
              <ul className="price-features">
                <li><i className="fas fa-check"></i> Up to 8 Pages</li>
                <li><i className="fas fa-check"></i> Everything in Basic</li>
                <li><i className="fas fa-check"></i> Database Integration</li>
                <li><i className="fas fa-check"></i> User Authentication</li>
                <li><i className="fas fa-check"></i> API Development</li>
                <li className="disabled"><i className="fas fa-times"></i> Payment Gateway</li>
              </ul>
              <button className="btn-price" onClick={scrollToContact}>Get Started</button>
            </div>
            <div className="price-card">
              <div className="price-tag"><i className="fas fa-crown"></i> BEST VALUE</div>
              <div className="price-icon"><i className="fas fa-bolt"></i></div>
              <h3>PRO</h3>
              <div className="price-amount"><span>$</span>799 <small>/project</small></div>
              <p className="price-desc">Full-stack web application with API, dashboard, and integration.</p>
              <ul className="price-features">
                <li><i className="fas fa-check"></i> Everything in Balance</li>
                <li><i className="fas fa-check"></i> Unlimited Pages</li>
                <li><i className="fas fa-check"></i> RESTful API Development</li>
                <li><i className="fas fa-check"></i> Admin Dashboard</li>
                <li><i className="fas fa-check"></i> Payment Gateway (Stripe)</li>
              </ul>
              <button className="btn-price" onClick={scrollToContact}>Get Started</button>
            </div>
            <div className="price-card">
              <div className="price-tag">ENTERPRISE</div>
              <div className="price-icon"><i className="fas fa-cogs"></i></div>
              <h3>Custom</h3>
              <div className="price-amount" style={{ fontSize: "1.6rem" }}>Let's Talk</div>
              <p className="price-desc">Tailored solutions for complex enterprise projects with unique requirements.</p>
              <ul className="price-features">
                <li><i className="fas fa-check"></i> Everything in PRO</li>
                <li><i className="fas fa-check"></i> Custom Architecture</li>
                <li><i className="fas fa-check"></i> Advanced Security</li>
                <li><i className="fas fa-check"></i> Priority Support</li>
                <li><i className="fas fa-check"></i> Dedicated Maintenance</li>
              </ul>
              <button className="btn-price" onClick={scrollToContact}>Contact Me</button>
            </div>
          </div>
        </div>*/}
      </section>

      {/* ══ PROJECTS ══ */}
      <section id="projects">
        <div className="reveal">
          <div className="section-label">What I've Built</div>
          <div className="section-title">
            Projects
            <div className="underline"></div>
          </div>
        </div>
        <div className="proj-grid reveal">

          {/* Project 1 */}
          <div className="proj-card">
            <div className="proj-img-wrapper">
              <img src={`${import.meta.env.BASE_URL}image/1-CleanHub.png`} alt="AL Rayyan CleanHub" loading="eager" />
            </div>
            <div className="proj-content">
              <div className="proj-title">AL Rayyan CleanHub</div>
              <div className="proj-desc">
                <span className="Challenge">Challenge:</span><br />
                Built a modern landing page for AL Rayyan CleanHub dry cleaning service with the goal of making it easier for customers to access services, contact information, location details, and pricing.<br />
                <span className="Action">Action:</span><br />
                Developed a responsive React landing page using Bootstrap components to create a clean user interface. Organized the content to improve customer experience and make important information easy to find.<br />
                <span className="Result">Result:</span><br />
                Created a professional and responsive website that provides a smooth user experience and helps customers quickly connect with the dry cleaning service.
              </div>
              <div className="skill-tags">
                <span className="skill-tag devicon-figma-plain i-figma"> UI/UX</span>
                <span className="skill-tag devicon-html5-plain i-html"> HTML</span>
                <span className="skill-tag devicon-css3-plain i-css"> CSS</span>
                <span className="skill-tag devicon-javascript-plain i-js"> JavaScript</span>
                <span className="skill-tag devicon-bootstrap-plain i-bootstrap"> Bootstrap</span>
                <span className="skill-tag devicon-react-original-wordmark i-react"> React</span>

              </div>
              <div className="proj-footer hero-socials">
                <a href="https://clean-hub-al-rayyan-ykhm.vercel.app/" className="btn-link" target="_blank"><span>🌐</span> Live Demo</a>
                <a href="https://github.com/mohammedwael7/Clean-Hub-Al-Rayyan" className="soc-btn" title="GitHub" target="_blank"><GitHubSVG /></a>
              </div>
            </div>
          </div>


          {/* Project 2 */}
          <div className="proj-card">
            <div className="proj-img-wrapper">
              <img src={`${import.meta.env.BASE_URL}image/3-web_development.png`} alt="Web Development Guide" loading="eager" />
            </div>
            <div className="proj-content">
              <div className="proj-title">Web Development Guide</div>
              <div className="proj-desc">
                <span className="Challenge">Challenge:</span><br />
                Designing an educational platform to showcase different web development career paths.<br />
                <span className="Action">Action:</span><br />
                Built the platform using HTML, CSS, and JavaScript, including detailed track information and an enrollment flow for users.<br />
                <span className="Result">Result:</span><br />
                Delivered a functional, interactive platform that helps learners explore and enroll in web development tracks easily.
              </div>
              <div className="skill-tags">
                <span className="skill-tag devicon-html5-plain i-html"> HTML</span>
                <span className="skill-tag devicon-css3-plain i-css"> CSS</span>
                <span className="skill-tag devicon-javascript-plain i-js"> JavaScript</span>
                <span className="skill-tag devicon-bootstrap-plain i-bootstrap"> Bootstrap</span>
              </div>
              <div className="proj-footer hero-socials">
                <a href="https://mohammedwael7.github.io/Web-Tracks/" className="btn-link" target="_blank"><span>🌐</span> Live Demo</a>
                <a href="https://github.com/mohammedwael7/Web-Tracks" className="soc-btn" title="GitHub" target="_blank"><GitHubSVG /></a>
              </div>
            </div>
          </div>


          {/* Project 3 */}
          <div className="proj-card">
            <div className="proj-img-wrapper">
              <img src={`${import.meta.env.BASE_URL}image/2.jpg`} alt="Stone-Paper-Scissors-Game" loading="eager" />
            </div>
            <div className="proj-content">
              <div className="proj-title">Stone-Paper-Scissors-Game</div>
              <div className="proj-desc">
                <span className="Challenge">Challenge:</span><br />
                Designed a console-based Stone, Paper, Scissors game while applying Object-Oriented Programming concepts and improving problem-solving skills.<br />
                <span className="Action">Action:</span><br />
                Developed the game using C++ with OOP principles, including classes, objects, encapsulation, and organized game flow. Implemented the core logic and user interactions to create a smooth gameplay experience.<br />
                <span className="Result">Result:</span><br />
                Delivered a fully functional and well-structured C++ project that demonstrates strong OOP fundamentals, logical thinking, and clean code organization.
              </div>
              <div className="skill-tags">
                <span className="skill-tag devicon-cplusplus-plain i-cpp"> C++</span>
                <span className="skill-tag fas fa-puzzle-piece i-prob"> Problem Solving</span>
                <span className="skill-tag fas fa-code-branch i-algo"> Algorithms</span>
                <span className="skill-tag fas fa-cubes i-oop"> OOP</span>
              </div>
              <div className="proj-footer hero-socials">
                {/* <a href="#" className="btn-link" target="_blank"><span>🌐</span> Live Demo</a> */}
                <a href="https://github.com/mohammedwael7/Stone-Paper-Scissors-Game" className="soc-btn" title="GitHub" target="_blank"><GitHubSVG /></a>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* ══ Volanteering ══ */}
      <section className="alt-bg" id="Volanteering">
        <div className="reveal">
          <div className="section-label">Beyond Code</div>
          <div className="section-title">
            Volanteering
            <div className="underline"></div>
          </div>
        </div>
        {/* FA Alumni */}
        <div className="act-grid reveal">
          <div className="act-card">
            <div className="logo-display-box">
              <img src={`${import.meta.env.BASE_URL}image/FA Alumni Logo.jpg`} alt="IEEE Logo" loading="lazy" />
            </div>
            <div className="act-text">
              <strong>Head FR - FA Alumni</strong>
              <span style={{ color: "var(--accent2)", fontSize: "0.9rem", display: "block", marginBottom: "0.5rem" }}>Feb 2026 – Present</span>
              <p>Leading the FR team by managing volunteers, coordinating fundraising activities, and ensuring effective team collaboration. Responsible for planning initiatives, improving workflow, and contributing to achieving a 150K EGP fundraising target during the current season.</p>
            </div>
          </div>

          {/*IEEE OE*/}
          <div className="act-card">
            <div className="logo-display-box">
              <img src={`${import.meta.env.BASE_URL}image/IEEE_logo.jpg`} alt="IEEE Logo" loading="lazy" />
            </div>
            <div className="act-text">
              <strong>PR Member – IEEE OE</strong>
              <span style={{ color: "var(--accent2)", fontSize: "0.9rem", display: "block", marginBottom: "0.5rem" }}>Nov 2025 – Present</span>
              <p>Managed communication with companies and startups for partnerships and sponsorship opportunities, delivered a 15-minute Operating Systems session, and supported the organization of IEEE Synapse event with 1000+ attendees.</p>
              <a href="https://www.linkedin.com/feed/update/urn:li:activity:7411410713463758848/" target="_blank" rel="noopener" className="soc-btn" title="View on LinkedIn" style={{ marginTop: "0.8rem" }}><LinkedInSVG /></a><span> </span>
              <a href="https://www.linkedin.com/feed/update/urn:li:activity:7401600664843243520/" target="_blank" rel="noopener" className="soc-btn" title="View on LinkedIn" style={{ marginTop: "0.8rem" }}><LinkedInSVG /></a>

            </div>
          </div>

          <div className="act-card">
            <div className="logo-display-box">
              <img src={`${import.meta.env.BASE_URL}image/University_Logo.jfif`} alt="Zagazig University Logo" loading="lazy" />
            </div>
            <div className="act-text">
              <strong>Leadership – ZU</strong>
              <span style={{ color: "var(--accent2)", fontSize: "0.9rem", display: "block", marginBottom: "0.5rem" }}>Oct 2023 – Present</span>
              <p>Helping and mentoring 350+ students in Computer Science concepts and coding practices while coordinating communication between students and professors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section id="testimonials">
        <div className="reveal">
          <div className="section-header-centered">
            <div className="section-label">What people say about working with me</div>
            <h2>Testimonials</h2>
            <div className="underline"></div>
            <p></p>
          </div>
        </div>
        <div className="carousel-wrapper reveal">
          <div className="carousel-track" ref={carouselRef}>
            {/* Card 1 */}
            <div className="testi-card">
              <div className="testi-header">
                <div className="testi-stars">★★★★★</div>
                <div className="testi-badge"><i className="fas fa-bolt"></i> Proactive</div>
              </div>
              <p className="testi-text">
                "I had the pleasure of teaching Mohamed Wael in my Front end Web Development course.
                During the training, he showed strong dedication and a good understanding of front-end technologies
                including HTML, CSS, Bootstrap, JavaScript, and React.
                <br /> Mohamed was consistently engaged during the sessions, demonstrated solid problem-solving skills, and
                showed the ability to quickly understand and apply new concepts. I believe he has a strong foundation to
                grow as a professional web developer.
                <br /> I recommend Mohamed Wael for opportunities in front-end and web development."
              </p>
              <div className="testi-footer">
                <div className="testi-avatar">AH</div>
                <div className="testi-info">
                  <h4>Eng. Ahmed Hatem</h4>
                  <span>Full Stack Web Development Instructor</span>
                </div>
                <div className="testi-linkedin">
                  <a href="https://www.linkedin.com/in/ahmedhatemu/" className="soc-btn" title="LinkedIn" target="_blank" rel="noopener"><LinkedInSVG /></a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="testi-card">
              <div className="testi-header">
                <div className="testi-stars">★★★★★</div>
                <div className="testi-badge"><i className="fas fa-book-open"></i> Committed Learner</div>
              </div>
              <p className="testi-text">"I had the opportunity to mentor Mohamed throughout the Freelancing and Coaching phases over the course of several months. During this period, he consistently demonstrated professionalism, dedication, and a strong commitment to continuous improvement.

                Mohamed approached every task with attention to detail, accountability, and a results-oriented mindset. His ability to learn quickly, apply feedback effectively, and maintain high-quality standards contributed significantly to his successful completion of the program.

                I am confident that Mohamed's work ethic, persistence, and professional attitude will make him a valuable asset to any team or organization. I highly recommend him for future opportunities."</p>
              <div className="testi-footer">
                <div className="testi-avatar">MO</div>
                <div className="testi-info">
                  <h4>SWE. Menna Omar</h4>
                  <span>DEPI Training Instructor</span>
                </div>
                <div className="testi-linkedin">
                  <a href="https://www.linkedin.com/in/mennaomar/" className="soc-btn" title="LinkedIn" target="_blank" rel="noopener"><LinkedInSVG /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CONTACT & Footer ══ */}
      <section className="alt-bg " id="contact">
        <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div className="section-label">Let's Connect</div>
          <h2 className="section-title">
            Get In Touch
            <div className="underline"></div>
          </h2>
        </div>
        {/* <div className="contact-container reveal"> */}
        <div className="footer-grid">
          <div className="contact-info-box ">
            <h3>Let's Talk</h3>
            <p>Have a project in mind or want to discuss the latest in tech? Feel free to reach out.</p>
            <div style={{ marginTop: "2rem" }}>
              <div className="hero-socials" style={{ display: "block" }}>
                <a href="https://wa.me/201034320898" className="soc-btn soc-btn-contact" title="WhatsApp" target="_blank"><WhatsAppSVG /></a><span style={{ marginBottom: "1rem" }}> +20 1034320898</span><br />
                <a href="mailto:mohammedwaelgadallah@gmail.com" className="soc-btn soc-btn-contact" title="Email" target="_blank"><EmailSVG /></a><span style={{ marginBottom: "1rem" }}> mohammedwaelgadallah@gmail</span><br />
                <a href="https://www.linkedin.com/in/m0hamedwael" className="soc-btn soc-btn-contact" title="LinkedIn" target="_blank" rel="noopener"><LinkedInSVG /></a><span style={{ marginBottom: "1rem" }}> linkedin.com/in/m0hamedwael</span><br />
                <a href="tel:+201034320898" className="soc-btn soc-btn-contact" title="Phone" target="_blank"><PhoneSVG /></a><span style={{ marginBottom: "1rem" }}> +20 1034320898</span><br />
              </div>
            </div>
          </div>
          <div>
            <div className="footer-logo">
              <a href="#home" className="nav-logo-link" aria-label="Home">
                <img src={`${import.meta.env.BASE_URL}image/My_logo.png`} alt="Logo" className="nav-logo-img" />
              </a>
            </div>
            <p style={{ color: "var(--muted)", lineHeight: "1.6", marginTop: "1rem" }}>
              Full Stack .NET Developer focused on building scalable web applications with clean, maintainable code.
            </p>
            <div className="hero-socials" style={{ marginTop: "1.5rem" }}>
              <a href="https://github.com/mohammedwael7" className="soc-btn" title="GitHub" target="_blank" rel="noopener"><GitHubSVG /></a>
              <a href="https://www.linkedin.com/in/m0hamedwael" className="soc-btn" title="LinkedIn" target="_blank" rel="noopener"><LinkedInSVG /></a>
              <a href="mailto:mohammedwaelgadallah@gmail.com" className="soc-btn" title="Email" target="_blank"><EmailSVG /></a>
              <a href="https://wa.me/201034320898" className="soc-btn" title="WhatsApp" target="_blank"><WhatsAppSVG /></a>
              <a href="tel:+201034320898" className="soc-btn" title="Phone" target="_blank"><PhoneSVG /></a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        {/* <div className="contact-form-box">
            {formStatus.text && (
              <div className={`form-status ${formStatus.type}`} aria-live="polite">{formStatus.text}</div>
            )}
            <div className="form-group">
              <input type="text" placeholder="Your Name" required value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            </div>
            <div className="form-group">
              <textarea rows="4" placeholder="Your Message" required value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
            </div>
            <button type="button" className="btn-send" onClick={sendEmail} disabled={isSending}>
              {isSending ? <><i className="fas fa-spinner fa-spin"></i> Sending...</> : <>Send Message <i className="fas fa-paper-plane"></i></>}
            </button>
          </div> */}
        {/* </div> */}
      </section>

      {/* ══ FOOTER ══ */}
      <footer>
        {/* <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <a href="#home" className="nav-logo-link" aria-label="Home">
                <img src={`${import.meta.env.BASE_URL}image/My_logo.png`} alt="Logo" className="nav-logo-img" />
              </a>
            </div>
            <p style={{ color: "var(--muted)", lineHeight: "1.6", marginTop: "1rem" }}>
              Full Stack .NET Developer focused on building scalable web applications with clean, maintainable code.
            </p>
            <div className="hero-socials" style={{ marginTop: "1.5rem" }}>
              <a href="https://github.com/mohammedwael7" className="soc-btn" title="GitHub" target="_blank" rel="noopener"><GitHubSVG /></a>
              <a href="https://www.linkedin.com/in/m0hamedwael" className="soc-btn" title="LinkedIn" target="_blank" rel="noopener"><LinkedInSVG /></a>
              <a href="mailto:mohammedwaelgadallah@gmail.com" className="soc-btn" title="Email"><EmailSVG /></a>
              <a href="https://wa.me/201034320898" className="soc-btn" title="WhatsApp" target="_blank"><WhatsAppSVG /></a>
              <a href="tel:+201034320898" className="soc-btn" title="Phone"><PhoneSVG /></a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Contact</h4>
            <ul style={{ color: "var(--muted)" }}>
              <li><i className="fas fa-envelope" style={{ color: "rgb(43, 125, 226)" }}></i> mohammedwaelgadallah@gmail.com</li>
              <li><i className="fas fa-phone" style={{ color: "rgb(43, 125, 226)" }}></i> +20 1034320898</li>
              <li><i className="fas fa-location-dot" style={{ color: "rgb(43, 125, 226)" }}></i> 10th of Ramadan, Egypt</li>
            </ul>
          </div> 
        </div> */}
        <div className="footer-bottom">
          © 2026 Mohammed Wael Gadallah. All rights reserved.
        </div>
      </footer>

      {/* ══ SCROLL TO TOP ══ */}
      <button
        className={`scroll-top-btn${scrollTopVisible ? " visible" : ""}`}
        aria-label="Scroll to top"
        title="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className="fas fa-chevron-up"></i>
      </button>
    </>
  );
}
