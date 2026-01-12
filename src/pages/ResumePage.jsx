import React, { useState } from "react";

const ResumePage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleDownload = () => {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Sudhir_Kumar_Resume.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 opacity-0 animate-fade-in" style={{ animation: 'fadeIn 0.6s ease-out forwards' }}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            My Resume
          </h1>
          <div className="w-24 h-1 bg-green-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 mb-6">
            View my professional experience, skills, and education
          </p>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-accent text-gray-900 font-semibold rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume
          </button>
        </div>

        {/* PDF Embed using iframe */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 shadow-xl">
          <div className="relative w-full" style={{ height: '800px' }}>
            <iframe
              src="/resume.pdf"
              className="w-full h-full rounded-lg"
              title="Resume PDF"
              onLoad={() => setLoading(false)}
              onError={() => {
                setLoading(false);
                setError(true);
              }}
            />
            
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-lg">
                <div className="text-green-500 text-xl">Loading resume...</div>
              </div>
            )}
            
            {error && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 rounded-lg">
                <div className="text-red-500 text-xl mb-4">Unable to load PDF</div>
                <p className="text-gray-400 mb-4">The PDF file might not be available at /resume.pdf</p>
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-accent text-gray-900 font-semibold rounded-lg hover:bg-green-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Instead
                </button>
              </div>
            )}
          </div>
          
          <div className="mt-4 text-center text-sm text-gray-400">
            <p>If the PDF doesn't display, you can download it using the button above.</p>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ResumePage;