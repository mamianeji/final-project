import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        marginTop: "50px",
        borderRadius: "25px",
        flexWrap: "wrap",
        marginLeft:"100px" ,
      }}
    >
      <Card
        style={{
          width: "18rem",
          border: "none",
          margin: "20px",
          boxShadow: "0 5px 10px rgb(0 0 0 / 75%)",
        }}
      >
        <Card.Img
          variant="top"
          src="https://jthemes.net/themes/html/spamagic/files/images/image-01.png"
          style={{
            borderRadius: "100%",
            marginLeft: "34px",
            marginTop: "10px",
            maxWidth: "216px",
            minWidth: "216px",
            maxHeight: "185px",
            minHeight: "185px",
          }}
        />
        <Card.Body>
          <Card.Title style={{ color: "#9e6e66", textAlign: "center" }}>
            Massage and SPA
          </Card.Title>
          <Card.Text>
            Invitation à un voyage immobile, découverte d'un moment de bien-être
            grâce à l'un des massages Spa traditionnels.
          </Card.Text>
          <Link to="/spa">
            {" "}
            <Button
              variant="primary"
              style={{
                marginLeft: "60px",
                color: "#b7948e",
                backgroundColor: "transparent",
                borderColor: "#b7948e",
              }}
            >
              Read More
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <Card
        style={{
          width: "18rem",
          border: "none",
          margin: "20px",
          boxShadow: "0 5px 10px rgb(0 0 0 / 75%)",
        }}
      >
        <Card.Img
          variant="top"
          src="https://media.istockphoto.com/photos/curling-blonde-hair-on-a-large-diameter-curling-iron-on-a-pink-hair-picture-id1309367898?b=1&k=20&m=1309367898&s=170667a&w=0&h=Qfyuq54rgmxAKZX7mvXfvRmD1AZBtDexmWudNE9onVk="
          style={{
            borderRadius: "100%",
            marginLeft: "34px",
            marginTop: "10px",
            maxWidth: "216px",
            minWidth: "216px",
            maxHeight: "185px",
            minHeight: "185px",
          }}
        />
        <Card.Body>
          <Card.Title style={{ color: "#9e6e66", textAlign: "center" }}>
            Hair Beauty
          </Card.Title>
          <Card.Text>
            Découvrez les couleurs, les soins et les coupes adaptés aux vos
            cheveux. C'est le temps d'avoir un new look.
          </Card.Text>
          <Link to="/hair">
            <Button
              variant="primary"
              style={{
                marginLeft: "60px",
                color: "#b7948e",
                backgroundColor: "transparent",
                borderColor: "#b7948e",
              }}
            >
              Read More
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <Card
        style={{
          width: "18rem",
          border: "none",
          margin: "20px",
          boxShadow: "0 5px 10px rgb(0 0 0 / 75%)",
        }}
      >
        <Card.Img
          variant="top"
          src="https://media.istockphoto.com/photos/fashionable-multicolored-manicure-picture-id1289189250?b=1&k=20&m=1289189250&s=170667a&w=0&h=DIrrVN2Lx1N5TUr-vieQm7ZvuhydydHsZd18OmZGovM="
          style={{
            borderRadius: "100%",
            marginLeft: "34px",
            marginTop: "10px",
            maxWidth: "216px",
            minWidth: "216px",
            maxHeight: "185px",
            minHeight: "185px",
          }}
        />
        <Card.Body>
          <Card.Title style={{ color: "#9e6e66", textAlign: "center" }}>
            Nails Beauty{" "}
          </Card.Title>
          <Card.Text>
            Vernis à ongles, Vernis Permanents, Gels UV, matériel professionnel,
            nail-arts et décorations pour tous les passionnés de l'onglerie.
          </Card.Text>
          <Link to="/onglerie">
            <Button
              variant="primary"
              style={{
                marginLeft: "60px",
                color: "#b7948e",
                backgroundColor: "transparent",
                borderColor: "#b7948e",
              }}
            >
              Read More
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <Card
        style={{
          width: "18rem",
          border: "none",
          margin: "20px",
          boxShadow: "0 5px 10px rgb(0 0 0 / 75%)",
        }}
      >
        <Card.Img
          variant="top"
          src="https://media.istockphoto.com/photos/woman-in-mask-on-face-in-spa-beauty-salon-picture-id921797424?b=1&k=20&m=921797424&s=170667a&w=0&h=JafuTNz0Svms7pcc7uJsoqjJTliBy-QbM7Xs3jx8Egk="
          style={{
            borderRadius: "100%",
            marginLeft: "34px",
            marginTop: "10px",
            maxWidth: "216px",
            minWidth: "216px",
            maxHeight: "185px",
            minHeight: "185px",
          }}
        />
        <Card.Body>
          <Card.Title style={{ color: "#9e6e66", textAlign: "center" }}>
            Soins
          </Card.Title>
          <Card.Text>
            Soins visage, Soins des mains, Soins des pieds, matériel
            professionnel, et détente parfaite pour votre bien-etre.
          </Card.Text>
          <Link to="/soins">
            <Button
              variant="primary"
              style={{
                marginLeft: "60px",
                color: "#b7948e",
                backgroundColor: "transparent",
                borderColor: "#b7948e",
              }}
            >
              Read More
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Categories;
