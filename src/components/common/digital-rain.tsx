"use client";

import { useEffect, useRef } from "react";

export default function DigitalRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const characters = "01{}[]<>/\\|!@#$%^&*()_+-=";
    const keywords = ["SEO", "INTELIGENCIA ARTIFICIAL", "WEB", "404", "CSS", "GEMINI", "QWEN"];
    const activeKeywords: { [key: number]: { word: string; index: number } | null } = {};

    function draw() {
      if (!ctx || !canvas) return;

      ctx.save(); // Guardamos el estado del contexto

      // Creamos el clipPath triangular
      const path = new Path2D();
      path.moveTo(0, 0);
      path.lineTo(canvas.width, 0);
      path.lineTo(canvas.width / 2, canvas.height);
      path.closePath();
      ctx.clip(path);

      ctx.fillStyle = "rgba(0, 0, 0, 0.08)"; // Aumentamos la opacidad para un difuminado más notorio
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Degradado de color para las letras
      for (let i = 0; i < drops.length; i++) {
        const charY = drops[i] * fontSize;
        const gradient = ctx.createLinearGradient(0, charY - fontSize, 0, charY);
        gradient.addColorStop(0, "rgba(135, 206, 250, 1)"); // Celeste claro en la parte superior de la letra
        gradient.addColorStop(1, "rgba(30, 144, 255, 1)"); // Celeste oscuro en la parte inferior de la letra
        ctx.fillStyle = gradient;
        ctx.font = `${fontSize}px monospace`;

        let text: string;
        if (activeKeywords[i]) {
          const keyword = activeKeywords[i]!;
          text = keyword.word[keyword.index];
          keyword.index++;
          if (keyword.index >= keyword.word.length) {
            activeKeywords[i] = null; // La palabra ha terminado de caer
          }
        } else {
          // Ocasionalmente iniciar una palabra
          if (Math.random() < 0.01) { // 1% de probabilidad de iniciar una palabra
            const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];
            activeKeywords[i] = { word: randomKeyword, index: 0 };
            text = randomKeyword[0];
          } else {
            text = characters.charAt(Math.floor(Math.random() * characters.length));
          }
        }

        ctx.fillText(text, i * fontSize, charY);

        // Reiniciar la gota si sale de la pantalla o si se termina una palabra y es hora de reiniciar
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.97) {
          drops[i] = 0;
          activeKeywords[i] = null; // Asegurarse de que no siga dibujando una palabra que ya salió
        } else if (activeKeywords[i] === null && Math.random() > 0.99) { // Pequeña probabilidad de reiniciar una columna vacía
          drops[i] = 0;
        }
        
        drops[i]++;
      }
    }
    ctx.restore(); // Restauramos el estado del contexto

    const intervalId = setInterval(draw, 60); // Aumentamos el intervalo para ralentizar la caída

    function handleResize() {
      if (!canvas) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="absolute inset-0"> {/* Eliminamos fixed y bg-black, usamos absolute inset-0 */}
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
