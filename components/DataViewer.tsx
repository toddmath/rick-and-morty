type DataViewerProps<T extends Record<string, unknown> = {}> = {
  data: T
}

export const DataViewer: React.FC<DataViewerProps> = ({ data }) => {
  return (
    <section className='mockup-code w-full bg-neutral text-neutral-content'>
      <pre>
        <code>{JSON.stringify(data, null, " ")}</code>
      </pre>
    </section>
  )
}
