import Image from "next/image";

const Internships = () => {
  return (
    <>
      <div className="intern">
        <hr className="intern__hr" />
        <h3 className="intern__title">Internships</h3>
        <div className="intern__item">
          <a href="http://techdome.net.in/">
            <Image
              className="intern__item__img"
              alt="logo"
              src="/Techdome.png"
              height="84"
              width="84"
            />
          </a>
          <a href="https://www.learnforcause.com/">
            <Image
              className="intern__item__img"
              alt="logo"
              src="/LFC.jpg"
              height="84"
              width="84"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Internships;
