import { ArrowDown } from "lucide-react";
import { DappCard, type DappCardProps } from "../dapp-card/DappCard";
import { Button } from "../ui/Button";

type ShowingResultSectionProps = {
  dapps: DappCardProps[];
  totalCount?: number;
};

const ShowingResultSection = ({
  dapps,
  totalCount = dapps.length,
}: ShowingResultSectionProps) => {
  if (dapps.length === 0) return null;

  const remainingCount = Math.max(totalCount - dapps.length, 0);

  return (
    <section>
      <div className="w-full px-4 md:px-6 xl:px-8">
        <h2 className="text-xl font-semibold leading-[1.2] tracking-[-0.18px] text-content-strong mb-4 2xl:mb-8">
          Showing {dapps.length} of {totalCount}
        </h2>

        {/* Grid Cards */}
        <div className="grid gap-4 md:gap-6 xl:gap-8 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
          {dapps.map((dapp, i) => (
            <DappCard key={i} {...dapp} />
          ))}
        </div>

        {/* More Button */}
        {remainingCount > 0 ? (
          <div className="flex flex-col items-center space-y-2 mt-12">
            <span className="text-sm leading-[1.2] tracking-[-0.12px] text-content-medium">
              ...... {remainingCount} More dApps ......
            </span>
            <Button
              variant={"gradient"}
              size={"md"}
            >
              Load more dApps
              <ArrowDown />
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default ShowingResultSection;
