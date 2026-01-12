import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import Modal from "./Modal";
import { certificates } from "../data/certificates";

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  
  // Get only the top 3 certificates
  const topCertificates = certificates.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="certificates" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-light-slate mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-green-accent mx-auto mb-8"></div>
          <p className="text-lg text-slate max-w-3xl mx-auto">
            Continuous learning through recognized certifications and
            professional courses
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {topCertificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              onClick={() => setSelectedCertificate(cert)}
              className="bg-dark-secondary border border-slate/20 rounded-lg overflow-hidden group hover:border-green-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-accent/10 cursor-pointer"
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
              <div className="p-5">
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

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/certificates">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-green-accent text-green-accent font-semibold rounded-lg hover:bg-green-accent hover:text-dark-bg transition-all duration-300"
            >
              View All Certificates
              <FaArrowRight />
            </motion.button>
          </Link>
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
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-accent text-dark-bg font-semibold rounded-lg hover:bg-green-accent/90 transition-colors duration-300"
                >
                  <FaExternalLinkAlt />
                  Verify Certificate
                </motion.a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Certificates;
