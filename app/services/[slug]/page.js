import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
  return [
    { slug: 'bee-star-label' },
    { slug: 'bis-crs-certification' },
    { slug: 'bis-isi-mark' },
    { slug: 'epr-e-waste' },
    { slug: 'tec-mtcte' },
    { slug: 'wpc-eta' },
    { slug: 'icet-arai' },
    { slug: 'nabl-testing' },
    { slug: 'epr-plastic-waste' },
  ];
}

export default async function ServicePage({ params }) {
  const { slug } = await params;

  const content = {
    'bee-star-label': {
      title: 'BEE Star Label',
      description: 'The scheme, launched by the Hon’ble Minister of Power in May 2006, encompasses various equipment and appliances. As of now, it applies to Room Air Conditioners (Fixed Speed and Variable Speed), Ceiling Fans, Color Televisions, Computers, Direct Cool Refrigerators, Distribution Transformers, Domestic Gas Stoves, Frost-Free Refrigerators, General Purpose Industrial Motors, Monoset Pumps, Openwell Submersible Pump Sets, Stationary Storage Type Electric Water Heaters, Submersible Pump Sets, TFL (Tube lights), Washing Machines (Semi/Top Load/Front Load), Ballasts, Solid-State Inverters, Office Automation Products, Diesel Engine-Driven Monoset Pumps for Agricultural Purposes, Diesel Generator Sets, LED Lamps, Chillers, Agricultural Pump Sets, Microwave Ovens, Solar Water Heaters, Deep Freezers, Light Commercial AC (Fixed Speed and Variable Speed), Ultra-High Definition (UHD) Televisions, Air Compressors, Tires, High Energy Li-Batteries, Side-by-Side/Multi-Door Refrigerators, Pedestal Fans, Table/Wall Fans, Solar Photovoltaic products, Office Automation Products (Printers), Packaged Boilers, and Commercial Beverage Coolers.',
      image: "/bee.jpg",
      details: (
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              Standards & Labeling Program
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              The Standards & Labeling Program is one of the major thrust areas of BEE. A key objective of this scheme is to provide the consumer an informed choice about the energy saving and thereby the cost saving potential of the relevant marketed product. The scheme targets display of energy performance labels on high energy end use equipment & appliances and lays down minimum energy performance standards.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 transition hover:shadow-md">
                 <h4 className="font-bold text-blue-900 mb-4 text-xl flex items-center gap-2">
                   Mandatory Appliances
                 </h4>
                 <ul className="space-y-2 text-gray-700 list-disc pl-5">
                   {[
                     "Room Air Conditioners", "Frost Free Refrigerators", "Tubular Fluorescent Lamps", "Distribution Transformers", 
                     "Direct Cool Refrigerators", "Color TV", "Electric Geysers", "LED Lamps", "Ceiling Fans", 
                     "Washing Machines", "Deep Freezers", "Light Commercial AC", "Tires", "Chillers", 
                     "Bevarage Coolers", "Packaged Boilers", "Solar Inverters"
                   ].map((item, i) => (
                     <li key={i}>{item}</li>
                   ))}
                 </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-xl border border-green-100 transition hover:shadow-md">
                 <h4 className="font-bold text-green-900 mb-4 text-xl flex items-center gap-2">
                   Voluntary Appliances
                 </h4>
                 <ul className="space-y-2 text-gray-700 list-disc pl-5">
                   {[
                     "Induction Motors", "Agricultural Pump Sets", "LPG Stoves", "Laptops / Notebooks", 
                     "Office Automation Products", "Solid State Inverter", "Diesel Generator Sets", 
                     "Microwave Ovens", "Solar Water Heaters", "Air Compressors", "High Energy Li-Batteries", 
                     "Fans (Table/Wall/Pedestal)", "Induction Hobs", "Side by Side Refrigerators"
                   ].map((item, i) => (
                     <li key={i}>{item}</li>
                   ))}
                 </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    'bis-crs-certification': {
      title: 'BIS CRS Certificate',
      description: 'According to the Orders, it is mandated that no individual or entity shall engage in the manufacture, storage for sale, import, sale, or distribution of goods that do not comply with the specified Indian standards outlined in the respective orders. Additionally, these goods must bear the Standard Mark with a unique registration number obtained from the Bureau of Indian Standards (BIS).',
      image: "/bis-crs.jpg",
      details: (
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">About BIS-CRS</h3>
            <div className="prose max-w-none text-gray-700">
              <ul className="space-y-4 list-none pl-0">
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 font-bold">1</div>
                  <p>The Bureau of Indian Standards facilitates the issuance of licenses to manufacturers allowing them to utilize or apply the Standard Mark, along with a unique R-number. This process is conducted through registration based on self-declaration of conformity to Indian Standards for goods and articles.</p>
                </li>
                <li className="flex gap-4">
                 <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 font-bold">2</div>
                 <p>The licensing process and its operation under the Compulsory Registration Scheme are executed in accordance with the conformity assessment scheme delineated under Scheme - II of Schedule - II of the BIS (Conformity Assessment) Regulations, 2018. This framework ensures that products adhere to the prescribed quality standards, thereby promoting consumer safety and confidence in the marketplace.</p>
                </li>
              </ul>
            </div>
          </div>
          
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-indigo-600 rounded-full"></span>
              Products Covered under Compulsory Registration Scheme
            </h3>
            
            <div className="space-y-12">
            
            {/* IT & Electronics Section */}
            <div>
              <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                IT & Electronics
              </h4>
              <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">SI. No.</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">IS No.</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Product</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { si: 1, is: "IS 13252 (Part 1)", title: "Automatic Data Processing Machine" },
                      { si: 2, is: "IS 13252 (Part 1)", title: "Laptop / Notebook / Tablet" },
                      { si: 3, is: "IS 13252 (Part 1)", title: "Visual Display Units (32\" & above)" },
                      { si: 4, is: "IS 13252 (Part 1)", title: "Printers, Plotters" },
                      { si: 5, is: "IS 13252 (Part 1)", title: "Scanners" },
                      { si: 6, is: "IS 13252 (Part 1)", title: "Wireless Keyboards" },
                      { si: 7, is: "IS 13252 (Part 1)", title: "Telephone Answering Machines" },
                      { si: 8, is: "IS 13252 (Part 1)", title: "Set Top Box" },
                      { si: 9, is: "IS 13252 (Part 1)", title: "Power Adaptors for IT Equipments" },
                      { si: 10, is: "IS 13252 (Part 1)", title: "Mobile Phones" },
                      { si: 11, is: "IS 13252 (Part 1)", title: "Cash Registers" },
                      { si: 12, is: "IS 13252 (Part 1)", title: "Point of Sale Terminals" },
                      { si: 13, is: "IS 13252 (Part 1)", title: "Copying Machines / Duplicators" },
                      { si: 14, is: "IS 13252 (Part 1)", title: "Smart Card Readers" },
                      { si: 15, is: "IS 13252 (Part 1)", title: "Mail Processing Machines" },
                      { si: 16, is: "IS 13252 (Part 1)", title: "Passport Readers" },
                      { si: 17, is: "IS 13252 (Part 1)", title: "Power Banks" },
                      { si: 18, is: "IS 13252 (Part 1)", title: "Smart Watches" },
                      { si: 19, is: "IS 13252 (Part 1)", title: "USB Type External Hard Disk Drive" },
                      { si: 20, is: "IS 13252 (Part 1)", title: "CCTV Cameras / CCTV Recorders" },
                      { si: 21, is: "IS 13252 (Part 1)", title: "Automatic Teller Cash Dispensing Machines" },
                      { si: 22, is: "IS 13252 (Part 1)", title: "USB Tape / Flash Drives" },
                      { si: 23, is: "IS 13252 (Part 1)", title: "Video Door Phones" },
                      { si: 24, is: "IS 13252 (Part 1)", title: "Finger Print Readers / Biometric Scanners" },
                      { si: 25, is: "IS 13252 (Part 1)", title: "Smart Glasses" },
                      { si: 26, is: "IS 13252 (Part 1)", title: "Solid State Devices (SSD)" },
                      { si: 27, is: "IS 616 / IS 13252", title: "Virtual Reality / Augmented Reality Headsets" },
                      { si: 28, is: "IS 13252 (Part 1)", title: "Microphones (Wireless)" },
                    ].map(row => (
                      <tr key={row.si} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-500">{row.si}</td>
                        <td className="px-6 py-4 text-sm font-medium text-blue-600">{row.is}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{row.title}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Audio / Video Section */}
            <div>
              <h4 className="text-xl font-bold text-purple-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-8 bg-purple-600 rounded-full"></span>
                Audio / Video Products
              </h4>
              <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">SI. No.</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">IS No.</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Product</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { si: 29, is: "IS 616", title: "Amplifiers (2000W and above)" },
                      { si: 30, is: "IS 616", title: "Electronic Musical Systems (>200W)" },
                      { si: 31, is: "IS 616", title: "Power Adaptors for AV Equipment" },
                      { si: 32, is: "IS 616", title: "Plasma/LCD/LED TVs (32\" & above)" },
                      { si: 33, is: "IS 616", title: "Optical Disc Players (>200W)" },
                      { si: 34, is: "IS 616", title: "Bluetooth Speakers" },
                      { si: 35, is: "IS 616", title: "Television Sets" },
                      { si: 36, is: "IS 302-2-26", title: "Electronic Clocks with Mains Power" },
                      { si: 37, is: "IS 616", title: "Wireless Headphones and Earphones" },
                      { si: 38, is: "IS 616", title: "Music Systems" },
                      { si: 39, is: "IS 616", title: "Voice Assistant Smart Speakers" },
                      { si: 40, is: "IS 616", title: "Video Games (Electronic)" },
                      { si: 41, is: "IS 616", title: "Large Format Displays / Large Screen Displays" },
                    ].map(row => (
                      <tr key={row.si} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-500">{row.si}</td>
                        <td className="px-6 py-4 text-sm font-medium text-blue-600">{row.is}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{row.title}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

             {/* Solar / Photovoltaic Section */}
             <div>
              <h4 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-8 bg-green-600 rounded-full"></span>
                Solar / Photovoltaic
              </h4>
              <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">SI. No.</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">IS No.</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Product</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { si: 42, is: "IS 14286", title: "Crystalline Silicon Terrestrial PV Modules" },
                      { si: 43, is: "IS 16077", title: "Thin-Film Terrestrial PV Modules" },
                      { si: 44, is: "IS 16221 (Part 2)", title: "Power Inverters for PV Systems" },
                      { si: 45, is: "IS 16221 (Part 2)", title: "Utility-Interconnected PV Inverters" },
                      { si: 46, is: "IS 16270", title: "Storage Battery for Solar Applications" },
                      { si: 47, is: "IS 16221", title: "Solar Inverters (Grid Tied)" },
                    ].map(row => (
                      <tr key={row.si} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-500">{row.si}</td>
                        <td className="px-6 py-4 text-sm font-medium text-blue-600">{row.is}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{row.title}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Lighting & Batteries */}
            <div>
              <h4 className="text-xl font-bold text-orange-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-8 bg-orange-600 rounded-full"></span>
                Lighting, Batteries & Others
              </h4>
              <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">SI. No.</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">IS No.</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Product</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                       { si: 48, is: "IS 15885 (Part 2/Sec 13)", title: "DC or AC Supplied Electronic Controlgear for LED Modules" },
                       { si: 49, is: "IS 16102 (Part 1)", title: "Self-Ballasted LED Lamps" },
                       { si: 50, is: "IS 10322 (Part 5)", title: "Fixed General Purpose LED Luminaires" },
                       { si: 51, is: "IS 16102 (Part 1)", title: "LED Lights" },
                       { si: 52, is: "IS 16046 (Part 1)", title: "Sealed Secondary Cells / Batteries (Nickel Systems)" },
                       { si: 53, is: "IS 16046 (Part 2)", title: "Sealed Secondary Cells / Batteries (Lithium Systems)" },
                       { si: 54, is: "IS 16242 (Part 1)", title: "UPS / Inverters rating <= 5kVA" },
                       { si: 55, is: "IS 16102 (Part 2)", title: "Control Gear for LED Modules" },
                       { si: 56, is: "IS 10322", title: "Flood Lights (LED)" },
                       { si: 57, is: "IS 10322", title: "Street Lights (LED)" },
                       { si: 58, is: "IS 10322", title: "LED Tube Lights" },
                       { si: 59, is: "IS 10322", title: "Downlights (LED)" },
                       { si: 60, is: "IS 16108", title: "LED Drivers" },
                       { si: 61, is: "IS 16106", title: "LED Modules" },
                       { si: 62, is: "IS 16105", title: "Emergency Lighting Units" },
                       { si: 63, is: "IS 16104", title: "Chain Lights / Rope Lights" },
                       { si: 64, is: "(Chemical)", title: "Ortho Phosphoric Acid" },
                       { si: 65, is: "(Chemical)", title: "Polyphosphoric Acid" },
                       { si: 66, is: "(Chemical)", title: "Trimethyl Phosphite" },
                       { si: 67, is: "(Industrial)", title: "Low – Voltage switchgear and controlgear" },
                       { si: 68, is: "(Other)", title: "Transformers for Low Voltage" },
                       { si: 69, is: "(Other)", title: "Smart Meters" },
                       { si: 70, is: "(Other)", title: "Electric Iron (Steam)" },
                       { si: 71, is: "(Other)", title: "Induction Stove" },
                       { si: 72, is: "(Other)", title: "Rice Cooker" },
                       { si: 73, is: "(Other)", title: "Microwave Oven" },
                       { si: 74, is: "(Other)", title: "Vacuum Cleaner" },
                       { si: 75, is: "(Other)", title: "Room Heaters" },
                       { si: 76, is: "(Other)", title: "Hair Dryers/Stylers" },
                       { si: 77, is: "(Other)", title: "Massagers" },
                    ].map(row => (
                      <tr key={row.si} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-500">{row.si}</td>
                        <td className="px-6 py-4 text-sm font-medium text-blue-600">{row.is}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{row.title}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <a href="http://crsbis.in/BIS/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 hover:underline">
                Visit Official Website for Complete List
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </div>
          </div>
          </div>

        </div>
      )
    },
    'bis-isi-mark': {
      title: 'BIS ISI Mark (FMCS)',
      image: '/bis-crs.jpg',
      description: 'Bureau of Indian Standards (BIS), which is indeed the national standard body of India. Established under the BIS Act of 2016, its primary mandate is to oversee standardization, marking, and quality certification of goods. This encompasses ensuring the safety, reliability, and quality of products in the market.\n\nAccording to the Orders, it is mandated that no individual or entity shall engage in the manufacture, storage for sale, import, sale, or distribution of goods that do not comply with the specified Indian standards outlined in the respective orders. Additionally, these goods must bear the Standard Mark with a unique registration number obtained from the Bureau of Indian Standards (BIS).\n\nThe coveted ISI mark on a product signifies its adherence to the specific Indian Standard (IS) developed by the BIS. Obtaining the ISI mark involves a rigorous procedure, including product testing in a BIS-recognized laboratory and a thorough inspection of the manufacturing facility.',
      details: (
        <div className="space-y-12">
          
          {/* Cement Section */}
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-gray-600 rounded-full"></span>
              Cement (Construction Materials)
            </h4>
            <div className="bg-white border rounded-lg shadow-sm overflow-hidden p-6">
              <p className="text-gray-600 mb-4">Any variety of cement manufactured or sold in India, including:</p>
              <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 list-disc pl-5 text-sm text-gray-700">
                <li>Ordinary Portland Cement</li>
                <li>Portland Pozzolana Cement</li>
                <li>Portland Slag Cement</li>
                <li>White Portland Cement</li>
                <li>Oil Well Cement</li>
                <li>Low Heat Portland Cement</li>
              </ul>
            </div>
          </div>

          {/* Electrical Section */}
          <div>
            <h4 className="text-xl font-bold text-yellow-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-yellow-500 rounded-full"></span>
              Household Electrical Goods & Appliances
            </h4>
            <div className="bg-white border rounded-lg shadow-sm overflow-hidden p-6">
              <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 list-disc pl-5 text-sm text-gray-700">
                 <li>Electric Iron</li>
                 <li>Electric Immersion Water Heater</li>
                 <li>Electric Radiators</li>
                 <li>Electric Stove</li>
                 <li>Switches for Domestic and Similar Purposes</li>
                 <li>2 Amp Switches</li>
                 <li>3 Pin Plugs and Socket Outlets</li>
                 <li>Electric Mixer / Grinders</li>
                 <li>Room Air Conditioners</li>
                 <li>Frost Free Refrigerators</li>
                 <li>Domestic Electric Food Mixers</li>
              </ul>
            </div>
          </div>

          {/* Batteries Section */}
          <div>
            <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
              Batteries
            </h4>
            <div className="bg-white border rounded-lg shadow-sm overflow-hidden p-6">
              <ul className="list-disc pl-5 text-sm text-gray-700">
                 <li>Dry Primary Batteries for Flashlights</li>
                 <li>Lead Acid Batteries</li>
              </ul>
            </div>
          </div>

          {/* Food Products */}
          <div>
            <h4 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-green-600 rounded-full"></span>
              Food & Related Products
            </h4>
            <div className="bg-white border rounded-lg shadow-sm overflow-hidden p-6">
              <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 list-disc pl-5 text-sm text-gray-700">
                 <li>Milk Powder</li>
                 <li>Condensed Milk</li>
                 <li>Skimmed Milk Powder</li>
                 <li>Infant Milk Food</li>
                 <li>Packaged Drinking Water</li>
                 <li>Mineral Water</li>
                 <li>Cocoa Powder</li>
              </ul>
            </div>
          </div>

           {/* Industrial & Safety */}
           <div>
            <h4 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-red-600 rounded-full"></span>
              Industrial & Safety Equipment
            </h4>
            <div className="bg-white border rounded-lg shadow-sm overflow-hidden p-6">
               <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 list-disc pl-5 text-sm text-gray-700">
                 <li>Oil Pressure Stoves</li>
                 <li>Automobile Accessories (Tyres, Tubes, Safety Glass)</li>
                 <li>Cylinders, Valves and Regulators</li>
                 <li>Medical Equipment (X-Ray equipment, etc.)</li>
                 <li>Steel and Iron Products (Bars, Wires, Sheets, Tubes)</li>
                 <li>Electrical Transformers</li>
                 <li>Electrical Motors</li>
                 <li>Capacitors</li>
                 <li>Chemicals, Fertilizers, Polymers & Textiles</li>
                 <li>Domestic Water Heaters for use with LPG</li>
                 <li>Air Conditioners and their related Parts, Hermetic Compressors and Temperature Sensing Controls</li>
                 <li>Domestic Pressure Cookers</li>
                 <li>Protective Helmets</li>
                 <li>Gas Stoves</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <a href="https://www.bis.gov.in/product-certification/products-under-compulsory-certification/scheme-i-mark-scheme/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 hover:underline">
              Visit Official BIS Website for Complete List
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
      )
    },
    'epr-e-waste': {
      title: 'EPR For E-Waste',
      image: '/electronic-waste.jpg',
      description: 'The E-Waste (Management) Rules, 2022 shall apply to every Manufacturer, Producer, Recycler, Refurbisher, and Dismantler involved in the manufacture, sale, transfer, purchase, refurbishing, dismantling, recycling, and processing of e-waste or electrical and electronic equipment listed in Schedule I, including their components, consumables, parts and spares which make the product operational.',
      details: (
        <div className="space-y-12">
          
          <div className="bg-green-50 border border-green-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-green-900 mb-4">Extended Producer Responsibility (EPR)</h3>
            <p className="text-green-800 leading-relaxed text-lg">
              EPR is the responsibility of any producer of electrical or electronic equipment serving strictly for channelization of e-waste to ensure environmentally sound management of such waste. Extended Producer Responsibility may comprise of implementing take back system or setting up of collection centres or both and having agreed arrangements with authorized dismantler or recycler either individually or collectively through a Producer Responsibility Organization recognised by producer or producers in their Extended Producer Responsibility – Authorisation.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Schedule I: Categories of EEE Covered</h3>
            <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
              <div className="max-h-[600px] overflow-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50 sticky top-0">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider w-24">Sl. No.</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Categories of Electrical and Electronic Equipment</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider w-48">Electrical and Electronic Equipment Code</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 text-sm">
                    {/* I. Information Technology & Telecom */}
                    <tr className="bg-gray-50">
                      <td colSpan="3" className="px-6 py-3 font-bold text-gray-900 border-b">i. Information Technology and Telecommunication Equipment</td>
                    </tr>
                    {[
                      { sl: 1, name: "Centralised data processing: Mainframes", code: "ITEW1" },
                      { sl: 2, name: "Centralised data processing: Minicomputers", code: "ITEW2" },
                      { sl: 3, name: "Personal Computing: Personal Computers (Central Processing Unit with input and output devices)", code: "ITEW3" },
                      { sl: 4, name: "Personal Computing: Laptop Computers (Central Processing Unit with input and output devices)", code: "ITEW4" },
                      { sl: 5, name: "Personal Computing: Notebook Computers", code: "ITEW5" },
                      { sl: 6, name: "Personal Computing: Notepad Computers", code: "ITEW6" },
                      { sl: 7, name: "Printers including cartridges", code: "ITEW7" },
                      { sl: 8, name: "Copying Equipment", code: "ITEW8" },
                      { sl: 9, name: "Electrical and electronic typewriters", code: "ITEW9" },
                      { sl: 10, name: "User terminals and systems", code: "ITEW10" },
                      { sl: 11, name: "Facsimile", code: "ITEW11" },
                      { sl: 12, name: "Telex", code: "ITEW12" },
                      { sl: 13, name: "Telephones", code: "ITEW13" },
                      { sl: 14, name: "Pay telephones", code: "ITEW14" },
                      { sl: 15, name: "Cordless telephones", code: "ITEW15" },
                      { sl: 16, name: "Cellular telephones", code: "ITEW16" },
                      { sl: 17, name: "Answering systems", code: "ITEW17" },
                      { sl: 18, name: "Products or equipment of transmitting sound, images or other information by telecommunications", code: "ITEW18" },
                      { sl: 19, name: "Base Transceiver Station (BTS) (all components excluding structure of tower)", code: "ITEW19" }, 
                      { sl: 20, name: "Tablets, I-PAD", code: "ITEW20" },
                      { sl: 21, name: "Phablets", code: "ITEW21" },
                      { sl: 22, name: "Scanners", code: "ITEW22" },
                      { sl: 23, name: "Routers", code: "ITEW23" },
                      { sl: 24, name: "GPS", code: "ITEW24" },
                      { sl: 25, name: "UPS", code: "ITEW25" },
                      { sl: 26, name: "Inverter", code: "ITEW26" },
                      { sl: 27, name: "Modems", code: "ITEW27" },
                      { sl: 28, name: "Electronic data storage devices", code: "ITEW28" }, // Some lists go up to 28 or have nuances. Stick to known ones.
                    ].map((row) => (
                       <tr key={row.code} className="hover:bg-gray-50">
                         <td className="px-6 py-4 text-gray-500">{row.sl}</td>
                         <td className="px-6 py-4 text-gray-900">{row.name}</td>
                         <td className="px-6 py-4 font-mono text-blue-600 font-medium">{row.code}</td>
                       </tr>
                    ))}

                    {/* II. Consumer Electricals */}
                    <tr className="bg-gray-50">
                       <td colSpan="3" className="px-6 py-3 font-bold text-gray-900 border-b border-t">ii. Consumer Electrical and Electronics and Photovoltaic Panels</td>
                    </tr>
                    {[
                       { sl: 1, name: "Television sets (including sets based on Liquid Crystal Display and Light Emitting Diode technology)", code: "CEEW1" },
                       { sl: 2, name: "Refrigerator", code: "CEEW2" },
                       { sl: 3, name: "Washing Machine", code: "CEEW3" },
                       { sl: 4, name: "Air-conditioners excluding centralized air conditioning plants", code: "CEEW4" },
                       { sl: 5, name: "Fluorescent and other Mercury containing lamps", code: "CEEW5" },
                    ].map((row) => (
                       <tr key={row.code} className="hover:bg-gray-50">
                         <td className="px-6 py-4 text-gray-500">{row.sl}</td>
                         <td className="px-6 py-4 text-gray-900">{row.name}</td>
                         <td className="px-6 py-4 font-mono text-blue-600 font-medium">{row.code}</td>
                       </tr>
                    ))}

                    {/* III. Large and Small Electrical and Electronic Equipment */}
                    <tr className="bg-gray-50">
                       <td colSpan="3" className="px-6 py-3 font-bold text-gray-900 border-b border-t">iii. Large and Small Electrical and Electronic Equipment</td>
                    </tr>
                    {[
                        { sl: 1, name: "Large cooling appliances", code: "LSEEW1" },
                        { sl: 2, name: "Freezers", code: "LSEEW2" },
                        { sl: 3, name: "Other large appliances used for refrigeration, conservation and storage of food", code: "LSEEW3" },
                        { sl: 4, name: "Clothes dryers", code: "LSEEW4" },
                        { sl: 5, name: "Dish washing machines", code: "LSEEW5" },
                        { sl: 6, name: "Electric cookers", code: "LSEEW6" },
                        { sl: 7, name: "Electric stoves", code: "LSEEW7" },
                        { sl: 8, name: "Electric hot plates", code: "LSEEW8" },
                        { sl: 9, name: "Microwaves", code: "LSEEW9" },
                        { sl: 10, name: "Other cooking appliances", code: "LSEEW10" },
                        { sl: 11, name: "Electric heating appliances", code: "LSEEW11" },
                        { sl: 12, name: "Electric radiators", code: "LSEEW12" },
                        { sl: 13, name: "Other appliances for heating rooms, beds, seating furniture and other electric heating appliances", code: "LSEEW13" },
                        { sl: 14, name: "Electric fans", code: "LSEEW14" },
                        { sl: 15, name: "Air conditioner appliance", code: "LSEEW15" },
                        { sl: 16, name: "Other fanning, exhaust ventilation and conditioning equipment", code: "LSEEW16" },
                        { sl: 17, name: "Vacuum cleaners", code: "LSEEW17" },
                        { sl: 18, name: "Carpet sweepers", code: "LSEEW18" },
                        { sl: 19, name: "Other appliances for cleaning", code: "LSEEW19" },
                        { sl: 20, name: "Appliances for sewing, knitting, weaving and other processing for textiles", code: "LSEEW20" },
                        { sl: 21, name: "Iron and other appliances for ironing, mangling and other care of clothing", code: "LSEEW21" },
                        { sl: 22, name: "Toasters", code: "LSEEW22" },
                        { sl: 23, name: "Fryers", code: "LSEEW23" },
                        { sl: 24, name: "Grinders, coffee machines and equipment for opening or sealing containers or packages", code: "LSEEW24" },
                        { sl: 25, name: "Electric knives", code: "LSEEW25" },
                        { sl: 26, name: "Appliances for hair cutting, hair drying, tooth brushing, shaving, massage and other body care appliances", code: "LSEEW26" },
                        { sl: 27, name: "Clocks, watches and equipment for the purpose of measuring, indicating or registering time", code: "LSEEW27" },
                        { sl: 28, name: "Scales", code: "LSEEW28" },
                        { sl: 29, name: "Automatic dispensers", code: "LSEEW29" },
                        { sl: 30, name: "Indoor air purifier", code: "LSEEW30" },
                        { sl: 31, name: "Hair dryer", code: "LSEEW31" },
                        { sl: 32, name: "Electric shaver", code: "LSEEW32" },
                        { sl: 33, name: "Electric kettle", code: "LSEEW33" },
                        { sl: 34, name: "Electronic display panels / board / visual display unit", code: "LSEEW34" }
                    ].map((row) => (
                       <tr key={row.code} className="hover:bg-gray-50">
                         <td className="px-6 py-4 text-gray-500">{row.sl}</td>
                         <td className="px-6 py-4 text-gray-900">{row.name}</td>
                         <td className="px-6 py-4 font-mono text-blue-600 font-medium">{row.code}</td>
                       </tr>
                    ))}

                    {/* IV. Electrical and Electronic Tools */}
                    <tr className="bg-gray-50">
                       <td colSpan="3" className="px-6 py-3 font-bold text-gray-900 border-b border-t">iv. Electrical and Electronic Tools (Except large scale stationary industrial tools)</td>
                    </tr>
                    {[
                        { sl: 1, name: "Drills", code: "EETW1" },
                        { sl: 2, name: "Saws", code: "EETW2" },
                        { sl: 3, name: "Sewing machines", code: "EETW3" },
                        { sl: 4, name: "Equipment for turning, milling, sanding, grinding, sawing, cutting, shearing, drilling, making holes, punching, folding, bending or similar processing of wood, metal and other materials", code: "EETW4" },
                        { sl: 5, name: "Tools for riveting, nailing or screwing or removing rivets, nails, screws or for similar uses", code: "EETW5" },
                        { sl: 6, name: "Tools for welding, soldering or similar use", code: "EETW6" },
                        { sl: 7, name: "Equipment for spraying, spreading, dispersing or other treatment of liquid or gaseous substances by other means", code: "EETW7" },
                        { sl: 8, name: "Tools for mowing or other gardening activities", code: "EETW8" }
                    ].map((row) => (
                       <tr key={row.code} className="hover:bg-gray-50">
                         <td className="px-6 py-4 text-gray-500">{row.sl}</td>
                         <td className="px-6 py-4 text-gray-900">{row.name}</td>
                         <td className="px-6 py-4 font-mono text-blue-600 font-medium">{row.code}</td>
                       </tr>
                    ))}

                    {/* V. Toys, Leisure and Sports Equipment */}
                    <tr className="bg-gray-50">
                       <td colSpan="3" className="px-6 py-3 font-bold text-gray-900 border-b border-t">v. Toys, Leisure and Sports Equipment</td>
                    </tr>
                    {[
                        { sl: 1, name: "Electric trains or car racing sets", code: "TLEW1" },
                        { sl: 2, name: "Hand-held video game consoles", code: "TLEW2" },
                        { sl: 3, name: "Video games", code: "TLEW3" },
                        { sl: 4, name: "Computers for biking, diving, running, rowing, etc.", code: "TLEW4" },
                        { sl: 5, name: "Sports equipment with electric or electronic components", code: "TLEW5" },
                        { sl: 6, name: "Coin slot machines", code: "TLEW6" }
                    ].map((row) => (
                       <tr key={row.code} className="hover:bg-gray-50">
                         <td className="px-6 py-4 text-gray-500">{row.sl}</td>
                         <td className="px-6 py-4 text-gray-900">{row.name}</td>
                         <td className="px-6 py-4 font-mono text-blue-600 font-medium">{row.code}</td>
                       </tr>
                    ))}

                    {/* VI. Medical Devices */}
                     <tr className="bg-gray-50">
                       <td colSpan="3" className="px-6 py-3 font-bold text-gray-900 border-b border-t">vi. Medical Devices (Except all implanted and infected products)</td>
                    </tr>
                    {[
                        { sl: 1, name: "Radiotherapy equipment", code: "MDEW1" },
                        { sl: 2, name: "Cardiology equipment", code: "MDEW2" },
                        { sl: 3, name: "Dialysis equipment", code: "MDEW3" },
                        { sl: 4, name: "Pulmonary ventilators", code: "MDEW4" },
                        { sl: 5, name: "Nuclear medicine equipment", code: "MDEW5" },
                        { sl: 6, name: "Laboratory equipment for in-vitro diagnosis", code: "MDEW6" },
                        { sl: 7, name: "Analysers", code: "MDEW7" },
                        { sl: 8, name: "Freezers", code: "MDEW8" },
                        { sl: 9, name: "Fertilization tests", code: "MDEW9" },
                        { sl: 10, name: "Other appliances for detecting, preventing, monitoring, treating, alleviating illness, injury or disability", code: "MDEW10" }
                    ].map((row) => (
                       <tr key={row.code} className="hover:bg-gray-50">
                         <td className="px-6 py-4 text-gray-500">{row.sl}</td>
                         <td className="px-6 py-4 text-gray-900">{row.name}</td>
                         <td className="px-6 py-4 font-mono text-blue-600 font-medium">{row.code}</td>
                       </tr>
                    ))}

                    {/* VII. Medical Devices */}
                     <tr className="bg-gray-50">
                       <td colSpan="3" className="px-6 py-3 font-bold text-gray-900 border-b border-t">vii. Monitoring and Control Instruments</td>
                    </tr>
                    {[
                        { sl: 1, name: "Smoke detector", code: "MCEW1" },
                        { sl: 2, name: "Heating regulators", code: "MCEW2" },
                        { sl: 3, name: "Thermostats", code: "MCEW3" },
                        { sl: 4, name: "Measuring, weighing or adjusting appliances for household or as laboratory equipment", code: "MCEW4" },
                         { sl: 5, name: "Other monitoring and control instruments used in industrial installations (e.g. in control panels)", code: "MCEW5" }
                    ].map((row) => (
                       <tr key={row.code} className="hover:bg-gray-50">
                         <td className="px-6 py-4 text-gray-500">{row.sl}</td>
                         <td className="px-6 py-4 text-gray-900">{row.name}</td>
                         <td className="px-6 py-4 font-mono text-blue-600 font-medium">{row.code}</td>
                       </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500 italic">
               *This list is indicative of Schedule I. For the full comprehensive list of all 100+ items including Medical Devices, Solar Panels, etc., please refer to the official notification.
            </p>
          </div>

          <div>
             <h3 className="text-xl font-bold text-gray-900 mb-4">Manufacturer Responsibilities</h3>
             <ul className="space-y-3">
               <li className="flex items-start gap-3">
                 <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                 <span className="text-gray-700">Register on the portal and collect e-waste generated during manufacture.</span>
               </li>
               <li className="flex items-start gap-3">
                 <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                 <span className="text-gray-700">Ensure recycling or disposal through registered recyclers.</span>
               </li>
               <li className="flex items-start gap-3">
                 <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                 <span className="text-gray-700">File annual and quarterly returns on the portal.</span>
               </li>
             </ul>
          </div>

          <div className="mt-8 flex justify-end">
            <a href="https://cpcb.nic.in/e-waste/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 hover:underline">
              Visit CPCB Website for Complete Guidelines
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
      )
    },
    'tec-mtcte': {
      title: 'TEC MTCTE Certification',
      image: '/giv.png',
      description: 'The Department of Telecommunications, Ministry of Communications, notified the "Indian Telegraph (Amendment) Rules" in the Gazette of India via G.S.R. 1131(E) PART XI on September 5, 2017, mandating Mandatory Testing and Certification of Telecommunication Equipment.',
      details: (
        <div className="space-y-12">
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Mandatory Testing and Certification of Telecommunication Equipment (MTCTE)</h3>
            <p className="text-blue-800 leading-relaxed text-lg mb-4">
              Telecommunication equipment used in the Indian telecom network must undergo mandatory testing and certification as per the parameters prescribed by the Telecommunication Engineering Centre (TEC). This regime ensures that equipment does not degrade network performance, is safe for end-users, protects against radio frequency emissions, and complies with national and international standards.
            </p>
            <p className="text-blue-800 font-semibold">
               Effective from 2019, certification is being rolled out in phases.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">List of Notified Products (Phases I - V)</h3>
            <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
              <div className="max-h-[600px] overflow-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50 sticky top-0">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider w-16">Sl. No.</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Product / Variant Name</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider w-32">Phase</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider w-48">Mandatory Date</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 text-sm">
                    {/* Phase 1 */}
                    <tr className="bg-gray-50">
                      <td colSpan="4" className="px-6 py-3 font-bold text-gray-900 border-b border-t text-sm">Phase-I (Mandatory from Oct 1, 2019)</td>
                    </tr>
                    {[
                      { sl: 1, name: "2-Line Feature Phone", phase: "I", date: "Oct 1, 2019" },
                      { sl: 2, name: "CLIP Phone", phase: "I", date: "Oct 1, 2019" },
                      { sl: 3, name: "Coin Box Telephone", phase: "I", date: "Oct 1, 2019" },
                      { sl: 4, name: "Electronic Telephone Instrument", phase: "I", date: "Oct 1, 2019" },
                      { sl: 5, name: "Executive Telephone System", phase: "I", date: "Oct 1, 2019" },
                      { sl: 6, name: "Key Telephone Systems", phase: "I", date: "Oct 1, 2019" },
                      { sl: 7, name: "Modem (V.90 / V.92 / V.21-V.34)", phase: "I", date: "Oct 1, 2019" },
                      { sl: 8, name: "G3 Fax Machine", phase: "I", date: "Oct 1, 2019" },
                      { sl: 9, name: "ISDN Terminal / CPE", phase: "I", date: "Oct 1, 2019" },
                      { sl: 10, name: "Cordless Telephone", phase: "I", date: "Oct 1, 2019" },
                      { sl: 11, name: "Private Automatic Branch Exchange (PABX)", phase: "I", date: "Oct 1, 2019" },
                    ].map((row) => (
                       <tr key={row.name} className="hover:bg-gray-50">
                         <td className="px-6 py-4 text-gray-500">{row.sl}</td>
                         <td className="px-6 py-4 text-gray-900">{row.name}</td>
                         <td className="px-6 py-4 text-gray-600 font-medium">{row.phase}</td>
                         <td className="px-6 py-4 text-gray-600 whitespace-nowrap">{row.date}</td>
                       </tr>
                    ))}

                    {/* Phase 2 */}
                    <tr className="bg-gray-50">
                      <td colSpan="4" className="px-6 py-3 font-bold text-gray-900 border-b border-t text-sm">Phase-II (Mandatory from Oct 1, 2020)</td>
                    </tr>
                    {[
                      { sl: 12, name: "PON OLT", phase: "II", date: "Oct 1, 2020" },
                      { sl: 13, name: "PON ONT", phase: "II", date: "Oct 1, 2020" },
                      { sl: 14, name: "Transmission Terminal Equipment (SDH, Multiplexing)", phase: "II", date: "Oct 1, 2020" },
                    ].map((row) => (
                       <tr key={row.name} className="hover:bg-gray-50">
                         <td className="px-6 py-4 text-gray-500">{row.sl}</td>
                         <td className="px-6 py-4 text-gray-900">{row.name}</td>
                         <td className="px-6 py-4 text-gray-600 font-medium">{row.phase}</td>
                         <td className="px-6 py-4 text-gray-600 whitespace-nowrap">{row.date}</td>
                       </tr>
                    ))}

                    {/* Phase 3 */}
                    <tr className="bg-gray-50">
                      <td colSpan="4" className="px-6 py-3 font-bold text-gray-900 border-b border-t text-sm">Phase-III (Mandatory from 2023-2024)</td>
                    </tr>
                    {[
                      { sl: 15, name: "Smart Electricity Meter", phase: "III", date: "Oct 1, 2024" },
                      { sl: 16, name: "End Point Device for Environmental Monitoring", phase: "III", date: "Oct 1, 2023" },
                      { sl: 17, name: "Cellular Network Repeater (GSM/WCDMA)", phase: "III", date: "Jan 1, 2024" },
                      { sl: 18, name: "Compact Cellular Network", phase: "III", date: "Jan 1, 2024" },
                      { sl: 19, name: "Router", phase: "III", date: "Oct 1, 2023" },
                      { sl: 20, name: "LAN Switch", phase: "III", date: "Oct 1, 2023" },
                      { sl: 21, name: "IoT Gateway", phase: "III", date: "Oct 1, 2023" },
                      { sl: 22, name: "Tracking Device (with embedded SIM)", phase: "III", date: "Oct 1, 2023" },
                      { sl: 23, name: "Wi-Fi Access Points & CPE", phase: "III", date: "Jan 1, 2024" },
                    ].map((row) => (
                       <tr key={row.name} className="hover:bg-gray-50">
                         <td className="px-6 py-4 text-gray-500">{row.sl}</td>
                         <td className="px-6 py-4 text-gray-900">{row.name}</td>
                         <td className="px-6 py-4 text-gray-600 font-medium">{row.phase}</td>
                         <td className="px-6 py-4 text-gray-600 whitespace-nowrap">{row.date}</td>
                       </tr>
                    ))}

                    {/* Phase 4 */}
                    <tr className="bg-gray-50">
                      <td colSpan="4" className="px-6 py-3 font-bold text-gray-900 border-b border-t text-sm">Phase-IV (Mandatory from 2024)</td>
                    </tr>
                    {[
                      { sl: 24, name: "Optical Fibre Cable", phase: "IV", date: "Aug 1, 2024" },
                      { sl: 25, name: "Satellite Communication Equipment", phase: "IV", date: "Oct 1, 2024" },
                      { sl: 26, name: "SIM", phase: "IV", date: "Sep 30, 2024" },
                      { sl: 27, name: "VHF UHF Radio Equipment", phase: "IV", date: "Sep 30, 2024" },
                      { sl: 28, name: "Mobile Radio Trunking System", phase: "IV", date: "Jan 1, 2024" },
                      { sl: 29, name: "Router (High Capacity)", phase: "IV", date: "Aug 1, 2024" },
                      { sl: 30, name: "Radio Broadcast Receiver", phase: "IV", date: "Aug 1, 2024" },
                    ].map((row) => (
                       <tr key={row.name} className="hover:bg-gray-50">
                         <td className="px-6 py-4 text-gray-500">{row.sl}</td>
                         <td className="px-6 py-4 text-gray-900">{row.name}</td>
                         <td className="px-6 py-4 text-gray-600 font-medium">{row.phase}</td>
                         <td className="px-6 py-4 text-gray-600 whitespace-nowrap">{row.date}</td>
                       </tr>
                    ))}

                     {/* Phase 5 */}
                    <tr className="bg-gray-50">
                      <td colSpan="4" className="px-6 py-3 font-bold text-gray-900 border-b border-t text-sm">Phase-V (Mandatory from July 2024)</td>
                    </tr>
                    {[
                      { sl: 31, name: "Base Station for Cellular Network for 5G", phase: "V", date: "Jul 1, 2024" },
                      { sl: 32, name: "5G Core", phase: "V", date: "Jul 1, 2024" },
                      { sl: 33, name: "Hypervisor", phase: "V", date: "Jul 1, 2024" },
                      { sl: 34, name: "E-band Fixed Radio Relay Systems", phase: "V", date: "Jul 1, 2024" },
                      { sl: 35, name: "Converged Multi Service Application Access Equipment", phase: "V", date: "Jul 1, 2024" },
                      { sl: 36, name: "IP Terminal", phase: "V", date: "Jul 1, 2024" },
                      { sl: 37, name: "Hybrid Set Top Box", phase: "V", date: "Jul 1, 2024" },
                    ].map((row) => (
                       <tr key={row.name} className="hover:bg-gray-50">
                         <td className="px-6 py-4 text-gray-500">{row.sl}</td>
                         <td className="px-6 py-4 text-gray-900">{row.name}</td>
                         <td className="px-6 py-4 text-gray-600 font-medium">{row.phase}</td>
                         <td className="px-6 py-4 text-gray-600 whitespace-nowrap">{row.date}</td>
                       </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
             <p className="mt-4 text-sm text-gray-500 italic">
               *Note: Mandatory certification dates are subject to change and extension by TEC. Please refer to official notifications for the latest schedule.
            </p>
          </div>

          <div>
             <h3 className="text-xl font-bold text-gray-900 mb-4">Why MTCTE Certification?</h3>
             <ul className="space-y-3">
               <li className="flex items-start gap-3">
                 <svg className="w-6 h-6 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                 <span className="text-gray-700"><strong>Legal Requirement:</strong> Mandatory for selling or importing telecom equipment in India.</span>
               </li>
               <li className="flex items-start gap-3">
                 <svg className="w-6 h-6 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                 <span className="text-gray-700"><strong>Market Access:</strong> Essential for government tenders and large-scale deployments.</span>
               </li>
               <li className="flex items-start gap-3">
                 <svg className="w-6 h-6 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                 <span className="text-gray-700"><strong>Quality Assurance:</strong> Ensures equipment meets safety and performance standards.</span>
               </li>
             </ul>
          </div>

           <div className="mt-8 flex justify-end">
            <a href="https://www.mtcte.tec.gov.in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 hover:underline">
              Official TEC MTCTE Portal
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
      )
    },
    'wpc-eta': {
      title: 'WPC ETA Approval',
      image: '/wpc.jpg',
      description: (
        <>
          <p className="mb-4 leading-relaxed">
            <strong className="text-red-600">Equipment Type Approval through Self-Declaration (WPC ETA-SD)</strong> is mandatory for wireless products operating in delicensed frequency bands in India for commercial use. Approval is based on RF characteristics including bandwidth, emission, and power, meeting specified limits in WPC notifications. All such products must be certified by WPC before deployment in India.
          </p>
          <p className="mb-4 leading-relaxed">
            ETA requirement for categories of mobiles, laptops, electronic notepads, smart watches, Short Range Devices (including accessories), microphones, speakers, headphones, earphones, printers, scanners, cameras etc. and Test & Measurement equipment operating in license exempt bands as permitted in India.
          </p>
        </>
      ),
      details: (
        <div className="space-y-12">
          
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">Equipment Type Approval (ETA) - WPC</h3>
            <p className="text-indigo-800 leading-relaxed text-lg">
              Equipment Type Approval (ETA) is a mandatory requirement for all wireless and Bluetooth products operating in de-licensed frequency bands in India. Issued by the Wireless Planning & Coordination (WPC) Wing of the Department of Telecommunications (DoT), this approval ensures that devices comply with the permitted frequency, power, and bandwidth parameters to prevent interference with other communication services.
            </p>
          </div>

          <div>
             <h3 className="text-2xl font-bold text-gray-900 mb-6">De-Licensed Frequency Bands in India</h3>
             <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider w-1/3">Frequency Band</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Typical Applications</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 text-sm">
                    {[
                      { band: "2.4 GHz - 2.4835 GHz", app: "Wi-Fi, Bluetooth, Zigbee, Cordless Phones, Drones, Wireless Microphones" },
                      { band: "5.150 GHz - 5.350 GHz", app: "Wireless Access Systems (WAS), RLAN (Wi-Fi 5/6), Indoor usage" },
                      { band: "5.725 GHz - 5.875 GHz", app: "Broadband Wireless Access, Outdoor Wi-Fi Links" },
                      { band: "865 MHz - 867 MHz", app: "RFID, M2M Communications, Short Range Devices (SRD)" },
                      { band: "433 MHz - 434 MHz", app: "Remote Keyless Entry, Telemetry, Low Power Wireless Devices" },
                      { band: "26.957 MHz - 27.283 MHz", app: "Remote Control for Cranes, Models, Industrial ISM applications" },
                      { band: "13.56 MHz", app: "NFC (Near Field Communication), Smart Cards" },
                      { band: "76 GHz - 77 GHz", app: "Automotive Radar Systems (Collision Avoidance)" },
                    ].map((row, index) => (
                       <tr key={index} className="hover:bg-gray-50">
                         <td className="px-6 py-4 font-mono text-indigo-600 font-bold">{row.band}</td>
                         <td className="px-6 py-4 text-gray-700">{row.app}</td>
                       </tr>
                    ))}
                  </tbody>
                </table>
             </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Products Requiring WPC ETA</h3>
            <div className="grid md:grid-cols-3 gap-6">
               <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                 <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-2xl">📱</div>
                 <h4 className="font-bold text-gray-900 mb-2">Consumer Electronics</h4>
                 <p className="text-sm text-gray-600">Mobile Phones, Tablets, Laptops, Smart Watches, Bluetooth Headphones, Speakers, E-Readers.</p>
               </div>
               <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                 <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 text-2xl">📡</div>
                 <h4 className="font-bold text-gray-900 mb-2">Networking Gear</h4>
                 <p className="text-sm text-gray-600">Wi-Fi Routers, Access Points, Modems, Dongles, Wireless Repeaters, RFID Readers.</p>
               </div>
               <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                 <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-2xl">🎮</div>
                 <h4 className="font-bold text-gray-900 mb-2">Smart Devices & Toys</h4>
                 <p className="text-sm text-gray-600">Drones (UAVs), Remote Controlled Toys, Wireless Cameras, Smart Home Hubs, IoT Sensors.</p>
               </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
             <h4 className="text-lg font-bold text-yellow-900 mb-2">ETA-Restricted (Scrutiny Based)</h4>
             <p className="text-yellow-800 text-sm">
               For wireless products operating in bands <strong>other than</strong> the de-licensed bands listed above (or with power limits exceeding the exemption), a standard ETA approval involving scrutiny by Regional Licensing Offices is required. This applies to products under the "Restricted" import category.
             </p>
          </div>

           <div className="mt-8 flex justify-end">
            <a href="https://saralsanchar.gov.in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 hover:underline">
              Visit Saral Sanchar Portal
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
      )
    },
    'icet-arai': {
      title: 'iCET ARAI Approvals',
      description: 'The Automotive Research Association of India (ARAI) provides comprehensive certification and homologation services for the automotive industry. ARAI certification ensures that vehicles and automotive components comply with the Central Motor Vehicle Rules (CMVR) and Automotive Industry Standards (AIS), guaranteeing safety, performance, and environmental compliance.',
      details: (
        <div className="space-y-12">
          
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-orange-900 mb-4">ARAI Homologation & Certification</h3>
            <p className="text-orange-800 leading-relaxed text-lg mb-4">
              Homologation is the process of certifying that a vehicle or a component meets the regulatory standards set by the Government of India. ARAI is the premier testing and certification agency notified by the Ministry of Road Transport and Highways (MoRTH) for this purpose.
            </p>
            <p className="text-orange-800 font-semibold">
               Mandatory for: OEMs, Importers, and Auto Component Manufacturers.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Scope of Certification</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                 <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                   <span className="text-2xl">🚗</span> Vehicle Categories
                 </h4>
                 <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-orange-500 rounded-full"></div>2-Wheelers & 3-Wheelers</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-orange-500 rounded-full"></div>Passenger Cars & SUVs</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-orange-500 rounded-full"></div>Commercial Vehicles (Bus/Truck)</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-orange-500 rounded-full"></div>Electric Vehicles (EVs) & Hybrids</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-orange-500 rounded-full"></div>Special Purpose Vehicles (Ambulance, Cranes)</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-orange-500 rounded-full"></div>Vehicle Retrofitment Components (CNG/LPG Kits)</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-orange-500 rounded-full"></div>Engines (Diesel, Gasoline, CNG, LPG)</li>
                 </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                 <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                   <span className="text-2xl">⚙️</span> Safety Components (AIS)
                 </h4>
                 <ul className="grid grid-cols-2 gap-3 text-gray-700">
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>Tyres & Wheels</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>Safety Glass</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>Brake Hoses</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>Seat Belts</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>Lighting System</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>Mirrors</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>Horns</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>Fuel Tanks</li>
                 </ul>
              </div>
            </div>
          </div>

          <div>
             <h3 className="text-2xl font-bold text-gray-900 mb-6">Certification Process Flow</h3>
             <div className="relative border-l-4 border-orange-200 ml-4 space-y-8 pl-8 py-2">
               <div className="relative">
                 <div className="absolute -left-[41px] bg-orange-100 p-2 rounded-full border-4 border-white">
                   <span className="text-orange-600 font-bold">1</span>
                 </div>
                 <h4 className="text-lg font-bold text-gray-900">Application & Document Submission</h4>
                 <p className="text-gray-600 mt-1">Submit technical specs, drawings, and manufacturer details to ARAI.</p>
               </div>
               <div className="relative">
                 <div className="absolute -left-[41px] bg-orange-100 p-2 rounded-full border-4 border-white">
                   <span className="text-orange-600 font-bold">2</span>
                 </div>
                 <h4 className="text-lg font-bold text-gray-900">Prototype / Sample Submission</h4>
                 <p className="text-gray-600 mt-1">Submit vehicle component samples for specialized testing (Crash, Emission, etc.).</p>
               </div>
               <div className="relative">
                 <div className="absolute -left-[41px] bg-orange-100 p-2 rounded-full border-4 border-white">
                   <span className="text-orange-600 font-bold">3</span>
                 </div>
                 <h4 className="text-lg font-bold text-gray-900">Validation & Testing</h4>
                 <p className="text-gray-600 mt-1">ARAI conducts rigorous testing against CMVR/AIS standards (Safety, EMI/EMC, Photometry).</p>
               </div>
               <div className="relative">
                 <div className="absolute -left-[41px] bg-green-100 p-2 rounded-full border-4 border-white">
                   <span className="text-green-600 font-bold">4</span>
                 </div>
                 <h4 className="text-lg font-bold text-gray-900">Grant of Certificate (TAC)</h4>
                 <p className="text-gray-600 mt-1">Upon successful compliance, Type Approval Certificate is issued.</p>
               </div>
             </div>
          </div>

           <div className="mt-8 flex justify-end">
            <a href="https://www.araiindia.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 hover:underline">
              Official ARAI Website
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
      )
    },
    'nabl-testing': {
      title: 'NABL Accredited Test Facilities',
      image: '/lab.jpg',
      description: 'The National Accreditation Board for Testing and Calibration Laboratories (NABL) is an autonomous body under the Ministry of Science and Technology, Government of India. NABL accreditation confirms that a laboratory is technically competent and capable of providing accurate and reliable testing and calibration services, adhering to the international standard ISO/IEC 17025.',
      details: (
        <div className="space-y-12">
          
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-teal-900 mb-4">What is NABL Accreditation?</h3>
            <p className="text-teal-800 leading-relaxed text-lg mb-4">
              NABL accreditation is a formal recognition granted to laboratories that meet the requirements of <strong>ISO/IEC 17025</strong> (General Requirements for the Competence of Testing and Calibration Laboratories). It assures customers and regulatory bodies that test reports are accurate, reliable, and internationally accepted.
            </p>
            <p className="text-teal-800 font-semibold">
               Accreditation is valid for 2 years, with annual surveillance audits.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Scope of Accreditation</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                 <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                   <span className="text-2xl">🧪</span> Testing Laboratories
                 </h4>
                 <ul className="grid grid-cols-2 gap-3 text-gray-700">
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-teal-500 rounded-full"></div>Chemical</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-teal-500 rounded-full"></div>Biological</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-teal-500 rounded-full"></div>Mechanical</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-teal-500 rounded-full"></div>Electrical</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-teal-500 rounded-full"></div>Electronics</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-teal-500 rounded-full"></div>Fluid Flow</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-teal-500 rounded-full"></div>Non-Destructive (NDT)</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-teal-500 rounded-full"></div>Photometry</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-teal-500 rounded-full"></div>Forensic</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-teal-500 rounded-full"></div>Radiological</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-teal-500 rounded-full"></div>Software & IT</li>
                 </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                 <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                   <span className="text-2xl">📏</span> Calibration Laboratories
                 </h4>
                 <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>Mechanical (Mass, Length, Force)</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>Electro-Technical (Voltage, Current)</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>Thermal (Temperature, Humidity)</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>Optical (Luminance, Photometry)</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>Fluid Flow (Pressure, Volume)</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>Medical Devices</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>Radiological</li>
                 </ul>
              </div>
            </div>
          </div>

          <div>
             <h3 className="text-2xl font-bold text-gray-900 mb-6">Accreditation Process</h3>
             <div className="relative border-l-4 border-teal-200 ml-4 space-y-8 pl-8 py-2">
               <div className="relative">
                 <div className="absolute -left-[41px] bg-teal-100 p-2 rounded-full border-4 border-white">
                   <span className="text-teal-600 font-bold">1</span>
                 </div>
                 <h4 className="text-lg font-bold text-gray-900">Application & Documentation</h4>
                 <p className="text-gray-600 mt-1">Submit application with Quality Manual, SOPs, and lab details to NABL.</p>
               </div>
               <div className="relative">
                 <div className="absolute -left-[41px] bg-teal-100 p-2 rounded-full border-4 border-white">
                   <span className="text-teal-600 font-bold">2</span>
                 </div>
                 <h4 className="text-lg font-bold text-gray-900">Document Review & Pre-Assessment</h4>
                 <p className="text-gray-600 mt-1">NABL reviews documents and may conduct a pre-assessment visit.</p>
               </div>
               <div className="relative">
                 <div className="absolute -left-[41px] bg-teal-100 p-2 rounded-full border-4 border-white">
                   <span className="text-teal-600 font-bold">3</span>
                 </div>
                 <h4 className="text-lg font-bold text-gray-900">On-Site Assessment</h4>
                 <p className="text-gray-600 mt-1">Expert assessors evaluate facilities, equipment, personnel, and JSR Compliance compliance.</p>
               </div>
               <div className="relative">
                 <div className="absolute -left-[41px] bg-green-100 p-2 rounded-full border-4 border-white">
                   <span className="text-green-600 font-bold">4</span>
                 </div>
                 <h4 className="text-lg font-bold text-gray-900">Accreditation Granted</h4>
                 <p className="text-gray-600 mt-1">Upon successful compliance, NABL issues the Accreditation Certificate.</p>
               </div>
             </div>
          </div>

           <div className="mt-8 flex justify-end">
            <a href="https://www.nabl-india.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 hover:underline">
              Official NABL Website
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
      )
    },
    'epr-plastic-waste': {
      title: 'EPR for Plastic Waste Management',
      description: 'Extended Producer Responsibility (EPR) for plastic waste is mandated under the Plastic Waste Management Rules, 2016 (amended 2022). PIBOs (Producers, Importers, and Brand Owners) are legally required to ensure the collection and environmentally sound processing of plastic packaging waste generated from their products.',
      details: (
        <div className="space-y-12">
          
          <div className="bg-green-50 border border-green-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-green-900 mb-4">What is EPR for Plastic Waste?</h3>
            <p className="text-green-800 leading-relaxed text-lg mb-4">
              Extended Producer Responsibility (EPR) is a policy approach where producers take responsibility for the end-of-life management of their products. Under the <strong>Plastic Waste Management (Amendment) Rules, 2022</strong>, PIBOs must register on the CPCB portal, meet recycling targets, and ensure proper disposal of plastic packaging waste.
            </p>
            <p className="text-green-800 font-semibold">
               Non-compliance attracts Environmental Compensation under 'Polluter Pays' principle.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Categories of Plastic Packaging</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-sm text-center">
                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">🧴</div>
                 <h4 className="text-lg font-bold text-blue-700 mb-2">Category I</h4>
                 <p className="text-sm text-gray-600">Rigid Plastic Packaging (Bottles, Containers, Jars)</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-purple-200 shadow-sm text-center">
                 <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">🛍️</div>
                 <h4 className="text-lg font-bold text-purple-700 mb-2">Category II</h4>
                 <p className="text-sm text-gray-600">Flexible Plastic Packaging (Single/Multi-layer, Pouches, Sachets)</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-orange-200 shadow-sm text-center">
                 <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">📦</div>
                 <h4 className="text-lg font-bold text-orange-700 mb-2">Category III</h4>
                 <p className="text-sm text-gray-600">Multi-layered Packaging (Plastic + Other Material like foil)</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-teal-200 shadow-sm text-center">
                 <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">🌿</div>
                 <h4 className="text-lg font-bold text-teal-700 mb-2">Category IV</h4>
                 <p className="text-sm text-gray-600">Compostable Plastic Sheets & Carry Bags</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Who Needs EPR Registration?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                 <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                   <span className="text-2xl">🏭</span> Producers
                 </h4>
                 <p className="text-gray-600 text-sm">Manufacturers of plastic packaging or products containing plastic packaging.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                 <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                   <span className="text-2xl">🚢</span> Importers
                 </h4>
                 <p className="text-gray-600 text-sm">Entities importing products with plastic packaging into India.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                 <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                   <span className="text-2xl">🏷️</span> Brand Owners
                 </h4>
                 <p className="text-gray-600 text-sm">Companies whose brand is displayed on products sold in plastic packaging.</p>
              </div>
            </div>
          </div>

          <div>
             <h3 className="text-2xl font-bold text-gray-900 mb-6">EPR Registration Process</h3>
             <div className="relative border-l-4 border-green-200 ml-4 space-y-8 pl-8 py-2">
               <div className="relative">
                 <div className="absolute -left-[41px] bg-green-100 p-2 rounded-full border-4 border-white">
                   <span className="text-green-600 font-bold">1</span>
                 </div>
                 <h4 className="text-lg font-bold text-gray-900">Apply on CPCB Portal</h4>
                 <p className="text-gray-600 mt-1">Register on the centralized CPCB EPR portal with company and packaging details.</p>
               </div>
               <div className="relative">
                 <div className="absolute -left-[41px] bg-green-100 p-2 rounded-full border-4 border-white">
                   <span className="text-green-600 font-bold">2</span>
                 </div>
                 <h4 className="text-lg font-bold text-gray-900">Submit EPR Action Plan</h4>
                 <p className="text-gray-600 mt-1">Detail waste collection, recycling targets, and partnerships with PWPs.</p>
               </div>
               <div className="relative">
                 <div className="absolute -left-[41px] bg-green-100 p-2 rounded-full border-4 border-white">
                   <span className="text-green-600 font-bold">3</span>
                 </div>
                 <h4 className="text-lg font-bold text-gray-900">Obtain EPR Certificate</h4>
                 <p className="text-gray-600 mt-1">Upon approval, receive certificate from CPCB/SPCB valid for 5 years.</p>
               </div>
               <div className="relative">
                 <div className="absolute -left-[41px] bg-blue-100 p-2 rounded-full border-4 border-white">
                   <span className="text-blue-600 font-bold">4</span>
                 </div>
                 <h4 className="text-lg font-bold text-gray-900">Annual Compliance & Returns</h4>
                 <p className="text-gray-600 mt-1">File annual returns demonstrating fulfilment of recycling targets.</p>
               </div>
             </div>
          </div>

           <div className="mt-8 flex justify-end">
            <a href="https://eprplastic.cpcb.gov.in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 hover:underline">
              CPCB EPR Plastic Portal
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
      )
    },
  };

  const data = content[slug];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Service Not Found</h1>
          <Link href="/components/Services" className="text-blue-600 hover:underline mt-4 inline-block">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header / Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {slug === 'tec-mtcte' && (
          <h1 className="text-3xl font-bold text-gray-900 mb-8">{data.title}</h1>
        )}
        <div className={(slug === 'tec-mtcte' || slug === 'icet-arai' || slug === 'epr-plastic-waste') ? "grid lg:grid-cols-1 gap-12 items-start mb-16" : "grid lg:grid-cols-2 gap-12 items-start mb-16"}>
          {/* Image Column */}
          {(slug !== 'icet-arai' && slug !== 'epr-plastic-waste') && (
            <div className={slug === 'wpc-eta' ? "flex items-center justify-center" : "bg-white p-4 rounded-2xl shadow-sm border border-slate-100"}>
               <div className={slug === 'tec-mtcte' ? "h-40 rounded-xl overflow-hidden bg-white flex items-center justify-center relative" : slug === 'wpc-eta' ? "flex items-center justify-center relative" : "aspect-[4/3] rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center relative"}>
                 {data.image ? (
                   <img 
                     src={data.image} 
                     alt={data.title}
                     className={slug === 'wpc-eta' ? "w-full h-[500px]" : "w-full h-full object-contain p-4"}
                   />
                 ) : (
                    <div className="text-center p-8">
                     <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4">
                       <span className="text-4xl">📋</span>
                     </div>
                     <p className="text-slate-400 font-medium">Professional Certification Requirements</p>
                   </div>
                 )}
               </div>
            </div>
          )}

          {/* Description Column */}
          <div className="space-y-8">
            <div>
              {slug !== 'tec-mtcte' && (
                <h1 className="text-3xl font-bold text-gray-900 mb-6">{data.title}</h1>
              )}
              <div className="prose prose-lg text-slate-600 max-w-none">
                {typeof data.description === 'string' ? (
                  data.description.split('\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  data.description
                )}
              </div>
            </div>

            {/* Feature Cards if needed */}
             <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                 <div className="flex items-center gap-3 mb-2">
                   <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                   </div>
                   <span className="font-semibold text-gray-900">Mandatory</span>
                 </div>
                 <p className="text-sm text-slate-600 pl-11">Required by Govt of India</p>
              </div>
              <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                 <div className="flex items-center gap-3 mb-2">
                   <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                   </div>
                   <span className="font-semibold text-gray-900">Valid 2 Years</span>
                 </div>
                 <p className="text-sm text-slate-600 pl-11">Renewable Certification</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Details Section (Full Width Below) */}
        {data.details && (
          <div className="mt-16 animate-fade-in-up">
            {data.details}
          </div>
        )}
      </div>

        {/* Call to Action */}
        <div className="mt-8 text-center bg-blue-900 rounded-xl p-8 shadow-lg text-white">
          <h3 className="text-2xl font-bold mb-3">Need assistance with {data.title}?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our experts are ready to guide you through the entire certification process smoothly and efficiently.
          </p>
          <Link href="/#contact" className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition transform hover:-translate-y-0.5">
            Contact Us Today
          </Link>
        </div>
      </div>

  );
}
