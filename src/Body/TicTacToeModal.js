import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { FaRegImages } from 'react-icons/fa'
import { AiFillCloseCircle } from 'react-icons/ai'



function TicTacToeModal() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <div>
      <div className="ml-2">
        <FaRegImages onClick={openModal} className="text-xl text-white lg:hidden"/>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-slate-800 px-2 py-2 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between items-center">
                    <Dialog.Title as="h3" className="text-lg text-white">
                      TicTacRoe
                    </Dialog.Title>
                    <AiFillCloseCircle className="text-white" onClick={closeModal} />
                  </div>
                  <div className="mt-2">
                    <img src={require("../images/tic-tac-roe.png")} alt="tictacroe"/>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export default TicTacToeModal