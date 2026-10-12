import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CertificateDetail = ({ certificate }) => (
  <article>
    <p className="eyebrow">{certificate.issuer} · {certificate.issuedOn}</p>
    <h2 className="display mt-3 pr-12 text-4xl sm:text-5xl">{certificate.title}</h2>

    <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-paper p-3">
      <img src={certificate.thumbnail} alt={certificate.title} className="max-h-[60vh] w-full rounded-xl object-contain" />
    </div>

    <p className="mt-8 text-lg leading-relaxed text-ink-soft">{certificate.shortContext}</p>

    <p className="eyebrow mb-3 mt-8">Skills gained</p>
    <div className="flex flex-wrap gap-2">
      {certificate.skillsGained.map((skill) => (
        <span key={skill} className="chip">{skill}</span>
      ))}
    </div>

    {certificate.verificationLink && certificate.verificationLink !== "#" && (
      <div className="mt-10 border-t border-line pt-6">
        <a href={certificate.verificationLink} target="_blank" rel="noopener noreferrer" className="btn-ink group">
          Verify credential <FaArrowRight className="-rotate-45 transition-transform group-hover:rotate-0" />
        </a>
      </div>
    )}
  </article>
);

export default CertificateDetail;
