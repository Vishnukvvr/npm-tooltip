


import React from 'react'
import Tooltip from 'rc-tooltip'
import 'rc-tooltip/assets/bootstrap_white.css'

const Pit = () => {
  return (
    <div >
        <h1>i am a tooltip</h1>
        <Tooltip placement="top" overlay={<span>i am vishnu</span>}>
            <button>hover me</button>
        </Tooltip>

    </div>
  )
}

export default Pit