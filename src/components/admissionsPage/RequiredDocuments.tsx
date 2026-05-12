'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle2 } from 'lucide-react';

export default function RequiredDocuments() {
  const documents = [
    { category: 'Identity', items: ['Birth Certificate (Original + Copy)', 'Aadhaar Card of Student', 'Aadhaar Card of Parents'] },
    { category: 'Photographs', items: ['4 Passport size of student', '2 Passport size of parents', '1 Passport size of siblings'] },
    { category: 'Academic', items: ['Previous Report Card', 'Transfer Certificate (TC)', 'Academic Records'] },
    { category: 'Medical', items: ['Fitness certificate', 'Vaccination records', 'Relevant health documents'] },
    { category: 'Residence', items: ['Electricity/Water bill', 'Rent agreement', 'Ration card/Gov ID'] },
    { category: 'Others', items: ['Caste Certificate (if applicable)', 'Physical challenge cert', 'Parental consent letter'] }
  ];

  return (
    <section className="py-28 bg-accent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-blue/10 rounded-2xl flex items-center justify-center text-blue shadow-lg">
                <FileText size={40} />
              </div>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-navy mb-6">
              Required <span className="text-gradient-blue">Documents</span>
            </h2>
            <p className="text-navy/70 max-w-2xl mx-auto text-lg font-medium">
              Please arrange the following documents for smooth admission processing.
            </p>
          </motion.div>
        </div>

        <div className="flex justify-center mb-20">
          <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-navy/5 max-w-2xl w-full">
            <h3 className="font-heading text-xl font-black text-navy mb-6 border-b border-navy/5 pb-4">Required Documents</h3>
            <ul className="space-y-4">
              {['Birth Certificate', 'Income Certificate of guardian', 'Aadhar Card'].map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-navy/80 text-base font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-navy rounded-[3rem] p-10 md:p-12 text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute right-0 top-0 w-64 h-64 bg-blue/20 rounded-full blur-[80px]"></div>
            <h3 className="font-heading text-3xl font-bold mb-8 relative z-10 text-gold">Important Notes</h3>
            <ul className="space-y-6 relative z-10">
              <li className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-gold">1</span>
                <span className="text-white/90 font-medium pt-1">All documents must be legible and in good condition.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-gold">2</span>
                <span className="text-white/90 font-medium pt-1">Photocopies must be attested by a notary or parents.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-gold">3</span>
                <span className="text-white/90 font-medium pt-1">Original documents will be returned after verification.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] overflow-hidden aspect-[4/3] lg:aspect-auto shadow-2xl border-4 border-white"
          >
            <img 
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop" 
              alt="Documents" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
