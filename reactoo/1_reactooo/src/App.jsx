import Card from "./components/Card";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold text-center mb-10">
        My Cards
      </h1>

      <div className="flex flex-wrap justify-center gap-8">

        <Card
          name="Atif"
          age={20}
          description="AI & Data Science Student"
          color="bg-orange-200"
          img="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500"
        />

        <Card
          name="John"
          age={25}
          description="Full Stack Developer"
          color="bg-blue-200"
          img="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500"
        />

        <Card
          name="Sarah"
          age={22}
          description="UI/UX Designer"
          color="bg-pink-200"
          img="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500"
        />

        <Card
          name="Alex"
          age={27}
          description="Backend Engineer"
          color="bg-green-200"
          img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500"
        />

      </div>
    </div>
  );
};

export default App;