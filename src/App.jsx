import React, { useState, useEffect } from "react";
import { Button, Box, Typography, Tooltip } from "@mui/material";
import Image from "./assets/Bild2.jpg?url";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import AwsCloudPractitionerImage from "./assets/aws-certified-cloud-practitioner.png";
import LinuxImage from "./assets/Linux.png";
import AwsReStart from "./assets/aws-re-start-graduate.png";
import AzureImage from "./assets/azure.png";
import ScrumImage from "./assets/scrum.png";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./style.css";
import KaiwaVideo from '/public/Kaiwa.mp4';

const theme = createTheme({
  typography: {
    fontFamily: '"Microsoft JhengHei UI", "Segoe UI", "Arial", sans-serif',
    fontWeightLight: 100, // Für dünnere Schrift, falls gewünscht
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

function NavButton({ label, onClick }) {
  return (
    <Button
      variant="text"
      onClick={onClick}
      sx={{
        textTransform: "none",
        fontSize: {
          xs: "0.6rem",
          sm: "0.75rem",
          md: "0.9rem",
        },
        color: "black",
        padding: {
          xs: "0px",
          sm: "2px",
          md: "4px",
        },
        margin: "0 5px",
        position: "relative",
        transition: "all 0.3s ease",
        cursor: "default", // Standardcursor auf auto setzen
        "&:hover": {
          backgroundColor: "rgba(165, 184, 168, 0.4)",
          transform: "scale(1.1)",
          cursor: "pointer", // Handzeiger bei Hover aktivieren
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "2px",
          backgroundColor: "#A5B8A8",
          transition: "all 0.3s ease",
        },
      }}
    >
      {label}
    </Button>
  );
}

function App() {
  const [activeContent, setActiveContent] = useState("home");
  const [activeProject, setActiveProject] = useState(null); // Hier den activeProject-State hinzufügen
  const [videoEnded, setVideoEnded] = useState(false);

  const handleRestartVideo = () => {
    setVideoEnded(false); // Zurücksetzen der videoEnded-Flag
  };

  const handleClick = (content) => {
    setActiveContent(content);
  };

    // Funktion zum Umschalten des aktiven Projekts
    const handleProjectClick = (projectId) => {
      setActiveProject(activeProject === projectId ? null : projectId); // Setzt das Projekt oder setzt es zurück
    };

  useEffect(() => {
    if ("ontouchstart" in window) return; // Kein Custom-Cursor auf Touch-Geräten

    setActiveContent("about");
    document.body.style.cursor = "none";
    document.documentElement.style.cursor = "none";

    // Interaktive Elemente ohne Cursor
    const allElements = document.querySelectorAll(
      "input, textarea, button, a, select, .no-cursor"
    );
    allElements.forEach((element) => {
      element.style.cursor = "none";
    });

    const cursor = document.createElement("div");
    Object.assign(cursor.style, {
      position: "fixed",
      width: "20px",
      height: "20px",
      backgroundColor: "#A5B8A8",
      borderRadius: "50%",
      pointerEvents: "none",
      transition:
        "transform 0.1s ease-out, opacity 0.1s, box-shadow 0.1s ease-out",
      zIndex: "9999",
    });
    document.body.appendChild(cursor);

    const canvas = document.createElement("canvas");
    Object.assign(canvas.style, {
      position: "fixed",
      top: "0",
      left: "0",
      pointerEvents: "none",
      zIndex: "9998",
    });
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    const particles = [];
    let mouseX = 0;
    let mouseY = 0;
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
      cursor.style.opacity = "1";
      cursor.style.boxShadow = "0px 0px 15px rgba(0, 0, 0, 0.3)";

      particles.push({
        x: mouseX,
        y: mouseY,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
      });
    };

    const onMouseLeave = () => {
      cursor.style.opacity = "0";
      cursor.style.boxShadow = "none";
    };

    const animateCanvas = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.size *= 0.98;

        if (particle.size < 0.5) {
          particles.splice(i, 1);
          i--;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(165, 184, 168, 0.7)";
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animateCanvas);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    animateCanvas();

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", resizeCanvas);
      document.body.removeChild(cursor);
      document.body.removeChild(canvas);
      document.body.style.cursor = "auto";
      document.documentElement.style.cursor = "auto";
      allElements.forEach((element) => {
        element.style.cursor = "auto";
      });

      cancelAnimationFrame(animationFrameId);
    };
  }, []);



  
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          borderRadius: "25px",
          backgroundColor: "#F5F5F5",
          boxShadow: "1px 1px 15px 5px rgba(0, 0, 0, 0.3)",
          textAlign: "center",
          maxWidth: "100%",
          width: "85%",
          height: "80vh",
          padding: {
            xs: 2,
            sm: 3,
            md: 4,
            lg: 5,
          },
          margin: "5vh auto",
        }}
      >
        <Box sx={{ paddingBottom: 4 }}>
          <Box
            id="nav-buttons"
            display="flex"
            justifyContent="center"
            sx={{
              marginBottom: 2,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <NavButton label="Über mich" onClick={() => handleClick("about")} />
            <NavButton
              label="Projekte"
              onClick={() => handleClick("projects")}
            />
            <NavButton
              label="Zertifikate"
              onClick={() => handleClick("certificates")}
            />
            <NavButton label="Kontakt" onClick={() => handleClick("Contact")} />
          </Box>

          {activeContent === "about" && (
  <Box className="about-container">
    <Box className="about-content">
      <Box className="image-container">
        <img src={Image} alt="Mein Foto" className="image" />
      </Box>
    </Box>
    <Box className="text-container">
      <Typography variant="body1" className="about-text" sx={{ fontSize: { xs: "0.4rem", sm: "0.5rem", md: "0.8rem", lg: "1.1rem" } }}>
        <p>
          Hallo, ich bin Ilona! 😊 Nach einem Jahr intensiver Weiterbildung in
          Cloud- und Webentwicklung bin ich nun bereit für den Einstieg in
          die IT-Welt. Während dieser Zeit habe ich umfassende theoretische
          Grundlagen erworben und mich mit Technologien wie AWS, Azure,
          Linux, Docker, Kubernetes, DevOps und moderner Webentwicklung
          beschäftigt. Besonders spannend finde ich die Kombination aus
          Automatisierung, effizientem Deployment und kreativen Lösungen im
          Frontend. 🚀
        </p>
        <p>
          Jetzt freue ich mich darauf, mein Wissen in der Praxis anzuwenden,
          weiter dazuzulernen und in einem innovativen Team durchzustarten.
          ✨
        </p>
        <p>
          Neben meiner Begeisterung für Technik bin ich auch ein kreativer
          Mensch. In meiner Freizeit male ich gerne, mache Yoga und genieße
          die kleinen Auszeiten, die das Leben bietet. Als Mutter von zwei
          Kindern weiß ich, wie wichtig es ist, organisiert zu bleiben – eine
          Fähigkeit, die mir sowohl privat als auch beruflich enorm hilft. 💪
        </p>
        <p>
          💡 <strong>Meine Skills im Überblick:</strong>
          <br /> 🔹 <strong>Frontend-Entwicklung:</strong> HTML, CSS,
          JavaScript, React.js, UX/UI-Design
          <br /> 🔹 <strong>Backend & APIs:</strong> Node.js, Express.js,
          RESTful APIs
          <br /> 🔹 <strong>Cloud-Technologien:</strong> AWS, Azure
          <br /> 🔹 <strong>Container & Orchestrierung:</strong> Docker,
          Kubernetes
          <br /> 🔹 <strong>DevOps & Automatisierung:</strong> CI/CD,
          Infrastructure as Code (IaC mit Ansible)
          <br /> 🔹 <strong>Sicherheit & Netzwerke:</strong> Linux,
          Netzwerksicherheit
          <br /> 🔹 <strong>Agile Softwareentwicklung:</strong> Scrum,
          praxisorientierte Projekte
        </p>
        <p>Ich bin ab April 2025 bereit für neue Herausforderungen! 🌟</p>
      </Typography>
    </Box>
  </Box>
)}

{activeContent === "projects" && (
  <>
    {/* Titel */}
    <Typography
      variant="h5"
      sx={{
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 2,
        color: "#333",
        fontSize: { xs: "1.5rem", sm: "2rem" },
      }}
    >
    </Typography>

    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "60px" }}>
      {/* Chat Web App */}
      <Box
        sx={{
          boxShadow: 2,
          borderRadius: 2,
          backgroundColor: "#f5f5f5",
          padding: 3,
          textAlign: "center",
          cursor: "pointer",
          transition: "transform 0.3s",
          width: "100%",
          maxWidth: 600,
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
        onClick={() => setActiveProject(activeProject === 1 ? null : 1)}
      >
        <Typography variant="h6">Chat Web App</Typography>
      </Box>

      {/* Video und Beschreibung (absolut positioniert, um Layout nicht zu verschieben) */}
      {activeProject === 1 && (
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            boxShadow: 2,
            borderRadius: 2,
            backgroundColor: "#f9f9f9",
            padding: 3,
            width: "100%",
            maxWidth: 760,
            textAlign: "center",
            zIndex: 10,
          }}
          onClick={() => setActiveProject(null)}
        >
          <Typography variant="body2" sx={{ color: "#555", marginBottom: 2 }}>
            Mit einem dreiköpfigen Team haben wir diese Chat-Webanwendung entwickelt.
            Hier ist auch eine Präsentation des Projekts 👉🏼
            <a href="https://docs.google.com/presentation/d/e/2PACX-1vQD-Rg4rOEsn1XyzAamP5bCGOn7uCDO1C6RhJwJLwB35IXDUTTqaP5ORa-jogCjMw/pub?start=false&loop=false&delayms=3000" 
               target="_blank" 
               rel="noopener noreferrer" 
               style={{ color: "#0070f3", textDecoration: "underline" }}>
              Projektpräsentation
            </a>
            {" "}und hier ist der GitHub-Link zum Projekt 👉🏼
            <a href="https://github.com/ilonagoergens/Kaiwa" 
               target="_blank" 
               rel="noopener noreferrer" 
               style={{ color: "#0070f3", textDecoration: "underline" }}>
              GitHub-Projekt
            </a>
          </Typography>
          <video width="100%" height="auto" controls style={{ objectFit: "contain", maxHeight: "80vh" }}>
            <source src={KaiwaVideo} type="video/mp4" />
            Dein Browser unterstützt dieses Video-Format nicht.
          </video>
        </Box>
      )}

      {/* Coming Soon */}
      <Box
        sx={{
          boxShadow: 2,
          borderRadius: 2,
          backgroundColor: "#ddd",
          padding: 3,
          textAlign: "center",
          marginTop: "20px",
          width: "100%",
          maxWidth: 600,
        }}
      >
        <Typography variant="h6">Coming Soon...</Typography>
        <Typography variant="body2" sx={{ color: "#555" }}>
          Ein spannendes neues Projekt ist in Arbeit! Stay tuned! 🚀
        </Typography>
      </Box>
    </Box>
  </>
)
}

          {activeContent === "certificates" && (
            <>
              <Typography
                variant="h5"
                sx={{ marginBottom: 2, fontWeight: "bold" }}
              >
                Zertifikate
              </Typography>
              <Box
                sx={{
                  cursor: "none",
                  display: "flex", // Flexbox Layout für die Boxen
                  flexWrap: "wrap", // Boxen umbrechen, wenn der Platz knapp wird
                  gap: "8px", // Abstand zwischen den Boxen (Zertifikaten)
                  justifyContent: "center", // Zertifikate zentrieren
                }}
              >
                {[
                  {
                    title: "AWS Certified Cloud Practitioner",
                    image: AwsCloudPractitionerImage,
                    link: "https://www.credly.com/badges/76380d0e-b595-491b-8b15-38e9310b84a6/public_url",
                    description:
                      "Dieses Zertifikat bestätigt grundlegende Kenntnisse der AWS-Cloud, die für den Einstieg in die Cloud-Welt erforderlich sind. Es umfasst Themen wie Cloud-Architektur, Sicherheitsbestimmungen und AWS-Services.",
                  },
                  {
                    title: "AWS Re/Start",
                    image: AwsReStart,
                    description:
                      "Das AWS Re/Start-Zertifikat bietet fundierte Kenntnisse zu den Grundlagen der Cloud-Technologie und hilft dabei, in der IT-Branche Fuß zu fassen, mit besonderem Fokus auf Cloud-Infrastrukturen und -Dienste.",
                  },
                  {
                    title: "Linux Professional Institute Certification",
                    image: LinuxImage,
                    description:
                      "Dieses Zertifikat belegt fundierte Kenntnisse in der Verwaltung und Konfiguration von Linux-Systemen. Es umfasst Themen wie Systemadministration, Sicherheit und Netzwerktechnologien unter Linux.",
                  },
                  {
                    title: "Microsoft Certified: Azure Fundamentals",
                    image: AzureImage,
                    description:
                      "Mit diesem Zertifikat werden grundlegende Kenntnisse der Microsoft Azure-Cloud-Plattform bestätigt. Es deckt Themen wie Azure-Dienste, Cloud-Konzepte und grundlegende Azure-Architektur ab.",
                  },
                  {
                    title: "Scrum Master Certification",
                    image: ScrumImage,
                    description:
                      "Das Scrum Master-Zertifikat bescheinigt Kenntnisse und Fähigkeiten in der Anwendung der Scrum-Methodik zur effektiven Verwaltung von agilen Projekten. Es umfasst Rollen, Ereignisse und Artefakte innerhalb von Scrum.",
                  },
                ].map((cert, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: "100%", // 100% Breite für volle Flexibilität
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      borderRadius: "10px",
                      overflow: "hidden",
                      transition: "transform 0.3s ease-in-out, box-shadow 0.3s",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0 6px 16px rgba(0, 0, 0, 0.3)",
                      },
                      cursor: "pointer",

                      maxWidth: {
                        xs: "150px", // Auf kleinen Bildschirmen maximal 150px
                        sm: "150px", // Auf mittleren Bildschirmen maximal 150px
                        md: "250px", // Auf großen Bildschirmen maximal 250px
                      },
                      maxHeight: {
                        xs: "150px", // Auf kleinen Bildschirmen maximal 150px
                        sm: "200px", // Auf mittleren Bildschirmen maximal 200px
                        md: "250px", // Auf großen Bildschirmen maximal 250px
                      },
                      margin: "auto", // Zertifikate zentrieren
                      marginTop: "5%",
                    }}
                    onClick={() => alert(`Mehr über: ${cert.title}`)}
                  >
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    ></a>

                    <Box sx={{ position: "relative", height: "200px" }}>
                      <img
                        src={cert.image}
                        alt={cert.title}
                        style={{
                          width: "100%", // Bild nimmt immer 100% der Breite des Containers ein
                          height: "100%", // Höhe auf 100% setzen, um den gesamten Container auszufüllen
                          objectFit: "contain", // Bild bleibt in den Container-Grenzen, ohne das Seitenverhältnis zu verlieren
                          borderRadius: "10px", // Abgerundete Ecken
                        }}
                      />
                    </Box>
                    <Box sx={{ padding: 2, textAlign: "center" }}>
                      <Typography variant="h6">{cert.title}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {cert.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </>
          )}

          {activeContent === "Contact" && (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap={2}
              style={{ marginTop: "50px", paddingTop: "20px" }}
            >
              <Tooltip title="Folge mir auf GitHub">
                <a
                  href="https://github.com/ilonagoergens"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon style={{ fontSize: "80px", color: "#000" }} />
                </a>
              </Tooltip>
              <Tooltip title="Verbinde dich mit mir auf LinkedIn">
                <a
                  href="https://www.linkedin.com/in/ilona-g%C3%B6rgens-81810830a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon
                    style={{ fontSize: "80px", color: "#A5B8A8" }}
                  />
                </a>
              </Tooltip>
              <Tooltip title="Schreibe mir eine E-Mail">
                <a href="mailto:ilonafast@icloud.com">
                  <EmailIcon style={{ fontSize: "80px", color: "#A5B8A8" }} />
                </a>
              </Tooltip>
            </Box>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
