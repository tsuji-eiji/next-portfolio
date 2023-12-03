import CategoryLinks from "./CategoryLinks";
import WordSearch from "./WordSearch";
import MonthlyArchive from "./MonthlyArchive";
import ProfileIndex from "./ProfileIndex";

export default async function StaticPage({searchParams}) {
  
  return (
    <div className="lg:w-1/4">
      <ProfileIndex />
      <WordSearch />
      <CategoryLinks />
      <MonthlyArchive />
    </div>
  );
}