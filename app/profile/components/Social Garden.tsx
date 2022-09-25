import { ContentTypes } from "../../types"
import { classNames } from "../../utils"

const SocialGarden = () => {

  const socialgarden = [
    {
      id: 1,
      link: "https://twitter.com/BlushingCrafter",
      name: 'Blushing Crafter (she/her)',
      imageUrl: 'https://pbs.twimg.com/profile_images/962020279315656704/GK_TRTyp_400x400.jpg',
      body: 'Streaming Ambassador for \n' +
        '@TakeThisOrg\n' +
        ' , Champion for \n' +
        '@SafeInOurWorld\n' +
        ' Pronouns: she/her/hers. Mental health advocate. Business contact: blushingcrafter@gmail.com',
    },
    {
      id: 2,
      link: "https://twitter.com/MechiMansilla",
      name: 'MechiMansilla 👩‍',
      imageUrl: 'https://pbs.twimg.com/profile_images/1562931800741117954/4gdrDQCU_400x400.jpg',
      body: 'I help coaches & entrepreneurs get their messages out in a way that attracts customers, engages their audience, and turns leads into customers 🚀 #dailybiztips',
    },
    {
      id: 3,
      link: "https://twitter.com/NoDegreeDotCom",
      name: 'Jonaed | The NoDegree Podcast | NoDegree.com',
      imageUrl: 'https://pbs.twimg.com/profile_images/1574074389309571077/56zwlqHJ_400x400.png',
      body: 'Host: The NoDegree Podcast http://bit.ly/NDPod | http://NoDegree.com | Follow for NoDegree careers | Press: media@nodegree.com | 180+ LinkedIn reviews | Sponsor my Github |',
    },
    {
      id: 4,
      link: "https://twitter.com/LobowSpark",
      name: 'Lobow\'s SPARK',
      imageUrl: 'https://pbs.twimg.com/profile_images/1503871992017084422/LXTKoNJz_400x400.jpg',
      body: 'Living an inspired life bc of ADHD. Host of Lobow\'s SPARK Podcast that provides pure energy & momentum when you need it the most. We are “Something for Someone”',
    },
    {
      id: 5,
      link: "https://twitter.com/leo_guinan",
      name: 'Leo Guinan',
      imageUrl: 'https://pbs.twimg.com/profile_images/1547929810046840836/AQDnpT0a_400x400.png',
      body: 'Embracing my weird\n' +
        '\n' +
        'Exploring the future at the intersection of work, education, connection, and creation\n' +
        '\n' +
        'Building fun tools in public\n' +
        '\n' +
        'Curator \n' +
        '@startupworld',
    }
  ]
  return (
    <>
      <section aria-labelledby="timeline-title" className="lg:col-span-1 lg:col-start-3 ">
        <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
          <h2 id="timeline-title" className="text-lg font-medium text-gray-900 mt-4">
            Social Garden
          </h2>
          <div className="mt-6 flow-root pb-6">
            <ul role="list" className="-mb-8">
              {socialgarden.map((item, itemIdx) => (
                <li key={item.id}>
                  <div className="flex space-x-3">
                    <div className="flex-shrink-0">
                      <a href={item.link}>
                        <img
                          className="h-10 w-10 rounded-full"
                          src={item.imageUrl}
                          alt=""
                        />
                      </a>
                    </div>
                    <div>
                      <div className="text-sm">
                        <a href={item.link} className="font-medium text-gray-900">
                          {item.name}
                        </a>
                      </div>
                      <div className="mt-1 text-sm text-gray-700">
                        <p>{item.body}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default SocialGarden
