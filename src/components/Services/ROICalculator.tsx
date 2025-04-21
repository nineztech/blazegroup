import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator } from 'lucide-react';

const ROICalculator = () => {
  const [monthlyConsumption, setMonthlyConsumption] = useState<string>('');

  const calculateResults = () => {
    const consumptionValue = Number(monthlyConsumption);
    const dailyConsumption = consumptionValue / 30;
    const kWRequired = dailyConsumption / 4;
    const annualUnitsGenerated = kWRequired * 4 * 365;

    return {
      kWRequired,
      annualUnitsGenerated
    };
  };

  const results = calculateResults();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Calculator className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Calculate Your Solar Needs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enter your monthly electricity consumption to find out your solar requirements.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Electricity Consumption (Units)
              </label>
              <input
                type="number"
                min="0"
                value={monthlyConsumption}
                onChange={(e) => setMonthlyConsumption(e.target.value)}
                className="w-full h-10 border border-gray-300 rounded-lg p-2"
                placeholder="Enter monthly consumption in units"
                title="Monthly Electricity Consumption"
              />
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Required kW Capacity</h4>
                  <p className="text-3xl font-bold text-yellow-500">{results.kWRequired.toFixed(2)} kW</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Estimated Annual Units Generated</h4>
                  <p className="text-3xl font-bold text-yellow-500">{results.annualUnitsGenerated.toFixed(0)} Units</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;