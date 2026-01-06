import React from 'react';
import '../Terms/Terms.css';
import { useThemeContext } from '../../context/ThemeContext';

function Privacy() {
  const { darkMode } = useThemeContext();

  return (
    <div className={`terms-conditions-container ${darkMode ? 'dark' : 'light'}`}>
      <div className="terms-content">
        <h1>Privacy Policy</h1>
        <p className="intro-text">
          This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our services. 
          By accessing or using our platform, you agree to the practices described below.
        </p>

        {/* Section 1: Introduction */}
        <section className="terms-section">
          <h2>1. Introduction</h2>
          <p>
            A privacy policy is a legal statement that discloses how a party gathers, uses, discloses, and manages a user's personal data. 
            Personal information includes any data that can identify an individual—such as name, contact details, financial records, 
            location data, online behavior, and more. This policy informs you about what data we collect, how it is used, 
            whether it is shared or sold, and how it is protected.
          </p>
        </section>

        {/* Section 2: Information We Collect */}
        <section className="terms-section">
          <h2>2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Personal Identifiers:</strong> Name, email, phone number, address, date of birth.</li>
            <li><strong>Technical Data:</strong> IP address, browser type, device information, cookies.</li>
            <li><strong>Usage Data:</strong> Pages visited, features used, time spent, interaction patterns.</li>
            <li><strong>Financial Information:</strong> Payment details (processed securely via third-party gateways).</li>
            <li><strong>Other Data:</strong> Communications, feedback, or content you voluntarily provide.</li>
          </ul>
        </section>

        {/* Section 3: How We Use Your Data */}
        <section className="terms-section">
          <h2>3. How We Use Your Information</h2>
          <p>We use your data to:</p>
          <ul>
            <li>Provide, maintain, and improve our services.</li>
            <li>Process transactions and send service-related notifications.</li>
            <li>Respond to your inquiries and support requests.</li>
            <li>Personalize your experience and deliver relevant content.</li>
            <li>Comply with legal obligations and protect our rights.</li>
          </ul>
        </section>

        {/* Section 4: Data Sharing & Disclosure */}
        <section className="terms-section">
          <h2>4. Sharing & Disclosure of Personal Information</h2>
          <p>We are committed to your privacy:</p>
          <ul>
            <li>We <strong>do not sell</strong> your personal data to third parties.</li>
            <li>We may share data with trusted service providers (e.g., hosting, payment processors) under strict confidentiality agreements.</li>
            <li>We may disclose information if required by law, court order, or to protect our users, platform, or rights.</li>
            <li>We do not monitor user content proactively unless reported for policy violations.</li>
          </ul>
        </section>

        {/* Section 5: Data Security */}
        <section className="terms-section">
          <h2>5. Data Security</h2>
          <p>
            We implement reasonable technical and organizational measures to protect your data from unauthorized access, 
            alteration, disclosure, or destruction. While no system is 100% secure, we continuously evaluate and update our security practices.
          </p>
        </section>

        {/* Section 6: Your Rights */}
        <section className="terms-section">
          <h2>6. Your Privacy Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access, correct, or delete your personal information.</li>
            <li>Opt out of marketing communications.</li>
            <li>Restrict or object to certain processing activities.</li>
            <li>Data portability (receiving your data in a structured format).</li>
            <li>Withdraw consent (where processing is based on consent).</li>
          </ul>
          <p>To exercise these rights, contact us using the details in Section 9.</p>
        </section>

        {/* Section 7: International Data Transfers */}
        <section className="terms-section">
          <h2>7. International Data Transfers</h2>
          <p>
            Your data may be transferred to and processed in countries outside your jurisdiction, 
            including the United States. We ensure such transfers comply with applicable data protection laws 
            (e.g., GDPR, CalOPPA) through contractual safeguards and compliance mechanisms.
          </p>
        </section>

        {/* Section 8: Compliance with Laws */}
        <section className="terms-section">
          <h2>8. Legal Compliance</h2>
          <p>
            We comply with major privacy regulations, including:
          </p>
          <ul>
            <li><strong>CalOPPA (California):</strong> We do not track users across third-party sites without consent.</li>
            <li><strong>GDPR (EU):</strong> We provide lawful bases for processing and honor EU user rights.</li>
            <li><strong>CCPA/CPRA (California):</strong> California residents may request disclosure or deletion of their data.</li>
          </ul>
        </section>

        {/* Section 9: Contact Us */}
        <section className="terms-section">
          <h2>9. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at:
          </p>
          <p><strong>Email:</strong> info@polygonsoftware.tech</p>
        </section>

        {/* Section 10: Changes to This Policy */}
        <section className="terms-section">
          <h2>10. Updates to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Changes will be posted here with a revised "Last Updated" date. 
            Continued use after changes constitutes acceptance. We will notify users of material changes via email or in-app alerts.
          </p>
        </section>

        {/* Footer */}
        <div >
          <p>Last Updated: January 06, 2026</p>
        </div>
      </div>
    </div>
  );
}

export default Privacy;