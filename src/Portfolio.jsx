import { useState, useEffect } from "react";

/* ================================================================
   👉 PERSONAL INFO — Edit everything in this section
   ================================================================ */

const MY_NAME = "Roshni Kuwar Chhetri";
const MY_ROLE = "Java Full Stack Developer";
const MY_LOCATION = "Gurugram";
const MY_BIO =
  "I build robust Java backends and clean React frontends. Currently training at QSpiders, I'm passionate about writing maintainable code and shipping end-to-end solutions.";
const MY_PHOTO = "/images/formalphoto.png";
const MY_RESUME = "/Roshni Kuwar Chhetri Resume.pdf";

const ABOUT_DESC_1 = "From completing my Senior Secondary education under the HBSE Board to pursuing a Bachelor of Computer Applications (BCA), my educational journey has been driven by a passion for technology, problem-solving, and continuous learning in software development.";
const ABOUT_DESC_2 =
  "Currently persuing my Java Full Stack internship at QSpiders. I write clean, maintainable code and constantly push myself to learn new tools and best practices.";

const EXPERIENCE = [
  {
    year: "Oct 2025 – Present",
    role: "Java Full Stack Training & Internship",
    company: "QSpiders",
    desc: "Hands-on training covering Core Java, JDBC, Hibernate, Spring, Spring Boot, REST APIs, SQL, HTML, CSS, JavaScript, and React.js.",
  },
];

const EDUCATION = [
  {
    year: "2023 – 2026",
    degree: "BCA",
    school: "Gurugram University",
    desc: "Computer Application",
  },
  {
    year: "Oct 2022 – 2023",
    degree: "Senior Secondary",
    school: "C.R Model Public School",
    desc: "HBSE",
  },
];

const PROJECTS = [
  {
    title: "FitNova",
    desc: "Developed a fitness management backend using Java and Spring Boot, featuring RESTful APIs for workout and fitness data management. Integrated the Gemini API to provide AI-powered fitness recommendations and insights, with all endpoints tested using Postman.",
    tech: ["Java", "Spring Boot", "MySQL", "React.js", "REST API"],
    img: "/images/FitNova.png",
    repo: "github.com/RoshniKuwarChhetri/FitNova",
    highlights: ["REST API", "JWT Auth", "CRUD"],
  },
  {
    title: "ReactCart",
    desc: "ReactCart is a responsive e-commerce web application developed using React.js that allows users to browse products, add items to cart, manage quantities, and experience a smooth shopping interface with reusable components and modern UI design.",
    tech: ["React.js", "JavaScript", "HTML5", "CSS3"],
    img: "/images/ReactCart.png",
    repo: "github.com/RoshniKuwarChhetri/ReactCart",
    highlights: ["Responsive", "Modern", "Interactive", "Component-based"],
  },
];

const CONTACT_EMAIL = "roshnikc12212@gmail.com";
const CONTACT_PHONE = "+91 9990706643";

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/roshni-kc",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/RoshniKuwarChhetri",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.419-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

/* ================================================================
   END OF PERSONAL INFO
   ================================================================ */

const ACCENT  = "#7c3aed";
const ACCENT2 = "#a855f7";
const NAV_ITEMS = ["Home", "About", "Projects", "Contact"];

const SKILLS = [
  { label: "Java 8",      bg: "#f8982015", border: "#f8982040", color: "#f89820",
    svg: <svg viewBox="0 0 128 128" width="36" height="36"><path fill="#f89820" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zM44.629 84.455s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"/><path fill="#f89820" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 0-42.731 10.67-22.324 34.187z"/><path fill="#f89820" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zM90.609 93.041c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0 .001.359-.327.468-.617z"/><path fill="#f89820" d="M76.491 1s12.541 12.541-11.897 31.809c-19.688 15.555-4.485 24.411-.006 34.556-11.498-10.38-19.93-19.48-14.271-27.984C58.88 28.401 81.722 22.195 76.491 1z"/><path fill="#f89820" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 0 2.875 2.381 17.647 3.331z"/></svg> },
  { label: "JDBC",        bg: "#5b9bd515", border: "#5b9bd540", color: "#5b9bd5",
    svg: <svg viewBox="0 0 24 24" width="36" height="36" fill="none"><rect width="24" height="24" rx="4" fill="#1a2a3a"/><ellipse cx="12" cy="7" rx="8" ry="3" fill="#5b9bd5"/><path d="M4 7v4c0 1.657 3.582 3 8 3s8-1.343 8-3V7" fill="#5b9bd5" opacity=".7"/><path d="M4 11v4c0 1.657 3.582 3 8 3s8-1.343 8-3v-4" fill="#5b9bd5" opacity=".4"/></svg> },
  { label: "Hibernate",   bg: "#8bc3b815", border: "#8bc3b840", color: "#8bc3b8",
    svg: <svg viewBox="0 0 128 128" width="36" height="36"><rect width="128" height="128" rx="16" fill="#1a2329"/><path fill="#8bc3b8" d="M64 20L20 44v40l44 24 44-24V44L64 20zm0 10l34 18.5V80L64 98.5 30 80V48.5L64 30z"/><path fill="#8bc3b8" opacity=".6" d="M64 30v68.5L30 80V48.5L64 30z"/></svg> },
  { label: "Spring",      bg: "#6db33f15", border: "#6db33f40", color: "#6db33f",
    svg: <svg viewBox="0 0 24 24" fill="#6db33f" width="36" height="36"><path d="M21.8537 1.4158a10.4504 10.4504 0 01-1.284 2.2471A11.9666 11.9666 0 1019.8128 1zm-5.4967 15.423c-.1622.2812-.544.3906-.8252.2284a8.8765 8.8765 0 01-.4517-.3155c-1.26.8494-2.842 1.0408-4.716.5845a3.8288 3.8288 0 01-.41 1.044c-.2284.3906-.7344.5057-1.1017.277s-.5057-.7344-.277-1.1017a2.9944 2.9944 0 00.3906-.8687 3.8288 3.8288 0 01-.3906-.4101c-.277-.3906-.1622-.9453.2284-1.1738s.9453-.1622 1.1738.2284c.0811.1249.1778.2339.2906.3272a5.7954 5.7954 0 001.626-1.6977 6.9812 6.9812 0 01-.8848-1.5663c-.277-.7344-.1622-1.5175.3271-1.7773a.8288.8288 0 011.1252.3272 5.236 5.236 0 00.5687 1.2163 10.2766 10.2766 0 00.5687-2.9088c0-.5218.4102-.9453.9453-.9453s.9453.4235.9453.9453c0 1.4443-.3428 2.872-.9765 4.1651a6.2983 6.2983 0 001.044 1.0407c.2812.1622.3906.544.2284.8252z"/></svg> },
  { label: "Spring Boot", bg: "#6db33f15", border: "#6db33f40", color: "#6db33f",
    svg: <svg viewBox="0 0 24 24" fill="#6db33f" width="36" height="36"><path d="M20.205 16.392c-2.469 3.289-7.741 2.179-11.122 2.338 0 0-.599.034-1.201.133 0 0 .228-.097.519-.198 2.374-.821 3.496-.986 4.939-1.727 2.71-1.388 5.408-4.413 5.957-7.555-1.032 3.022-4.17 5.623-7.027 6.679-1.955.722-5.492 1.424-5.493 1.424a5.28 5.28 0 01-.143-.076c-2.405-1.17-2.475-6.38 1.894-8.059 1.916-.736 3.747-.332 5.818-.825 2.208-.525 4.766-2.18 5.805-4.344 1.165 3.458 2.565 8.866.054 12.21zm.042-13.28a9.212 9.212 0 01-1.065 1.89 9.982 9.982 0 00-7.167-3.031C6.492 1.971 2 6.463 2 11.985a9.984 9.984 0 002.936 7.079 1.096 1.096 0 00.051.259c.263.98-.917 1.889-.917 1.889s4.88.696 9.431-1.565c7.568-3.749 8.704-12.023 6.746-16.535z"/></svg> },
  { label: "SQL",         bg: "#00758f15", border: "#00758f40", color: "#00a8cc",
    svg: <svg viewBox="0 0 24 24" width="36" height="36"><rect width="24" height="24" rx="4" fill="#00000040"/><path fill="#00758f" d="M12 3C7 3 3 4.343 3 6v12c0 1.657 4 3 9 3s9-1.343 9-3V6c0-1.657-4-3-9-3zm0 2c4.418 0 7 1.119 7 1.5S16.418 8 12 8 5 6.881 5 6.5 7.582 5 12 5z"/><ellipse cx="12" cy="6.5" rx="7" ry="1.5" fill="#00758f"/><path d="M19 10.5c0 .828-3.134 1.5-7 1.5s-7-.672-7-1.5" stroke="#00758f" strokeWidth="1.5" fill="none"/><path d="M19 14c0 .828-3.134 1.5-7 1.5S5 14.828 5 14" stroke="#00758f" strokeWidth="1.5" fill="none"/></svg> },
  { label: "HTML5",       bg: "#e34f2615", border: "#e34f2640", color: "#e34f26",
    svg: <svg viewBox="0 0 24 24" fill="#e34f26" width="36" height="36"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg> },
  { label: "CSS3",        bg: "#1572b615", border: "#1572b640", color: "#1572b6",
    svg: <svg viewBox="0 0 24 24" fill="#1572b6" width="36" height="36"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414v-.001z"/></svg> },
  { label: "JavaScript",  bg: "#f7df1e15", border: "#f7df1e40", color: "#f7df1e",
    svg: <svg viewBox="0 0 24 24" fill="#f7df1e" width="36" height="36"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg> },
  { label: "React.js",    bg: "#61dafb15", border: "#61dafb40", color: "#61dafb",
    svg: <svg viewBox="0 0 24 24" fill="#61dafb" width="36" height="36"><path d="M14.23 12.004a2.236 2.236 0 01-2.235 2.236 2.236 2.236 0 01-2.236-2.236 2.236 2.236 0 012.235-2.236 2.236 2.236 0 012.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.793 1.683-3.264.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09c.735 0 1.364 1.235 1.674 3.188-.615-.189-1.267-.371-1.954-.518A24.73 24.73 0 0015.6 3.27c.587-.204 1.115-.305 1.564-.305l-.016.124zm-5.51.027c.654.157 1.321.38 2.013.627A24.494 24.494 0 0012 5.098a24.56 24.56 0 00-1.367-1.643c.455-.154.91-.254 1.37-.322l.31-.012zm-4.638-.116c.14-.062.29-.092.44-.092.444 0 .975.1 1.56.3a24.725 24.725 0 00-1.003 1.794 24.7 24.7 0 00-1.972.52c.305-1.956.935-3.19 1.674-3.19l-.7-.332zM5.96 8.44c-.304.604-.587 1.232-.844 1.884a24.573 24.573 0 01-1.507-.705c.397-.43.83-.844 1.294-1.233.339.017.688.036 1.057.054zm-.63 3.33c-.166-.48-.3-.96-.41-1.44.498.21 1.016.407 1.543.589a25.175 25.175 0 00-.557 1.494c-.197-.21-.387-.424-.576-.643zm.498 1.614l.593.672a26.002 26.002 0 00-.396 1.507c-.506-.216-1.01-.443-1.504-.68.393-.506.82-1.003 1.307-1.499zm1.68 1.87c-.26-.28-.516-.57-.766-.868a25.38 25.38 0 001.418-.498 25.64 25.64 0 00.517 1.488c-.388-.04-.775-.082-1.169-.122zm3.28.555c.508.028 1.018.044 1.53.044.512 0 1.022-.016 1.53-.044a25.065 25.065 0 01-1.53 1.827 25.065 25.065 0 01-1.53-1.827zm4.23-.5c-.386.04-.767.082-1.15.12.17-.494.328-.99.497-1.489.468.169.937.338 1.43.502-.25.3-.507.59-.777.867zm1.68-1.87c.487.497.91.994 1.307 1.499-.493.237-.997.464-1.503.68a26.004 26.004 0 00-.396-1.507l.593-.672zm.467-1.56c-.197.219-.387.432-.576.643a24.978 24.978 0 00-.557-1.494c.527-.182 1.045-.38 1.543-.59-.11.48-.244.961-.41 1.44zm-.9-3.375c.461.39.895.804 1.294 1.233-.485.231-.977.454-1.508.705a24.454 24.454 0 00-.844-1.884c.36-.018.712-.037 1.058-.054zm-1.54-.64a24.56 24.56 0 00-1.366 1.643 24.494 24.494 0 00-1.367-1.643c.463.069.942.17 1.416.34.47-.166.944-.266 1.417-.34h-.1zM12 7.152c.4.475.8.97 1.184 1.488H10.82c.38-.517.781-1.014 1.18-1.488zm0 9.703c-.4-.475-.8-.97-1.183-1.487h2.364C12.8 15.884 12.4 16.38 12 16.855zm-3.278-1.48c.4.028.8.044 1.203.044.4 0 .8-.016 1.202-.044-.4-.494-.795-.99-1.202-1.487-.406.497-.8.993-1.203 1.487zm6.554 0c-.4-.494-.795-.99-1.201-1.487.401.028.8.044 1.201.044.401 0 .8-.016 1.201-.044-.4.494-.795.99-1.201 1.487z"/></svg> },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen]           = useState(false);
  const [activeTab, setActiveTab]         = useState("skills");

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY + 100;
      NAV_ITEMS.forEach((item) => {
        const el = document.getElementById(item.toLowerCase());
        if (el && scrollY >= el.offsetTop && scrollY < el.offsetTop + el.offsetHeight)
          setActiveSection(item.toLowerCase());
      });
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ background: "#050508", color: "#e2e8f0", fontFamily: "'Poppins', sans-serif", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #0a0a0f; }
        ::-webkit-scrollbar-thumb { background: ${ACCENT}; border-radius: 3px; }
        a { text-decoration: none; color: inherit; }

        .grid-bg {
          background-image:
            linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .glow-blob { position: absolute; border-radius: 50%; filter: blur(120px); pointer-events: none; z-index: 0; }

        .nav-link {
          color: #94a3b8; font-size: 13px; font-weight: 500; letter-spacing: 0.5px;
          padding: 6px 2px; border-bottom: 2px solid transparent; cursor: pointer;
          transition: color 0.3s, border-color 0.3s;
          background: none; border-left: none; border-right: none; border-top: none;
          font-family: 'Poppins', sans-serif; text-transform: uppercase;
        }
        .nav-link:hover, .nav-link.active { color: #fff; border-bottom-color: ${ACCENT}; }

        .section-title { font-size: clamp(28px, 4.5vw, 46px); font-weight: 800; color: #f1f5f9; line-height: 1.15; margin-bottom: 14px; }
        .section-title span { color: ${ACCENT2}; }
        .accent-line { width: 60px; height: 3px; background: linear-gradient(90deg, ${ACCENT}, ${ACCENT2}); border-radius: 2px; margin-bottom: 40px; }

        .btn-primary {
          background: linear-gradient(135deg, ${ACCENT} 0%, ${ACCENT2} 100%);
          color: #fff; border: none; padding: 13px 32px; border-radius: 6px;
          font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 600;
          cursor: pointer; letter-spacing: 0.3px; transition: all 0.3s; display: inline-block;
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(124,58,237,0.5); }

        .btn-ghost {
          background: rgba(124,58,237,0.08); color: #a78bfa;
          border: 1px solid rgba(124,58,237,0.35); padding: 12px 30px; border-radius: 6px;
          font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 600;
          cursor: pointer; letter-spacing: 0.3px; transition: all 0.3s; display: inline-block;
        }
        .btn-ghost:hover { background: rgba(124,58,237,0.18); border-color: ${ACCENT2}; transform: translateY(-2px); }

        .tab-btn {
          background: transparent; border: 1px solid #1e1e2e; color: #64748b;
          padding: 9px 24px; border-radius: 6px; cursor: pointer;
          font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 500;
          transition: all 0.25s; letter-spacing: 0.3px;
        }
        .tab-btn.active { background: ${ACCENT}; border-color: ${ACCENT}; color: #fff; box-shadow: 0 4px 18px rgba(124,58,237,0.4); }
        .tab-btn:not(.active):hover { border-color: ${ACCENT}; color: #a78bfa; }

        .skill-card {
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 12px; padding: 22px 12px; border-radius: 12px; cursor: default;
          transition: all 0.3s;
        }
        .skill-card:hover { transform: translateY(-6px); box-shadow: 0 12px 32px rgba(124,58,237,0.2); }
        .skill-name { font-size: 11px; font-weight: 600; text-align: center; line-height: 1.3; letter-spacing: 0.3px; }

        .social-btn {
          width: 40px; height: 40px; border: 1px solid #1e2040; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          color: #64748b; transition: all 0.3s; cursor: pointer; background: #0d0d1a;
        }
        .social-btn:hover { border-color: ${ACCENT}; color: #a78bfa; background: rgba(124,58,237,0.1); transform: translateY(-3px); }

        .sidebar-social {
          position: absolute; left: 24px; bottom: 60px;
          display: flex; flex-direction: column; align-items: center; gap: 12px;
        }
        .sidebar-social::after {
          content: ''; display: block; width: 1px; height: 70px;
          background: linear-gradient(to bottom, #3b3b6b, transparent); margin-top: 4px;
        }

        .timeline-item { position: relative; padding-left: 26px; padding-bottom: 4px; }
        .timeline-item::before {
          content: ''; position: absolute; left: 0; top: 7px;
          width: 9px; height: 9px; border-radius: 50%;
          background: ${ACCENT}; box-shadow: 0 0 8px ${ACCENT};
        }
        .timeline-item::after {
          content: ''; position: absolute; left: 4px; top: 16px;
          width: 1px; height: calc(100% + 4px); background: #1e1e2e;
        }
        .timeline-item:last-child::after { display: none; }

        .proj-card {
          background: #0a0a12; border: 1px solid #1a1a2e; border-radius: 12px;
          overflow: hidden; transition: all 0.35s;
        }
        .proj-card:hover { border-color: ${ACCENT}44; box-shadow: 0 20px 60px rgba(124,58,237,0.18); transform: translateY(-6px); }
        .proj-img { width: 100%; height: 220px; object-fit: cover; display: block; transition: transform 0.4s; }
        .proj-card:hover .proj-img { transform: scale(1.04); }

        .tech-tag {
          background: rgba(124,58,237,0.12); color: #a78bfa;
          font-size: 11px; font-weight: 600; padding: 4px 10px;
          border-radius: 20px; border: 1px solid rgba(124,58,237,0.3);
          font-family: 'Fira Code', monospace; letter-spacing: 0.3px;
        }

        .contact-card {
          background: #0a0a14; border: 1px solid #1a1a2e; border-radius: 14px;
          padding: 32px; transition: all 0.3s; display: flex; align-items: center; gap: 20px;
        }
        .contact-card:hover { border-color: ${ACCENT}66; box-shadow: 0 10px 40px rgba(124,58,237,0.15); }

        @keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.6;transform:scale(1.3)} }
        .pulse-dot { animation: pulse-dot 1.5s ease-in-out infinite; }

        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        .fade-up { animation: fadeUp 0.7s ease both; }

        .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; padding: 4px; }
        .hamburger span { display: block; width: 22px; height: 2px; background: #94a3b8; border-radius: 2px; transition: all 0.3s; }
        .hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

        @media (max-width: 900px) {
          .hamburger { display: flex; }
          .desktop-nav { display: none !important; }
          .mobile-nav { display: flex !important; }
          .hero-layout { flex-direction: column-reverse !important; padding-left: 32px !important; gap: 48px !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .skills-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .sidebar-social { display: none !important; }
          .contact-row { flex-direction: column !important; }
        }
        @media (max-width: 500px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      {/* NAVBAR */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 999, background: "rgba(5,5,8,0.88)", backdropFilter: "blur(20px)", borderBottom: "1px solid #1a1a2e" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          <div onClick={() => scrollTo("home")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: ACCENT, fontFamily: "'Fira Code', monospace", fontSize: 18, fontWeight: 700 }}>&lt;</span>
            <span style={{ color: "#f1f5f9", fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 18, letterSpacing: "-0.5px" }}>{MY_NAME}</span>
            <span style={{ color: ACCENT2, fontFamily: "'Fira Code', monospace", fontSize: 18, fontWeight: 700 }}>/&gt;</span>
          </div>

          <div className="desktop-nav" style={{ display: "flex", gap: 36, alignItems: "center" }}>
            {NAV_ITEMS.map((item) => (
              <button key={item} className={`nav-link ${activeSection === item.toLowerCase() ? "active" : ""}`} onClick={() => scrollTo(item)}>
                {item}
              </button>
            ))}
            <a href={MY_RESUME} download className="btn-ghost" style={{ padding: "8px 20px", fontSize: 12 }}>Resume</a>
          </div>

          <button className={`hamburger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-nav" style={{ display: "flex", flexDirection: "column", padding: "16px 40px 24px", gap: 18, background: "#07070f", borderTop: "1px solid #1a1a2e" }}>
            {NAV_ITEMS.map((item) => (
              <button key={item} className={`nav-link ${activeSection === item.toLowerCase() ? "active" : ""}`} onClick={() => scrollTo(item)} style={{ textAlign: "left", fontSize: 14 }}>
                {item}
              </button>
            ))}
            <a href={MY_RESUME} download className="btn-primary" style={{ textAlign: "center" }}>Resume</a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="grid-bg" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", paddingTop: 68, overflow: "hidden" }}>
        <div className="glow-blob" style={{ width: 500, height: 500, background: `${ACCENT}18`, top: -80, right: -80 }} />
        <div className="glow-blob" style={{ width: 300, height: 300, background: `${ACCENT2}12`, bottom: 0, left: "20%" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 40px 60px 80px", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 60, position: "relative", zIndex: 1 }} className="hero-layout">

          <div className="sidebar-social">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="social-btn" title={s.label}>
                {s.svg}
              </a>
            ))}
          </div>

          <div style={{ flex: 1, maxWidth: 580 }} className="fade-up">
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", borderRadius: 20, padding: "6px 14px", marginBottom: 28 }}>
              <span className="pulse-dot" style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", flexShrink: 0, display: "block" }} />
              <span style={{ fontSize: 12, color: "#86efac", fontWeight: 600, fontFamily: "'Fira Code', monospace", letterSpacing: "0.3px" }}>Open to opportunities</span>
            </div>

            <h1 style={{ fontSize: "clamp(38px, 5.5vw, 70px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 10, color: "#f1f5f9" }}>
              I'm <span style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, ${ACCENT2} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{MY_NAME}</span>
            </h1>

            <div style={{ fontSize: "clamp(20px, 3vw, 34px)", fontWeight: 700, color: "#94a3b8", lineHeight: 1.3, marginBottom: 24 }}>
              {MY_ROLE}
            </div>

            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#0d0d1a", border: "1px solid #1e1e2e", borderRadius: 20, padding: "5px 14px", marginBottom: 24 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#64748b"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              <span style={{ fontSize: 12, color: "#64748b", fontWeight: 500 }}>{MY_LOCATION}</span>
            </div>

            <p style={{ color: "#64748b", fontSize: 15, lineHeight: 1.85, maxWidth: 480, marginBottom: 36 }}>{MY_BIO}</p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
              <a href={MY_RESUME} download className="btn-primary">↓ Download Resume</a>
              <button className="btn-ghost" onClick={() => scrollTo("contact")}>Get in Touch</button>
            </div>

            <div style={{ display: "flex", gap: 32, marginTop: 48, paddingTop: 32, borderTop: "1px solid #1a1a2e", flexWrap: "wrap" }}>
              {[
                { v: "8+",  l: "Technologies" },
                { v: "2",    l: "Projects Built" },
                { v: "6mo+", l: "Training" },
              ].map(({ v, l }) => (
                <div key={l}>
                  <div style={{ fontSize: 26, fontWeight: 800, color: ACCENT2, fontFamily: "'Fira Code', monospace" }}>{v}</div>
                  <div style={{ fontSize: 12, color: "#475569", marginTop: 2, fontWeight: 500 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero photo */}
          <div style={{ flexShrink: 0, position: "relative" }}>
            <div style={{ width: "min(360px, 36vw)", minWidth: 220, position: "relative" }}>
              <div style={{ position: "absolute", inset: -10, borderRadius: 16, background: `linear-gradient(135deg, ${ACCENT}44 0%, ${ACCENT2}22 100%)`, zIndex: 0 }} />
              <div style={{ position: "relative", zIndex: 1, borderRadius: 12, overflow: "hidden", background: "#0d0d1a" }}>
                <img
                  src={MY_PHOTO}
                  alt={MY_NAME}
                  style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover", objectPosition: "top", display: "block" }}
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div style={{ display: "none", width: "100%", aspectRatio: "4/5", background: "#0d0d1a", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 14, border: `1px dashed ${ACCENT}` }}>
                  <span style={{ fontSize: 56 }}>🧑‍💻</span>
                  <p style={{ color: "#334155", fontSize: 11, textAlign: "center", fontFamily: "'Fira Code', monospace", padding: "0 16px" }}>
                    Place photo at<br />{MY_PHOTO}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION — photo removed */}
      <section id="about" style={{ padding: "100px 40px", background: "#070710", position: "relative" }}>
        <div className="glow-blob" style={{ width: 400, height: 400, background: `${ACCENT}0c`, top: 0, left: -100 }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>

          <h2 className="section-title">About <span>Me</span></h2>
          <div className="accent-line" />

          {/* Tab switcher */}
          <div style={{ display: "flex", gap: 10, marginBottom: 30, flexWrap: "wrap" }}>
            {["skills", "experience", "education"].map((t) => (
              <button key={t} className={`tab-btn ${activeTab === t ? "active" : ""}`} onClick={() => setActiveTab(t)}>
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>

          {/* SKILLS TAB */}
          {activeTab === "skills" && (
            <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12 }}>
              {SKILLS.map(({ label, bg, border, color, svg }) => (
                <div key={label} className="skill-card" style={{ border: `1px solid ${border}`, background: bg }}>
                  <div style={{ filter: `drop-shadow(0 0 8px ${color}66)` }}>{svg}</div>
                  <span className="skill-name" style={{ color }}>{label}</span>
                </div>
              ))}
            </div>
          )}

          {/* EXPERIENCE TAB */}
          {activeTab === "experience" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 28, maxWidth: 780 }}>
              {EXPERIENCE.map((item, i) => (
                <div key={i} className="timeline-item" style={{ paddingBottom: 8 }}>
                  <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 11, color: ACCENT2, background: `${ACCENT}15`, border: `1px solid ${ACCENT}30`, borderRadius: 4, padding: "2px 8px", display: "inline-block", marginBottom: 8 }}>
                    {item.year}
                  </span>
                  <p style={{ color: "#f1f5f9", fontWeight: 700, fontSize: 15, marginBottom: 3 }}>{item.role}</p>
                  <p style={{ color: ACCENT2, fontSize: 13, fontWeight: 500, marginBottom: 8 }}>{item.company}</p>
                  <p style={{ color: "#475569", fontSize: 13, lineHeight: 1.75 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* EDUCATION TAB */}
          {activeTab === "education" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 28, maxWidth: 780 }}>
              {EDUCATION.map((item, i) => (
                <div key={i} className="timeline-item" style={{ paddingBottom: 8 }}>
                  <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 11, color: ACCENT2, background: `${ACCENT}15`, border: `1px solid ${ACCENT}30`, borderRadius: 4, padding: "2px 8px", display: "inline-block", marginBottom: 8 }}>
                    {item.year}
                  </span>
                  <p style={{ color: "#f1f5f9", fontWeight: 700, fontSize: 15, marginBottom: 3 }}>{item.degree}</p>
                  <p style={{ color: ACCENT2, fontSize: 13, fontWeight: 500, marginBottom: 8 }}>{item.school}</p>
                  <p style={{ color: "#475569", fontSize: 13, lineHeight: 1.75 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          )}

          <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.9, marginTop: 32, marginBottom: 10 }}>{ABOUT_DESC_1}</p>
          <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.9, marginBottom: 36 }}>{ABOUT_DESC_2}</p>

          <a href={MY_RESUME} download className="btn-primary">↓ Download Resume</a>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="grid-bg" style={{ padding: "100px 40px", position: "relative", overflow: "hidden" }}>
        <div className="glow-blob" style={{ width: 450, height: 450, background: `${ACCENT}0d`, top: 0, right: -80 }} />

        <div style={{ maxWidth: 1000, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 className="section-title">Featured <span>Projects</span></h2>
            <div className="accent-line" style={{ margin: "0 auto" }} />
          </div>

          <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32 }}>
            {PROJECTS.map((p, i) => (
              <div key={i} className="proj-card">
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <img
                    src={p.img}
                    alt={p.title}
                    className="proj-img"
                    onError={(e) => {
                      e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='220'%3E%3Crect fill='%230a0a12' width='600' height='220'/%3E%3Ctext fill='%23333' font-size='13' font-family='monospace' x='50%25' y='45%25' text-anchor='middle' dominant-baseline='middle'%3EAdd screenshot: ${encodeURIComponent(p.img)}%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                  <div style={{ position: "absolute", top: 14, right: 14, background: "rgba(7,7,16,0.85)", border: `1px solid ${ACCENT}44`, borderRadius: 6, padding: "4px 10px", fontFamily: "'Fira Code', monospace", fontSize: 11, color: ACCENT2 }}>
                    0{i + 1}
                  </div>
                </div>

                <div style={{ padding: "26px 26px 22px" }}>
                  <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
                    {p.highlights.map((h) => (
                      <span key={h} style={{ fontSize: 10, fontFamily: "'Fira Code', monospace", color: "#22c55e", background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: 4, padding: "2px 8px" }}>
                        ✓ {h}
                      </span>
                    ))}
                  </div>

                  <h3 style={{ fontSize: 19, fontWeight: 800, color: "#f1f5f9", marginBottom: 10 }}>{p.title}</h3>
                  <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.8, marginBottom: 18 }}>{p.desc}</p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 22 }}>
                    {p.tech.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>

                  <div style={{ height: 1, background: "#1a1a2e", marginBottom: 20 }} />

                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#64748b", fontSize: 13, fontWeight: 600, transition: "color 0.3s" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#a78bfa"}
                    onMouseLeave={e => e.currentTarget.style.color = "#64748b"}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.419-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" style={{ padding: "100px 40px", background: "#070710", position: "relative" }}>
        <div className="glow-blob" style={{ width: 400, height: 400, background: `${ACCENT}0c`, bottom: -80, right: -60 }} />

        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <h2 className="section-title">Let's <span>Connect</span></h2>
          <div className="accent-line" style={{ margin: "0 auto 16px" }} />
          <p style={{ color: "#475569", fontSize: 15, lineHeight: 1.9, maxWidth: 480, margin: "0 auto 52px" }}>
            I'm actively looking for opportunities. Whether it's a job, internship, or collaboration — my inbox is open.
          </p>

          <div className="contact-row" style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap", marginBottom: 48 }}>
            <a href={`mailto:${CONTACT_EMAIL}`} className="contact-card" style={{ flex: 1, minWidth: 240, maxWidth: 300 }}>
              <div style={{ width: 50, height: 50, background: `${ACCENT}18`, border: `1px solid ${ACCENT}33`, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={ACCENT2} strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div style={{ textAlign: "left" }}>
                <p style={{ fontSize: 10, color: "#334155", fontFamily: "'Fira Code', monospace", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 5 }}>Email</p>
                <p style={{ fontSize: 13, color: "#e2e8f0", fontWeight: 500 }}>{CONTACT_EMAIL}</p>
                <p style={{ fontSize: 11, color: ACCENT2, marginTop: 4 }}>Send a message →</p>
              </div>
            </a>

            <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="contact-card" style={{ flex: 1, minWidth: 240, maxWidth: 300 }}>
              <div style={{ width: 50, height: 50, background: `${ACCENT}18`, border: `1px solid ${ACCENT}33`, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={ACCENT2} strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.4 10.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012.31 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.1 6.1l1.27-.77a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 17.5v-.58z"/></svg>
              </div>
              <div style={{ textAlign: "left" }}>
                <p style={{ fontSize: 10, color: "#334155", fontFamily: "'Fira Code', monospace", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 5 }}>Phone</p>
                <p style={{ fontSize: 13, color: "#e2e8f0", fontWeight: 500 }}>{CONTACT_PHONE}</p>
                <p style={{ fontSize: 11, color: ACCENT2, marginTop: 4 }}>Give a call →</p>
              </div>
            </a>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 14 }}>
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="social-btn" title={s.label} style={{ width: 44, height: 44, borderRadius: 10 }}>
                {s.svg}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#050508", borderTop: "1px solid #0f0f1e", padding: "26px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }} onClick={() => scrollTo("home")}>
          <span style={{ color: ACCENT, fontFamily: "'Fira Code', monospace", fontSize: 15, fontWeight: 700 }}>&lt;</span>
          <span style={{ color: "#f1f5f9", fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 15 }}>{MY_NAME}</span>
          <span style={{ color: ACCENT2, fontFamily: "'Fira Code', monospace", fontSize: 15, fontWeight: 700 }}>/&gt;</span>
        </div>

        <div style={{ display: "flex", gap: 24 }}>
          {NAV_ITEMS.map((item) => (
            <button key={item} onClick={() => scrollTo(item)} style={{ background: "none", border: "none", color: "#334155", fontSize: 12, cursor: "pointer", fontFamily: "Poppins", fontWeight: 500, transition: "color 0.3s" }}
              onMouseEnter={e => e.target.style.color = ACCENT2}
              onMouseLeave={e => e.target.style.color = "#334155"}>
              {item}
            </button>
          ))}
        </div>

        <button className="btn-ghost" style={{ padding: "8px 18px", fontSize: 12 }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          ↑ Back to Top
        </button>
      </footer>
    </div>
  );
}
