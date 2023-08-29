import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../../../utils/firebase";
import { collection, query, where, getDocs, orderBy, limit } from "firebase/firestore";
import { HeartOutlined } from "@ant-design/icons";

interface PathProps {
  path: string;
  queryLimit: number
}

function RideComment({ path,queryLimit }: PathProps) {

  const commentQuery = query(collection(db, path), limit(queryLimit))
   
  const [docs, error] = useCollectionData(commentQuery);

  return (
    <>
      {error && (
        <div>
            error.message
        </div>
      )}
      {docs?.map((comment, i) => (
        <div key={i} className="flex bg-white    max-w-md md:max-w-2xl ">
          <div className="flex items-start  py-6">
            <div className="">
              <div className="">
                <div className="flex items-center justify-start gap-4">
                  <img
                    className="w-8 h-8 rounded-full object-cover mr-2 shadow"
                    src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="avatar"
                  />
                  <h2 className="text-lg font-semibold text-gray-900 -mt-1">
                    {comment.comment_user_name}
                  </h2>
                  <small className="text-sm text-gray-700">22h ago</small>
                </div>
              </div>
              <div>
                <p className="mt-3 text-sm">{comment.user_comment}</p>
              </div>
              <div className="mt-3 flex items-center text-slate-500 ">
                <div className="flex mr-2 text-s text-slate-500 ">
                  <HeartOutlined className="mt-1 mr-1 text-slate-500 hover:text-slate-700" />
                  <span className="">12</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default RideComment;
