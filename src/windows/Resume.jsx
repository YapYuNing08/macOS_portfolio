import WindowWrapper from "#hoc/WindowWrapper.jsx";
import WindowControls from "#components/WindowControls.jsx";
import { Download } from "lucide-react";

const Resume = () => {
    return (
        <div style={{ 
            width: "800px",
            display: "flex",
            flexDirection: "column",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 25px 50px rgba(0,0,0,0.25)"
        }}>
            {/* Header */}
            <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "12px 16px", background: "#f9fafb", borderBottom: "1px solid #e5e7eb",
                flexShrink: 0, height: "49px"
            }}>
                <WindowControls target="resume" />
                <h2 style={{ fontSize: "14px", fontWeight: "bold", color: "#9ca3af", flex: 1, textAlign: "center" }}>
                    Resume.pdf
                </h2>
                <a href="/files/resume.pdf" download title="Download resume"
                    style={{ cursor: "pointer", padding: "4px", borderRadius: "4px" }}>
                    <Download size={18} color="#6b7280" />
                </a>
            </div>

            {/* PDF iframe - fixed pixel height, no percentages */}
            <iframe
                src="/files/resume.pdf"
                title="Resume"
                style={{
                    width: "800px",
                    height: "600px",
                    border: "none",
                    display: "block",
                    flexShrink: 0
                }}
            />
        </div>
    );
};

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;