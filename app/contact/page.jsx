"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";
import { useRef, useState, } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "dingarobert008@gmail.com",
  },

  {
    icon: Phone,
    title: "Phone",
    value: "+234 07062512084",
  },

  {
    icon: MapPin,
    title: "Location",
    value: "Ondo, Nigeria",
  },
];

const ContactPage = () => {

const formRef = useRef();

const [loading, setLoading] = useState(false);

const [success, setSuccess] = useState(false);

const [error, setError] = useState("");
const [formErrors, setFormErrors] = useState({});

const validateForm = (formData) => {
  const errors = {};

  if (!formData.user_name.trim()) {
    errors.user_name = "Name is required";
  }

  if (!formData.user_email.trim()) {
    errors.user_email = "Email is required";
  }

  else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
      formData.user_email
    )
  ) {
    errors.user_email = "Invalid email address";
  }

  if (!formData.project_type.trim()) {
    errors.project_type = "Project type is required";
  }

  if (!formData.message.trim()) {
    errors.message = "Message is required";
  }

  return errors;
};

const sendEmail = async (e) => {
  e.preventDefault();

  const formData = {
    user_name: formRef.current.user_name.value,
    user_email: formRef.current.user_email.value,
    project_type: formRef.current.project_type.value,
    message: formRef.current.message.value,
  };

  const validationErrors = validateForm(formData);

  if (Object.keys(validationErrors).length > 0) {
    setFormErrors(validationErrors);
    return;
  }

  setFormErrors({});
  setLoading(true);
  setError("");
  setSuccess(false);

  try {
    await emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      formRef.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );

    setSuccess(true);

    formRef.current.reset();

    setTimeout(() => {
      setSuccess(false);
    }, 4000);

  } catch (err) {
    setError("Something went wrong. Please try again.");

    setTimeout(() => {
      setError("");
    }, 4000);
  }

  setLoading(false);
};

  return (
    <main className="relative overflow-hidden pb-32">
      {/* Background */}
      <div className="absolute inset-0 bg-background -z-50" />
      <div className="absolute inset-0 grid-background opacity-20 -z-40" />

      {/* Glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-accent/10 blur-[180px] rounded-full -z-30" />

      {/* HERO */}
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[900px]"
          >
            <span className="uppercase tracking-[0.2em] text-sm text-accentSoft">
              Contact
            </span>

            <h1 className="text-6xl md:text-8xl font-bold leading-[0.95] tracking-[-0.05em] mt-6 mb-10">
              Let’s Build
              <br />
              Something
              <br />
              Exceptional
            </h1>

            <p className="max-w-[700px] text-lg text-white/60 leading-relaxed">
              I’m always interested in creative collaborations,
              freelance opportunities, and ambitious digital
              products that combine design, interaction,
              and technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAIN */}
      <motion.section
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-6 md:gap-10">

            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="
                rounded-2xl md:rounded-[36px]
                border
                border-white/10
                backdrop-blur-xl
                p-5 sm:p-6 md:p-10
              "
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10">
                Start a Project
              </h2>

              <form 
                ref={formRef}
                onSubmit={sendEmail}
                className="space-y-5 md:space-y-6">

                  <input
                   type="text"
                   name="honeypot"
                   className="hidden"
                  />

                {/* NAME */}
                <div>
                  <label className="block text-sm text-white/50 mb-3">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="user_name"
                    placeholder="John Doe"
                    className="
                      w-full
                      rounded-xl md:rounded-2xl
                      border
                      border-white/10
                      bg-black/20 backdrop-blur-md
                      hover:border-white/20
                      py-3 md:py-4 px-4 md:px-5
                      outline-none text-sm md:text-base
                      focus:border-accent focus:ring-2 focus:ring-accent/30
                      transition-all duration-300
                    "
                  />
                  {formErrors.user_name && (
                   <p className="text-sm text-red-400 mt-2">
                    {formErrors.user_name}
                   </p>
                  )}
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-sm text-white/50 mb-3">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="user_email"
                    placeholder="hello@example.com"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-white/10
                      bg-black/20 backdrop-blur-md
                      px-5 hover:border-white/20
                      py-4
                      outline-none
                      focus:border-accent focus:ring-2 focus:ring-accent/30
                      transition-all duration-300
                    "
                  />
                  {formErrors.user_email && (
                    <p className="text-sm text-red-400 mt-2">
                     {formErrors.user_email}
                    </p>
                  )}
                </div>

                {/* PROJECT */}
                <div>
                  <label className="block text-sm text-white/50 mb-3">
                    Project Type
                  </label>

                  <input
                    type="text"
                    name="project_type"
                    placeholder="Website / Branding / Full Stack App"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-white/10
                      bg-black/20 backdrop-blur-md
                      px-5 hover:border-white/20
                      py-4
                      outline-none
                      focus:border-accent focus:ring-2 focus:ring-accent/30
                      transition-all duration-300
                    "
                  />
                  {formErrors.project_type && (
                     <p className="text-sm text-red-400 mt-2">
                      {formErrors.project_type}
                      </p>
                    )}
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-sm text-white/50 mb-3">
                    Message
                  </label>

                  <textarea
                    rows={5}
                    name="message"
                    placeholder="Tell me about your project..."
                    className="w-full rounded-xl md:rounded-2xl border border-white/10 bg-black/20 backdrop-blur-md text-sm md:text-base
                      py-3 md:py-4 px-4 md:px-5 outline-none resize-none focus:border-accent focus:ring-2 focus:ring-accent/30
                      transition-all duration-300 hover:border-white/20"
                  />
                  {formErrors.message && (
                    <p className="text-sm text-red-400 mt-2">
                     {formErrors.message}
                    </p>
                  )}
                </div>

                {/* BUTTON */}
                <button
                 disabled={loading}
                  className="inline-flex items-center gap-3 w-full sm:w-auto  text-sm md:text-base justify-center rounded-full bg-accent  px-6 md:px-8 py-3 md:py-5
                    text-black font-medium transition-all duration-300 hover:scale-105 active:scale-[0.98]
                    hover:shadow-[0_0_35px_rgba(199,120,255,0.45)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                 {loading ? "Sending..." : "Send Message"}

                 <ArrowUpRight size={20} />
          
                </button>

                {success && (
                   <motion.div
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.4 }}
                     className="
                       mt-6
                       rounded-2xl
                       border
                       border-green-400/20
                       bg-green-400/10
                       px-5
                       py-4
                       text-green-300
                     "
                   >
                     Message sent successfully.
                   </motion.div>
                 )}

                 {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="
                      mt-6
                      rounded-2xl
                      border
                      border-red-400/20
                      bg-red-400/10
                      px-5
                      py-4
                      text-red-300
                    "
                  >
                    {error}
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* RIGHT SIDE */}
            <div className="space-y-8">

              {/* CONTACT INFO */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="
                  rounded-2xl md:rounded-[36px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-5 sm:p-6 md:p-8
                "
              >
                <h2 className="text-3xl font-bold mb-10">
                  Contact Info
                </h2>

                <div className="space-y-8">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={index}
                        className="flex items-start gap-3 md:gap-5"
                      >
                        <div
                          className="
                            w-10 h-10 md:w-14 md:h-14
                            rounded-xl md:rounded-2xl flex-shrink-0
                            border
                            border-white/10
                            bg-black/20
                            flex
                            items-center
                            justify-center
                          "
                        >
                          <Icon
                            size={22}
                            className="text-accent md:w-[22px] md:h-[22px]"
                          />
                        </div>

                        <div>
                          <p className="text-white/40 text-sm mb-2">
                            {item.title}
                          </p>

                          <p className="text-white/80 text-sm md:text-base break-words">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* STATUS CARD */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="
                  rounded-2xl md:rounded-[36px]
                  border
                  border-white/10
                  bg-accent/10
                  p-5 sm:p-6 md:p-8
                "
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

                  <span className="text-sm uppercase tracking-[0.2em] text-white/60">
                    Available Now
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-4 md:mb-5">
                  Open for freelance
                  <br />
                  and creative
                  <br />
                  collaborations.
                </h3>

                <p className="text-white/60 leading-relaxed">
                  Currently available for selected freelance
                  projects, creative partnerships,
                  and full stack product development.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default ContactPage;