import HighlightReel from "./HighlightReel"
import Love from "./Love"

const LeftPanel = ({garden}) => {
  return (
    <div className="space-y-6 lg:col-span-2 lg:col-start-1">
      <HighlightReel featuredContent={garden?.featuredContent} />
      {garden?.slug === "tshubillabong" && (
        <Love/>
      )}
    </div>
  )
}

export default LeftPanel
