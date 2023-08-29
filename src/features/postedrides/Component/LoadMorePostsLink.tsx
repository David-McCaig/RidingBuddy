import { useState } from 'react'

function LoadMorePostsLink() {

    const [open, setOpen] = useState(false)

    const openModalCLick = () => {
        setOpen(true)
      }

  return (
    <div onClick={openModalCLick}>
        <h3>Load more comments</h3>
    </div>
  )
}

export default LoadMorePostsLink