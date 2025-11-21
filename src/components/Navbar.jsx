import { easeInOut, motion } from "framer-motion";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Navbar() {
  const [open, setOpen] = useState(false); // NEW

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="logo"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        MEREI&co
      </motion.div>

      {/* HAMBURGER BUTTON (visible only on mobile) */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span className={open ? "line open" : "line"}></span>
        <span className={open ? "line open" : "line"}></span>
        <span className={open ? "line open" : "line"}></span>
      </div>

      {/* DESKTOP LINKS */}
      <motion.ul
        className="nav-links"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.li variants={fadeInUp} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <a href="#home">Home</a>
        </motion.li>
        <motion.li variants={fadeInUp} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <a href="#projects">Services</a>
        </motion.li>
        <motion.li variants={fadeInUp} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <a href="#contacts">Contacts</a>
        </motion.li>
      </motion.ul>

      {/* MOBILE MENU DROPDOWN (NEW) */}
      {open && (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <a onClick={() => setOpen(false)}>Home</a>
          <a onClick={() => setOpen(false)}>Services</a>
          <a onClick={() => setOpen(false)}>Contacts</a>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;
