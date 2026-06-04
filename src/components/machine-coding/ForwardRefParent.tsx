import React from 'react'
import ForwardChild from './ForwardChild'

const ForwardRefParent = () => {
        const inputRef = React.useRef<HTMLInputElement>(null);
        function focusInput() {
                inputRef.current?.focus();

        }
  return (
    <div>
        <ForwardChild ref={focusInput} />
    </div>
  )
}

export default ForwardRefParent