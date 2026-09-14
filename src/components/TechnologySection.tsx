import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import TechnologyCard from "./TechnologyCard";
import StackSidebar from "./StackSidebar";
import type { Technology } from "../types/technology";

function TechnologySection() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [stack, setStack] = useState<Technology[]>([]);

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch("/data/technologies.json");

        if (!response.ok) {
          throw new Error("Failed to load technology data.");
        }

        const data: Technology[] = await response.json();

        setTechnologies(data);
      } catch (error) {
        console.error("Error loading technologies:", error);
        toast.error("Could not load technology data.");
      } finally {
        setIsLoading(false);
      }
    };

    void loadTechnologies();
  }, []);

  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id,
    );

    if (alreadyAdded) {
      toast.warning(
        `${technology.name} is already in your stack.`,
      );
      return;
    }

    setStack((currentStack) => [
      ...currentStack,
      technology,
    ]);

    toast.success(
      `${technology.name} added to your stack.`,
    );
  };

  const handleRemoveFromStack = (technologyId: string) => {
    const technology = stack.find(
      (item) => item.id === technologyId,
    );

    setStack((currentStack) =>
      currentStack.filter(
        (item) => item.id !== technologyId,
      ),
    );

    if (technology) {
      toast.info(
        `${technology.name} removed from your stack.`,
      );
    }
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);

    toast.info(
      "All technologies were removed from your stack.",
    );
  };

  return (
    <section
      id="technologies"
      className="mx-auto max-w-275 px-4 py-14 sm:px-6 lg:px-8 lg:py-16"
    >
      {/* Section heading */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Explore the{" "}
          <span className="brand-gradient-text">
            Technologies
          </span>
        </h2>

        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
          Pick the technologies you need to build your ideal development
          stack.
        </p>
      </div>

      {/* Loading state */}
      {isLoading ? (
        <div className="flex min-h-60 items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <span className="loading loading-spinner loading-lg text-primary" />

            <p className="text-sm font-medium text-slate-500">
              Loading technologies...
            </p>
          </div>
        </div>
      ) : (
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_230px] lg:items-start">
          {/* Technology cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((technology) => {
              const isAdded = stack.some(
                (item) => item.id === technology.id,
              );

              return (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  isAdded={isAdded}
                  onAdd={handleAddToStack}
                />
              );
            })}
          </div>

          {/* Your Stack */}
          <StackSidebar
            stack={stack}
            onRemove={handleRemoveFromStack}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      )}
    </section>
  );
}

export default TechnologySection;