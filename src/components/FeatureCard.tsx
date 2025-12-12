import { FC } from "react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  description?: string;
};

const FeatureCard: FC<Props> = ({ title, description }) => (
  <motion.div
    whileHover={{ y: -6 }}
    className="p-6 bg-white rounded-lg shadow-sm border"
  >
    <h3 className="font-semibold text-lg">{title}</h3>
    {description && <p className="mt-2 text-gray-600">{description}</p>}
  </motion.div>
);

export default FeatureCard;
