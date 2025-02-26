import React from "react";

const Loader = () => {
  return (
    <div style={styles.body}>
      <div style={styles.centered}>
        <div style={{ ...styles.blob, ...styles.blob1 }}></div>
        <div style={{ ...styles.blob, ...styles.blob2 }}></div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    background: "#000",
    height: "100vh",
    margin: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  centered: {
    width: "400px",
    height: "400px",
    background: "#000",
    filter: "blur(10px) contrast(20)",
    position: "relative",
  },
  blob: {
    width: "70px",
    height: "70px",
    position: "absolute",
    background: "#fff",
    borderRadius: "50%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  blob1: {
    animation: "osc-l 2.5s ease infinite",
    left: "20%",
  },
  blob2: {
    animation: "osc-r 2.5s ease infinite",
    left: "80%",
    background: "#0ff",
  },
};

const animationStyles = `
@keyframes osc-l {
  0% { left: 20%; }
  50% { left: 50%; }
  100% { left: 20%; }
}

@keyframes osc-r {
  0% { left: 80%; }
  50% { left: 50%; }
  100% { left: 80%; }
}
`;

// Adding keyframes to the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = animationStyles;
document.head.appendChild(styleSheet);

export default Loader;
