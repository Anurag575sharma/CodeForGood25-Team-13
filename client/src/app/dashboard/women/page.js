import Topbar from "@/components/Topbar";
import MathsAvgBarChart from "@/components/charts/MathsAvgBarChart";
import EnglishAvgBarChart from "@/components/charts/EnglishAvgBarChart";
import EarningBarChart from "@/components/charts/EarningBarChart";
import SkillPieChart from "@/components/charts/SkillPieChart";
import AgeGroup from "@/components/charts/AgeGroup";
import StudentGender from "@/components/charts/StudentGender";

export default function Dashboard() {
  return (
    <div className="flex">
      <div className="w-full">
        <Topbar />
        <main className="pt-8 px-6 space-y-6">
          <h1 className="text-3xl font-bold mb-4">Women Stats</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#F0BE53] text-white p-6 rounded-xl text-center">
              <h2 className="text-sm uppercase">Total Women</h2>
              <p className="text-3xl font-bold">1230</p>
            </div>
            <div className="bg-[#F0BE53] text-white p-6 rounded-xl text-center">
              <h2 className="text-sm uppercase">Dropout %</h2>
              <p className="text-3xl font-bold">30%</p>
            </div>
            <div className="bg-[#F0BE53] text-white p-6 rounded-xl text-center">
              <h2 className="text-sm uppercase">Success %</h2>
              <p className="text-3xl font-bold">40%</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <EarningBarChart />
            <SkillPieChart />
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-2">Overall Summary</h2>
            <p className="text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
              Sed cursus ante dapibus diam.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-2">Areas To Improve</h2>
            <ul className="list-disc ml-6 text-gray-700 text-sm">
              <li>Point 1</li>
              <li>Point 2</li>
              <li>Point 3</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
