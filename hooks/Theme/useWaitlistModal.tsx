import { useState } from 'react'

export const useWaitlistModal = () => {
  const [showModal, setShowModal] = useState(false)
  const showWaitistModal = () => setShowModal(true)
  const hideWaitistModal = () => setShowModal(false)

  return {
    isWaitlistModalShown: showModal,
    setWaitlistModal: setShowModal,
    showWaitistModal,
    hideWaitistModal,
  }
}
