import { motion } from "framer-motion";

const Layout = ({ children }) => (
  // <motion.div
  //   initial={{ x: 300, opacity: 0 }}
  //   animate={{ x: 0, opacity: 1 }}
  //   exit={{ x: 300, opacity: 0 }}
  //   transition={{
  //     type: "spring",
  //     stiffness: 260,
  //     damping: 20,
  //   }}
  // >
  //   {children}
  // </motion.div>

  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.2 }}
  >
    {children}
  </motion.div>
);
export default Layout;
