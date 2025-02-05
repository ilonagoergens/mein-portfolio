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

          <Box sx={{ padding: 4 }}>
            {activeContent === "about" && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "row", md: "row" },
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  width: "100%",
                  marginLeft: "3%",
                  marginBottom: "5%",
                  flexWrap: "wrap",
                }}
              >
                <Box
                  sx={{
                    display: "flex", // Flexbox Layout
                    flexDirection: { xs: "column", sm: "row" }, // Bild und Text nebeneinander auf größeren Bildschirmen, übereinander auf mobilen Geräten
                    position: "relative",
                    width: "100%",
                    maxWidth: "400px",
                    margin: "auto",
                  }}
                >
                  <Box className="image-container">
                    <img
                      src={Image}
                      alt="Mein Foto"
                      className="image" // Anwendungsname für CSS-Klasse
                    />
                  </Box>
                </Box>

                <Box
                  sx={{
                    marginLeft: {
                      xs: "10px",
                      sm: "10px",
                      md: "20px",
                      lg: "100px",
                    },

                    textAlign: "left",
                    flex: 1,
                    overflow: "auto",
                    marginTop: { xs: "10px", sm: "0" }, // Abstände für mobile Geräte, um den Text unten anzuzeigen
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: "left",
                      fontSize: {
                        xs: "0.45rem",
                        sm: "0.4rem",
                        md: "0.8rem",
                        lg: "1rem",
                      },
                      animation: "fadeIn 1s ease-out",
                      "@keyframes fadeIn": {
                        "0%": {
                          opacity: 0,
                        },
                        "100%": {
                          opacity: 1,
                        },
                      },
                    }}
                    style={{
                      marginRight: "20px", // Hier wird der Abstand hinzugefügt
                    }}
                  >
                    <p>
                      Hallo, ich bin Ilona! 😊 Nach einem Jahr intensiver
                      Weiterbildung in Cloud- und Webentwicklung bin ich nun
                      bereit für den Einstieg in die IT-Welt. Während dieser
                      Zeit habe ich umfassende theoretische Grundlagen erworben
                      und mich mit Technologien wie AWS, Azure, Linux, Docker,
                      Kubernetes, DevOps und moderner Webentwicklung
                      beschäftigt. Besonders spannend finde ich die Kombination
                      aus Automatisierung, effizientem Deployment und kreativen
                      Lösungen im Frontend. 🚀
                    </p>
                    <p>
                      Jetzt freue ich mich darauf, mein Wissen in der Praxis
                      anzuwenden, weiter dazuzulernen und in einem innovativen
                      Team durchzustarten. ✨
                    </p>
                    <p>
                      Neben meiner Begeisterung für Technik bin ich auch ein
                      kreativer Mensch. In meiner Freizeit male ich gerne, mache
                      Yoga und genieße die kleinen Auszeiten, die das Leben
                      bietet. Als Mutter von zwei Kindern weiß ich, wie wichtig
                      es ist, organisiert zu bleiben – eine Fähigkeit, die mir
                      sowohl privat als auch beruflich enorm hilft. 💪
                    </p>
                    <p>
                      Ich bin ab April 2025 bereit für neue Herausforderungen!
                      🌟
                    </p>
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>

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
      {/* Hier könnte der Titel deines Projekts stehen */}
    </Typography>

    {/* Projekt 1 */}
    <Box
      sx={{
        boxShadow: 2,
        borderRadius: 2,
        backgroundColor: "#f5f5f5",
        padding: 3,
        textAlign: "center",
        cursor: "pointer",
        transition: "transform 0.3s",
        margin: "0 auto",
        width: "100%",
        maxWidth: 600,
        "&:hover": {
          transform: "scale(1.05)",
        },
        transform: activeProject === 1 ? 'scale(1.2)' : 'scale(1)',
      }}
      onClick={() => handleProjectClick(1)}
    >
      <Typography variant="h6">Chat Web App</Typography>
      <Typography variant="body2" sx={{ color: "#555" }}>
        Mit einem dreiköpfigen Team haben wir diese Chat-Webanwendung entwickelt. Hier ist auch eine Präsentation des Projekts, die du dir ansehen kannst 👉🏼
        <a
          href="https://docs.google.com/presentation/d/e/2PACX-1vQD-Rg4rOEsn1XyzAamP5bCGOn7uCDO1C6RhJwJLwB35IXDUTTqaP5ORa-jogCjMw/pub?start=false&loop=false&delayms=3000"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#0070f3",
            textDecoration: "underline",
          }}
        >
          Projektpräsentation
        </a>
        {" "}
        und hier ist der GitHub-Link zum Projekt 👉🏼
        <a
          href="https://github.com/ilonagoergens/Kaiwa"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#0070f3",
            textDecoration: "underline",
          }}
        >
          GitHub-Projekt
        </a>
      </Typography>
    </Box>

    {/* Hinweistext und Video, die nur erscheinen, wenn dieses Projekt aktiv ist */}
    {activeProject === 1 && !videoEnded ? (
      <>
        <Box
          sx={{
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            maxWidth: 760,
            position: "relative",  // Relative Positionierung für das Layout
            top: "-150px",  // Verschiebe das Element leicht nach oben
            boxShadow: 2,
            borderRadius: 2,
            overflow: "hidden",
            backgroundColor: "#f9f9f9",
            padding: 2,
            transition: 'transform 0.3s',
          }}
        >
          <video
            width="100%"
            height="auto"
            controls
            style={{
              objectFit: "contain",  // Verhindert das Abschneiden des Videos
              maxHeight: "80vh",  // Maximale Höhe des Videos anpassen
            }}
            onEnded={() => setVideoEnded(true)} // Video zu Ende -> State aktualisieren
          >
            <source src={KaiwaVideo} type="video/mp4" />
            Dein Browser unterstützt dieses Video-Format nicht.
          </video>
        </Box>
      </>
    ) : (
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          color: "#555",
          marginTop: 2,
          marginBottom: 2,
        }}
        onClick={handleRestartVideo} // Klick auf den Text zurücksetzt den Zustand
      >
        {videoEnded
          ? "Das Video ist jetzt fertig! Klicke hier, um es erneut anzusehen."
          : "Klicke hier, um das Video des Projekts anzusehen!"
        }
      </Typography>
    )}
  </>
)}


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
              style={{ marginTop: "20px" }}
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
