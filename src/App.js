import React from "react";
import { Row, Col } from "antd";

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

        <Row>
          <Col xs={24} md={20} lg={16} xl={12} xxl={4}></Col>
        </Row>
      </>
    );
  }
}
