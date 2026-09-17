import React from "react";
export default function WhatsAppLogo({ size = 20 }) {
  return (
    <img
      className="whatsapp-logo"
      src="images/logo-whatsapp.png"
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
    />
  );
}
