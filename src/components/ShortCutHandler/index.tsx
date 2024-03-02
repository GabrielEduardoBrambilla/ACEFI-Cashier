import React, { useEffect } from 'react'

interface Shortcut {
  keys: string[] // array of key names for the shortcut
  action: () => void // function to execute when the shortcut is triggered
}

interface ShortcutProps {
  shortcuts: Shortcut[] // array of shortcuts
}

export const ShortcutHandler: React.FC<ShortcutProps> = ({ shortcuts }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check if any of the shortcuts match the pressed keys
      for (const shortcut of shortcuts) {
        const { keys, action } = shortcut
        const pressedKeys = keys.map(key => key.toLowerCase())
        const pressedKeyIndex = pressedKeys.indexOf(event.key.toLowerCase())

        // If all keys in the shortcut are pressed in order, execute the action
        if (pressedKeyIndex !== -1) {
          const nextKey = pressedKeys[pressedKeyIndex + 1]
          if (
            pressedKeys.slice(pressedKeyIndex + 1).every((key, index) => {
              const nextEventKey = index === 0 ? nextKey : keys[index + 1]
              return (
                event.getModifierState(key) &&
                event.key.toLowerCase() === nextEventKey.toLowerCase()
              )
            })
          ) {
            action()
            event.preventDefault() // Prevent default browser behavior for the shortcut keys
          }
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [shortcuts])

  return null
}
