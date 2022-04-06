import React, { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  color: string;
};

const Section = ({ children, color }: SectionProps) => {
  return (
    <div style={{ background: color }}>
      <div>{children}</div>
    </div>
  );
};

export default Section;
