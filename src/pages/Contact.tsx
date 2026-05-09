import React from 'react';
// Import the UI component from your components folder. 
// We rename it to 'ContactComponent' here so it doesn't conflict with the Page name.
import ContactComponent from '../components/Contact'; 

const ContactPage: React.FC = () => {
  return (
    <main className="bg-[#FDFDFD]">
      {/* Render the imported component, NOT the page itself */}
      <ContactComponent />
    </main>
  );
};

export default ContactPage;