import { motion } from "framer-motion";

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

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        Our Offers
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/local.jpg')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Local Moving Services</h3>
          <p>
            We provide fast, safe, and stress-free local moves for apartments, condos, and homes. Our trained movers handle packing, lifting, and transportation with care, ensuring your belongings arrive exactly as they left. Ideal for same-city or short-distance moves.
          </p>
          <div className="project-tech">
            <span>from $99/hour</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/packing.jpg')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Packing & Unpacking</h3>
          <p>
            Let our team take the hassle out of packing. We offer full and partial packing using high-quality materials to protect fragile items, furniture, and electronics. Whether you’re preparing for a big move or settling into a new place, we make the process smooth and organized.
          </p>
          <div className="project-tech">
            <span>from $149/flat rate</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/labor.jpg')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Labor-Only Moving Help</h3>
          <p>
            Already have a truck? Our movers can handle all the heavy lifting. We help with loading, unloading, furniture rearranging, and moving items between rooms or storage units. Perfect for customers who only need strong, careful hands on moving day.
          </p>
          <div className="project-tech">
            <span>from $79/hour</span>
            
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
