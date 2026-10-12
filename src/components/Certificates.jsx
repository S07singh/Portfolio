import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import Modal from "./Modal";
import CertificateCard from "./CertificateCard";
import CertificateDetail from "./CertificateDetail";
import { certificates } from "../data/certificates";

const Certificates = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="certificates" className="relative border-t border-line bg-cream-2/60 py-24 md:py-36">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading index="04" label="Credentials" title={<>Always <span className="italic text-accent">learning</span>.</>} className="!mb-0" />
          <Link to="/certificates" className="link-underline eyebrow inline-flex items-center gap-2 self-start !text-ink md:self-end">
            All certificates <FaArrowRight />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.slice(0, 3).map((cert, i) => (
            <CertificateCard key={cert.id} certificate={cert} index={i} onClick={() => setSelected(cert)} />
          ))}
        </div>
      </div>

      <Modal isOpen={selected !== null} onClose={() => setSelected(null)}>
        {selected && <CertificateDetail certificate={selected} />}
      </Modal>
    </section>
  );
};

export default Certificates;
