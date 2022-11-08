import { Title, Text, KitBtn, LearnMore } from "./Hero.styled";
export const Hero = () => {
  return (
    <section style={{ paddingTop: "243px" }}>
      <Title>Introduce Your Product Quickly & Effectively</Title>
      <p
        style={{
          fontFamily: "Roboto",
          fonStyle: "normal",
          fontWeight: "400",
          fontSize: "18px",
          lineHeight: "30px",
          margin: "0",
          width: "539px",
          marginBottom: "10px",
          color: "#505f98",
        }}
      >
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus
      </p>
      <p
        style={{
          fontFamily: "Roboto",
          fonStyle: "normal",
          fontWeight: "400",
          fontSize: "18px",
          lineHeight: "30px",
          margin: "0",
          width: "539px",

          color: "#505f98",
        }}
      >
        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
        massa quis enim.
      </p>
      <div
        style={{
          marginTop: "69px",
        }}
      >
        <KitBtn>Purchase UI Kit</KitBtn>
        <LearnMore>Learn More </LearnMore>
      </div>
    </section>
  );
};
