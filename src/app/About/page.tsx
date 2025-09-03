import Image from "next/image";

export default function About() {
  return (
    <section className="card">
      <h2>Tentang Saya</h2>
      <div className="about-container">
        <Image src="/gw.jpg" alt="Foto Balya" width={200} height={200} />
        <p>
          Ini Aku, Aku suka bermain game dan aku suka mencoba hal-hal yang
          menurutku menyenangkan.(gepeng jir)
        </p>
      </div>
    </section>
  );
}
