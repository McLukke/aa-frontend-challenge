import React from "react";
import { Row, Col } from "antd";
import Section from "./components/Section";

import styles from "./App.module.scss";

const cities = ["Ottawa", "Moscow", "Tokyo"];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCity: cities[0],
    };
  }

  handleCitySelect = (selectedCity) => this.setState({ selectedCity });

  render() {
    const { selectedCity } = this.state;
    const dudUrl = "#";

    return (
      <>
        <Row justify="center" align="middle">
          <Col xs={24} md={20} lg={16} xl={12} xxl={4}>
            <div className={styles.cityLinks}>
              {cities.map((city) => (
                <a
                  key={city}
                  href={dudUrl}
                  className={city === selectedCity ? styles.active : ""}
                  onClick={() => this.handleCitySelect(city)}
                >
                  {city.toUpperCase()}
                </a>
              ))}
            </div>
          </Col>
        </Row>

        <Row justify="center" align="middle">
          <Col xs={24} md={20} lg={16} xl={12} xxl={4}>
            <Section smoothRadius>
              <Section style={{ display: "flex" }} showPadding>
                <div>Today</div>
                <div>
                  <span>image</span>
                  <div>19&deg;</div>
                  <div>Clouds</div>
                </div>
              </Section>
              <Section showPadding>test1</Section>
              <Section showPadding>test2</Section>
              <Section showPadding>test3</Section>
              <Section showPadding>test4</Section>
            </Section>
          </Col>
        </Row>
      </>
    );
  }
}
