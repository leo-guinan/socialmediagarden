import { Listbox, Transition } from "@headlessui/react"
import { BookOpenIcon, CheckIcon, ChevronUpDownIcon, RadioIcon, VideoCameraIcon } from "@heroicons/react/20/solid"
import { Fragment, useState } from "react"
import { classNames } from "../../utils"

const SelectFeedType = ({selected, setSelected, feedTypes}) => {


  const mapTypeToObject = (type: string) => {
    //  podcast: { icon: RadioIcon, bgColorClass: 'bg-gray-400' },
    //   youtube: { icon: VideoCameraIcon, bgColorClass: 'bg-blue-500' },
    //   blog: { icon: BookOpenIcon, bgColorClass: 'bg-green-500' },
    //   default: { icon: BookOpenIcon, bgColorClass: 'bg-gray-400' },
    switch (type) {
      case "YouTube":
        return (<VideoCameraIcon className="h-5 w-5 text-white bg-blue-500" aria-hidden="true" />)
      case "Podcast":
        return (<BookOpenIcon className="h-5 w-5 text-white bg-blue-500" aria-hidden="true" />)
      case "Video":
        return (<VideoCameraIcon className="h-5 w-5 text-white bg-blue-500" aria-hidden="true" />)
      case "Blog":
        return (<RadioIcon className="h-5 w-5 text-white bg-blue-500" aria-hidden="true" />)
      default:
        return (<BookOpenIcon className="h-5 w-5 text-white bg-blue-500" aria-hidden="true" />)
    }
  }

  return (
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
                    {mapTypeToObject(selected)}
                    <span className="ml-3 block truncate">{selected}</span>
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
                {feedTypes.map((type, ix) => (
                  <Listbox.Option
                    key={ix}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-indigo-600" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={type}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          {mapTypeToObject(type)}
                          <span
                            className={classNames(selected ? "font-semibold" : "font-normal", "ml-3 block truncate")}
                          >
                            {type}
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
  )
}

export default SelectFeedType
