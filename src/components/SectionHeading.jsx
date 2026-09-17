import React from "react";
export default function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  children,
}) {
  return (
    <div className="section-heading" data-reveal>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>
          {title} {accent && <span>{accent}</span>}
        </h2>
        {description && <p className="section-description">{description}</p>}
      </div>
      {children}
    </div>
  );
}
