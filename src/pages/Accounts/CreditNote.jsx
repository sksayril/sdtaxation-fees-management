import React from 'react';
import { Icons } from '../../components/Icons';

export function CreditNote() {
  const [partyAccount, setPartyAccount] = React.useState('CUSTOMER X');
  const [entries, setEntries] = React.useState([
    { head: '', amount: '' }
  ]);
  const [narration, setNarration] = React.useState('Being sales return from Customer X.');
  const [date, setDate] = React.useState('2026-03-31');
  const [voucherNo, setVoucherNo] = React.useState('CN/001');

  const formatTallyDate = (dateString) => {
    if (!dateString) return '';
    const d = new Date(dateString);
    const day = d.getDate();
    const month = d.toLocaleDateString('en-US', { month: 'short' });
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f3f4f6] font-sans">
      {/* Colored Header */}
      <div className="bg-[#FFA1AD] text-gray-800 px-4 py-2 flex justify-between items-center text-[14px] font-bold border-b border-gray-300">
        <span>ACCOUNTING VOUCHER CREATION (CREDIT NOTE)</span>
        <span>Mansarovar the school betul (2025-26)</span>
      </div>

      <div className="p-6">
        {/* Unified Voucher Container */}
        <div className="bg-white rounded-sm shadow-md border border-gray-300 flex flex-col overflow-hidden">
          
          {/* Top Controls Section */}
          <div className="p-6 border-b border-gray-300 flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-3">
                {/* Voucher No Row */}
                <div className="flex items-center gap-2">
                  <div className="bg-[#f0f2f5] text-gray-800 px-4 py-2 rounded border border-gray-400 text-[14px] font-bold w-40 text-center italic shadow-sm font-serif">
                    Voucher No.
                  </div>
                  <div className="bg-white border border-gray-300 rounded-sm px-3 py-1.5 flex items-center justify-between min-w-[200px]">
                    <input 
                      type="text" 
                      value={voucherNo}
                      onChange={(e) => setVoucherNo(e.target.value)}
                      className="outline-none w-full text-sm font-semibold"
                    />
                    <Icons.ChevronDown className="w-4 h-4 text-gray-400" />
                  </div>
                </div>

                {/* Party A/c name Row */}
                <div className="flex items-center gap-2">
                  <div className="bg-[#f0f2f5] text-gray-800 px-4 py-2 rounded border border-gray-400 text-[14px] font-bold w-40 text-center italic shadow-sm font-serif">
                    Party A/c name
                  </div>
                  <div className="bg-white border border-gray-300 rounded-sm px-3 py-1.5 flex items-center justify-between min-w-[200px]">
                    <select 
                      value={partyAccount}
                      onChange={(e) => setPartyAccount(e.target.value)}
                      className="outline-none w-full text-sm font-semibold bg-transparent appearance-none"
                    >
                      <option value="CUSTOMER X">CUSTOMER X</option>
                      <option value="CUSTOMER Y">CUSTOMER Y</option>
                      <option value="CASH">CASH</option>
                    </select>
                    <Icons.ChevronDown className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Date Row */}
              <div className="flex items-center gap-2">
                <div className="bg-[#f0f2f5] text-gray-800 px-4 py-2 rounded border border-gray-400 text-[14px] font-bold w-40 text-center italic shadow-sm font-serif">
                  Date
                </div>
                <div className="bg-white border border-gray-300 rounded-sm px-3 py-1.5 flex items-center gap-4 min-w-[180px] relative">
                  <input 
                    type="date" 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <span className="text-sm font-semibold">{formatTallyDate(date)}</span>
                  <Icons.Calendar className="w-4 h-4 text-gray-600" />
                </div>
              </div>
            </div>

            <div className="mt-2 flex items-center gap-2">
              <span className="text-[14px] font-bold text-gray-700 italic">Cur bal</span>
              <span className="text-[14px] font-bold text-gray-800">: ₹ 12,400.00 Dr</span>
            </div>
          </div>

          {/* Particulars Table Section */}
          <div className="flex-1 flex flex-col">
            <div className="grid grid-cols-12 bg-gray-50 border-b border-gray-300 text-[14px] font-bold">
              <div className="col-span-10 px-4 py-2 border-r border-gray-300">Particulars</div>
              <div className="col-span-2 px-4 py-2 text-right">Amount</div>
            </div>

            <div className="flex-1 min-h-[400px]">
              <div className="grid grid-cols-12 h-full">
                <div className="col-span-10 border-r border-gray-300">
                  {entries.map((entry, idx) => (
                    <div key={idx} className="flex flex-col">
                      <div className="px-4 py-2">
                        <input 
                          type="text" 
                          value={entry.head}
                          onChange={(e) => {
                            const newEntries = [...entries];
                            newEntries[idx].head = e.target.value;
                            if (idx === entries.length - 1 && e.target.value) {
                              newEntries.push({ head: '', amount: '' });
                            }
                            setEntries(newEntries);
                          }}
                          className="bg-transparent outline-none w-full text-sm font-bold uppercase" 
                          placeholder={idx === entries.length - 1 ? "Select Particulars..." : ""}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="col-span-2">
                  {entries.map((entry, idx) => (
                    <div key={idx} className="px-4 py-2 text-right">
                      <input 
                        type="text" 
                        value={entry.amount}
                        onChange={(e) => {
                          const newEntries = [...entries];
                          newEntries[idx].amount = e.target.value;
                          setEntries(newEntries);
                        }}
                        className="bg-transparent outline-none w-full text-sm font-bold text-right" 
                        placeholder="0.00" 
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Narration section */}
            <div className="p-4 border-t border-gray-300 bg-gray-50">
              <div className="flex items-start gap-4">
                <span className="text-[14px] font-bold text-gray-700">Narration:</span>
                <textarea 
                  value={narration}
                  onChange={(e) => setNarration(e.target.value)}
                  className="bg-transparent border-b border-gray-400 flex-1 outline-none text-[14px] resize-none h-12"
                  placeholder="Being cash received..."
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex justify-end gap-3 mt-4">
          <button className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-sm font-bold text-sm hover:bg-gray-50 transition shadow-sm">
            Cancel
          </button>
          <button className="bg-[#FFA1AD] text-gray-800 px-8 py-2 rounded-sm font-bold text-sm hover:bg-[#ff8a99] transition shadow-md border border-gray-200">
            Save Credit Note
          </button>
        </div>
      </div>
    </div>
  );
}
