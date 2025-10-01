"use client";

import React from 'react';
import Image from 'next/image';

const WhatsAppButton = () => {
  const phoneNumber = '5491144393556'; // Número de WhatsApp, incluyendo código de país (54) y código de área (11)
  const message = encodeURIComponent('hola , como estas ? queria mas informacion sobre tus trabajos.');
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 rounded-full transition-colors"
    >
      <Image
        src="/images/whatsapp.png" // Ruta del icono de WhatsApp
        alt="WhatsApp"
        width={50}
        height={50}
      />
    </a>
  );
};

export default WhatsAppButton;