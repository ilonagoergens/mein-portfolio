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
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import myVideo from "./assets/Kaiwa.mp4";

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

  const handleClick = (content) => {
    setActiveContent(content);
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
                      {" "}
                      Hallo, ich bin Ilona! 😊 Als Mutter von zwei Kindern weiß
                      ich, wie wichtig es ist, organisiert zu bleiben und den
                      Überblick zu behalten – sowohl im Job als auch im Alltag.
                      Diese Fähigkeit setze ich gezielt in meiner Arbeit ein, um
                      stets effizient und zielorientiert zu arbeiten. 💪{" "}
                    </p>{" "}
                    <p>
                      {" "}
                      Meine Reise in die IT-Welt begann mit einer Weiterbildung
                      in Cloud- und Webentwicklung. Dort habe ich nicht nur mein
                      technisches Wissen ausgebaut, sondern auch gelernt, wie
                      man innovative Lösungen entwickelt und Herausforderungen
                      schnell meistert. 🚀{" "}
                    </p>{" "}
                    <p>
                      {" "}
                      Besonders interessiere ich mich für Frontend-Entwicklung
                      und DevOps. Die Kombination aus Kreativität und
                      technischer Präzision ist für mich die perfekte Mischung.
                      Zudem begeistert mich das Projektmanagement – es gibt kaum
                      etwas, das ich mehr schätze, als Prozesse zu optimieren
                      und Teams dabei zu unterstützen, ihre Ziele effizient zu
                      erreichen. 🎯{" "}
                    </p>{" "}
                    <p>
                      {" "}
                      In den letzten Monaten habe ich an einem Projekt
                      gearbeitet, bei dem wir eine Chat-Webanwendung innerhalb
                      von zwei Wochen nach dem Scrum-Prinzip entwickelt haben.
                      Diese Erfahrung hat meine Fähigkeiten im agilen Arbeiten
                      und in der Teamarbeit enorm gestärkt. 🤝💻{" "}
                    </p>{" "}
                    <p>
                      {" "}
                      Derzeit vertiefe ich meine Kenntnisse in AWS, Azure, Linux
                      und weiteren modernen Technologien bei TechStarter GmbH.
                      Ich bin ab April 2025 bereit, neue berufliche
                      Herausforderungen anzunehmen und meine Expertise in einem
                      innovativen Umfeld einzubringen. 🚀✨{" "}
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
        fontSize: { xs: '1.5rem', sm: '2rem' }, // Flexibilität für kleinere Bildschirme
      }}
    >
    </Typography>

    <Typography
      variant="body1"
      sx={{
        textAlign: "center",
        marginBottom: 3,
        color: "#555",
        fontSize: { xs: '1rem', sm: '1.2rem' }, // Anpassung je nach Bildschirmgröße
      }}
    >
    </Typography>

    {/* Video in einer Box */}
    <Box
      sx={{
        marginLeft: "25%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        maxWidth: 560,
        marginBottom: 3,
        boxShadow: 2,
        borderRadius: 2,
        overflow: "hidden",
        backgroundColor: "#f9f9f9",
        padding: 2,
      }}
    >
      <video width="100%" height="auto" controls>
        <source src={myVideo} type="video/mp4" />
        Dein Browser unterstützt dieses Video-Format nicht.
      </video>
    </Box>

    {/* GitHub-Link */}
    <div style={{ textAlign: "center", marginBottom: 3 }}>
      <Typography variant="body2" sx={{ color: "#0070f3" }}>
        Schau dir das Projekt auf GitHub an:
        <a
          href="https://github.com/deinBenutzername/deinProjekt"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#0070f3", textDecoration: "underline" }}
        >
          GitHub Repo
        </a>
      </Typography>
    </div>

    {/* Aufklappbare Beschreibung */}
    <Accordion sx={{ marginBottom: 3 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: "#f5f5f5" }}>
        <Typography variant="body2" sx={{ color: "#333" }}>
          Projektbeschreibung
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ backgroundColor: "#fafafa" }}>
        <Typography variant="body2" sx={{ color: "#555" }}>
          Mit einem dreiköpfigen Team haben wir diese Chat-Webanwendung entwickelt. Wir haben uns auf ein
          einfaches Design konzentriert und die Benutzeroberfläche so benutzerfreundlich wie möglich gestaltet.
          Hier ist auch eine Präsentation des Projekts, die du dir ansehen kannst:
          <a
            href="https://deinLinkzurPräsentation"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#0070f3", textDecoration: "underline" }}
          >
            Projektpräsentation
          </a>
          .
        </Typography>
      </AccordionDetails>
    </Accordion>

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
