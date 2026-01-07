import { ArrowRight, ExternalLink } from "lucide-react"
import { useState } from "react"
import { cn } from "../lib/utils"

const projects = [
    {
        id:1,
        title: "PLC REXROTH 2023",
        description: "HAXATHON Competition at MARANATHA UNIVERSITY",
        image:"/projects/PLC REXROTH 2023.jpg",
        tags: ["PLC"],
        category:"Competition",
        demoUrl:"#"
    },

    {
        id:2,
        title: "PLC BECKOFF 2024",
        description: "BECKOFF Competition at MARANATHA UNIVERSITY",
        image:"/projects/PLC BECKOFF 2024.jpg",
        tags: ["PLC"],
        category:"Competition",
        demoUrl:"#"
    },

    {
        id:3,
        title: "TELEPATI 6.0 IOT 2024",
        description: "TELEPATI Competition at POLITEKNIK BANDUNG",
        image:"/projects/TELEPATI IOT 2024.jpg",
        tags: ["IOT"],
        category:"Competition",
        demoUrl:"#"
    },

    {
        id:4,
        title: "FUSE PCB 2025",
        description: "FUSE Competition at POLITEKNIK MANUFAKTUR BANDUNG",
        image:"/projects/FUSE PCB 2025.jpg",
        tags: ["PCB"],
        category:"Competition",
        demoUrl:"#"
    },

    {
        id:5,
        title: "PKL (Praktik Kerja Lapangan)",
        description: "Melaksanakan PKL di PT Fajar Alam Scientific 15 Juli - 31 Oktober",
        image:"/projects/Alam Rizki Fitriansyah.png",
        tags: ["PKL"],
        category:"Other",
        demoUrl:"#"
    },

    {
        id:6,
        title: "FUSE PCB 2025",
        description: "FUSE Competition at POLITEKNIK MANUFAKTUR BANDUNG",
        image:"/projects/FUSE PCB 2025.jpg",
        tags: ["PCB"],
        category:"Project",
        demoUrl:"#"
    },
]

// Tambahkan "all" ke dalam array categories
const categories = ["all", "Competition", "Project","Other"]

export const ProjectsSection = () => {

    const [activeCategory, setActiveCategory] = useState ("all")
    
    const filteredProject = projects.filter((project) => 
        activeCategory === "all" || project.category === activeCategory
    )

    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured {" "}
                <span className="text-primary">
                    Experience
                </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                These are some of the Experience that I have
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, index) => (
                    <button 
                    key={index} 
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                        "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category 
                            ? "bg-primary text-primary-foreground" 
                            : "bg-secondary/70 text-foreground hover:bg-secondary"
                        )}
                    >
                        {/* Tampilkan "All" dengan kapitalisasi */}
                        {category === "all" ? "All" : category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProject.map((project) => (
                    <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, index) => (
                                    <span 
                                        key={index} 
                                        className="px-2 py-1 text-xs font-medium border rounded-full bg-primary text-secondary-foreground"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xl font-semibold mb-1">
                                {project.title}
                            </h3>

                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>

                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a 
                                        href={project.demoUrl} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <ExternalLink size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <a 
                    className="cosmic-button w-fit flex items-center  mx-auto gap-2"
                    target="_blank"
                    href=""
                >
                    Take Me Somewhere <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>
}