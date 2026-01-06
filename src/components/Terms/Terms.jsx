import React from 'react';
import './Terms.css';
import { useThemeContext } from '../../context/ThemeContext'  
function Terms() {
  const { darkMode } = useThemeContext()
  return (
    <div className={`terms-conditions-container ${darkMode ? 'dark' : 'light'}`}>
      <div className="terms-content">
        <h1>Terms & Conditions</h1>
        <p className="intro-text">
          These Terms and Conditions ("Terms") govern your use of our services. By accessing or using our platform, 
          you agree to comply with and be bound by the following terms. If you do not agree, please do not use our services.
        </p>

        {/* Section 1: Definitions */}
        <section className="terms-section">
          <h2>1. Definitions</h2>
          <ul>
            <li><strong>"Service"</strong> refers to our website, platform, and all related features.</li>
            <li><strong>"User"</strong> means any individual or entity accessing or using the Service.</li>
            <li><strong>"We," "Us," or "Our"</strong> refers to the company providing this Service.</li>
            <li><strong>"Account"</strong> means a user-registered profile required to access certain features.</li>
          </ul>
        </section>

        {/* Section 2: Acceptance of Terms */}
        <section className="terms-section">
          <h2>2. Acceptance of Terms</h2>
          <p>
            By using our Service, you confirm that you are at least 18 years old (or the legal age in your jurisdiction) 
            and agree to abide by these Terms. Continued use constitutes ongoing acceptance.
          </p>
        </section>

        {/* Section 3: User Responsibilities */}
        <section className="terms-section">
          <h2>3. User Rights and Responsibilities</h2>
          <p>You agree to:</p>
          <ul>
            <li>Provide accurate and complete registration information.</li>
            <li>Use the Service only for lawful purposes.</li>
            <li>Not engage in harassment, fraud, or infringement of intellectual property.</li>
            <li>Secure your login credentials and notify us of unauthorized access.</li>
          </ul>
        </section>

        {/* Section 4: Acceptable Use */}
        <section className="terms-section">
          <h2>4. Acceptable Use & Prohibited Conduct</h2>
          <p>You must not:</p>
          <ul>
            <li>Use the Service to transmit viruses, malware, or harmful code.</li>
            <li>Violate privacy or data protection laws.</li>
            <li>Scrape, data-mine, or use automated tools without permission.</li>
            <li>Impersonate any person or entity.</li>
          </ul>
        </section>

        {/* Section 5: Privacy */}
        <section className="terms-section">
          <h2>5. Privacy Policy</h2>
          <p>
            Your personal data is handled per our <strong>Privacy Policy</strong>, which is incorporated herein by reference. 
            We collect, use, and share data only as described therein. You may opt out of non-essential communications at any time.
          </p>
        </section>

        {/* Section 6: Payments */}
        <section className="terms-section">
          <h2>6. Payments & Fees</h2>
          <p>
            Some features may require payment. All fees are non-refundable unless required by law. 
            We reserve the right to change pricing with 30 days’ notice. Subscriptions auto-renew unless canceled.
          </p>
        </section>

        {/* Section 7: Account Termination */}
        <section className="terms-section">
          <h2>7. Account Termination</h2>
          <p>
            You may delete your account at any time via account settings. We may suspend or terminate accounts 
            for violations of these Terms. Upon termination, all data may be deleted within 30 days.
          </p>
        </section>

        {/* Section 8: Disclaimers & Limitation of Liability */}
        <section className="terms-section">
          <h2>8. Disclaimers & Limitation of Liability</h2>
          <p>
            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, 
            EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, 
            FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
          </p>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL LIABILITY FOR ANY INDIRECT, INCIDENTAL, 
            CONSEQUENTIAL, OR EXEMPLARY DAMAGES ARISING FROM YOUR USE OF THE SERVICE.
          </p>
        </section>

        {/* Section 9: Indemnification */}
        <section className="terms-section">
          <h2>9. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless the Company, its affiliates, and employees from any claims, 
            damages, or expenses (including legal fees) arising from your misuse of the Service or breach of these Terms.
          </p>
        </section>

        {/* Section 10: Arbitration & Governing Law */}
        <section className="terms-section">
          <h2>10. Dispute Resolution & Governing Law</h2>
          <p>
            Any disputes will be resolved through binding arbitration under [Your Jurisdiction] law, 
            waiving the right to a jury trial or class action. Claims must be filed within one (1) year of occurrence. 
            The arbitration will take place in [City, State/Country].
          </p>
        </section>

        {/* Section 11: Changes to Terms */}
        <section className="terms-section">
          <h2>11. Modifications</h2>
          <p>
            We may update these Terms at any time. Changes will be posted on this page with a revised "Last Updated" date. 
            Continued use after changes constitutes acceptance. We may notify you of material changes via email or in-app alerts.
          </p>
        </section>

        {/* Section 12: Data Practices (Based on Your Research) */}
        <section className="terms-section">
          <h2>12. Data Use & Transparency</h2>
          <p>We commit to the following practices regarding your data:</p>
          <ul>
            <li>We do not sell your personal data to third parties.</li>
            <li>We only disclose data when required by law or to protect our rights.</li>
            <li>We implement reasonable security measures to protect your information.</li>
            <li>We do not monitor user content for policy enforcement unless reported.</li>
          </ul>
        </section>

        {/* Footer */}
        <div>
          <p>Last Updated: January 05, 2026</p>
          
        </div>
      </div>
    </div>
  );
}

export default Terms;
