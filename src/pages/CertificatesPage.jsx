import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";
import Modal from "../components/Modal";
import { certificates } from "../data/certificates";

const CertificatesPage = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-dark-bg pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-light-slate mb-4">
            Certificates & Achievements
          </h1>
          <div className="w-24 h-1 bg-green-accent mx-auto mb-6"></div>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            A collection of certifications and courses that showcase my
            continuous learning journey in web development, AI, and software
            engineering.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -8 }}
              onClick={() => setSelectedCertificate(cert)}
              className="bg-dark-secondary border border-slate/20 rounded-lg overflow-hidden cursor-pointer group hover:border-green-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-accent/20"
            >
              {/* Certificate Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                {/* Image */}
                <img
                  src={cert.thumbnail}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-dark-bg/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <FaCheckCircle className="text-green-accent text-5xl" />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-light-slate mb-2 line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-green-accent font-medium text-sm mb-2">
                  {cert.issuer}
                </p>
                <p className="text-slate text-sm mb-3">{cert.issuedOn}</p>
                <p className="text-slate text-sm line-clamp-2">
                  {cert.shortContext}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <Modal
        isOpen={selectedCertificate !== null}
        onClose={() => setSelectedCertificate(null)}
      >
        {selectedCertificate && (
          <div className="space-y-6">
            {/* Certificate Image */}
            {/* Certificate Image */}
            <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg bg-dark-tertiary">
              <img
                src={selectedCertificate.thumbnail}
                alt={selectedCertificate.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Certificate Details */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-light-slate">
                {selectedCertificate.title}
              </h2>

              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div>
                  <span className="text-slate">Issued by: </span>
                  <span className="text-green-accent font-semibold">
                    {selectedCertificate.issuer}
                  </span>
                </div>
                <div className="h-4 w-px bg-slate/30"></div>
                <div>
                  <span className="text-slate">Date: </span>
                  <span className="text-light-slate">
                    {selectedCertificate.issuedOn}
                  </span>
                </div>
              </div>

              <p className="text-slate leading-relaxed">
                {selectedCertificate.shortContext}
              </p>

              {/* Skills Gained */}
              <div>
                <h3 className="text-lg font-semibold text-light-slate mb-3">
                  Skills Gained
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCertificate.skillsGained.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-dark-bg border border-green-accent/30 text-green-accent rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verify Button */}
              {selectedCertificate.verificationLink && (
                <motion.a
                  href={selectedCertificate.verificationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-accent text-dark-bg font-semibold rounded-lg hover:bg-green-accent transition-colors duration-300"
                >
                  <FaExternalLinkAlt />
                  Verify Certificate
                </motion.a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default CertificatesPage;
