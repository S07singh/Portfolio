// Mirrors the Experience section of public/resume.pdf — keep the two in sync.
export const experience = [
  {
    id: 1,
    role: "AI Engineer Intern",
    company: "Acuron AI Solutions",
    type: "Startup",
    start: "Jul 2026",
    end: "Present",
    current: true,
    metrics: [
      { value: "2s → <1s", label: "Voice-agent latency" },
      { value: "< 5 min", label: "To launch a new agent" },
      { value: "100K+", label: "Frames annotated & trained" },
    ],
    projects: [
      {
        name: "Voice & Chat AI Agent Platform",
        points: [
          "Built a multi-tenant agentic AI platform that lets any organization launch its own voice, chat and WhatsApp agents in under 5 minutes, with dynamic prompts, tool-calling and hybrid dense + sparse RAG over a PostgreSQL + pgvector knowledge base.",
          "Evaluated with LangSmith and RAGAS and deployed on AWS EC2.",
          "Cut voice-agent latency from 2s to under 1s by profiling the STT → LLM → TTS chain hop by hop, and built natural real-time conversations with Sarvam STT/TTS, Gemini 2.5 Flash, WebRTC and Silero VAD barge-in so callers can interrupt mid-response.",
        ],
      },
      {
        name: "Helmet-Compliance Detection · Tata Motors (client)",
        points: [
          "Trained a YOLO26s detector on 100K+ annotated frames on an AWS RTX 4090 GPU server, now live in production at the client site, using augmentation and negative samples to curb false positives.",
        ],
      },
    ],
    stack: ["Gemini 2.5 Flash", "RAG", "pgvector", "PostgreSQL", "LangSmith", "RAGAS", "Sarvam STT/TTS", "WebRTC", "Silero VAD", "YOLO26", "AWS EC2"],
  },
  {
    id: 2,
    role: "AI Intern",
    company: "TANSU AI",
    type: "Startup",
    start: "Feb 2026",
    end: "Apr 2026",
    current: false,
    metrics: [
      { value: "Real-time", label: "RTSP stream analytics" },
      { value: "Persistent", label: "IDs with ByteTrack" },
    ],
    projects: [
      {
        name: "Real-time Video Analytics",
        points: [
          "Built a real-time analytics pipeline over live RTSP streams: YOLOv8 + OpenCV face detection, AWS Rekognition identity matching and ByteTrack tracking with persistent IDs.",
          "Mapped dining-table zones to measure per-meal seating time and flag new individuals; designed GCP storage workflows for face crops and metadata and optimized inference throughput.",
        ],
      },
    ],
    stack: ["YOLOv8", "OpenCV", "AWS Rekognition", "ByteTrack", "RTSP", "GCP"],
  },
];
