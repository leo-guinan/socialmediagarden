import { ContentTypes } from "../../types"
import { classNames } from "../../utils"
import { useQuery } from "@blitzjs/rpc"
import getFeedsForUser, { Feed } from "../queries/getFeedsForUser"
import { SVGProps, useEffect } from "react"
import { BookOpenIcon, RadioIcon, VideoCameraIcon } from "@heroicons/react/20/solid"
import getFeedsForGarden from "../queries/getFeedsForGarden"

const GardenContent = ({garden}) => {

  const [feeds] = useQuery(getFeedsForGarden, { gardenId: garden.id }, {
    suspense: true,
  })


  useEffect(() => {
    console.log(feeds)
  }, [feeds])

  const content = [
    {
      title: "Highlight Reels w/TERRI SHUBILLA",
      summary: "New weekly series of Lobow’s SPARK titled “Highlight Reels.” Week 1 features Terri Shubilla! We Love you, Terri!! \n\nThank you Leo Guinan, Dorsey McFadden, Mercedes Mansilla, Kirk Hofstrom and Blushing Crafter for making the first episode of this series so special!! \n\n“Highlight Reels” is supported by Social Media Gardens\n\nLobow’s SPARK is proudly supported by Terri Shubilla, Kirk Hofstrom. Casey Elliot, Sarah Delano, Justin Allingham, Blushing Crafter, Jamie Young, and Leo Guinan. \n\nLobow’s SPARK has started a fundraising effort for Crisis Text Line.  We have a goal of $19 per episode as $19 supports one person in their time of absolute crisis with their mental health. If you would like to donate through our fundraiser in titled “Lauren’s Infinity”, the link is listed below.\n\nhttps://www.classy.org/fundraiser/3638033",
      link: "https://www.youtube.com/watch?v=PQiEW8slvOo",
      published: "September 24, 2022",
      type: ContentTypes.youtube

    },
    {
      title: "Shorty Outta State, She’s Gonna Break The Rules Though - She Could Do Whatever She Wants",
      summary: "bottles and coliseums... Sorry, that song's stuck in my head. I wonder if I should mention the song name &#38; artist since the title of...",
      link: "https://www.terriinwonderland.com/post/shorty-outta-state-she-s-gonna-break-the-rules-though-she-could-do-whatever-she-wants",
      published: "September 14, 2022",
      type: ContentTypes.blog


    },
    {
      title: "ADHD & FRIENDSHIP...IT MATTERS!!",
      summary: "Today, this incredible group of ADHDers will discuss the very title of Season 9… ADHD & Friendship…\nA very special thank you goes out to Terri Shubilla for bringing this topic to the table.  We discuss what friendship means to us as individuals and as a group.  It is in my nonprofessional opinion that close friendships with people that understand you, is the key to thriving with ADHD.  \n\nFriends featured in this episode are Blushing Crafter, Leo Guinan, Dorsey McFadden, Terri Shubilla, Ross Jones, Mercedes Mansilla, Justin Allingham, and Kirk Hofstrom…\n\nTOGETHER WE ARE...SOMETHING FOR SOMEONE...\nAppearing in this episode (Follow on Twitter)\nLobow (@LobowSPARK) - Host \nLeo Guinan (@leo_guinan) \nTerri Shubilla (@tshubillabong)\nBlushing Crafter (@blushingcrafter)\nDorsey McFadden (@DoreseyMc)\nRoss Jones (@randomshenans)\nMercedes Mansilla (@MechiMansilla)\nJustin Allingham (@JustinAllingham)\nKirk Hofstrom (@TheKookamonga)\n\nMERCHANDISE NOW AVAILABLE! This is a work in progress but tell me what you want and I will make it happen! https://lobowspark.myshopify.com/\n\nMusic in this episode is provided by Guy Farmer.  Look him up on Itunes!\n   \nLobow’s SPARK is proudly supported by Terri Shubilla, Kirk Hofstrom. Casey Elliot, Sarah Delano, Justin Allingham, Blushing Crafter, Jamie Young, and Leo Guinan. \n\nLobow’s SPARK has started a fundraising effort for Crisis Text Line.  We have a goal of $19 per episode as $19 supports one person in their time of absolute crisis with their mental health. If you would like to donate through our fundraiser in titled “Lauren’s Infinity”, the link is listed below.\nhttps://www.classy.org/fundraiser/3638033 \nLobow’s SPARK is proudly sponsored by Feather – Feather Your Impact with Feather CRM. If you need help managing your online relationships, go to www.feathercrm.io . You can also follow Feather on twitter @feathercrm \n\nJoin our discord where you will be welcomed, supported, and encouraged by other people with ADHD. https://discord.com/invite/9RbCsSDWXV",
      link: "https://www.youtube.com/watch?v=FWiUUjO4cMY",
      published: "Semptember 8, 2022",
      type: ContentTypes.youtube

    },
    {
      title: "I Know I Tend to Make It About Me, You Never Get Just What You See",
      summary: "All of my life I have been trying - and I say “trying” because I’m not really sure if I’ve ever succeeded in this pursuit - trying my...",
      link: "https://www.terriinwonderland.com/post/i-know-i-tend-to-make-it-about-me-you-never-get-just-what-you-see",
      published: "August 31, 2022",
      type: ContentTypes.blog

    },
    {
      title: "ADHD & ANXIETY - THE POWER OF FRIENDSHIP",
      summary: "Welcome to Season 9 of Lobow’s Spark…The Power of friendship.  This season will focus on close relationships and the support that IS VITAL FOR ALL NEURODIVERGHENTS.  Today we talk about ADHD & Anxiety.  How it presents itself in each of us and what we do to combat it.  I will say that this group of close ADHD friends inspires me to be better each and every week.  Friends featured in this episode are Blushing Crafter, Leo Guinan, Dorsey McFadden, Terri Shubilla, and Guy Farmer.  TOGETHER WE ARE...SOMETHING FOR SOMEONE...\n\nAppearing in this episode (Follow on Twitter)\nLobow (@LobowSPARK) - Host \nLeo Guinan (@leo_guinan) \nTerri Shubilla (@tshubillabong)\nBlushing Crafter (@blushingcrafter)\nDorsey McFadden (@DoreseyMc)\nGuy Farmer (Not on twitter but look up his music on Itunes!)\n\nMusic in this episode is provided by Guy Farmer.  He is currently forming a website where all of us can listen to his incredible talent.  \n\nLobow’s SPARK is proudly supported by Terri Shubilla, Clair Simpson, Casey Elliot, Sarah Delano, Justin Allingham, Blushing Crafter, Jamie Young, Leo Guinan and Kirk Hofstrom.\n\nLobow’s SPARK has started a fundraising effort for Crisis Text Line.  We have a goal of $19 per episode as $19 supports one person in their time of absolute crisis with their mental health. If you would like to donate through our fundraiser in titled “Lauren’s Infinity”, the link is listed below.\n\nhttps://www.classy.org/fundraiser/3638033 \n\nLobow’s SPARK is proudly sponsored by Feather – Feather Your Impact with Feather CRM. If you need help managing your online relationships, go to www.feathercrm.io . You can also follow Feather on twitter @feathercrm \n\nJoin our discord where you will be welcomed, supported, and encouraged by other people with ADHD. https://discord.com/invite/9RbCsSDWXV\n\nSupport the show",
      link: "https://www.youtube.com/watch?v=Sa7Dm_gx_xo",
      published: "August 19, 2022",
      type: ContentTypes.youtube

    },
    {
      title: "I’m Still Here, Still Bright When The Night Comes, Still Burning.. Still Bright When The Night Comes",
      summary: "I’m sitting here on the beach.. in the Sun, in the sand. Waves crashing, a steady breeze, kids running around laughing. I love  watching...",
      link: "https://www.terriinwonderland.com/post/i-m-still-here-still-bright-when-the-night-comes-still-burning-still-bright-when-the-night-comes",
      published: "August 18, 2022",
      type: ContentTypes.blog

    }, {
      title: "This Shit’s Gonna Kill Me but I Won’t Let It",
      summary: "For my mental health. For my heart. For my soul, my future. The hardest thing I’ve ever had to do for myself is pick me. I just ended a...",
      link: "https://www.terriinwonderland.com/post/this-shit-s-gonna-kill-me-but-i-won-t-let-it",
      published: "July 18, 2022",
      type: ContentTypes.blog
    }, {
      title: "You're Gonna Find Yourself Somewhere, Somehow",
      summary: "My favorite color is green. I love Mexican food. I love the beach and summer and bonfires and camping and swimming. I’m a dog person, I...",
      link: "https://www.terriinwonderland.com/post/you-re-gonna-find-yourself-somewhere-somehow",
      published: "July 13, 2022",
      type: ContentTypes.blog

    }, {
      title: "I Know We’re Not Too Pressed for Time, But Can Ya Pick Up On the Pace?",
      summary: "When I first realized I have ADHD I was actually thrilled. Finally, it all makes sense now! I found the missing piece. Yeah, there were...",
      link: "https://www.terriinwonderland.com/post/i-know-we-re-not-too-pressed-for-time-but-can-ya-pick-up-on-the-pace",
      published: "April 29, 2022",
      type: ContentTypes.blog
    }, {
      title: "Wildflower in the Spring, oh They Can’t Contain You, Through the Cracks You Break Through",
      summary: "I am 31 years old today, but I really don’t feel like it. A few years ago it’s like I started aging backwards or something, a new fresh...",
      link: "https://www.terriinwonderland.com/post/wildflower-in-the-spring-oh-they-can-t-contain-you-through-the-cracks-you-break-through",
      published: "March 30, 2022",
      type: ContentTypes.blog
    }]


  const timeline = [
    {
      id: 1,
      type: ContentTypes.podcast,
      content: "Title of Podcast",
      target: "Podcast Name",
      date: "Sep 20",
      datetime: "2020-09-20"
    },
    {
      id: 2,
      type: ContentTypes.youtube,
      content: "Youtube Title",
      target: "Youtube Channel",
      date: "Sep 22",
      datetime: "2020-09-22"
    },
    {
      id: 3,
      type: ContentTypes.blog,
      content: "Blog Title",
      target: "blog location",
      date: "Sep 28",
      datetime: "2020-09-28"
    },
    {
      id: 4,
      type: ContentTypes.youtube,
      content: "Youtube Title",
      target: "Youtube Channel",
      date: "Sep 30",
      datetime: "2020-09-30"
    },
    {
      id: 5,
      type: ContentTypes.blog,
      content: "Blog Title",
      target: "blog location",
      date: "Oct 4",
      datetime: "2020-10-04"
    }
  ]

  type ContentType = {
    icon: (props: SVGProps<SVGSVGElement>) => JSX.Element,
    bgColorClass: string
  }


  // const TypeIcon = ({icon}) => {
  //   return() <`${icon}` />)
  // }

  const mapTypeToObject = (type: string) => {
    //  podcast: { icon: RadioIcon, bgColorClass: 'bg-gray-400' },
    //   youtube: { icon: VideoCameraIcon, bgColorClass: 'bg-blue-500' },
    //   blog: { icon: BookOpenIcon, bgColorClass: 'bg-green-500' },
    //   default: { icon: BookOpenIcon, bgColorClass: 'bg-gray-400' },
    switch (type) {
      case "YT":
        return (<VideoCameraIcon  className="h-5 w-5 text-white bg-blue-500" aria-hidden="true" />)
      case "BL":
        return (<BookOpenIcon  className="h-5 w-5 text-white bg-blue-500" aria-hidden="true" />)
      case "VD":
        return (<VideoCameraIcon  className="h-5 w-5 text-white bg-blue-500" aria-hidden="true" />)
      case "PC":
        return (<RadioIcon  className="h-5 w-5 text-white bg-blue-500" aria-hidden="true" />)
      default:
        return (<BookOpenIcon  className="h-5 w-5 text-white bg-blue-500" aria-hidden="true" />)
    }
  }



  return (
    <>
      <section aria-labelledby="timeline-title" className="lg:col-span-1 lg:col-start-3">
        <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
          <h2 id="timeline-title" className="text-lg font-medium text-gray-900">
            Latest Content Published
          </h2>

          {/* Activity Feed */}
          <div className="mt-6 flow-root pb-6">
            <ul role="list" className="-mb-8">
              {feeds.map((feed) => (
                <>
                {feed.backendFeed.content.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <div className="relative pb-8">
                        {itemIdx !== timeline.length - 1 ? (
                          <span
                            className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                            aria-hidden="true"
                          />
                        ) : null}
                        <div className="flex space-x-3">
                  <span
                    className="bg-blue-500 h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"

                  >
                    {mapTypeToObject(item.type)}
                  </span>
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                              <h3 className="text-sm font-medium">
                                < a href={item.url} target="_blank" rel="noreferrer">{item.title}</a>
                              </h3>
                              <p className="text-sm text-gray-500">{item.published}</p>
                            </div>
                            <p className="text-sm text-gray-500">
                              {item.summary}
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
                ))}

            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default GardenContent
