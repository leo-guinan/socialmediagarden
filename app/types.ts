import { BookOpenIcon, RadioIcon, VideoCameraIcon } from "@heroicons/react/20/solid"

export const ContentTypes = {
  podcast: { icon: RadioIcon, bgColorClass: 'bg-gray-400' },
  youtube: { icon: VideoCameraIcon, bgColorClass: 'bg-blue-500' },
  blog: { icon: BookOpenIcon, bgColorClass: 'bg-green-500' },
}
