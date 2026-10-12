import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../components/Modal";
import CertificateCard from "../components/CertificateCard";
import CertificateDetail from "../components/CertificateDetail";
import { certificates } from "../data/certificates";

const CertificatesPage = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen pb-24 pt-36">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="border-b border-ink pb-10"
        >
          <p className="eyebrow mb-6">Credentials · {certificates.length} certificates</p>
          <h1 className="display text-7xl sm:text-8xl md:text-9xl">
            Certifi<span className="italic text-accent">cates</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">
            Courses and programs I&apos;ve completed along the way. Open one to see the skills it covered and verify it.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => (
            <CertificateCard key={cert.id} certificate={cert} index={i} onClick={() => setSelected(cert)} />
          ))}
        </div>
      </div>

      <Modal isOpen={selected !== null} onClose={() => setSelected(null)}>
        {selected && <CertificateDetail certificate={selected} />}
      </Modal>
    </div>
  );
};

export default CertificatesPage;
