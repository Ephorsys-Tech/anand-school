// 'use client';
// import React from 'react';
// import { motion } from 'framer-motion';
// import { ClipboardList } from 'lucide-react';

// export default function AdmissionProcess() {
//   const steps = [
//     { step: '01', title: 'Registration', desc: 'Visit the school office to register for the admission test.' },
//     { step: '02', title: 'Admission Test', desc: 'Child appears for the admission test.' },
//     { step: '03', title: 'Documentation', desc: 'Submit the required documents (Birth Cert, Income Cert, Aadhar).' },
//     { step: '04', title: 'Confirmation', desc: 'Pay the admission fee to secure the seat.' }
//   ];

//   return (
//     <section className="py-28 bg-cream relative overflow-hidden">
//       <div className="absolute top-0 left-[-10%] w-[600px] h-[600px] bg-blue/10 rounded-full blur-[150px] pointer-events-none"></div>
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
//         <div className="text-center mb-24">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <div className="flex justify-center mb-6">
//               <div className="w-20 h-20 bg-blue/10 rounded-2xl flex items-center justify-center text-blue shadow-lg">
//                 <ClipboardList size={40} />
//               </div>
//             </div>
//             <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-navy mb-6">
//               Admission <span className="text-gradient-blue">Process</span>
//             </h2>
//             <p className="text-navy/70 max-w-2xl mx-auto text-lg font-medium">
//               Simple steps to enroll your child in Ananda School through our admission process.
//             </p>
//           </motion.div>
//         </div>

//         <div className="relative mb-24">
//           <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue/20 via-blue to-blue/20 -translate-y-1/2 z-0"></div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
//             {steps.map((item, idx) => (
//               <motion.div 
//                 key={idx} 
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="relative group"
//               >
//                 <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-navy/5 text-center group-hover:-translate-y-2 transition-transform duration-300 relative h-full">
//                   <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl bg-blue text-white font-black flex items-center justify-center text-2xl shadow-lg border-4 border-cream group-hover:bg-navy transition-colors duration-300">
//                     {item.step}
//                   </div>
//                   <h3 className="font-heading text-xl font-bold text-navy mt-6 mb-3">{item.title}</h3>
//                   <p className="text-navy/70 text-sm font-medium leading-relaxed">{item.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         <motion.div 
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="bg-gradient-to-br from-navy to-blue rounded-[3rem] p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden"
//         >
//           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
//           <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
//             <div className="group">
//               <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">📅</div>
//               <p className="text-gold font-bold text-lg mb-2 tracking-wide uppercase">Admission Period</p>
//               <p className="text-white/80 font-medium">Started till June end</p>
//             </div>
//             <div className="group border-t md:border-t-0 md:border-l border-white/20 pt-8 md:pt-0">
//               <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">⏱️</div>
//               <p className="text-gold font-bold text-lg mb-2 tracking-wide uppercase">Processing Time</p>
//               <p className="text-white/80 font-medium">3-5 working days</p>
//             </div>
//             <div className="group border-t md:border-t-0 md:border-l border-white/20 pt-8 md:pt-0">
//               <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">✅</div>
//               <p className="text-gold font-bold text-lg mb-2 tracking-wide uppercase">Confirmation</p>
//               <p className="text-white/80 font-medium">Upon doc verification & fee</p>
//             </div>
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }


'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList } from 'lucide-react';

export default function AdmissionProcess() {
  const steps = [
    { step: '01', title: 'Registration', desc: 'Visit the school office to register for the admission test.' },
    { step: '02', title: 'Admission Test', desc: 'Child appears for the admission test.' },
    { step: '03', title: 'Documentation', desc: 'Submit the required documents (Birth Cert, Income Cert, Aadhar).' },
    { step: '04', title: 'Confirmation', desc: 'Pay the admission fee to secure the seat.' }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-cream relative overflow-hidden">
      <div className="absolute top-0 left-[-10%] w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] bg-blue/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-14 sm:mb-18 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-5 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue/10 rounded-2xl flex items-center justify-center text-blue shadow-lg">
                <ClipboardList size={32} className="sm:hidden" />
                <ClipboardList size={40} className="hidden sm:block" />
              </div>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-navy mb-4 sm:mb-6 px-2">
              Admission <span className="text-gradient-blue">Process</span>
            </h2>
            <p className="text-navy/70 max-w-2xl mx-auto text-base sm:text-lg font-medium px-2">
              Simple steps to enroll your child in Ananda School through our admission process.
            </p>
          </motion.div>
        </div>

        <div className="relative mb-14 sm:mb-18 md:mb-24">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue/20 via-blue to-blue/20 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-9 lg:gap-12 relative z-10">
            {steps.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group mt-6 sm:mt-8"
              >
                <div className="bg-white p-6 sm:p-7 md:p-8 rounded-[1.5rem] sm:rounded-[2rem] shadow-xl border border-navy/5 text-center group-hover:-translate-y-2 transition-transform duration-300 relative h-full">
                  <div className="absolute -top-6 sm:-top-8 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-blue text-white font-black flex items-center justify-center text-lg sm:text-2xl shadow-lg border-2 sm:border-4 border-cream group-hover:bg-navy transition-colors duration-300">
                    {item.step}
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-navy mt-4 sm:mt-6 mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-navy/70 text-sm font-medium leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-navy to-blue rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] p-8 sm:p-10 md:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 text-center">
            <div className="group">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform inline-block">📅</div>
              <p className="text-gold font-bold text-base sm:text-lg mb-2 tracking-wide uppercase">Admission Period</p>
              <p className="text-white/80 text-sm sm:text-base font-medium">Started till June end</p>
            </div>
            <div className="group border-t md:border-t-0 md:border-l border-white/20 pt-6 sm:pt-8 md:pt-0">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform inline-block">⏱️</div>
              <p className="text-gold font-bold text-base sm:text-lg mb-2 tracking-wide uppercase">Processing Time</p>
              <p className="text-white/80 text-sm sm:text-base font-medium">3-5 working days</p>
            </div>
            <div className="group border-t md:border-t-0 md:border-l border-white/20 pt-6 sm:pt-8 md:pt-0">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform inline-block">✅</div>
              <p className="text-gold font-bold text-base sm:text-lg mb-2 tracking-wide uppercase">Confirmation</p>
              <p className="text-white/80 text-sm sm:text-base font-medium">Upon doc verification & fee</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}