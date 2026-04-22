function Works() {
  const projects = [
    { title: "Website UMKM", desc: "Landing page jualan" },
    { title: "Company Profile", desc: "Website bisnis" },
    { title: "Portfolio", desc: "Personal branding" },
  ];

  return (
    <div className="p-10 bg-black text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-10">Portfolio</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((item, i) => (
          <div key={i} className="bg-gray-900 p-6 rounded-xl">
            <h2 className="font-bold">{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works;