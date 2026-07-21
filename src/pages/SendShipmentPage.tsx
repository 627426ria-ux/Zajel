import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Check, Package,  UserCheck, User, Truck, Plane, FileText } from 'lucide-react';

const SendShipmentPage: React.FC = () => {
  // 0: Auth, 1: Destination, 2: Shipper, 3: Receiver, 4: Shipment Details
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [shipmentType, setShipmentType] = useState<'domestic' | 'international' | null>(null);
  const [parcelType, setParcelType] = useState<'document' | 'parcel' | null>(null);

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  // ─── PREMIUM MINIMALIST INPUT COMPONENT ───
  const InputField = ({ label, type = "text", placeholder, required = false, defaultValue }: any) => (
    <div className="flex flex-col gap-2">
      <label className="text-[12px] font-semibold text-gray-900 tracking-wide uppercase">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <input 
        type={type} 
        placeholder={placeholder}
        required={required}
        defaultValue={defaultValue}
        className="w-full bg-transparent border border-gray-200 focus:border-gray-900 rounded-lg px-4 py-3.5 text-[15px] text-gray-900 outline-none transition-colors duration-200 placeholder:text-gray-400"
      />
    </div>
  );

  // ─── ULTRA-CLEAN PROGRESS BAR ───
  const renderProgress = () => {
    const totalSteps = 4;
    const progress = (currentStep / totalSteps) * 100;
    
    const stepLabels = ['Welcome', 'Destination', 'Shipper', 'Receiver', 'Parcel'];

    return (
      <div className="w-full max-w-[800px] mx-auto mb-16 animate-in fade-in duration-700">
        <div className="flex justify-between text-[12px] font-semibold text-gray-400 uppercase tracking-wider mb-4">
          <span className="text-gray-900">{stepLabels[currentStep]}</span>
          <span>Step {currentStep} of {totalSteps}</span>
        </div>
        <div className="w-full h-[2px] bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#19AA3E] transition-all duration-700 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    );
  };

  // ─── STEP 0: TWO-BOX AUTHENTICATION SELECTION ───
  const renderAuthSelection = () => (
    <div className="flex flex-col items-center w-full max-w-[800px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-14 text-center">
        <h1 className="text-[32px] md:text-[36px] font-semibold text-gray-900 mb-4 tracking-tight">
          Welcome to Zajel
        </h1>
        <p className="text-[15px] text-gray-500 leading-relaxed max-w-[500px] mx-auto">
          Sign in for faster checkout and saved addresses, or continue as a guest to send a shipment immediately.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <button onClick={nextStep} className="relative flex flex-col items-start p-8 bg-white border border-gray-200 rounded-2xl hover:border-[#19AA3E] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 group text-left">
          <div className="w-12 h-12 rounded-full bg-[#19AA3E]/10 flex items-center justify-center mb-6 group-hover:bg-[#19AA3E] transition-colors duration-300">
            <UserCheck className="w-6 h-6 text-[#19AA3E] group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-[18px] font-semibold text-gray-900 mb-2">Login to Account</h3>
          <p className="text-[14px] text-gray-500 leading-relaxed">
            Access saved addresses, view discounted rates, and easily manage your tracking history.
          </p>
          <div className="absolute top-8 right-8 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <ArrowRight className="w-5 h-5 text-[#19AA3E]" />
          </div>
        </button>

        <button onClick={nextStep} className="relative flex flex-col items-start p-8 bg-white border border-gray-200 rounded-2xl hover:border-[#19AA3E] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 group text-left">
          <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-[#19AA3E]/10 transition-colors duration-300">
            <User className="w-6 h-6 text-gray-600 group-hover:text-[#19AA3E] transition-colors" />
          </div>
          <h3 className="text-[18px] font-semibold text-gray-900 mb-2">Continue as Guest</h3>
          <p className="text-[14px] text-gray-500 leading-relaxed">
            No account required. The fastest and simplest way to send a one-off shipment right now.
          </p>
          <div className="absolute top-8 right-8 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <ArrowRight className="w-5 h-5 text-[#19AA3E]" />
          </div>
        </button>
      </div>
    </div>
  );

  // ─── STEP 1: DESTINATION SELECTION ───
  const renderDestination = () => (
    <div className="flex flex-col w-full max-w-[600px] mx-auto animate-in fade-in slide-in-from-right-8 duration-500">
      <div className="mb-10">
        <h2 className="text-[28px] font-semibold text-gray-900 mb-3 tracking-tight">Destination</h2>
        <p className="text-[15px] text-gray-500">Where are you shipping to today?</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
        <button onClick={() => setShipmentType('domestic')} className={`relative p-8 rounded-xl border transition-all duration-200 text-left group ${shipmentType === 'domestic' ? 'border-[#19AA3E] bg-[#19AA3E]/[0.02] ring-1 ring-[#19AA3E]' : 'border-gray-200 bg-white hover:border-gray-400'}`}>
          {shipmentType === 'domestic' && (
            <div className="absolute top-4 right-4 text-[#19AA3E]"><Check className="w-5 h-5" strokeWidth={2.5} /></div>
          )}
          <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-5 transition-colors duration-200 ${shipmentType === 'domestic' ? 'bg-[#19AA3E]/10' : 'bg-gray-50 group-hover:bg-gray-100'}`}>
            <Truck className={`w-6 h-6 transition-colors duration-200 ${shipmentType === 'domestic' ? 'text-[#19AA3E]' : 'text-gray-600'}`} strokeWidth={1.5} />
          </div>
          <h3 className={`text-[18px] font-semibold mb-2 ${shipmentType === 'domestic' ? 'text-[#19AA3E]' : 'text-gray-900'}`}>Domestic</h3>
          <p className="text-[13px] text-gray-500">Deliveries within the United Arab Emirates.</p>
        </button>

        <button onClick={() => setShipmentType('international')} className={`relative p-8 rounded-xl border transition-all duration-200 text-left group ${shipmentType === 'international' ? 'border-[#19AA3E] bg-[#19AA3E]/[0.02] ring-1 ring-[#19AA3E]' : 'border-gray-200 bg-white hover:border-gray-400'}`}>
          {shipmentType === 'international' && (
            <div className="absolute top-4 right-4 text-[#19AA3E]"><Check className="w-5 h-5" strokeWidth={2.5} /></div>
          )}
          <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-5 transition-colors duration-200 ${shipmentType === 'international' ? 'bg-[#19AA3E]/10' : 'bg-gray-50 group-hover:bg-gray-100'}`}>
            <Plane className={`w-6 h-6 transition-colors duration-200 ${shipmentType === 'international' ? 'text-[#19AA3E]' : 'text-gray-600'}`} strokeWidth={1.5} />
          </div>
          <h3 className={`text-[18px] font-semibold mb-2 ${shipmentType === 'international' ? 'text-[#19AA3E]' : 'text-gray-900'}`}>International</h3>
          <p className="text-[13px] text-gray-500">Shipping to over 200 countries worldwide.</p>
        </button>
      </div>

      <div className="flex items-center justify-between pt-8 border-t border-gray-100">
        <button onClick={prevStep} className="text-[14px] font-semibold text-gray-500 hover:text-gray-900 transition-colors">Cancel</button>
        <button onClick={nextStep} disabled={!shipmentType} className={`flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-[14px] transition-all ${shipmentType ? 'bg-[#19AA3E] text-white hover:bg-[#159134]' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}>
          Continue <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  // ─── STEP 2: SHIPPER DETAILS ───
  const renderShipperDetails = () => (
    <div className="flex flex-col w-full max-w-[800px] mx-auto animate-in fade-in slide-in-from-right-8 duration-500">
      <div className="mb-10">
        <h2 className="text-[28px] font-semibold text-gray-900 mb-3 tracking-tight">Shipper Information</h2>
        <p className="text-[15px] text-gray-500">Enter the pickup and sender details.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-12">
        <InputField label="Full Name" placeholder="John Doe" required />
        <InputField label="Email Address" type="email" placeholder="john@example.com" required />
        <InputField label="Phone Number" type="tel" placeholder="+971 50 123 4567" required />
        <InputField label="Country" placeholder="United Arab Emirates" required />
        <div className="md:col-span-2">
          <InputField label="Street Address" placeholder="Building name, street, neighborhood" required />
        </div>
        <InputField label="City" placeholder="Dubai" required />
        <InputField label="Apt / Suite / Unit (Optional)" placeholder="e.g. Apt 4B" />
      </div>

      <div className="flex items-center justify-between pt-8 border-t border-gray-100">
        <button onClick={prevStep} className="flex items-center gap-2 text-[14px] font-semibold text-gray-500 hover:text-gray-900 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <button onClick={nextStep} className="flex items-center gap-2 px-8 py-3.5 bg-[#19AA3E] hover:bg-[#159134] text-white rounded-lg font-semibold text-[14px] transition-all">
          Next: Receiver Details <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  // ─── STEP 3: RECEIVER DETAILS ───
  const renderReceiverDetails = () => (
    <div className="flex flex-col w-full max-w-[800px] mx-auto animate-in fade-in slide-in-from-right-8 duration-500">
      <div className="mb-10">
        <h2 className="text-[28px] font-semibold text-gray-900 mb-3 tracking-tight">Receiver Information</h2>
        <p className="text-[15px] text-gray-500">Enter the delivery destination details.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-12">
        <InputField label="Receiver's Name" placeholder="Jane Smith" required />
        <InputField label="Receiver's Email (Optional)" type="email" placeholder="jane@example.com" />
        <InputField label="Receiver's Phone" type="tel" placeholder="+971 50 987 6543" required />
        <InputField label="Destination Country" placeholder={shipmentType === 'domestic' ? 'United Arab Emirates' : 'e.g. United Kingdom'} required />
        <div className="md:col-span-2">
          <InputField label="Delivery Address" placeholder="Street name, neighborhood, details" required />
        </div>
        <InputField label="City" placeholder="e.g. London" required />
        <InputField label="Postal / Zip Code" placeholder="e.g. SW1A 1AA" />
      </div>

      <div className="flex items-center justify-between pt-8 border-t border-gray-100">
        <button onClick={prevStep} className="flex items-center gap-2 text-[14px] font-semibold text-gray-500 hover:text-gray-900 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <button onClick={nextStep} className="flex items-center gap-2 px-8 py-3.5 bg-[#19AA3E] hover:bg-[#159134] text-white rounded-lg font-semibold text-[14px] transition-all">
          Next: Shipment Details <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  // ─── STEP 4: SHIPMENT DETAILS ───
  const renderShipmentDetails = () => (
    <div className="flex flex-col w-full max-w-[800px] mx-auto animate-in fade-in slide-in-from-right-8 duration-500">
      <div className="mb-10">
        <h2 className="text-[28px] font-semibold text-gray-900 mb-3 tracking-tight">Shipment Details</h2>
        <p className="text-[15px] text-gray-500">Provide details about what you are sending.</p>
      </div>

      {/* Row 1: Content, Weight, Pieces */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <InputField label="Shipment Content" placeholder="e.g. Electronics, Books" required />
        
        {/* Custom Weight Input with embedded Select */}
        <div className="flex flex-col gap-2">
          <label className="text-[12px] font-semibold text-gray-900 tracking-wide uppercase">
            Total Gross Weight <span className="text-red-400">*</span>
          </label>
          <div className="flex bg-transparent border border-gray-200 focus-within:border-gray-900 rounded-lg overflow-hidden transition-colors duration-200">
            <input 
              type="number" 
              placeholder="0.0" 
              step="0.1"
              required
              className="w-full px-4 py-3.5 text-[15px] text-gray-900 outline-none bg-transparent placeholder:text-gray-400"
            />
            <select className="bg-gray-50 border-l border-gray-200 px-4 text-[14px] font-semibold text-gray-700 outline-none cursor-pointer hover:bg-gray-100 transition-colors">
              <option value="kg">Kg</option>
              <option value="lb">Lb</option>
            </select>
          </div>
        </div>

        <InputField label="Number of Pieces" type="number" defaultValue="1" required />
      </div>

      {/* Row 2: Shipment Type (Document vs Parcel) */}
      <div className="mb-8">
        <label className="text-[12px] font-semibold text-gray-900 tracking-wide uppercase block mb-4">
          Shipment Type <span className="text-red-400">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <button
            onClick={() => setParcelType('document')}
            className={`relative p-6 rounded-xl border transition-all duration-200 text-center flex flex-col items-center justify-center ${
              parcelType === 'document' 
                ? 'border-[#19AA3E] bg-[#19AA3E]/[0.02] ring-1 ring-[#19AA3E]' 
                : 'border-gray-200 bg-white hover:border-gray-400'
            }`}
          >
            <FileText className={`w-8 h-8 mb-3 transition-colors duration-200 ${parcelType === 'document' ? 'text-[#19AA3E]' : 'text-gray-400'}`} strokeWidth={1.5} />
            <h3 className={`text-[15px] font-semibold ${parcelType === 'document' ? 'text-[#19AA3E]' : 'text-gray-900'}`}>Document(s)</h3>
          </button>

          <button
            onClick={() => setParcelType('parcel')}
            className={`relative p-6 rounded-xl border transition-all duration-200 text-center flex flex-col items-center justify-center ${
              parcelType === 'parcel' 
                ? 'border-[#19AA3E] bg-[#19AA3E]/[0.02] ring-1 ring-[#19AA3E]' 
                : 'border-gray-200 bg-white hover:border-gray-400'
            }`}
          >
            <Package className={`w-8 h-8 mb-3 transition-colors duration-200 ${parcelType === 'parcel' ? 'text-[#19AA3E]' : 'text-gray-400'}`} strokeWidth={1.5} />
            <h3 className={`text-[15px] font-semibold ${parcelType === 'parcel' ? 'text-[#19AA3E]' : 'text-gray-900'}`}>Parcel</h3>
          </button>
        </div>
      </div>

      {/* Disclaimer Text */}
      <div className="mb-10 text-[13px] text-gray-500 leading-relaxed bg-gray-50 p-4 rounded-lg border border-gray-100">
        Please check the list of <a href="#" className="text-[#19AA3E] hover:underline font-medium">prohibited items here</a>. <br/>
        Price may change in case of any weight difference upon final inspection.
      </div>

      <div className="flex items-center justify-between pt-8 border-t border-gray-100">
        <button onClick={prevStep} className="flex items-center gap-2 text-[14px] font-semibold text-gray-500 hover:text-gray-900 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <button 
          onClick={() => alert("Proceeding to Payment")} 
          disabled={!parcelType}
          className={`flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-[14px] transition-all ${
            parcelType 
              ? 'bg-gray-900 text-white hover:bg-black' 
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          Continue to Payment <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-['Manrope',sans-serif] pt-32 pb-24 px-6 flex flex-col">
      
      {/* Progress Header (Visible after Auth Step) */}
      {currentStep > 0 && renderProgress()}

      {/* Main Content Area */}
      <div className="w-full flex-grow flex items-start justify-center">
        {currentStep === 0 && renderAuthSelection()}
        {currentStep === 1 && renderDestination()}
        {currentStep === 2 && renderShipperDetails()}
        {currentStep === 3 && renderReceiverDetails()}
        {currentStep === 4 && renderShipmentDetails()}
      </div>

    </div>
  );
};

export default SendShipmentPage;