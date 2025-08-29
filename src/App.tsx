import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <main className="bg-[#FAFAFA] flex flex-col items-center p-8">
      <div className="text-grey-500 text-center flex flex-col items-center justify-center md:mt-8">
        <h2 className="text-preset-2 md:text-4xl">
          Reliable, efficient delivery
        </h2>
        <h1 className="text-preset-1 md:text-4xl">Powered by Technology</h1>
        <p className="text-preset-4 pt-4 md:w-8/12">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>
      <div className="mt-15 md:mt-18 grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-rows-4 lg:grid-cols-3">
        <Card
          title="Supervisor"
          description="Monitors activity to identify project roadblocks"
          image="/icon-supervisor.svg"
          color="cyan"
          grid="md:col-span-4 md:col-start-2 lg:row-span-4 lg:col-span-1 lg:row-start-2"
        />
        <Card
          title="Team Builder"
          description="Scans our talent network to create the optimal team for your project"
          image="/icon-team-builder.svg"
          color="red"
          grid="md:col-span-2 lg:row-span-2 lg:col-span-1 lg:row-start-1"
        />
        <Card
          title="Karma"
          description="Regularly evaluates our talent to ensure quality"
          image="/icon-karma.svg"
          color="orange"
          grid="md:col-span-2 lg:row-span-2 lg:col-span-1"
        />
        <Card
          title="Calculator"
          description="Uses data from past projects to provide better delivery estimates"
          image="/icon-calculator.svg"
          color="blue"
          grid="md:col-span-4 md:col-start-2 lg:row-span-4 lg:col-span-1 lg:row-start-2"
        />
      </div>
    </main>
  );
}

export default App;
