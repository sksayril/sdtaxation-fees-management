import React from 'react';
import { Icons } from '../../components/Icons';

export function Contra() {
  const [account, setAccount] = React.useState('BANK (HDFC)');
  const [entries, setEntries] = React.useState([
    { head: 'CASH', amount: '10,000.00' },
    { head: '', amount: '' }
  ]);
  const [narration, setNarration] = React.useState('Being cash deposited into HDFC bank account.');
  const [date, setDate] = React.useState('2025-03-31');
  const [receiptNo, setReceiptNo] = React.useState('24');

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
              <div className="bg-[#4a69bd] text-white px-8 py-0.5 text-[14px] font-bold shadow-sm uppercase">Contra</div>
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

          <div className="mt-4 flex flex-col gap-1">
            <div className="flex items-center gap-2 text-[14px] font-bold">
              <span className="w-20 pl-4">Account :</span>
              <select 
                value={account}
                onChange={(e) => setAccount(e.target.value)}
                className="bg-black text-[#e4f0d8] px-2 py-0.5 outline-none w-64 border border-gray-600 focus:bg-[#222]"
              >
                <option value="CASH">CASH</option>
                <option value="BANK (HDFC)">BANK (HDFC)</option>
                <option value="BANK (SBI)">BANK (SBI)</option>
              </select>
            </div>
            <div className="flex items-center gap-2 text-[12px] text-gray-700 italic">
              <span className="w-20 pl-4">Cur Bal :</span>
              <span>15,50,000.00 Cr</span>
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
                      className="bg-transparent outline-none text-[14px] font-bold flex-1 uppercase placeholder:text-gray-400"
                      placeholder="Select Account..."
                    />
                  </div>
                  {entry.head && (
                    <div className="px-12 pb-2 text-[11px] text-gray-500 italic">
                      Cur Bal: {Math.floor(Math.random() * 50000).toLocaleString('en-IN')}.00 Dr
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="col-span-3 bg-[#e4f0d8]/50">
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
      <div className="max-w-6xl mx-auto w-full mt-4 flex justify-end gap-3 pb-4 px-4">
        <button className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded font-bold text-sm hover:bg-gray-50 transition shadow-sm flex items-center gap-2">
          <Icons.X className="w-4 h-4" /> Cancel
        </button>
        <button className="bg-[#3e7e7b] text-white px-8 py-2 rounded font-bold text-sm hover:bg-[#2f5e5c] transition shadow-md flex items-center gap-2">
          <Icons.Check className="w-4 h-4" /> Save Contra Voucher
        </button>
      </div>

    </div>
  );
}
