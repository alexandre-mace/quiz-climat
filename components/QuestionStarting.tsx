const QuestionStarting = ({ beginsInSecond }: { beginsInSecond: number }) => {
  return (
    <div className={"flex h-screen w-screen items-center justify-center"}>
      <div className={"text-9xl font-bold"}>{beginsInSecond}</div>
    </div>
  );
};

export default QuestionStarting;
