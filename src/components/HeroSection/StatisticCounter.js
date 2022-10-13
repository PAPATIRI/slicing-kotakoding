import tw from "twin.macro";

const CounterWrapper = tw.div`flex flex-col gap-2 min-h-[100px] items-center max-w-[150px] py-2 px-4 bg-orangeLight rounded-2xl shadow-xl`;
const CounterTitle = tw.p`text-3xl font-bold text-textBlack`;
const CounterDesc = tw.small`text-xs text-textBlack text-center`;

export default function StatisticCounter(props) {
  const { counterNum, counterDesc } = props;
  return (
    <CounterWrapper>
      <CounterTitle>{counterNum}</CounterTitle>
      <CounterDesc>{counterDesc}</CounterDesc>
    </CounterWrapper>
  );
}
