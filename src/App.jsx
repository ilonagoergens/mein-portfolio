import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';

// Button-Komponente für einheitliches Styling
function NavButton({ label, onClick }) {
  return (
    <Button variant="outlined" onClick={onClick} sx={{ margin: 1 }}>
      {label}
    </Button>
  );
}

function App() {
  const [activeContent, setActiveContent] = useState('home');

  const handleClick = (content) => {
    setActiveContent(content);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center', // Zentriert die innere Box horizontal
        alignItems: 'center', // Zentriert die innere Box vertikal
        height: '100vh', // Höhe des Viewports, damit es den ganzen Bildschirm ausfüllt
        padding: {
          xs: 2,  // Padding auf kleinen Geräten (xs) = 2
          sm: 3,  // Padding auf mittleren Geräten (sm) = 3
          md: 4,  // Padding auf größeren Geräten (md) = 4
          lg: 5,  // Padding auf sehr großen Geräten (lg) = 5
        }
      }}
    >
      {/* Äußere Box mit gleichmäßigem Padding und einer maximalen Breite */}
      <Box
        sx={{
          border: '2px solid #000', // Rahmen der Box
          padding: '80 80 80 80', // Padding an allen Seiten der Box
          textAlign: 'center', // Inhalt der Box zentrieren
          boxSizing: 'border-box', // Padding wird in die Gesamtbreite einbezogen
        }}
      >
        {/* Navigation */}
        <Box display="flex" justifyContent="center" sx={{ marginBottom: 2, flexWrap: 'wrap' }}>
          <NavButton label="Über mich" onClick={() => handleClick('about')} />
          <NavButton label="Projekte" onClick={() => handleClick('projects')} />
          <NavButton label="Zertifikate" onClick={() => handleClick('certificates')} />
        </Box>

        {/* Dynamischer Inhalt */}
        <Box sx={{ padding: 4 }}>
          {activeContent === 'home' && (
            <Typography variant="h4">Willkommen zu meinem Portfolio!</Typography>
          )}
          {activeContent === 'about' && (
            <>
              <Typography variant="h5">Über mich</Typography>
              <img
                src="https://via.placeholder.com/150" // Ersetze dies mit deinem Foto
                alt="Mein Foto"
                style={{ borderRadius: '50%', marginBottom: '20px' }}
              />
              <Typography variant="body1">
                Hier ist ein Text über mich. Erkläre, wer du bist und was du machst.
              </Typography>
            </>
          )}
          {activeContent === 'projects' && (
            <>
              <Typography variant="h5">Meine Projekte</Typography>
              <Typography variant="body1">Hier kannst du deine Projekte vorstellen.</Typography>
            </>
          )}
          {activeContent === 'certificates' && (
            <>
              <Typography variant="h5">Meine Zertifikate</Typography>
              <Typography variant="body1">Liste deine Zertifikate auf.</Typography>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default App;
