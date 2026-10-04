import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-accent/10 text-accent rounded-full">
          <Mail className="h-6 w-6" />
        </div>
        <div>
          <h4 className="text-sm font-medium text-foreground/70 mb-1">Email</h4>
          <a href="mailto:kajal.fulara19@gmail.com" className="text-lg hover:text-accent transition-colors">kajal.fulara19@gmail.com</a>
        </div>
      </div>
      
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-accent/10 text-accent rounded-full">
          <Phone className="h-6 w-6" />
        </div>
        <div>
          <h4 className="text-sm font-medium text-foreground/70 mb-1">Phone</h4>
          <a href="tel:+917838728912" className="text-lg hover:text-accent transition-colors">+91 7838728912</a>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <div className="p-3 bg-accent/10 text-accent rounded-full">
          <MapPin className="h-6 w-6" />
        </div>
        <div>
          <h4 className="text-sm font-medium text-foreground/70 mb-1">Location</h4>
          <p className="text-lg">Delhi NCR, India</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
