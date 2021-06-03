import { useState } from 'react'
import { Popover } from 'react-text-selection-popover'
import { ChevronRightIcon } from '@heroicons/react/solid'
import {
  ClipboardIcon,
  PencilIcon,
  ShareIcon,
  FolderIcon,
} from '@heroicons/react/outline'

export default function PopupWrapper() {
  return (
    <Popover
      render={({ clientRect, isCollapsed, textContent }) => {
        if (clientRect == null || isCollapsed) return null

        const style = {
          position: 'fixed',
          left: `${clientRect.left + clientRect.width / 2}px`,
          top: `${clientRect.top + 18}px`,
        }

        return <Popup style={style} />
      }}
    />
  )
}

const Popup = ({ style }) => {
  const [showSecondaryMenu, setShowSecondaryMenu] = useState(false)

  return (
    <div
      className="relative origin-top-right absolute right-0 flex"
      style={style}
    >
      {/* Primary Menu */}
      <ul
        className="mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none select-none"
        style={{ height: 'min-content' }}
      >
        <MenuItem label="Copy" icon={ClipboardIcon} />
        <MenuItem label="Highlight" icon={PencilIcon} />
        <MenuItem label="Share" icon={ShareIcon} />
        <MenuItem
          label="Add to Brief"
          icon={FolderIcon}
          triggerSecondaryMenu
          active={showSecondaryMenu}
          showSecondaryMenu={showSecondaryMenu}
          setShowSecondaryMenu={setShowSecondaryMenu}
        />
      </ul>

      {/* Secondary Menu */}
      {showSecondaryMenu && (
        <ul
          className="w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none select-none rounded-tl-none"
          style={{ marginTop: 142 }}
        >
          <MenuItem label="Test Brief" />
          <MenuItem label="Main Case 2021" />
          <MenuItem label="Case Research Brief" />
        </ul>
      )}
    </div>
  )
}

// props: label, ?icon, ?triggerSecondaryMenu, ?showSecondaryMenu, ?setShowSecondaryMenu, ?active
const MenuItem = (props) => (
  <li>
    <a
      className={`group flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer active:bg-green-500 ${
        props.active ? 'bg-gray-100 text-gray-900' : ''
      }`}
      onClick={() => {
        if (props.triggerSecondaryMenu) {
          props.setShowSecondaryMenu(!props.showSecondaryMenu)
        }
      }}
    >
      <div className="flex items-center">
        {props.icon && (
          <props.icon
            className={`mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500 ${
              props.active ? 'text-gray-500' : ''
            }`}
            aria-hidden="true"
          />
        )}
        {props.label}
      </div>
      {props.triggerSecondaryMenu && (
        <ChevronRightIcon
          className={`h-5 w-5 text-gray-400 group-hover:text-blue-500 ${
            props.active ? 'text-blue-500' : ''
          }`}
        />
      )}
    </a>
  </li>
)
