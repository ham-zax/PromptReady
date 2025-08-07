// src/components/ui/ComparativeDisplay.tsx
import React, { ReactNode } from "react";
import { Wand2, Trash2 } from "lucide-react";

export interface ComparativeDisplayProps {
  beforeTitle: string;
  beforeContent: ReactNode;
  afterTitle: string;
  afterContent: ReactNode;
}

export const ComparativeDisplay: React.FC<ComparativeDisplayProps> = ({
  beforeTitle,
  beforeContent,
  afterTitle,
  afterContent,
}) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        width: "100%",
        alignItems: "flex-start",
      }}
    >
      {/* Before (Messy) */}
      <div
        style={{
          flex: 1,
          background: "#fff0f0",
          border: "2px dashed #e57373",
          borderRadius: "12px",
          padding: "1.5rem",
          boxShadow: "0 2px 8px 0 #e5737322",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
          <Trash2 size={20} color="#e57373" style={{ marginRight: 8 }} />
          <span style={{ fontWeight: 700, color: "#e57373" }}>{beforeTitle}</span>
        </div>
        <div style={{ color: "#b71c1c", fontFamily: "monospace", fontSize: "1rem" }}>
          {beforeContent}
        </div>
      </div>
      {/* After (Clean) */}
      <div
        style={{
          flex: 1,
          background: "#f0fff7",
          border: "2px solid #4caf50",
          borderRadius: "12px",
          padding: "1.5rem",
          boxShadow: "0 2px 8px 0 #4caf5022",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
          <Wand2 size={20} color="#4caf50" style={{ marginRight: 8 }} />
          <span style={{ fontWeight: 700, color: "#388e3c" }}>{afterTitle}</span>
        </div>
        <div style={{ color: "#1b5e20", fontFamily: "sans-serif", fontSize: "1rem" }}>
          {afterContent}
        </div>
      </div>
    </div>
  );
};