import { QuestionMarkCircleIcon } from "@heroicons/react/20/solid"

const Love = () => {
  const user = {
    name: 'Whitney Francis',
    email: 'whitney@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
  }
  const love = [
    {
      id: 1,
      link: "https://twitter.com/BlushingCrafter",
      name: 'Blushing Crafter (she/her)',
      date: '4d ago',
      imageUrl: 'https://pbs.twimg.com/profile_images/962020279315656704/GK_TRTyp_400x400.jpg',
      body: 'Love you so much! Thank you for being you, and for being an amazing person and friend.',
    },
    {
      id: 2,
      link: "https://twitter.com/MechiMansilla",
      name: 'MechiMansilla 👩‍',
      date: '4d ago',
      imageUrl: 'https://pbs.twimg.com/profile_images/1562931800741117954/4gdrDQCU_400x400.jpg',
      body: 'Omg 😭 \n' +
        '@tshubillabong\n' +
        ' we 💗 you! Such a beautiful community!!! And this wouldn’t be possibly without you and \n' +
        '@LobowSpark\n' +
        ' 💕 you deserve the world, girl!',
    },
    {
      id: 3,
      link: "https://twitter.com/NoDegreeDotCom",
      name: 'Jonaed | The NoDegree Podcast | NoDegree.com',
      date: '4d ago',
      imageUrl: 'https://pbs.twimg.com/profile_images/1574074389309571077/56zwlqHJ_400x400.png',
      body: '💯💯💯',
    },
  ]

  return (
    <section aria-labelledby="notes-title">
      <div className="bg-white shadow sm:overflow-hidden sm:rounded-lg ">
        <div className="divide-y divide-gray-200">
          <div className="px-4 py-5 sm:px-6">
            <h2 id="notes-title" className="text-lg font-medium text-gray-900">
              Love
            </h2>
          </div>
          <div className="px-4 py-6 sm:px-6">
            <ul role="list" className="space-y-8">
              {love.map((comment) => (
                <li key={comment.id}>
                  <div className="flex space-x-3">
                    <div className="flex-shrink-0">
                      <a href={comment.link}>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={comment.imageUrl}
                        alt=""
                      />
                      </a>
                    </div>
                    <div>
                      <div className="text-sm">
                        <a href={comment.link} className="font-medium text-gray-900">
                          {comment.name}
                        </a>
                      </div>
                      <div className="mt-1 text-sm text-gray-700">
                        <p>{comment.body}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Love
