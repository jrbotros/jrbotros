import React, { useMemo } from 'react';
import ReactFavicon from 'react-favicon';

// TODO(jbotros): Share style constants
const FAVICON_COLOR = '#1b5299';
const FAVICON_TEXT = 'J';

export function Favicon() {
  const iconUrl = useMemo(() => {
    const canvas = document.createElement('canvas');

    const drawContext = canvas.getContext('2d');
    if (!drawContext) {
      console.error('Could not get 2d context');
      return '';
    }

    canvas.width = 64;
    canvas.height = 64;

    drawContext.fillStyle = FAVICON_COLOR;
    drawContext.beginPath();
    drawContext.arc(32, 32, 32, 0, 2 * Math.PI);
    drawContext.fill();

    drawContext.fillStyle = 'white';
    drawContext.beginPath();
    drawContext.arc(32, 32, 26, 0, 2 * Math.PI);
    drawContext.fill();

    drawContext.fillStyle = FAVICON_COLOR;
    const fontHeight = 32;
    drawContext.font = `600 ${fontHeight}px Avenir`;
    drawContext.textBaseline = 'top';
    drawContext.fillText(
      FAVICON_TEXT,
      (64 - drawContext.measureText(FAVICON_TEXT).width) / 2,
      (64 - fontHeight) / 2 + 2,
    );

    return canvas.toDataURL();
  }, []);

  return <ReactFavicon url={iconUrl} />;
}
