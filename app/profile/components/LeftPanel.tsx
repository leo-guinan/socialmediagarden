import HighlightReel from "./HighlightReel"
import Love from "./Love"

const LeftPanel = () => {
  return (
    <div className="space-y-6 lg:col-span-2 lg:col-start-1">
      <HighlightReel />
      <Love/>
    </div>
  )
}

export default LeftPanel
