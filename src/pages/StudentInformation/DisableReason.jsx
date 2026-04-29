import React from 'react';

export function DisableReason() {
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-white border border-gray-200 rounded shadow-sm p-4">
        <h3 className="text-gray-700 font-semibold text-sm border-b pb-2 mb-4">Disable Reason</h3>
        <p className="text-sm text-gray-600">Disable reason configuration goes here.</p>
      </div>
    </div>
  );
}
