import { createContext, useState } from 'react'

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const ToastContext = createContext()

const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(null)

  const triggerToast = async (toastType) => {
    setToast(toastType)
    await sleep(2500) // wait for 2.5 seconds
    setToast(null)
  }

  return (
    <ToastContext.Provider
      value={{
        toast,
        triggerToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  )
}

export { ToastProvider, ToastContext }
