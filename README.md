# URLtoSVG

SVGs from web to canvas, no downloads needed.

A simple plugin that lets you paste any SVG URL or drag-and-drop files directly into Figma. Skip the download step and get straight to designing.

## Features

- Import SVGs from any public URL ending in `.svg`
- Drag and drop local SVG files directly onto the canvas
- Handles CORS automatically with a fallback proxy
- Validates URLs and provides clear error messages
- Auto-centers viewport on imported SVG

## Setup

1. Install dependencies:
```bash
npm install
```

2. Build the plugin:
```bash
npm run build
```

Or to watch for changes during development:
```bash
npm run watch
```

## Loading the Plugin in Figma

1. Open Figma
2. Go to **Plugins** > **Development** > **Import plugin from manifest...**
3. Select the `manifest.json` file in this directory
4. Run the plugin from **Plugins** > **Development** > **SVG Import**

## Usage

1. Run the plugin
2. Paste an SVG URL (e.g., `https://upload.wikimedia.org/wikipedia/commons/0/07/Wikipedia_logo_%28svg%29.svg`)
3. Click **Import SVG**
4. The SVG will be added to your current page and centered in the viewport

## File Structure

```
figma-svg-import/
├── manifest.json    # Figma plugin manifest
├── package.json     # Node.js dependencies and scripts
├── tsconfig.json    # TypeScript configuration
├── code.ts          # Main plugin logic
├── ui.html          # Plugin UI
├── code.js          # Compiled output (generated)
└── README.md        # This file
```

## Requirements

- Node.js and npm
- Figma desktop app or Figma in a browser
