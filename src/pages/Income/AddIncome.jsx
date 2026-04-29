import React from 'react';
import { Icons } from '../../components/Icons';

export function AddIncome() {
  const [account, setAccount] = React.useState('CASH');
  const [entries, setEntries] = React.useState([
    { head: 'Donation for Sports Day', amount: '5,000.00' },
    { head: 'Annual Magazine Ad', amount: '12,500.00' },
    { head: '', amount: '' }
  ]);
  const [narration, setNarration] = React.useState('Being cash received for various income heads for the month of April 2026.');
  const [date, setDate] = React.useState('2025-03-31');
  const [receiptNo, setReceiptNo] = React.useState('555');

  const getDayName = (dateString) => {
    const d = new Date(dateString);
    return d.toLocaleDateString('en-US', { weekday: 'long' });
  };

  const formatTallyDate = (dateString) => {
    const d = new Date(dateString);
    const day = d.getDate();
    const month = d.toLocaleDateString('en-US', { month: 'short' });
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  };
  return (
    <div className="flex flex-col h-screen bg-[#f3f4f6]">
      <div className="bg-[#e4f0d8] border-b border-gray-400 shadow-2xl font-sans text-black flex flex-col h-full w-full">
        
        {/* Top Header Bar */}
        <div className="bg-[#3e7e7b] text-[#e4f0d8] px-2 py-1 flex justify-between items-center text-[13px] font-semibold border-b border-gray-500">
          <div className="flex gap-4">
            <span>Accounting Voucher Creation</span>
          </div>
          <div className="flex items-center gap-8">
            <span className="text-white">Mansarovar the School</span>
          </div>
        </div>

        {/* Voucher Header Info */}
        <div className="p-3 border-b border-gray-400">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-4">
              <div className="bg-[#e04040] text-white px-8 py-0.5 text-[14px] font-bold shadow-sm">Receipt</div>
              <div className="text-[14px] font-bold flex items-center gap-2">
                <span>No.</span>
                <input 
                  type="text" 
                  value={receiptNo}
                  onChange={(e) => setReceiptNo(e.target.value)}
                  className="bg-transparent border-b border-transparent hover:border-gray-500 outline-none w-16 text-black font-black focus:bg-white/30 px-1"
                />
              </div>
            </div>
            <div className="text-right leading-tight font-bold text-[14px] relative group">
              <input 
                type="date" 
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="absolute inset-0 opacity-0 cursor-pointer z-10"
              />
              <div className="hover:bg-black/5 rounded px-1 transition-colors flex items-center gap-2">
                <div>
                  <div className="text-[#3e7e7b] group-hover:text-black">{formatTallyDate(date)}</div>
                  <div className="text-[12px] font-normal text-gray-600">{getDayName(date)}</div>
                </div>
                <Icons.Calendar className="w-4 h-4 text-[#3e7e7b] opacity-60" />
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-1 pl-2">
            <div className="flex items-center gap-2">
              <span className="text-[14px] w-20">Account :</span>
              <select 
                value={account}
                onChange={(e) => setAccount(e.target.value)}
                className="bg-black text-white px-2 py-0.5 min-w-[250px] text-[14px] font-bold outline-none cursor-pointer"
              >
                <option value="CASH">CASH</option>
                <option value="BANK (HDFC)">BANK (HDFC)</option>
                <option value="BANK (SBI)">BANK (SBI)</option>
                <option value="PETTY CASH">PETTY CASH</option>
              </select>
            </div>
            <div className="flex items-center gap-2 text-[12px] text-gray-700 italic">
              <span className="w-20 pl-4">Cur Bal :</span>
              <span>12,45,000.00 Cr</span>
            </div>
          </div>
        </div>

        {/* Particulars Table Header */}
        <div className="grid grid-cols-12 border-b border-black text-[14px] font-bold bg-[#e4f0d8]">
          <div className="col-span-9 px-4 py-1 border-r border-gray-400">Particulars</div>
          <div className="col-span-3 px-4 py-1 text-right">Amount</div>
        </div>

        {/* Main Entry Area */}
        <div className="flex-1 flex flex-col relative overflow-y-auto">
          <div className="grid grid-cols-12 flex-1 min-h-[350px]">
            <div className="col-span-9 border-r border-gray-400">
              {entries.map((entry, idx) => (
                <div key={idx} className="flex flex-col border-b border-gray-200/30">
                  <div className="flex items-center px-4 py-2 gap-4">
                    <span className="text-[14px] text-gray-500 w-4">{idx + 1}.</span>
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
                      className="bg-transparent border-b border-transparent hover:border-gray-500 outline-none flex-1 text-[14px] font-bold uppercase focus:bg-white/30 px-1" 
                      placeholder={idx === entries.length - 1 ? "Select Particulars..." : ""}
                    />
                  </div>
                  {entry.head && (
                    <div className="text-[11px] text-gray-500 italic pl-12 pb-1">
                      Cur Bal: {Math.floor(Math.random() * 50000)}.00 Dr
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="col-span-3">
              {entries.map((entry, idx) => (
                <div key={idx} className="px-4 py-2 border-b border-gray-200/30 h-[53px] flex items-center justify-end">
                  <input 
                    type="text" 
                    value={entry.amount}
                    onChange={(e) => {
                      const newEntries = [...entries];
                      newEntries[idx].amount = e.target.value;
                      setEntries(newEntries);
                    }}
                    className="bg-transparent w-full outline-none text-[14px] font-bold text-right focus:bg-white/30" 
                    placeholder="0.00" 
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom section within content area */}
          <div className="mt-auto p-4 border-t border-gray-400 bg-[#e4f0d8] sticky bottom-0">
            <div className="flex items-start gap-4">
              <span className="text-[14px] font-semibold w-24">Narration:</span>
              <textarea 
                value={narration}
                onChange={(e) => setNarration(e.target.value)}
                className="bg-transparent border-b border-gray-500 flex-1 outline-none text-[14px] resize-none h-16 focus:bg-white/30"
                placeholder="Enter narration details here..."
              ></textarea>
            </div>
          </div>
        </div>

      </div>

      {/* Floating Action Buttons (Web specific) */}
      <div className="max-w-6xl mx-auto w-full mt-4 flex justify-end gap-3">
        <button className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded font-bold text-sm hover:bg-gray-50 transition shadow-sm flex items-center gap-2">
          <Icons.X className="w-4 h-4" /> Cancel
        </button>
        <button className="bg-[#3e7e7b] text-white px-8 py-2 rounded font-bold text-sm hover:bg-[#2f5e5c] transition shadow-md flex items-center gap-2">
          <Icons.Check className="w-4 h-4" /> Save Voucher
        </button>
      </div>

    </div>
  );
}
