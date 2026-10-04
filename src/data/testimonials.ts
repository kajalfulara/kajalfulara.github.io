export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Leadership Team",
    role: "Founding & Operations Lead",
    company: "Hobfit Technologies",
    content: "Kajal has brought order, empathy, and consistency to our HR operations. Managing the lifecycle for over 120 employees seamlessly while closing critical tech and sales hires is a testament to her dedication and organizational prowess."
  },
  {
    name: "Principal Investigator",
    role: "Clinical Lead",
    company: "THSTI / Civil Hospital Gurugram",
    content: "Kajal's conduct across 250+ participant assessments demonstrated meticulous protocol adherence, documentation accuracy, and high ethical standards. Her psychology training makes her a natural communicator with participants and clinicians alike."
  },
  {
    name: "Research Supervisor",
    role: "Department of Neurology",
    company: "AIIMS Delhi",
    content: "Working with Kajal on our neurology research trials was seamless. She managed participant communication, data integrity in REDCap, and scheduling with exceptional professionalism."
  }
];
