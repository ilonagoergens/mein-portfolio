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
        width: "90%", // Box soll die volle Breite einnehmen
        height: "80vh", // Höhe auf volle Viewport-Höhe setzen
        padding: {
          xs: 2, // Padding auf kleinen Geräten (xs)
          sm: 3, // Padding auf mittleren Geräten (sm)
          md: 4, // Padding auf größeren Geräten (md)
          lg: 5, // Padding auf sehr großen Geräten (lg)
        },
        marginLeft: "auto", // Automatischer Abstand links
        marginRight: "auto", // Automatischer Abstand rechts
        marginBottom: "5vh", // Abstandsregel für den unteren Rand
        marginTop: "5vh", // Abstandsregel für den oberen Rand
      }}
    >
      {/* Navigation und dynamischer Inhalt in einer einzigen Box */}
      <Box sx={{ paddingBottom: 4 }}>
        {/* Navigation */}
        <Box
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
          {activeContent === "home" && (
            <Typography variant="h4">Willkommen! Ich bin Ilona</Typography>
          )}
          {activeContent === "about" && (
            <>
              <Box
                component="img"
                src={Image} // Ersetze dies mit deinem Foto
                alt="Mein Foto"
                sx={{
                  marginTop:"80px",
                  marginBottom:"50px",
                  borderRadius: "25px",
                  float: "left",
                  width: "100%", // Passt das Bild an die Containerbreite an
                  maxWidth: "400px", // Begrenzung der maximalen Breite
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
              <Typography variant="body1">
                Hier ist ein Text über mich.
              </Typography>
            </>
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
