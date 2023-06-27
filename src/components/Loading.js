import React from 'react'
import spinner from "./spinner.gif"
export default function Loading() {
  return (
    <div>
      <div className="text-center">
        <img src={spinner} alt="spinner" />
      </div>
    </div>
  )
}
