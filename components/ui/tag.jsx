import clsx from 'clsx'
import React from 'react'

const Tag = ({ className, text }) => {
    return (
        <div className={clsx('bg-green-500', className)}>
            <span>{text}</span>
        </div>
    )
}

export default Tag