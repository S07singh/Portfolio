import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiPython,
  SiOpenai,
  SiFastapi,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJupyter,
  SiNumpy,
  SiPandas,
  SiTensorflow,
  SiOpencv,
  SiFlask,
  SiJsonwebtokens,
  SiSocketdotio,
  SiPowerbi,
  SiMicrosoftexcel,
} from "react-icons/si";
import { FaDatabase, FaCode, FaCloudUploadAlt } from "react-icons/fa";

/**
 * Maps technology names to their corresponding React icons and colors
 */
export const getTechIcon = (techName) => {
  const techMap = {
    // Frontend
    React: { icon: SiReact, color: "#61DAFB" },
    JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
    "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
    HTML5: { icon: SiHtml5, color: "#E34F26" },
    CSS3: { icon: SiCss3, color: "#1572B6" },

    // Backend
    "Node.js": { icon: SiNodedotjs, color: "#339933" },
    Express: { icon: SiExpress, color: "#FFFFFF" },
    Python: { icon: SiPython, color: "#3776AB" },
    FastAPI: { icon: SiFastapi, color: "#009688" },
    "Fast-api": { icon: SiFastapi, color: "#009688" },
    Flask: { icon: SiFlask, color: "#FFFFFF" },

    // Databases
    MongoDB: { icon: SiMongodb, color: "#47A248" },
    FAISS: { icon: FaDatabase, color: "#4285F4" },

    // AI/ML
    LangChain: { icon: SiPython, color: "#FFD43B" },
    LangGraph: { icon: SiPython, color: "#FF6B6B" },
    "Groq API": { icon: SiOpenai, color: "#10A37F" },
    "Gemini API": { icon: SiOpenai, color: "#4285F4" },
    OpenAI: { icon: SiOpenai, color: "#10A37F" },
    TensorFlow: { icon: SiTensorflow, color: "#FF6F00" },
    OpenCV: { icon: SiOpencv, color: "#5C3EE8" },
    OCR: { icon: FaCode, color: "#4285F4" },

    // Data Science
    Streamlit: { icon: SiPython, color: "#FF4B4B" },
    Jupyter: { icon: SiJupyter, color: "#F37626" },
    NumPy: { icon: SiNumpy, color: "#013243" },
    Pandas: { icon: SiPandas, color: "#150458" },
    Matplotlib: { icon: SiPython, color: "#11557C" },
    Seaborn: { icon: SiPython, color: "#4C72B0" },

    // Analytics
    "Power BI": { icon: SiPowerbi, color: "#F2C811" },
    Excel: { icon: SiMicrosoftexcel, color: "#217346" },
    DAX: { icon: SiPowerbi, color: "#F2C811" },
    "Power Query": { icon: SiPowerbi, color: "#F2C811" },
    "Pivot Tables": { icon: SiMicrosoftexcel, color: "#217346" },
    Charts: { icon: FaCode, color: "#4285F4" },
    "Conditional Formatting": { icon: SiMicrosoftexcel, color: "#217346" },

    // Other
    JWT: { icon: SiJsonwebtokens, color: "#FFFFFF" },
    bcrypt: { icon: FaCode, color: "#4285F4" },
    Mapbox: { icon: FaCode, color: "#4264FB" },
    Cloudinary: { icon: FaCloudUploadAlt, color: "#3448C5" },
    "Socket.IO": { icon: SiSocketdotio, color: "#FFFFFF" },
    "Chart.js": { icon: FaCode, color: "#FF6384" },
    AOS: { icon: FaCode, color: "#4285F4" },
  };

  return (
    techMap[techName] || {
      icon: FaCode,
      color: "#22c55e",
    }
  );
};
