import { motion } from 'framer-motion';
import Button from '../components/Button';

const Sponsors = () => {
  const sponsorTiers = [
    {
      tier: "Platinum Sponsors",
      sponsors: [
        { name: "TechCorp", logo: "https://bostondynamics.com/wp-content/uploads/2023/03/Logo-v2.svg" },
        { name: "RoboTech", logo: "https://bostondynamics.com/wp-content/uploads/2023/03/Logo-v2.svg" }
      ]
    },
    {
      tier: "Gold Sponsors",
      sponsors: [
        { name: "InnovateLabs", logo: "https://bostondynamics.com/wp-content/uploads/2023/03/Logo-v2.svg" },
        { name: "FutureTech", logo: "https://bostondynamics.com/wp-content/uploads/2023/03/Logo-v2.svg" },
        { name: "AI Systems", logo: "https://bostondynamics.com/wp-content/uploads/2023/03/Logo-v2.svg" }
      ]
    },
    {
      tier: "Silver Sponsors",
      sponsors: [
        { name: "RoboWorks", logo: "https://bostondynamics.com/wp-content/uploads/2023/03/Logo-v2.svg" },
        { name: "TechStart", logo: "https://bostondynamics.com/wp-content/uploads/2023/03/Logo-v2.svg" },
        { name: "NextGen", logo: "https://bostondynamics.com/wp-content/uploads/2023/03/Logo-v2.svg" },
        { name: "BuildBot", logo: "https://bostondynamics.com/wp-content/uploads/2023/03/Logo-v2.svg" }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 backdrop-blur-lg bg-black/20 p-10 rounded-3xl border border-pink-500/30"
        >
          <h1 className="relative z-10 text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-300 mb-6">
            Our Partners in Innovation
          </h1>
          <p className="text-2xl text-gray-400 max-w-2xl mx-auto">
            Empowering the future of robotics together
          </p>
        </motion.div>

        {sponsorTiers.map((tier, tierIndex) => (
          <motion.div
          
            key={tierIndex}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: tierIndex * 0.2 }}
            viewport={{ once: true }}
            className="backdrop-blur-lg bg-black/20 rounded-3xl p-8 border border-pink-500/30 mb-12"
          >
            <div className="flex items-center justify-center mb-12">
              <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
              <h2 className="text-4xl font-bold text-white px-8">{tier.tier}</h2>
              <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {tier.sponsors.map((sponsor, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(6, 182, 212, 0.3)"
                  }}
                  className="backdrop-blur-lg bg-black/30 group relative overflow-hidden rounded-xl p-6 border border-pink-500/20 h-48 flex items-center justify-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-full h-auto filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <p className="text-pink-400 text-center font-medium">{sponsor.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="backdrop-blur-lg bg-black/20 relative overflow-hidden rounded-3xl p-16 border border-pink-500/20"
        >
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="flex flex-col items-center text-center gap-8">
            <h2 className="text-4xl font-bold text-white">Join Our Mission</h2>
            <p className="text-xl text-gray-300 max-w-2xl">
              Partner with us to shape the future of robotics and empower the next generation of innovators.
            </p>
            <Button text="Become a Sponsor" textSize="text-2xl" iconLink={<i className="ri-rocket-line text-3xl"></i>} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Sponsors;