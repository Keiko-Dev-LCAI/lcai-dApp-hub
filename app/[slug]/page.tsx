import DappDetailsContent from "@/components/dapp-details/DappDetailsContent"
import DappSidebar from "@/components/dapp-details/DappSidebar"

const page = () => {
  return (
    <main className="space-y-18 pt-14 pb-25">
      {/* Details Content */}
      <section className="px-4">
        <div className="container mx-auto">
          <div className="flex gap-10">
            <DappSidebar />
            <DappDetailsContent />
          </div>
        </div>
      </section>

      {/* Similar Dapp */}
      <section className="px-4">
        <div className="container mx-auto">
          <div className="text-white">similar dapp goes here</div>
        </div>
      </section>
    </main>
  )
}

export default page