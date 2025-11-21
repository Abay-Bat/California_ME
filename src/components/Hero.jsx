import { motion } from "framer-motion";
import truck from "../../public/truck.png";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">

        {/* LEFT SIDE CONTENT */}
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span>🤝 Welcome to</span>
          </motion.div>

          <motion.h1 className="glitch" variants={fadeInUp} whileHover={{ scale: 1.02 }}>
            MEREI&co
          </motion.h1>

          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            San Diego’s Trusted Movers
          </motion.h2>

          <motion.p className="hero-description" variants={fadeInUp}>
            SD Packing Movers specializes in convenient and reliable relocations.
            From apartments and townhomes to offices and houses, we’ve got every move covered.
          </motion.p>

          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Offers
            </motion.a>

            <motion.a
              href="#contacts"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </motion.div>

          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a href="https://instagram.com" target="_blank">
              <i className="fab fa-instagram"></i>
            </motion.a>
            <motion.a href="https://whatsapp.com" target="_blank">
              <i className="fab fa-whatsapp"></i>
            </motion.a>
            <motion.a href="https://telegram.com" target="_blank">
              <i className="fab fa-telegram"></i>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE IMAGE (NOW CORRECTLY PLACED) */}
        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div
            style={{
              marginTop: "20px",
              padding: "1.5rem",
              borderRadius: "20px",
              background: "rgba(30, 41, 59, 0.8)",
              backdropFilter: "blur(10px)",
              marginBottom: "50px",
            }}
          >
            <img
              src={truck}
              alt="Truck"
              style={{
                width: "100%",
                borderRadius: "25px",
                objectFit: "cover",
              }}
            />
          </div>

          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-content">
              <span className="card-icon">📦</span>
              <span className="card-text">
                Your belongings handled with respect and precision.
              </span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  );
};
