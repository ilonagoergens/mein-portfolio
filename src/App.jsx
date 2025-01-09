import React, { useState, useEffect } from "react";
import { Button, Box, Typography } from "@mui/material";
import Image from "./assets/image.png";

// Button-Komponente für einheitliches Styling
function NavButton({ label, onClick }) {
  return (
    <Button
      variant="text"
      onClick={onClick}
      sx={{
        textTransform: "none", // Keine Großschreibung des Textes
        fontSize: {
          xs: "0.6rem", // Sehr klein auf mobilen Geräten
          sm: "0.75rem", // Etwas größer auf mittleren Geräten
          md: "0.9rem", // Noch größer auf größeren Geräten
        },
        color: "black", // Textfarbe
        padding: {
          xs: "0px", // Kein extra Padding auf kleinen Geräten
          sm: "2px", // Etwas Padding auf mittleren Geräten
          md: "4px", // Mehr Padding auf größeren Geräten
        },
        margin: "0 5px", // Kleiner Abstand zwischen den Buttons
        position: "relative", // Positionierung für das Pseudo-Element
        transition: "all 0.3s ease", // Sanfte Übergänge für die Hover-Animation
        "&:hover": {
          backgroundColor: "transparent",
          transform: "scale(1.1)", // Button vergrößert sich bei Hover
        },
        // Pseudo-Element für den Unterstrich
        "&::after": {
          content: '""', // Leeres Pseudo-Element
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%", // Unterstrich geht über die gesamte Button-Breite
          height: "2px", // Dicke des Unterstrichs
          backgroundColor: "black", // Farbe des Unterstrichs
          transition: "all 0.3s ease", // Sanfter Übergang beim Hover
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

  // Deaktiviert das Scrollen auf der Seite
  useEffect(() => {
    document.documentElement.style.overflow = "hidden"; // Deaktiviert Scrollen der Seite
    document.body.style.overflow = "hidden"; // Deaktiviert Scrollen des Bodys

    // Aktiviert das Scrollen wieder, wenn die Komponente verlassen wird
    return () => {
      document.documentElement.style.overflow = "auto"; // Reaktiviert Scrollen der Seite
      document.body.style.overflow = "auto"; // Reaktiviert Scrollen des Bodys
    };
  }, []);
  
  return (
    <Box
      sx={{
        borderRadius: "25px",
        boxShadow: "1px 1px 15px 5px rgba(0, 0, 0, 0.3)", // Rahmen der Box
        textAlign: "center", // Inhalt der Box zentrieren
        maxWidth: "100%", // Maximale Breite auf 100% setzen
        width: "85%", // Box soll die volle Breite einnehmen
        height: "80vh", // Höhe auf 80% der Viewport-Höhe
        padding: {
          xs: 2, // Padding auf kleinen Geräten (xs)
          sm: 3, // Padding auf mittleren Geräten (sm)
          md: 4, // Padding auf größeren Geräten (md)
          lg: 5, // Padding auf sehr großen Geräten (lg)
        },
        margin: "5vh auto", // Gleicher Abstand oben und unten (5vh) und automatische Zentrierung links und rechts
      }}
    >
      {/* Navigation und dynamischer Inhalt in einer einzigen Box */}
      <Box sx={{ paddingBottom: 4 }}>
        {/* Navigation */}
        <Box
          id="nav-buttons"
          display="flex"
          justifyContent="center"
          sx={{
            marginBottom: 2,
            flexWrap: "wrap",
            justifyContent: "center", // Navigation buttons zentrieren
          }}
        >
          <NavButton label="Über mich" onClick={() => handleClick("about")} />
          <NavButton label="Projekte" onClick={() => handleClick("projects")} />
          <NavButton
            label="Zertifikate"
            onClick={() => handleClick("certificates")}
          />
          <NavButton label="Contact" onClick={() => handleClick("Contact")} />
        </Box>

        {/* Dynamischer Inhalt */}
        <Box sx={{ padding: 4 }}>
          {activeContent === "about" && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row", // Bild und Text nebeneinander
                alignItems: "flex-start",
                justifyContent: "flex-start",
                width: "100%",
                marginTop: "6%", // Automatischer Abstand oben
                marginBottom: "5%", // Automatischer Abstand unten
              }}
            >
              {/* Bild */}
              <Box
                sx={{
                  borderRadius: "25px",
                  width: "25%", // Bildgröße als Prozentsatz der Box-Breite
                  maxWidth: "400px", // Maximale Breite des Bildes
                  height: "auto", // Höhe wird proportional angepasst
                  transition: "width 0.3s ease", // Sanfter Übergang bei Änderung der Breite
                  "@media (max-width:600px)": {
                    width: "50%",
                  },
                  "@media (max-width:400px)": {
                    width: "20%",
                  },
                }}
              >
                <img
                  src={Image}
                  alt="Mein Foto"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "25px",
                  }}
                />
              </Box>

              {/* Text */}
              <Box
                sx={{
                  marginLeft: {
                    xs: "10px", // Kleiner Abstand auf sehr kleinen Bildschirmen
                    sm: "30px", // Etwas größerer Abstand auf kleinen bis mittleren Bildschirmen
                    md: "40px", // Mittelgroßer Abstand auf mittleren Bildschirmen
                    lg: "190px", // Größter Abstand auf großen Bildschirmen
                  },
                  textAlign: "left",
                  flex: 1, // Textcontainer nimmt den restlichen Platz ein
                  overflow: "auto",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "left",
                    fontSize: {
                      xs: "0.5rem", // Sehr klein auf mobilen Geräten
                      sm: "0.8rem", // Etwas größer auf mittleren Geräten
                      md: "1.2rem", // Noch größer auf größeren Geräten
                      lg: "1rem", // Größer auf sehr großen Geräten
                    },
                    animation: "fadeIn 1s ease-out", // Hinzufügen der Animation
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

          {activeContent === "projects" && (
            <>
              <Typography variant="h5">Meine Projekte</Typography>
              <Typography variant="body1">Projekte</Typography>
            </>
          )}
          {activeContent === "certificates" && (
            <>
              <Typography variant="h5">Meine Zertifikate</Typography>
              <Box
                sx={{
                  borderRadius: "50%", // Runde Form
                  marginBottom: "10px", // Abstand nach unten
                  width: "100%", // Passt das Bild an die Containerbreite an
                  maxWidth: "300px", // Begrenzung der maximalen Breite
                  minWidth: "150px", // Mindestbreite des Bildes
                  height: "auto", // Höhe wird proportional angepasst
                  // Responsives Verhalten je nach Bildschirmgröße
                  "@media (max-width:600px)": {
                    maxWidth: "200px", // Bildgröße auf kleineren Bildschirmen
                  },
                  "@media (max-width:400px)": {
                    maxWidth: "150px", // Noch kleinere Bildgröße bei sehr kleinen Bildschirmen
                  },
                }}
              />
              <Typography variant="body1">Zertifikate</Typography>
            </>
          )}
          {activeContent === "Contact" && (
            <>
              <Typography variant="h5">Kontakt</Typography>
              <Typography variant="body1">Kontaktdaten</Typography>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default App;
