import Image from "next/image";

export default function Home() {
  return (
    <section>
      <h2>Welcome to Home</h2>
      <p>This is the home page</p>
      <Image src="/test1.jpg" alt="pingvin" width={300} height={300} />
      {/* <Image src="/test.png" alt="smile" width={300} height={300} /> */}
      {/* Зображення з зовнішніх джерел */}
      <Image
        src="https://picsum.photos/seed/picsum/300/300"
        alt="test"
        width={300}
        height={300}
      />
    </section>
  );
}
