// Show the UI with increased height
figma.showUI(__html__, { width: 320, height: 400 });

// Handle messages from the UI
figma.ui.onmessage = async (msg) => {
  if (msg.type === "import-svg") {
    try {
      const url = msg.url;

      // Fetch the SVG content
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(
          `Failed to fetch SVG: ${response.status} ${response.statusText}`,
        );
      }

      const svgText = await response.text();

      // Create the SVG node in Figma
      const svgNode = figma.createNodeFromSvg(svgText);

      if (!svgNode) {
        throw new Error("Failed to create SVG node");
      }

      // Center the viewport on the new node
      figma.viewport.scrollAndZoomIntoView([svgNode]);

      // Notify the UI of success
      figma.ui.postMessage({ type: "success" });
      figma.closePlugin();
    } catch (error) {
      // Notify the UI of the error
      figma.ui.postMessage({
        type: "error",
        message:
          error instanceof Error ? error.message : "Unknown error occurred",
      });
    }
  } else if (msg.type === "import-svg-file") {
    try {
      const svgContent = msg.content;

      // Create the SVG node in Figma from file content
      const svgNode = figma.createNodeFromSvg(svgContent);

      if (!svgNode) {
        throw new Error("Failed to create SVG node");
      }

      // Center the viewport on the new node
      figma.viewport.scrollAndZoomIntoView([svgNode]);

      // Notify the UI of success
      figma.ui.postMessage({ type: "success" });
      figma.closePlugin();
    } catch (error) {
      // Notify the UI of the error
      figma.ui.postMessage({
        type: "error",
        message:
          error instanceof Error ? error.message : "Unknown error occurred",
      });
    }
  }
};
