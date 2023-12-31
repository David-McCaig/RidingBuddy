import RidePostComment from "./Component/RidePostAComment";
import RideComment from "./Component/RideComment";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import RidePosted from "./Component/RidePosted";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import { db } from "../../utils/firebase";

function RidePostedModal({ id, open, setOpen }: any) {
  const cancelButtonRef = useRef(null);
 
  const docRef = doc(db, "ridePosts", id);
  const [data, loading, error] = useDocumentData(docRef);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto ">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="p-4">
                  <RidePosted
                    id={id}
                    userName={data?.user_name}
                    rideTitle={data?.ride_title}
                    rideDescription={data?.ride_description}
                    loading={loading}
                    error={error}
                  />
                  <RidePostComment id={id} />
                  <RideComment path={`ridePosts/${id}/comments`} queryLimit={100}/>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default RidePostedModal;
