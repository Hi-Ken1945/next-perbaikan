export default function Projects() {
  return (
    <section className="card">
      <h2>Proyek Terbaru</h2>
      <div className="projects-grid">
        <article className="project-item">
          <h3>Projek Perpus</h3>
          <p>Program tentang Pembelian Buku Tanpa ada masalah</p>
        </article>
        <article className="project-item">
  <h3>Github</h3>
  <a
    href="https://github.com/Hi-Ken1945/next-perbaikan"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500 underline hover:text-blue-700"
  >
    Lihat Sendiri
  </a>
</article>
        <article className="project-item">
          <h3>Ibis Paint</h3>
          <p>
            Belajar Desain dan memahami tools-tools yang ada di Ibis Paint
          </p>
        </article>
      </div>
    </section>
  );
}
