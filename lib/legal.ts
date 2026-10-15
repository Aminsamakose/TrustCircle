export type LegalSection = { h: string; p?: string[]; ul?: string[] };
export type LegalDoc = { title: string; updated: string; intro: string[]; sections: LegalSection[] };

export const LEGAL = {
  entity: 'Samakose Accelerator Lab',
  address: 'Jisonaayili Road, Ayana Junction, NS-123-6647, Tamale, Ghana',
  email: 'info@samakose.com',
  phone: '+233 (0) 55 858 9254',
  updated: '15 October 2026',
};

export const PRIVACY: LegalDoc = {
  title: 'Privacy Policy',
  updated: LEGAL.updated,
  intro: [
    'TrustCircle is an initiative of Samakose Accelerator Lab ("Samakose", "we", "us"), based in Tamale, Ghana. This policy explains what personal information we collect when you use the TrustCircle website, how we use it, and the choices you have.',
    'We handle personal information in line with the Data Protection Act, 2012 (Act 843) of Ghana and the guidance of the Data Protection Commission.',
  ],
  sections: [
    {
      h: '1. Who is responsible for your information',
      p: [
        'Samakose Accelerator Lab is the data controller for information collected through this website. You can reach us at info@samakose.com, on +233 (0) 55 858 9254, or at Jisonaayili Road, Ayana Junction, NS-123-6647, Tamale, Ghana.',
      ],
    },
    {
      h: '2. What we collect',
      p: ['This website does not ask you to create an account or fill in a form. We collect information in three ways only.'],
      ul: [
        'Information you send us. If you contact us by WhatsApp, email or phone, we receive your name, phone number or email address, and whatever you choose to tell us, such as your business, location and questions.',
        'Usage information. If analytics is switched on, Google Analytics records how the site is used: pages viewed, approximate location (city or region level), device and browser type, and actions such as tapping the WhatsApp, email or call buttons or downloading the Partnership Brief. We do not use analytics to identify you personally.',
        'Technical information. Our hosting provider may keep standard server logs, including IP address, date and time, and the pages requested, for security and reliability.',
      ],
    },
    {
      h: '3. How we use it',
      ul: [
        'To reply to your enquiries and, where you ask, to explain TrustCircle savings, enterprise support and financing.',
        'To improve the website, including its speed on low-end phones and weak connections.',
        'To protect the site against misuse and to meet legal obligations.',
        'To report, in aggregate form, on how many people the website reaches. These reports do not name individuals.',
      ],
      p: ['We do not sell your information, and we do not use it for automated decisions about you.'],
    },
    {
      h: '4. Our legal basis',
      p: [
        'We use your information because you asked us to (when you contact us), because we have a legitimate interest in running and improving a safe website, or because the law requires it. Where we rely on your consent, such as for analytics, you can withdraw it at any time.',
      ],
    },
    {
      h: '5. Loan information on this website',
      p: [
        'The website describes how TrustCircle assesses and approves loans, but it is not an application form. Please do not send identity numbers, bank or mobile money details, or other sensitive financial information through WhatsApp or email unless a TrustCircle officer has asked for it as part of an assessment. Information collected during an assessment is handled under the separate member and loan documents you sign.',
      ],
    },
    {
      h: '6. Who we share it with',
      p: ['We share information only where needed and only with:'],
      ul: [
        'Service providers that help us run the website and communications, such as hosting, Google Analytics, WhatsApp and email providers. They may process information outside Ghana.',
        'Partners, such as GTCCU, but only about a person who has asked to be introduced or has agreed to the sharing.',
        'Regulators, courts or law enforcement where the law requires it.',
      ],
    },
    {
      h: '7. Cookies and analytics',
      p: [
        'The site works without cookies for its core content. If Google Analytics is enabled, it may set cookies to count visits. You can block or delete cookies in your browser settings, and you can install the Google Analytics opt-out add-on. Blocking analytics does not affect your use of the site.',
      ],
    },
    {
      h: '8. Where information is kept and how long',
      p: [
        'Messages sent to us are kept for as long as needed to respond and to keep a reasonable record, and then deleted or anonymised. Analytics data is kept for the retention period set in our analytics account. Some providers store data on servers outside Ghana; we choose providers with appropriate security safeguards.',
      ],
    },
    {
      h: '9. Security',
      p: [
        'We use reasonable technical and organisational measures to protect information, including encrypted connections (HTTPS) and limited access. No online service is completely secure, so please share only what you are comfortable sharing.',
      ],
    },
    {
      h: '10. Your rights',
      p: ['Under the Data Protection Act, 2012 you may ask us to:'],
      ul: [
        'tell you what personal information we hold about you and give you a copy;',
        'correct information that is wrong or out of date;',
        'delete information we no longer need, or stop using it for a purpose you object to;',
        'withdraw consent you gave earlier.',
      ],
    },
    {
      h: '11. Children',
      p: [
        'This website is meant for adults and enterprises. We do not knowingly collect information from children under 18. If you think a child has sent us information, contact us and we will delete it.',
      ],
    },
    {
      h: '12. Links to other sites',
      p: ['Our site links to WhatsApp, social media and partner pages. Those sites have their own privacy practices, and we are not responsible for them.'],
    },
    {
      h: '13. Changes to this policy',
      p: ['We may update this policy from time to time. The date at the top shows the latest version. Material changes will be highlighted on the website.'],
    },
    {
      h: '14. Contact and complaints',
      p: [
        'For any privacy question or request, write to info@samakose.com or call +233 (0) 55 858 9254. If you are not satisfied with our response, you may complain to the Data Protection Commission of Ghana.',
      ],
    },
  ],
};

export const TERMS: LegalDoc = {
  title: 'Terms of Use',
  updated: LEGAL.updated,
  intro: [
    'These terms govern your use of the TrustCircle website, operated by Samakose Accelerator Lab ("Samakose", "we", "us"). By using the site you agree to them. If you do not agree, please do not use the site.',
  ],
  sections: [
    {
      h: '1. What this website is',
      p: [
        'The website gives information about TrustCircle: how group savings, enterprise support and responsible financing work, who we serve, and how to contact us. It is for general information. It is not a loan application, a contract, or financial, legal or tax advice.',
      ],
    },
    {
      h: '2. No offer of credit',
      p: [
        'Nothing on this website is an offer or promise of a loan. Any financing is decided by TrustCircle after a fair assessment of the group or enterprise, and is subject to eligibility, savings and repayment history, available funds, and the written terms you sign at the time. Loan amounts, rates, repayment periods and conditions shown on the site are illustrative and may change.',
        'Please never pay anyone money to "secure" a TrustCircle loan through this website, WhatsApp or a phone call. If someone asks you to, contact us on +233 (0) 55 858 9254 before paying.',
      ],
    },
    {
      h: '3. Figures, stories and targets',
      p: [
        'Numbers in the "where we want to be by 2027" and impact sections are targets and planning figures, not guaranteed results or audited outcomes. Stories and testimonials reflect the views of the people quoted. Individual results vary and are not a promise of what any member will earn, save or receive.',
      ],
    },
    {
      h: '4. Using the website',
      p: ['You agree to use the site lawfully and not to:'],
      ul: [
        'interfere with its operation, security or availability;',
        'attempt to gain unauthorised access to the site or its systems;',
        'copy or scrape the site at scale, or use it to send spam;',
        'use our name or content to suggest a link with TrustCircle that does not exist.',
      ],
    },
    {
      h: '5. Intellectual property',
      p: [
        'The TrustCircle name, logo, design, text, images, animations and the Partnership Brief belong to Samakose or its licensors. You may view the site and share its pages or the Partnership Brief for personal and partnership discussion purposes. You may not reproduce, modify or use our content commercially without written permission.',
      ],
    },
    {
      h: '6. Partnership Brief and downloads',
      p: [
        'The Partnership Brief is provided for information. It sets out our intentions and targets and does not create any partnership, obligation or commitment until a written agreement is signed by both sides.',
      ],
    },
    {
      h: '7. Contacting us',
      p: [
        'Messages sent through WhatsApp, email or phone are treated as enquiries. We aim to respond promptly but do not guarantee response times. How we handle your information is explained in our Privacy Policy.',
      ],
    },
    {
      h: '8. Third-party links',
      p: ['Links to other websites, partners and social media are provided for convenience. We do not control them and are not responsible for their content or practices.'],
    },
    {
      h: '9. Disclaimer',
      p: [
        'We work to keep the information accurate and current, but we provide the site "as is" and make no warranty that it will be error free, uninterrupted or fully up to date. Please check with us directly before relying on any detail for a decision.',
      ],
    },
    {
      h: '10. Limitation of liability',
      p: [
        'To the fullest extent the law allows, Samakose is not liable for loss arising from your use of, or inability to use, the website, or from reliance on its content. Nothing in these terms limits liability that cannot lawfully be limited, including for fraud or for death or personal injury caused by negligence.',
      ],
    },
    {
      h: '11. Changes',
      p: ['We may change the site and these terms at any time. The date at the top shows the latest version. Continued use after a change means you accept the updated terms.'],
    },
    {
      h: '12. Governing law',
      p: ['These terms are governed by the laws of the Republic of Ghana. Disputes will first be raised with us in good faith, and, if not resolved, may be brought before the courts of Ghana.'],
    },
    {
      h: '13. Contact',
      p: ['Samakose Accelerator Lab, Jisonaayili Road, Ayana Junction, NS-123-6647, Tamale, Ghana. Email info@samakose.com. Phone +233 (0) 55 858 9254.'],
    },
  ],
};
