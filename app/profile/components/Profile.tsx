import LeftPanel from "./LeftPanel"
import getGardenForSlug from "../queries/getGardenForSlug"
import { useQuery } from "@blitzjs/rpc"
import { useCurrentUser } from "../../core/hooks/useCurrentUser"
import RightPanel from "./RightPanel"
import { useEffect } from "react"


export default function Profile({ slug }) {
  //get profile from query
  const [garden] = useQuery(getGardenForSlug, { slug }, {
    suspense: true,
    initialData: {
      name: "",
      image: ""
    }
  })

  useEffect(() => {
    console.log(garden)
  }, [garden])

  return (
    <>
      {garden && (
        <>
          <div
            className="mx-auto max-w-3xl px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
            <div className="flex items-center space-x-5">
              <div className="flex-shrink-0">
                {garden.image && (

                <div className="relative">
                  <img
                    className="h-16 w-16 rounded-full"
                    src={garden.image}
                    alt=""
                  />
                  <span className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                </div>
                )}
              </div>

              <div>
                <h1 className="text-2xl font-bold text-gray-900">{garden.name}</h1>
              </div>
            </div>
            <div
              className="justify-stretch mt-6 flex flex-col-reverse space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-y-0 sm:space-x-3 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
              {/*<button*/}
              {/*  type="button"*/}
              {/*  className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"*/}
              {/*>*/}
              {/*  Add to Social Garden*/}
              {/*</button>*/}
            </div>
          </div>

          <div
            className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
            {garden && (

              <>
                <LeftPanel garden={garden} />
                <RightPanel garden={garden}  />
              </>
            )}

          </div>
        </>
      )}


    </>
  )
}
