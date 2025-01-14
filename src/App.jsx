import React, { useState, useEffect } from "react";
import { Button, Box, Typography, Tooltip } from "@mui/material";
import Image from "./assets/image.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

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
        "&:hover": {
          backgroundColor: "rgba(165, 184, 168, 0.4)",
          transform: "scale(1.1)",
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
    // Radialer Verlauf von der Mitte nach außen
    document.body.style.background = `radial-gradient(circle, #A5B8A8 0%, transparent 100%)`;
    document.body.style.margin = 0;
    document.body.style.height = "100vh"; // Der Hintergrund füllt den gesamten Bildschirm
    document.documentElement.style.height = "100%"; // Verhindert, dass der Viewport überläuft
  
    document.documentElement.style.overflow = "hidden"; // Verhindert das Scrollen
    document.body.style.overflow = "hidden"; // Verhindert das Scrollen
  
    return () => {
      document.documentElement.style.overflow = "auto"; // Erlaubt das Scrollen nach Verlassen
      document.body.style.overflow = "auto"; // Erlaubt das Scrollen nach Verlassen
    };
  }, []);
  
  

  return (
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
          <NavButton label="Projekte" onClick={() => handleClick("projects")} />
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
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                width: "100%",
                marginLeft: "3%",
                marginTop: "6%",
                marginBottom: "5%",
                flexWrap: { xs: "wrap", md: "nowrap" },
              }}
            >
              <Box
                sx={{ position: "relative", width: "25%", maxWidth: "400px" }}
              >
                {/* Erster Rahmen (gefüllt) */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "-15%",
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
                {/* Zweiter Rahmen (keine Füllung, nur Umrandung) */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "-15%",
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
                {/* Bild */}
                <img
                  src={Image}
                  alt="Mein Foto"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "200px",
                    position: "relative",
                    zIndex: 2,
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
                >
                  Mein Name ist Ilona und ich habe meine berufliche Reise in der
                  IT-Welt durch eine Weiterbildung im Bereich Cloud- und
                  Webentwicklung gestartet. In dieser spannenden Zeit konnte ich
                  mein Wissen erweitern und neue Fähigkeiten entwickeln.
                  <br />
                  <br />
                  Besonders fasziniert mich die Frontend-Entwicklung sowie der
                  Bereich DevOps, und ich freue mich darauf, mich beruflich
                  weiter in diesen Bereichen zu entwickeln 😊.
                  <br />
                  <br />
                  Ich liebe Herausforderungen und finde es äußerst spannend, den
                  ständigen Entwicklungen in der IT-Welt zu folgen 🚀.
                  Künstliche Intelligenz (KI) ist für mich ein faszinierendes
                  Thema, das ich viel für mich selbst nutze, um noch effizienter
                  und kreativer zu arbeiten 🤖✨.
                  <br />
                  <br />
                  In den letzten 12 Monaten habe ich an zwei Projekten
                  mitgewirkt. Besonders stolz bin ich auf ein Gruppenprojekt,
                  bei dem wir nach dem Scrum-Prinzip in einem Team von drei
                  Personen eine Chat-Webanwendung entwickelt haben 👩‍💻💬. Diese
                  Erfahrungen haben meine Leidenschaft für die Webentwicklung
                  weiter gestärkt und mir wertvolle Einblicke in die
                  Zusammenarbeit im Team und in die Umsetzung agiler Methoden
                  gegeben.
                  <br />
                  <br />
                  Ich bin sehr gespannt auf die nächsten Schritte in meiner
                  beruflichen Entwicklung und darauf, noch viele spannende
                  Projekte in der Welt der Webentwicklung und Cloud-Technologien
                  umzusetzen 🌐🚀.
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
            <Typography variant="h5" sx={{ marginBottom: 2 }}>
              Meine Zertifikate
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                justifyContent: "center",
              }}
            >
              {[
                {
                  title: "Zertifikat 1",
                  image: "path/to/certificate1.png",
                  description: "Beschreibung für Zertifikat 1",
                },
                {
                  title: "Zertifikat 2",
                  image: "path/to/certificate2.png",
                  description: "Beschreibung für Zertifikat 2",
                },
                {
                  title: "Zertifikat 3",
                  image: "path/to/certificate3.png",
                  description: "Beschreibung für Zertifikat 3",
                },
                {
                  title: "Zertifikat 4",
                  image: "path/to/certificate4.png",
                  description: "Beschreibung für Zertifikat 4",
                },
              ].map((cert, index) => (
                <Box
                  key={index}
                  sx={{
                    width: "250px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    borderRadius: "10px",
                    overflow: "hidden",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "cover",
                    }}
                  />
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
                <LinkedInIcon style={{ fontSize: "40px", color: "#A5B8A8" }} />
              </a>
            </Tooltip>
            {/* E-Mail-Link */}
            <Tooltip title="Schreibe mir eine E-Mail">
              <a href="mailto:ilonafast@icloud.com">
                <EmailIcon style={{ fontSize: "40px", color: "#A5B8A8" }} />
              </a>
            </Tooltip>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default App;
