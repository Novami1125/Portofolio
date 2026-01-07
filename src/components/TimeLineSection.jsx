
export const TimeLine = () => {
  const timelineEvents = [
    {
      date: "Juli 2022",
      year: "2022",
      title: "SMKN 4 Bandung",
      description: "Diterima sebagai siswa SMK Negeri 4 Bandung Jurusan Elektronika / Audio Video"
    },
    {
      date: "Juli 2024",
      year: "2024",
      title: "PKL (Praktik Kerja Lapangan)",
      description: "PKL di PT Fajar Alam Scientific dari bulan Juli - Oktober 2024"
    },
    {
      date: "Mei 2025",
      year: "2025",
      title: "Lulus",
      description: "Lulus dari SMK Negeri 4 Bandung"
    },
    {
      date: "Juli 2025",
      year: "2025",
      title: "Politeknik Manufaktur Bandung",
      description: "Diterima sebagai mahasiswa Politeknik Manufaktur Bandung jurusan Automation Engeneering prodi Teknologi Rekayasa Mekatronika (D4)"
    }
  ];

  return (
    <section id="timeline">
      <div className="container mx-auto px-4">
        <h1 className="text-primary text-4xl font-bold text-center mb-16">
          TimeLine
        </h1>
        <div className="relative max-w-4xl mx-auto">

          {/* Garis timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>
          
          {timelineEvents.map((event, index) => (
            <div 
              key={index} 
              className={`flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}>


              {/* Konten */}
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                <div className="gradient-border p-6 card-hover">
                  <span className="h-6 w-6 text-primary p-1.5 rounded-full bg-primary/10">
                    {event.date}
                  </span>

                  <h3 className="font-text-semibold text-lg">{event.title}</h3>
                  <p className="text-white-300">{event.description}</p>
                </div>
              </div>
              
              {/* Titik timeline */}
              <div className="relative z-10 w-8 h-8 bg-primary rounded-full border-4 border-white shadow-lg"></div>
              
              {/* Tahun/Date di sisi lain */}
              <div className={`w-1/2 ${index % 2 === 0 ? 'pl-12' : 'pr-12 text-right'}`}>
                <div className="text-secondary text-2xl font-bold">{event.year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};