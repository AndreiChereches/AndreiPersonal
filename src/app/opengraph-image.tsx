import { ImageResponse } from "next/og";

import { person } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${person.name} — ${person.role}`;

const PAPER = "#fbfaf7";
const INK = "#191713";
const MUTED = "#5d574e";
const FAINT = "#766f61";
const ACCENT = "#b2492e";
const LINE = "#e4dfd4";

const FOOTNOTE = ["Eforah", "UTCN", "GDG on Campus", "SAS UTCN"];

/**
 * Pulls the display serif so the link preview matches the site. Satori cannot read
 * woff2, so this asks Google Fonts without a browser user-agent and gets ttf back.
 * Any failure falls through to the built-in sans rather than failing the build.
 */
async function loadDisplayFont(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Newsreader:wght@400&display=swap",
    ).then((response) => response.text());

    const url = css.match(/src:\s*url\((https:\/\/[^)]+)\)/)?.[1];
    if (!url) return null;

    const response = await fetch(url);
    if (!response.ok) return null;
    return await response.arrayBuffer();
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const displayFont = await loadDisplayFont();
  const display = displayFont ? "Newsreader" : undefined;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: PAPER,
          padding: "76px 84px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{ width: 12, height: 12, borderRadius: 999, background: ACCENT, display: "flex" }}
          />
          <div
            style={{
              display: "flex",
              fontFamily: display,
              fontSize: 32,
              color: INK,
              letterSpacing: "-0.01em",
            }}
          >
            {person.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontFamily: display,
              fontSize: 62,
              lineHeight: 1.12,
              color: INK,
              letterSpacing: "-0.03em",
            }}
          >
            I build production software with AI,
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: display,
              fontSize: 62,
              lineHeight: 1.12,
              color: FAINT,
              letterSpacing: "-0.03em",
              marginTop: 8,
            }}
          >
            and help students build with it.
          </div>
          <div style={{ display: "flex", fontSize: 25, color: MUTED, marginTop: 34 }}>
            Computer Engineering at the Technical University of Cluj-Napoca.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            borderTop: `1px solid ${LINE}`,
            paddingTop: 28,
            fontSize: 21,
            color: FAINT,
          }}
        >
          {FOOTNOTE.map((item, index) => (
            <div key={item} style={{ display: "flex", alignItems: "center", gap: 18 }}>
              {index > 0 ? <div style={{ display: "flex", color: LINE }}>·</div> : null}
              <div style={{ display: "flex" }}>{item}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: displayFont
        ? [{ name: "Newsreader", data: displayFont, style: "normal", weight: 400 }]
        : undefined,
    },
  );
}
