import dynamic from 'next/dynamic'

// we render popover only client-side as it relies on "document" object
const Popover = dynamic(() => import('../components/popover'), { ssr: false })

export default function Home() {
  return (
    <div className="max-w-3xl text-md text-gray-800 p-8">
      <Popover />
      <p>
        Our API provides a general-purpose “text in, text out” interface, which
        makes it possible to apply it to virtually any language task. This is
        different from most other language APIs, which are designed for a single
        task, such as sentiment classification or named entity recognition.
      </p>
      <br />
      <p>
        To use the API, you simply give it a text prompt (the text-based input
        or "instructions" you provide to the API) and it will return a text
        completion, attempting to match the context or pattern you gave it. You
        can “program” it by crafting a description or writing just a few
        examples of what you’d like it to do. Its success generally varies
        depending on how complex the task is. A good rule of thumb is thinking
        about how you would write out a word problem for a middle schooler to
        solve.
      </p>
      <br />
      <p>
        Keep in mind that the models' training data cuts off in October 2019, so
        they may not have knowledge of current events. We plan to add more
        continuous training in the future.
      </p>
    </div>
  )
}
