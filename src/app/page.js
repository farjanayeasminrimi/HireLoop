import GlobalStats from "@/components/homepage/GlobalStats";
import SearchJob from "@/components/homepage/SearchJob";

export default function Home() {
  return (
    <div>
      <SearchJob></SearchJob>
      <GlobalStats></GlobalStats>
      Main Area
    </div>
  );
}
