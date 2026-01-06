import React from 'react';
import '../Terms/Terms.css';
import { useThemeContext } from '../../context/ThemeContext';

function GDPRComponent() {
  const { darkMode } = useThemeContext();

  return (
    <div className={`terms-conditions-container ${darkMode ? 'dark' : 'light'}`}>
      <div className="terms-content">
        <h1>GDPR Compliance Statement</h1>
        <p className="intro-text">
          This statement outlines our commitment to compliance with the General Data Protection Regulation (EU) 2016/679 (GDPR). 
          We respect your right to privacy and are dedicated to protecting your personal data in accordance with EU data protection laws.
        </p>

        {/* Section 1: Introduction */}
        <section className="terms-section">
          <h2>1. Introduction</h2>
          <p>
            The General Data Protection Regulation (GDPR) is a comprehensive EU law that governs the processing of personal data 
            of individuals within the European Economic Area (EEA). It grants data subjects greater control over their information 
            and imposes strict obligations on organizations that collect, store, or process such data—regardless of where the 
            organization is based, as long as it processes data of individuals in the EEA.
          </p>
        </section>

        {/* Section 2: Lawful Basis for Processing */}
        <section className="terms-section">
          <h2>2. Lawful Basis for Data Processing</h2>
          <p>
            We only process personal data under one of the six lawful bases defined by the GDPR:
          </p>
          <ul>
            <li><strong>Consent:</strong> Explicitly given and freely withdrawable at any time.</li>
            <li><strong>Contract:</strong> Necessary to fulfill a contract with you (e.g., service delivery).</li>
            <li><strong>Legal Obligation:</strong> Required by law (e.g., tax or reporting requirements).</li>
            <li><strong>Vital Interests:</strong> Protecting someone’s life (rarely applicable).</li>
            <li><strong>Public Task:</strong> Not typically applicable to our services.</li>
            <li><strong>Legitimate Interests:</strong> For business purposes (e.g., fraud prevention), balanced against your rights.</li>
          </ul>
          <p>We clearly identify the lawful basis for each type of processing in our Privacy Policy.</p>
        </section>

        {/* Section 3: Data Subject Rights */}
        <section className="terms-section">
          <h2>3. Your Rights Under GDPR</h2>
          <p>As a data subject in the EEA, you have the right to:</p>
          <ul>
            <li><strong>Access:</strong> Request confirmation of whether we process your data and obtain a copy.</li>
            <li><strong>Rectification:</strong> Correct inaccurate or incomplete personal data.</li>
            <li><strong>Erasure (“Right to be Forgotten”):</strong> Request deletion under certain conditions.</li>
            <li><strong>Restriction:</strong> Limit how we process your data in specific circumstances.</li>
            <li><strong>Data Portability:</strong> Receive your data in a structured, machine-readable format.</li>
            <li><strong>Objection:</strong> Object to processing based on legitimate interests or direct marketing.</li>
            <li><strong>Withdraw Consent:</strong> At any time, without affecting the lawfulness of prior processing.</li>
          </ul>
          <p>To exercise these rights, contact us via the details in Section 7.</p>
        </section>

        {/* Section 4: Data Protection by Design */}
        <section className="terms-section">
          <h2>4. Privacy by Design & Default</h2>
          <p>
            We implement “data protection by design and by default” as required by Article 25 of the GDPR. 
            This includes:
          </p>
          <ul>
            <li>Minimizing data collection to only what is necessary (data minimization).</li>
            <li>Using pseudonymization or anonymization where feasible.</li>
            <li>Setting privacy-friendly defaults (e.g., opt-in for non-essential cookies).</li>
            <li>Conducting Data Protection Impact Assessments (DPIAs) for high-risk processing.</li>
          </ul>
        </section>

        {/* Section 5: International Data Transfers */}
        <section className="terms-section">
          <h2>5. Transfers Outside the EEA</h2>
          <p>
            If your data is transferred outside the EEA, we ensure adequate safeguards are in place, such as:
          </p>
          <ul>
            <li>Standard Contractual Clauses (SCCs) approved by the European Commission.</li>
            <li>Binding Corporate Rules (where applicable).</li>
            <li>Processing only with service providers that offer GDPR-compliant guarantees.</li>
          </ul>
          <p>We do not transfer data to jurisdictions deemed inadequate without proper protections.</p>
        </section>

        {/* Section 6: Data Security & Breach Notification */}
        <section className="terms-section">
          <h2>6. Security & Breach Response</h2>
          <p>
            We maintain appropriate technical and organizational measures to protect personal data against 
            unauthorized access, loss, or misuse. In the unlikely event of a data breach that poses a risk 
            to your rights and freedoms, we will:
          </p>
          <ul>
            <li>Notify the relevant supervisory authority within 72 hours of becoming aware of the breach.</li>
            <li>Notify affected individuals without undue delay if the breach is high risk.</li>
          </ul>
        </section>

        {/* Section 7: Data Protection Officer (DPO) */}
        <section className="terms-section">
          <h2>7. Data Protection Officer</h2>
          <p>
            While our core activities do not consist of large-scale, systematic monitoring or processing of 
            sensitive data, we have appointed a Data Protection Officer (DPO) to oversee compliance and serve 
            as a point of contact for GDPR-related inquiries.
          </p>
          <p><strong>Contact our DPO:</strong> dpo@yourcompany.com</p>
        </section>

        {/* Section 8: Updates & Compliance */}
        <section className="terms-section">
          <h2>8. Ongoing Compliance</h2>
          <p>
            We regularly review our policies, systems, and training to ensure ongoing GDPR compliance. 
            Our teams are educated on data protection principles, and internal audits are conducted periodically.
          </p>
          <p>
            The GDPR came into full effect on May 25, 2018, and remains binding across all EU/EEA member states. 
            We treat it as a foundational standard for global data protection practices.
          </p>
        </section>

        {/* Footer */}
        <div>
          <p>Last Updated: January 06, 2026</p>
        </div>
      </div>
    </div>
  );
}

export default GDPRComponent;