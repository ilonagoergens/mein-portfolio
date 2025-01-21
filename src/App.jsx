import React, { useState, useEffect } from "react";
import { Button, Box, Typography, Tooltip } from "@mui/material";
import Image from "./assets/image.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import AwsCloudPractitionerImage from "./assets/aws-certified-cloud-practitioner.png";
import LinuxImage from "./assets/Linux.png";
import AwsReStart from "./assets/aws-re-start-graduate.png";
import AzureImage from "./assets/azure.png";
import ScrumImage from "./assets/scrum.png";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./style.css"

const theme = createTheme({
  typography: {
    fontFamily: '"Microsoft JhengHei UI", "Arial", sans-serif', // Schriftart und Fallback
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
          cursor: "hidden", // Handzeiger bei Hover aktivieren
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
  // Mauszeiger und Standard-Stile entfernen
  document.body.style.cursor = "none";  
  document.documentElement.style.cursor = "none";  
  
  // Zusätzliche Styles für interaktive Elemente und Container setzen
  const allElements = document.querySelectorAll(
    'input, textarea, button, a, select, .no-cursor'
  );
  allElements.forEach(element => {
    element.style.cursor = "none"; // Alle interaktiven Elemente und Container ohne Mauszeiger
  });
  
  // Überall Mauszeiger ausblenden
  const interactiveElements = document.querySelectorAll('div, img, p, span');
  interactiveElements.forEach(element => {
    element.style.cursor = "none";
  });

  const cursor = document.createElement("div");
  cursor.style.position = "fixed";
  cursor.style.width = "20px";
  cursor.style.height = "20px";
  cursor.style.backgroundColor = "#A5B8A8";
  cursor.style.borderRadius = "50%";
  cursor.style.pointerEvents = "none";
  cursor.style.transition = "transform 0.1s ease-out, opacity 0.1s, box-shadow 0.1s ease-out";
  cursor.style.zIndex = "9999";
  document.body.appendChild(cursor);

  const canvas = document.createElement("canvas");
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = "9998";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  const particles = [];
  let mouseX = 0;
  let mouseY = 0;

  const onMouseMove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
    cursor.style.opacity = "1";
    cursor.style.boxShadow = `0px 0px 15px rgba(0, 0, 0, 0.3)`;

    // Partikel erzeugen
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
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Partikel bewegen
    for (let i = 0; i < particles.length; i++) {
      const particle = particles[i];
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      particle.size *= 0.98;

      // Wenn Partikel klein genug ist, entferne es
      if (particle.size < 0.5) {
        particles.splice(i, 1);
        i--;
      }

      // Partikel zeichnen
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(165, 184, 168, 0.7)";
      ctx.fill();
    }

    requestAnimationFrame(animateCanvas);
  };

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseleave", onMouseLeave);

  animateCanvas();

  return () => {
    // Event-Listener und Styles beim Verlassen aufräumen
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseleave", onMouseLeave);
    document.body.removeChild(cursor);
    document.body.removeChild(canvas);
    document.body.style.cursor = "auto";  
    document.documentElement.style.cursor = "auto";  

    // Interaktive Elemente aufräumen
    allElements.forEach(element => {
      element.style.cursor = "auto";  
    });
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
                  sx={{ position: "relative", width: "25%", maxWidth: "400px" }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: "0%",

                      left: "-10%",
                      width: "120%",
                      height: "130%",
                      backgroundColor: "rgba(165, 184, 168, 0.4)",
                      borderRadius: "25px",
                      zIndex: 0,
                      transform: "rotate(10deg)",
                      display: { xs: "none", md: "block" },
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: "0%",

                      left: "-10%",
                      width: "120%",
                      height: "130%",
                      border: "3px solid #A5B8A8",
                      borderRadius: "25px",
                      zIndex: 1,
                      transform: "rotate(-10deg)",
                      display: { xs: "none", md: "block" },
                    }}
                  />
                  <img
                    src={Image}
                    alt="Mein Foto"
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "200px",
                      position: "relative",
                      zIndex: 2,
                          top: "50px"
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    marginLeft: {
                      xs: "10px",
                      sm: "30px",
                      md: "40px",
                      lg: "190px",
                    },
                    textAlign: "left",
                    flex: 1,
                    overflow: "auto",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: "left",
                      fontSize: {
                        xs: "0.5rem",
                        sm: "0.8rem",
                        md: "1.2rem",
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
                      Mein Name ist Ilona, und ich bin ein echtes
                      Organisationstalent, sowohl beruflich als auch privat. Als
                      Mutter von zwei Kindern weiß ich, wie man alles unter
                      einen Hut bekommt – und das klappt ziemlich gut! 😊
                    </p>

                    <p>
                      Ich habe meine berufliche Reise in der IT-Welt durch eine
                      Weiterbildung im Bereich Cloud- und Webentwicklung
                      gestartet. In dieser spannenden Zeit konnte ich nicht nur
                      mein technisches Wissen erweitern, sondern auch neue
                      Fähigkeiten entwickeln, die mich in meiner Karriere
                      weiterbringen.
                    </p>

                    <p>
                      Besonders interessiert mich die Frontend-Entwicklung sowie
                      der Bereich DevOps. Doch auch Projektmanagement finde ich
                      super spannend! Ich liebe es, Prozesse zu strukturieren
                      und Dinge effizient umzusetzen. So kann ich sowohl kreativ
                      als auch organisiert arbeiten und mein Team bestmöglich
                      unterstützen.
                    </p>

                    <p>
                      Ich bin ein super fleißiger Mensch, sehr zuverlässig und
                      kommunikationsstark – Eigenschaften, die mir in meiner
                      Arbeit enorm helfen. Herausforderungen liebe ich und finde
                      es spannend, die ständigen Entwicklungen in der IT-Welt zu
                      verfolgen. Künstliche Intelligenz ist ein weiteres Thema,
                      das mich fasziniert. Ich nutze sie oft, um noch kreativer
                      und effizienter zu arbeiten. 🤖✨
                    </p>

                    <p>
                      In den letzten 12 Monaten durfte ich an einem Projekt
                      mitarbeiten, bei dem wir nach dem Scrum-Prinzip in einem
                      Team von drei Personen innerhalb von 2 Wochen eine
                      Chat-Webanwendung entwickelt haben. Diese Erfahrung hat
                      meine Leidenschaft für Webentwicklung weiter gestärkt und
                      mir wertvolle Einblicke in agile Arbeitsmethoden und
                      Teamarbeit gegeben. 💻💬
                    </p>

                    <p>
                      Bei TechStarter GmbH vertiefe ich aktuell meine
                      Fähigkeiten in 👩🏽‍💻 AWS, Azure, Linux, Netzwerksicherheit,
                      Python, JavaScript, React.js, Docker Container, Testing
                      und Agile Softwareentwicklung. Ich bin ab April 2025
                      bereit für neue Herausforderungen! 🚀
                    </p>
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>

          {activeContent === "projects" && (
            <>
              <Typography variant="h5">Meine Projekte</Typography>
              <Typography variant="body1">Projekte</Typography>
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
                    description: "Dieses Zertifikat bestätigt grundlegende Kenntnisse der AWS-Cloud, die für den Einstieg in die Cloud-Welt erforderlich sind. Es umfasst Themen wie Cloud-Architektur, Sicherheitsbestimmungen und AWS-Services.",
                  },
                  {
                    title: "AWS Re/Start",
                    image: AwsReStart,
                    description: "Das AWS Re/Start-Zertifikat bietet fundierte Kenntnisse zu den Grundlagen der Cloud-Technologie und hilft dabei, in der IT-Branche Fuß zu fassen, mit besonderem Fokus auf Cloud-Infrastrukturen und -Dienste.",
                  },
                  {
                    title: "Linux Professional Institute Certification",
                    image: LinuxImage,
                    description: "Dieses Zertifikat belegt fundierte Kenntnisse in der Verwaltung und Konfiguration von Linux-Systemen. Es umfasst Themen wie Systemadministration, Sicherheit und Netzwerktechnologien unter Linux.",
                  },
                  {
                    title: "Microsoft Certified: Azure Fundamentals",
                    image: AzureImage,
                    description: "Mit diesem Zertifikat werden grundlegende Kenntnisse der Microsoft Azure-Cloud-Plattform bestätigt. Es deckt Themen wie Azure-Dienste, Cloud-Konzepte und grundlegende Azure-Architektur ab.",
                  },
                  {
                    title: "Scrum Master Certification",
                    image: ScrumImage,
                    description: "Das Scrum Master-Zertifikat bescheinigt Kenntnisse und Fähigkeiten in der Anwendung der Scrum-Methodik zur effektiven Verwaltung von agilen Projekten. Es umfasst Rollen, Ereignisse und Artefakte innerhalb von Scrum.",
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
                  <GitHubIcon style={{ fontSize: "40px", color: "#000" }} />
                </a>
              </Tooltip>
              <Tooltip title="Verbinde dich mit mir auf LinkedIn">
                <a
                  href="https://www.linkedin.com/in/ilona-g%C3%B6rgens-81810830a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon
                    style={{ fontSize: "40px", color: "#A5B8A8" }}
                  />
                </a>
              </Tooltip>
              <Tooltip title="Schreibe mir eine E-Mail">
                <a href="mailto:ilonafast@icloud.com">
                  <EmailIcon style={{ fontSize: "40px", color: "#A5B8A8" }} />
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
