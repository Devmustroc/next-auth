import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode}) => {
  return (
    <div
        className="flex items-center justify-center h-full bg-emerald-400"
    >
        {children}
    </div>
  )
}

export default AuthLayout;