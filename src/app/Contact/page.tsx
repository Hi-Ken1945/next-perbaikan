export default function Contact() {
  return (
    <section className="card">
      <h2>Kontak ke Saya</h2>
      <form id="contact-form">
        <label htmlFor="nama">Nama:</label>
        <input type="text" id="nama" name="nama" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="pesan">Pesan:</label>
        <textarea id="pesan" name="pesan" rows={4} required></textarea>

        <button type="submit">Kirim</button>
      </form>
    </section>
  );
}
