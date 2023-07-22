import ArcadeContentBGImages from './components/ArcadeContentBGImages';
import ArcadeContentTitle from './components/ArcadeContentTitle';
import ArcadeContentText from './components/ArcadeContentText';
import ArcadeContentIcons from './components/ArcadeContentIcons';

function ArcadeContent() {
  return (
    <div
      style={{
        background: 'linear-gradient(64.86deg, #000000 10.86%, #005278 84.05%)',
      }}
      className="h-[725px] md:h-[875px] xl:h-[1073px] relative  overflow-hidden">
      <ArcadeContentBGImages />
      <ArcadeContentTitle />
      <ArcadeContentText />
      <ArcadeContentIcons />
    </div>
  );
}

export default ArcadeContent;
