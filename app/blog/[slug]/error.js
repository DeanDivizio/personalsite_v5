'use client'

import React from 'react'

export default function Error({ reset }) {
  return (
    <div className="w-screen min-h-[98vh] flex flex-row justify-center items-start bg-gradient-to-br from-slate-dark to-black">
      <div className="max-w-2xl mx-auto py-8 px-4 text-white">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <button
          onClick={() => reset()}
          className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded"
          >
          Try again
        </button>
      </div>
    </div>
  )
}