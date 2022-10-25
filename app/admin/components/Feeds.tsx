import { Listbox, Transition } from "@headlessui/react"
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid"
import { Fragment, useState } from "react"
import { classNames } from "../../utils"
import getFeedsForGarden from "../../profile/queries/getFeedsForGarden"
import { useMutation, useQuery } from "@blitzjs/rpc"
import getContentForFeed from "../mutations/getContentForFeed"
import { Content, Feed } from "db"

const Feeds = ({ gardenId }) => {

  const [feeds] = useQuery(getFeedsForGarden, { gardenId })
  const [getContentForFeedId] = useMutation(getContentForFeed)
  const [selected, setSelected] = useState<Feed | null>(null)

  const [content, setContent] = useState<Content[]>([])

  const getContent = async (feedId) => {
    const content = await getContentForFeedId({ feedId })
    setContent(content)
  }

  return (
    <>
      <Listbox value={selected} onChange={(value) => setSelected(value)}>
        {({ open }) => (
          <>
            <Listbox.Label className="block text-sm font-medium text-gray-700">Feed Type</Listbox.Label>
            <div className="relative mt-1">
              <Listbox.Button
                className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
              <span className="flex items-center">
                {selected && (
                  <>
                    <span className="ml-3 block truncate">{selected.id}</span>
                  </>
                )}

              </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options
                  className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {feeds.map((feed, ix) => (
                    <Listbox.Option
                      key={ix}
                      className={({ active }) =>
                        classNames(
                          active ? "text-white bg-indigo-600" : "text-gray-900",
                          "relative cursor-default select-none py-2 pl-3 pr-9"
                        )
                      }
                      value={feed}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            <span
                              className={classNames(selected ? "font-semibold" : "font-normal", "ml-3 block truncate")}
                            >
                            {feed.id}
                          </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-indigo-600",
                                "absolute inset-y-0 right-0 flex items-center pr-4"
                              )}
                            >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
      {selected && (
        <div className="mt-2">
          <>
            <button onClick={() => getContent(selected.id)}>Get Content</button>
          </>
        </div>
      )}
    </>
  )
}

export default Feeds
