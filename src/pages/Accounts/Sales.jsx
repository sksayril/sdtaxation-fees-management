import React from 'react';
import { Icons } from '../../components/Icons';

export function Sales() {
  const [partyAccount, setPartyAccount] = React.useState('CASH');
  const [entries, setEntries] = React.useState([
    { head: 'SALES', amount: '15,000.00' },
    { head: '', amount: '' }
  ]);
  const [narration, setNarration] = React.useState('Being goods sold for cash.');
  const [date, setDate] = React.useState('2025-03-31');
  const [voucherNo, setVoucherNo] = React.useState('S/001');

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
      <div className="bg-[#FFC9C9] border-b border-gray-400 shadow-2xl font-sans text-black flex flex-col h-full w-full">
        
        {/* Top Header Bar */}
        <div className="bg-[#003366] text-[#d8e4f0] px-2 py-1 flex justify-between items-center text-[13px] font-semibold border-b border-gray-500">
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
              <div className="bg-[#3498db] text-white px-8 py-0.5 text-[14px] font-bold shadow-sm uppercase">Sales</div>
              <div className="flex items-center shadow-sm">
                <div className="bg-gray-100 border border-gray-400 border-r-0 px-3 py-1 text-[12px] font-bold text-gray-600 rounded-l-sm uppercase">
                  No.
                </div>
                <div className="bg-white border border-gray-400 px-3 py-1 rounded-r-sm flex items-center min-w-[100px]">
                  <input 
                    type="text" 
                    value={voucherNo}
                    onChange={(e) => setVoucherNo(e.target.value)}
                    className="bg-transparent outline-none w-full text-black font-black text-[14px]"
                  />
                </div>
              </div>
            </div>
            <div className="text-right leading-tight font-bold text-[14px] relative group">
              <input 
                type="date" 
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="absolute inset-0 opacity-0 cursor-pointer z-10"
              />
              <div className="bg-white border border-gray-400 shadow-sm rounded-sm px-3 py-1 flex items-center gap-3 group-hover:border-gray-600 transition-colors">
                <div className="text-left">
                  <div className="text-[#003366] font-black text-[15px] leading-none">{formatTallyDate(date)}</div>
                  <div className="text-[11px] font-bold text-gray-500 uppercase mt-0.5">{getDayName(date)}</div>
                </div>
                <Icons.Calendar className="w-4 h-4 text-[#003366] opacity-70" />
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-1">
            <div className="flex items-center shadow-sm">
              <div className="bg-gray-100 border border-gray-400 border-r-0 px-3 py-1 text-[12px] font-bold text-gray-600 rounded-l-sm uppercase min-w-[140px]">
                Party A/c name :
              </div>
              <div className="bg-white border border-gray-400 px-3 py-1 rounded-r-sm flex items-center min-w-[264px]">
                <select 
                  value={partyAccount}
                  onChange={(e) => setPartyAccount(e.target.value)}
                  className="bg-transparent outline-none w-full text-black font-black text-[14px] cursor-pointer"
                >
                  <option value="CASH">CASH</option>
                  <option value="BANK (HDFC)">BANK (HDFC)</option>
                  <option value="CUSTOMER X">CUSTOMER X</option>
                </select>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[12px] text-gray-700 italic">
              <span className="w-32 pl-4">Cur Bal :</span>
              <span>1,20,000.00 Dr</span>
            </div>
          </div>
        </div>

        {/* Particulars Table Header */}
        <div className="grid grid-cols-12 border-b border-black text-[14px] font-bold bg-[#d8e4f0]">
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
                      className="bg-transparent outline-none text-[14px] font-bold flex-1 uppercase placeholder:text-gray-400"
                      placeholder="Select Ledger..."
                    />
                  </div>
                  {entry.head && (
                    <div className="px-12 pb-2 text-[11px] text-gray-500 italic">
                      Cur Bal: {Math.floor(Math.random() * 100000).toLocaleString('en-IN')}.00 Cr
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="col-span-3 bg-[#d8e4f0]/50">
              {entries.map((entry, idx) => (
                <div key={idx} className="border-b border-gray-200/30 h-[52px] flex items-center px-4">
                  <input 
                    type="text" 
                    value={entry.amount}
                    onChange={(e) => {
                      const newEntries = [...entries];
                      newEntries[idx].amount = e.target.value;
                      setEntries(newEntries);
                    }}
                    className="bg-transparent outline-none text-[14px] font-black text-right w-full"
                    placeholder="0.00"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom section within content area */}
          <div className="mt-auto p-4 border-t border-gray-400 bg-[#d8e4f0] sticky bottom-0">
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
      <div className="max-w-6xl mx-auto w-full mt-4 flex justify-end gap-3 pb-4 px-4">
        <button className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded font-bold text-sm hover:bg-gray-50 transition shadow-sm flex items-center gap-2">
          <Icons.X className="w-4 h-4" /> Cancel
        </button>
        <button className="bg-[#003366] text-white px-8 py-2 rounded font-bold text-sm hover:bg-[#002244] transition shadow-md flex items-center gap-2">
          <Icons.Check className="w-4 h-4" /> Save Sales Voucher
        </button>
      </div>

    </div>
  );
}
