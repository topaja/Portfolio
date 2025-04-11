import React from "react";

const projects = [
  {
    title: "ShopNow - Online Shopping Site",
    description: "HTML, CSS, React",
    image: "/path-to-project1-image.jpg",
  },
  {
    title: "Eduford - University Landing Page",
    description: "HTML, CSS, JavaScript",
    image: "/path-to-project2-image.jpg",
  },
  {
    title: "Surravista - Pest Control Services",
    description: "HTML, CSS, JavaScript",
    image: "/path-to-project3-image.jpg",
  },
];

const Projects = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-2xl font-bold text-indigo-600 text-center">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border rounded-md overflow-hidden hover:shadow-lg"
          >
            <img src={project.image} alt={project.title} className="w-full" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                Preview
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
