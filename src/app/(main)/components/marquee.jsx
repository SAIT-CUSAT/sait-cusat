import { cn } from "../../../lib/utils/cn";
import Marquee from "../../../components/Marquee";
import recruiters from "../../../data/recruiters"; // Adjust the path as needed

const RecruiterCard = ({ image, name }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-col items-center justify-center">
        <img className="rounded" width="64" height="64" alt={name} src={image} />
        <figcaption className="mt-2 text-sm font-medium dark:text-white">
          {name}
        </figcaption>
      </div>
    </figure>
  );
};

const MarqueeDemo = () => {
  const firstRow = recruiters.slice(0, recruiters.length / 2);
  const secondRow = recruiters.slice(recruiters.length / 2);

  return (
    <div className="relative flex w-full flex-col items-start  justify-center py-14">
      <h2 className="text-2xl  text-center !text-[#001153] font-bold mb-4 ml-20 z-10">Our Past Recruiters</h2>
      <div className="overflow-hidden rounded-lg mt-10 border md:shadow-sm w-full pb-16">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((recruiter) => (
          <RecruiterCard key={recruiter.name} {...recruiter} />
        ))}
      </Marquee>

      {/* Second Row (Reverse Direction) */}
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((recruiter) => (
          <RecruiterCard key={recruiter.name} {...recruiter} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
      {/* First Row */}

      {/* Gradient Effects */}
    </div>
  );
};

export default MarqueeDemo;
