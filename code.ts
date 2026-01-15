// Show the UI with increased height
figma.showUI(__html__, { width: 320, height: 400 });

// Handle messages from the UI
figma.ui.onmessage = async (msg) => {
  if (msg.type === "import-svg-file") {
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
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";

      const errorMessages: Record<string, string> = {
        "in createNodeFromSvg: Failed to convert SVG file":
          "Input invalid - try importing via URL",
      };

      figma.ui.postMessage({
        type: "error",
        message: errorMessages[errorMessage] || errorMessage,
      });
    }
  }
};
