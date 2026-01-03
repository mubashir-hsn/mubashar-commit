
import React, { useState } from 'react';
import emailjs from "emailjs-com";


interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

    // Add type to errors state
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const templateConfirmationUser = import.meta.env.VITE_CONFIRMATION_TEMPLATE_ID;

    const validate = (): boolean => {
      const newErrors: FormErrors = {};
      if (!formData.name.trim()) newErrors.name = "Full name required";
      if (!formData.email.trim()) newErrors.email = "Email address required";
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
      if (!formData.subject.trim()) newErrors.subject = "Subject required";
      if (!formData.message.trim()) newErrors.message = "Message is required";
      else if (formData.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters";
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!validate()) return;
  
      setIsSubmitting(true);
  
      try {
        emailjs.init(publicKey);
  
        // Send main email
        await emailjs.send(serviceID, templateID, formData, publicKey);
  
        // Send confirmation email to user
        await emailjs.send(serviceID, templateConfirmationUser, formData, publicKey);
  
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 8000);
      } catch (error: any) {
        console.error("Email failed:", error.text || error);
        alert("Oops! Something went wrong. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/mubashir-hsn', icon: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mubashir-hsn', icon: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"></path> },
    { name: 'Twitter', url: '#', icon: <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path> },
  ];

  return (
    <section id="contact" className="py-32 bg-white dark:bg-zinc-950 transition-colors relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 dark:bg-zinc-900/20 -z-10 skew-x-12 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto bg-white dark:bg-zinc-900 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 dark:border-zinc-800 flex flex-col md:grid md:grid-cols-12">
          
          {/* Left Side Info Panel */}
          <div className="md:col-span-5 bg-slate-900 dark:bg-zinc-900 p-12 lg:p-16 text-white flex flex-col justify-between relative overflow-hidden transition-colors border-r dark:border-zinc-800">
            {/* Orange Accent Bar */}
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-orange-500"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl lg:text-5xl font-black mb-8 leading-[0.9] tracking-tighter">
                Let's Engineer the <span className="text-orange-500">Extraordinary</span>.
              </h3>
              <p className="text-slate-400 dark:text-zinc-400 mb-12 text-lg font-medium leading-relaxed">
                Currently available for high-impact roles and global collaborations. Let's discuss how my technical expertise can drive your next success.
              </p>
              
              <div className="space-y-6">
                <div className="p-6 bg-white/5 dark:bg-zinc-950/50 rounded-3xl border border-white/10 dark:border-zinc-800 backdrop-blur-sm group hover:border-orange-500/50 transition-all">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/20">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-zinc-500 mb-1">Direct Email</div>
                      <div className="font-bold text-lg">cmubashar369@gmail.com</div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white/5 dark:bg-zinc-950/50 rounded-3xl border border-white/10 dark:border-zinc-800 backdrop-blur-sm group hover:border-orange-500/50 transition-all">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-slate-800 dark:bg-zinc-800 rounded-2xl flex items-center justify-center border border-white/10">
                      <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-zinc-500 mb-1">HQ Location</div>
                      <div className="font-bold text-lg">Punjab, Pakistan</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-12">
               <div className="text-[10px] font-black uppercase tracking-widest mb-6 text-slate-500">Global Connectivity</div>
               <div className="flex gap-4">
                 {socialLinks.map((social) => (
                   <a key={social.name} href={social.url} target='_blank' className="w-12 h-12 bg-white/5 dark:bg-zinc-950 border border-white/10 dark:border-zinc-800 hover:bg-orange-500 hover:text-white hover:border-orange-500 rounded-2xl flex items-center justify-center transition-all">
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                       {social.icon}
                     </svg>
                   </a>
                 ))}
               </div>
            </div>
          </div>
          
          {/* Right Side Form Panel */}
          <div className="md:col-span-7 p-12 lg:p-16 bg-white dark:bg-zinc-900 transition-colors">
            <div className="mb-12">
              <h4 className="text-[11px] font-black text-orange-600 uppercase tracking-[0.4em] mb-4">Request Consultation</h4>
              <p className="text-slate-500 dark:text-zinc-400 font-medium">Have a specific project or technical inquiry? Fill out the brief below to start the conversation.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid sm:grid-cols-2 gap-10">
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="peer w-full px-0 py-3 bg-transparent border-b-2 border-slate-100 dark:border-zinc-800 focus:border-orange-500 dark:focus:border-orange-500 focus:outline-none transition-all text-slate-900 dark:text-white font-bold placeholder-transparent"
                    placeholder="Full Name"
                  />
                  <label htmlFor="name" className="absolute left-0 -top-3.5 text-[10px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-300 dark:peer-placeholder-shown:text-zinc-700 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-orange-500">Legal Name</label>
                  {errors.name && <p className="text-red-600 text-[9px] mt-1 font-black uppercase">{errors.name}</p>}
                </div>
                
                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="peer w-full px-0 py-3 bg-transparent border-b-2 border-slate-100 dark:border-zinc-800 focus:border-orange-500 dark:focus:border-orange-500 focus:outline-none transition-all text-slate-900 dark:text-white font-bold placeholder-transparent"
                    placeholder="Email Address"
                  />
                  <label htmlFor="email" className="absolute left-0 -top-3.5 text-[10px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-300 dark:peer-placeholder-shown:text-zinc-700 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-orange-500">Professional Email</label>
                  {errors.email && <p className="text-red-600 text-[9px] mt-1 font-black uppercase">{errors.email}</p>}
                </div>
              </div>

              <div className="relative group">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="peer w-full px-0 py-3 bg-transparent border-b-2 border-slate-100 dark:border-zinc-800 focus:border-orange-500 dark:focus:border-orange-500 focus:outline-none transition-all text-slate-900 dark:text-white font-bold placeholder-transparent"
                    placeholder="Subject"
                  />
                  <label htmlFor="subject" className="absolute left-0 -top-3.5 text-[10px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-300 dark:peer-placeholder-shown:text-zinc-700 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-orange-500">Subject</label>
                  {errors.subject && <p className="text-red-600 text-[9px] mt-1 font-black uppercase">{errors.subject}</p>}
                </div>
              
              <div className="relative group">
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="peer w-full px-0 py-3 bg-transparent border-b-2 border-slate-100 dark:border-zinc-800 focus:border-orange-500 dark:focus:border-orange-500 focus:outline-none transition-all text-slate-900 dark:text-white font-bold placeholder-transparent resize-none"
                  placeholder="Share the details..."
                ></textarea>
                <label htmlFor="message" className="absolute left-0 -top-3.5 text-[10px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-300 dark:peer-placeholder-shown:text-zinc-700 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-orange-500">Project Mission</label>
                {errors.message && <p className="text-red-600 text-[9px] mt-1 font-black uppercase">{errors.message}</p>}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full py-5 bg-slate-900 dark:bg-orange-500 text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl transition-all overflow-hidden flex items-center justify-center gap-4 hover:bg-orange-600 disabled:opacity-50 shadow-xl shadow-slate-100 dark:shadow-none"
              >
                {isSubmitting ? (
                   <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                ) : (
                  <>
                    <span>Dispatch Message</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </>
                )}
              </button>

              {isSuccess && (
                <div className="p-6 bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 text-[11px] font-black uppercase tracking-widest rounded-3xl flex items-center gap-4 fade-in-up border border-green-100 dark:border-green-500/20">
                  <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/50 shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  </div>
                  Message Dispatched. My response protocol is active.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
