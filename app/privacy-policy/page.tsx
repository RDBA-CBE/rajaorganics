import LegalPage from '../components/LegalPage';

const sections = [
  {
    title: '1. About This Privacy Policy',
    paragraphs: [
      'This Privacy Policy applies to the website operated by Raja Organic Farms and explains how we handle personal information collected through our website and related digital interactions.',
      'We believe privacy should be simple and transparent. We collect information only when it is relevant to providing our services, responding to enquiries, improving our website or communicating with you.',
    ],
  },
  {
    title: '2. Information We May Collect',
    paragraphs: ['Depending on how you interact with our website, we may collect information such as:', 'Information You Provide', 'When you contact us or submit an enquiry, we may collect:'],
    bullets: ['Name', 'Email address', 'Phone number', 'Company or organisation name, where applicable', 'Enquiry details', 'Any other information you voluntarily provide through our forms or communications'],
  },
  {
    title: 'Information Collected Automatically',
    paragraphs: [
      'When you visit our website, certain technical information may be collected automatically, such as:',
      'This information may be used to understand how visitors use our website and to improve its performance and user experience.',
    ],
    bullets: ['IP address', 'Browser type', 'Device information', 'Operating system', 'Pages visited', 'Date and time of access', 'Website usage information', 'Referring website or source'],
  },
  {
    title: '3. How We Use Your Information',
    paragraphs: ['We may use the information we collect to:', 'We will use personal information only for appropriate and legitimate purposes and in accordance with applicable laws.'],
    bullets: ['Respond to your enquiries and requests', 'Provide information about our products, farming activities and services', 'Communicate with you regarding your enquiry or business requirements', 'Understand website usage and improve our website', 'Maintain website security and prevent misuse', 'Improve our products, services and customer experience', 'Comply with applicable legal and regulatory requirements'],
  },
  {
    title: '4. Enquiry Forms',
    paragraphs: [
      'When you submit information through an enquiry form on our website, the information you provide may be received by Raja Organic Farms and used to respond to your request.',
      'Please provide only information that is necessary for us to respond to your enquiry.',
      'We will not ask you to provide sensitive personal information through our general website enquiry forms unless it is specifically required and appropriate for the purpose.',
    ],
  },
  {
    title: '5. Cookies and Similar Technologies',
    paragraphs: [
      'Our website may use cookies and similar technologies to improve website functionality, understand visitor behaviour and provide a better browsing experience.',
      'Cookies may help us:',
      'We may also use third party analytics or website services that place cookies or similar technologies on your device.',
      'You can manage or disable cookies through your browser settings. Please note that disabling certain cookies may affect some website functionality.',
    ],
    bullets: ['Remember website preferences', 'Understand how visitors use the website', 'Improve website performance', 'Analyse website traffic'],
  },
  {
    title: '6. Third Party Services',
    paragraphs: [
      'Our website may use third party services for purposes such as:',
      'These third party providers may process information in accordance with their own privacy policies and applicable laws.',
      'Raja Organic Farms does not control the privacy practices of third party websites or services. We recommend reviewing their respective privacy policies before providing personal information.',
    ],
    bullets: ['Website analytics', 'Website hosting', 'Security and performance', 'Maps and location services', 'Social media integration', 'Communication and enquiry management'],
  },
  {
    title: '7. Sharing of Personal Information',
    paragraphs: [
      'We do not sell or rent your personal information to third parties.',
      'We may share information where reasonably necessary with trusted service providers who assist us with website hosting, technology, analytics, communication, security or other business operations.',
      'We may also disclose information where required to do so by law, regulation, legal process or a lawful governmental request.',
      'Where third parties process personal information on our behalf, we expect them to maintain appropriate safeguards and use the information only for the relevant purpose.',
    ],
  },
  {
    title: '8. Data Security',
    paragraphs: [
      'We take reasonable steps to protect the personal information we hold against unauthorised access, misuse, alteration, disclosure or loss.',
      'We use appropriate technical and organisational measures depending on the nature of the information and the risks involved.',
      'However, no website or online transmission can be guaranteed to be completely secure. While we make reasonable efforts to protect your information, you should understand that transmission of information over the internet carries inherent risks.',
    ],
  },
  {
    title: '9. How Long We Keep Your Information',
    paragraphs: [
      'We retain personal information only for as long as reasonably necessary for the purpose for which it was collected, to maintain business records, resolve enquiries, meet contractual requirements or comply with applicable legal obligations.',
      'When information is no longer required, we may securely delete, anonymise or otherwise dispose of it in accordance with applicable requirements.',
    ],
  },
  {
    title: '10. Your Privacy Rights',
    paragraphs: [
      'Subject to applicable law, you may have rights relating to your personal information, including the ability to:',
      "Under India's Digital Personal Data Protection framework, consent is required to be meaningful and informed where consent is the applicable basis for processing, and individuals may withdraw consent subject to applicable legal requirements.",
      'To exercise an applicable privacy right, you may contact us using the details provided below.',
    ],
    bullets: ['Request information about how your personal data is being processed', 'Request access to personal information held about you', 'Request correction of inaccurate or incomplete information', 'Request deletion of personal information where applicable', 'Withdraw consent where processing is based on consent', 'Raise a concern or complaint regarding the processing of your personal information'],
  },
  {
    title: '11. Withdrawal of Consent',
    paragraphs: [
      'Where we process your personal information based on your consent, you may withdraw that consent by contacting us.',
      'Withdrawal of consent will not affect the lawfulness of processing carried out before the withdrawal.',
      'Please note that withdrawing consent may affect our ability to provide certain services or respond to certain requests where the information is necessary for that purpose.',
    ],
  },
  {
    title: "12. Children's Privacy",
    paragraphs: [
      'Our website is not specifically intended for children.',
      'We do not knowingly seek to collect personal information from children except where such collection is permitted and carried out in accordance with applicable laws.',
      'If you believe that a child has provided personal information to us without appropriate consent, please contact us so that we can take appropriate action.',
    ],
  },
  {
    title: '13. External Links',
    paragraphs: [
      'Our website may contain links to third party websites, social media platforms or other external resources.',
      'These websites operate independently from Raja Organic Farms and may have their own privacy policies and terms of use.',
      'We are not responsible for the privacy practices, content or security of external websites.',
      'We encourage you to review the privacy policies of any external website you visit.',
    ],
  },
  {
    title: '14. Changes to This Privacy Policy',
    paragraphs: [
      'We may update this Privacy Policy from time to time to reflect changes in our business practices, website functionality, technology or applicable laws and regulations.',
      'When we make changes, we will update the Last Updated date at the beginning of this policy.',
      'We encourage you to review this page periodically to stay informed about how we protect your information.',
    ],
  },
  {
    title: '15. Contact Us',
    paragraphs: [
      'If you have any questions, concerns or requests relating to this Privacy Policy or the way we handle your personal information, please contact us.',
      'Raja Organic Farms',
      'Address: Raja Organic Farms, 71, Pudur Vellangattuvalasu, Kanagapuram, Erode - 638112.',
      'Email: mouneshrajav472000@gmail.com',
      'Phone: +91 96989 04457',
      'For Privacy Related Queries: [Designated Contact Person / Privacy Contact, if applicable]',
    ],
  },
  {
    title: '16. Applicable Law',
    paragraphs: [
      'This Privacy Policy shall be governed by and interpreted in accordance with the applicable laws of India.',
      'Raja Organic Farms is committed to handling personal information responsibly and in accordance with applicable data protection and privacy requirements.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={[
        'At Raja Organic Farms, we respect your privacy and are committed to protecting the personal information you choose to share with us.',
        'This Privacy Policy explains how we collect, use, store and protect information when you visit our website, submit an enquiry or interact with us through our digital platforms.',
        'By using our website, you acknowledge that you have read and understood this Privacy Policy.',
      ]}
      sections={sections}
      closingTitle="Our Commitment to Your Privacy"
      closing={[
        'At Raja Organic Farms, we believe trust grows through transparency.',
        'Just as we care for the land that sustains us, we are committed to treating the information entrusted to us with care and responsibility.',
        'Raja Organic Farms',
        'In Harmony with Nature. Growing for Tomorrow.',
      ]}
    />
  );
}
