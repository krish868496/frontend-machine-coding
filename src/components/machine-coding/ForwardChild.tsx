import React, { forwardRef } from 'react'

const ForwardChild = forwardRef<HTMLInputElement>((props, ref) => {
  return (
    <div>
        <input ref={ref} {...props} />
    </div>
  )
}
)
export default ForwardChild