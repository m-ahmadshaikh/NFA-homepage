import RoadmapImages from './components/RoadmapImages';
import RoadmapHeader from './components/RoadmapHeader';
import RoadmapContent from './components/RoadmapContent';

function RoadmapSection() {
  return (
    <div
      className="h-[682px] md:h-[800px] xl:h-[810px] mt-[60px] md:mt-0 relative overflow-hidden"
      style={{
        background:
          'linear-gradient(64.86deg, #000000 10.86%, #005278 84.05%), #1F1F1F',
      }}>
      <RoadmapImages />
      <RoadmapHeader />
      <RoadmapContent />
    </div>
  );
}

export default RoadmapSection;
