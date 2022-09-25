const HighlightReel = () => {
  return (
    <section aria-labelledby="applicant-information-title">
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2 id="applicant-information-title" className="text-lg font-medium leading-6 text-gray-900">
            Highlight Reel
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-gray-500"></p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <div className="aspect-w-16 aspect-h-9">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/PQiEW8slvOo"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
          </div>
        </div>
        <div>
        </div>
      </div>
    </section>
  )
}

export default HighlightReel
