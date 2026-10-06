# CAMAEL — Phase 5: Visual Design System & Design Tokens
**Product Class:** Offline Field Encyclopedia & Tactical Survival Multi-Tool  
**Creative Director:** NIFT Hyderabad (Fashion Communication)  
**Technical Architect:** Antigravity  

---

## 1. Design Token Architecture

### Color Palette Tokens
| Token Name | Hex Value | Semantic Role / Context |
| :--- | :--- | :--- |
| `--bg-base` | `#080808` | Pitch-black OLED canvas (minimum battery draw). |
| `--bg-surface` | `#121212` | Elevated card & modal container background. |
| `--bg-elevated` | `#181818` | Hover states, accordion drawer interiors, input wells. |
| `--border-hairline` | `#222222` | 1px precision structural dividing borders. |
| `--border-focus` | `#444444` | Active card borders and selected states. |
| `--text-primary` | `#F5F5F7` | Editorial sans-serif headers, body text, primary labels. |
| `--text-secondary` | `#8E8E93` | Metadata sub-labels, descriptions, secondary readouts. |
| `--text-muted` | `#48484A` | Grid markers, inactive counters, subtle timestamps. |
| `--accent-tactical` | `#FF7A00` | **Signature Tactical Orange:** Telemetry gauges, active tab highlights, primary action pills. |
| `--accent-alert` | `#FF3B30` | High-urgency warning: SOS drawer, cardiac/trauma alerts, toxic mushroom badges. |
| `--accent-safe` | `#30D158` | Verified edible items, stable resource readouts, active metronome pulse. |
| `--accent-info` | `#0A84FF` | Tool acquisition notes, navigational waypoints. |

---

### Geometry & Elevation Tokens
* **Corner Radius (`--radius-soft`):** `4px` (Gently softened technical corners; balances precision with ergonomic touchability).
* **Border Width (`--border-width`):** `1px solid` hairline edges.
* **Touch Target Minimum:** `48px` vertical / horizontal for all interactive targets.
* **Grid Spacing Scale:** `4px` | `8px` | `12px` | `16px` | `24px` | `32px`.

---

## 2. Typography Hierarchy & Font Scaling

```css
:root {
  --font-editorial: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-mono: "SF Mono", "JetBrains Mono", Menlo, Consolas, "Courier New", monospace;

  /* Typography Scale */
  --text-xs: 10px;   /* Micro-telemetry, status prefixes, coordinate tags */
  --text-sm: 12px;   /* Filter pills, secondary metadata, tool requirements */
  --text-base: 14px; /* Standard body text, instruction steps */
  --text-lg: 16px;   /* Section headers, card titles */
  --text-xl: 20px;   /* Drawer titles, primary telemetry numbers */
  --text-2xl: 28px;  /* Crisis hero readouts, SOS alert heads */
}
```

---

## 3. Editorial Microcopy & Technical Nomenclature Style Guide

### Label Syntax: `[INDEX] // [DESCRIPTOR]`
All interface headings and system states use uppercase monospaced technical indexing:
* `01 // COMPENDIUM`
* `02 // FIELD MAP`
* `03 // GEAR & VAULT`
* `04 // SURVIVAL KITCHEN`
* `05 // FIELD MANUAL`
* `06 // RADIO & COMMS`
* `07 // ICE LOGBOOK`
* `SOS // EMERGENCY CHEAT SHEET`
* `BAT // ULTRA-RESERVE MODE`

### System Feedback Matrix
Never use colloquial conversational language (e.g., *"Awesome! Saved!"*). Use disciplined, understated confirmations:

| Action Trigger | Permitted System Microcopy | Prohibited Conversational Text |
| :--- | :--- | :--- |
| **Save to Local Storage** | `LOGGED TO LOCAL CACHE` | "Your notes have been saved!" |
| **Pantry / Gear Calculation** | `TELEMETRY RECALIBRATED` | "We found recipes for you!" |
| **SOS Drawer Triggered** | `OVERRIDE ENGAGED // TRIAGE ACTIVE` | "Emergency mode turned on." |
| **Fallback Expanded** | `FALLBACK CHAIN EXPANDED` | "Here are some other options." |
| **Waypoint Plotted** | `VECTOR FIX STORED [LAT/LONG]` | "New pin added to map." |
