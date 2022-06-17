import React, { useEffect } from "react";
import { otherServices } from "../../services/otherServices";
import { useOrder } from "../../contexts/OrderContext";
import { List, Row, Col, Divider } from "antd";
import "../../style/menuStyle/orders.css";
import userEvent from "@testing-library/user-event";
export default function Orders() {
  const [order, setOrder] = useOrder();
  // useEffect(() => {
  //   fetch("https://dev-api.mstars.mn/api/orders?page=1",{
  //     method : "POST",
  //     headers:{
  //       "Content-type" : "application/json"
  //     },
  //     body : JSON.stringify({token : user.token})
  //   })
  //     .then((e) => e.json())
  //     .then((e) => setOrder(e.Orders));
  // }, []);

  console.log(order);

  return (
    <div>
      <Divider orientation="left">Захиалгууд</Divider>
      <List
        header={
          <div className="order-header ">
            <input type="checkbox" className="check" />
            <span>Он сар өдөр</span>
            <span>Захиалга #</span>
            <span>Хэрэглэгч</span>
            <span>Захиалга</span>
            <span>Нийт дүн</span>
            <span>Төлбөр</span>
            <span>Утас</span>
            <span>Төлөв</span>
            <img src="pictures/icons/setting.svg" alt="" />
          </div>
        }
        footer={<div>Footer</div>}
        bordered
        dataSource={order}
        renderItem={(item) => {
          let total = 0;
          item.order.map((food) => {
            total = parseInt(total + food.price * food.quantity);
            console.log(food.price * food.quantity);
            return total;
          });
          return (
            <>
              <List.Item className="listItems">
                <Row className="rowss">
                  {/* <Col span={4}>{item.customer}</Col>
                  <Col span={4}>{item.number}</Col>
                  <Col span={4}>{item.customer}</Col>
                  <Col span={4}>{item.customer}</Col>
                  <Col span={4}>{item.customer}</Col>
                  <Col span={4}>{item.customer}</Col> */}
                  <input type="checkbox" className="check" />
                  <Col
                    className="cols"
                    // xs={{ span: 5, offset: 1 }}
                    // lg={{ span: 6, offset: 2 }}
                  >
                    {item.date}
                  </Col>
                  <Col
                    className="cols"
                    // xs={{ span: 11, offset: 1 }}
                    // lg={{ span: 6, offset: 2 }}
                  >
                    {item.number}
                  </Col>
                  <Col
                    className="cols"
                    // xs={{ span: 5, offset: 1 }}
                    // lg={{ span: 6, offset: 2 }}
                  >
                    {item.customer}
                  </Col>
                  <Col className="cols">
                    {[item.order[0].name, " ", item.order[1].name].slice(0, 1)}
                  </Col>
                  <Col className="cols">{[total, "₮"]}</Col>
                  <Col className="cols">{item.payment}</Col>
                  <Col className="cols">{item.phone}</Col>
                  <Col className="cols">
                    <button
                      className="state-btn"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {item.state}
                    </button>
                  </Col>
                  <img src="pictures/icons/setting.svg" alt="" />
                </Row>
              </List.Item>
            </>
          );
        }}
      />
    </div>
  );
}
