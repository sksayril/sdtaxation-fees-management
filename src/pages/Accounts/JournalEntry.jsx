import React from 'react';
import { Icons } from '../../components/Icons';

export function JournalEntry() {
  const [entries, setEntries] = React.useState([
    { type: 'Dr', head: '', amount: '' }
  ]);
  const [narration, setNarration] = React.useState('Being adjustment for library books purchase on credit.');
  const [date, setDate] = React.useState('2026-03-31');
  const [voucherNo, setVoucherNo] = React.useState('12');

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
      <div className="bg-[#99A1AF] text-white px-4 py-2 flex justify-between items-center text-[14px] font-bold border-b border-gray-300">
        <span>ACCOUNTING VOUCHER CREATION (JOURNAL)</span>
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
                  <Icons.Calendar className="w-4 h-4 text-gray-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Particulars Table Section */}
          <div className="flex-1 flex flex-col">
            <div className="grid grid-cols-12 bg-gray-50 border-b border-gray-300 text-[14px] font-bold">
              <div className="col-span-8 px-4 py-2 border-r border-gray-300">Particulars</div>
              <div className="col-span-2 px-4 py-2 border-r border-gray-300 text-right">Debit</div>
              <div className="col-span-2 px-4 py-2 text-right">Credit</div>
            </div>

            <div className="flex-1 min-h-[400px]">
              <div className="grid grid-cols-12 h-full">
                <div className="col-span-8 border-r border-gray-300">
                  {entries.map((entry, idx) => (
                    <div key={idx} className="flex items-center px-4 py-2 gap-2 border-b border-gray-100">
                      <select 
                        value={entry.type}
                        onChange={(e) => {
                          const newEntries = [...entries];
                          newEntries[idx].type = e.target.value;
                          setEntries(newEntries);
                        }}
                        className="bg-transparent outline-none text-[13px] font-bold text-[#2f55d4] w-8 uppercase appearance-none"
                      >
                        <option value="Dr">Dr</option>
                        <option value="Cr">Cr</option>
                      </select>
                      <input 
                        type="text" 
                        value={entry.head}
                        onChange={(e) => {
                          const newEntries = [...entries];
                          newEntries[idx].head = e.target.value;
                          if (idx === entries.length - 1 && e.target.value) {
                            newEntries.push({ type: 'Cr', head: '', amount: '' });
                          }
                          setEntries(newEntries);
                        }}
                        className="bg-transparent outline-none w-full text-sm font-bold uppercase" 
                        placeholder="Select Ledger Account..."
                      />
                    </div>
                  ))}
                </div>
                <div className="col-span-2 border-r border-gray-300">
                  {entries.map((entry, idx) => (
                    <div key={idx} className="px-4 py-2 text-right border-b border-gray-100 h-[40px]">
                      {entry.type === 'Dr' && (
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
                      )}
                    </div>
                  ))}
                </div>
                <div className="col-span-2">
                  {entries.map((entry, idx) => (
                    <div key={idx} className="px-4 py-2 text-right border-b border-gray-100 h-[40px]">
                      {entry.type === 'Cr' && (
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
                      )}
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
          <button className="bg-[#99A1AF] text-white px-8 py-2 rounded-sm font-bold text-sm hover:bg-[#808896] transition shadow-md">
            Save Journal Voucher
          </button>
        </div>
      </div>
    </div>
  );
}
