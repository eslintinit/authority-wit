import { useContext } from 'react'
import { ToastContext } from '../context'
import { LinkIcon } from '@heroicons/react/outline'
import { CheckIcon } from '@heroicons/react/solid'
import { AnimatePresence, motion } from 'framer-motion'

const toastMap = {
  Copy: {
    icon: <LinkIcon className="h-5 w-5 text-white" />,
    text: 'Link has been copied.',
  },
  Highlight: {
    icon: <CheckIcon className="h-5 w-5 text-white" />,
    text: 'Highlight has been added.',
  },
  Share: {
    icon: <CheckIcon className="h-5 w-5 text-white" />,
    text: 'Shared.',
  },
  'Test Brief': {
    icon: <CheckIcon className="h-5 w-5 text-white" />,
    text: 'Added to Test Brief.',
  },
  'Main Case 2021': {
    icon: <CheckIcon className="h-5 w-5 text-white" />,
    text: 'Added to Main Case 2021.',
  },
  'Case Research Brief': {
    icon: <CheckIcon className="h-5 w-5 text-white" />,
    text: 'Added to Case Research Brief.',
  },
}

export default function Toast() {
  const { toast } = useContext(ToastContext)

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          className="absolute self-center flex items-center rounded-md h-12 content-box bg-gray-50 shadow-sm"
          initial={{ opacity: 0, marginTop: 0 }}
          animate={{ opacity: 1, marginTop: -16 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex justify-center items-center bg-blue-600 h-12 w-12 rounded-l-md">
            {toastMap[toast].icon}
          </div>
          <div className="px-5 text-sm text-gray-600 border border-l-0 rounded-r-md h-12 flex items-center">
            {toastMap[toast].text}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
