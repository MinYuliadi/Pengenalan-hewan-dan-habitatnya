import React, { useState, useEffect } from "react";
import GameEntity from "../../component/entity/gameEnity";
import QuestEntity from "../../component/entity/QuestEntity";
import QuestCard from "../../component/card/QuestCard";
import {
  Button,
  Carousel,
  Form,
  Input,
  Radio,
  Space,
  Tooltip,
  Col,
  Row,
} from "antd";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useSelector, useDispatch } from "react-redux";
import { levelUp, resetTimes } from "../../redux/level";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import { useRef } from "react";
import ButtonPlay from "../../component/button/ButtonPlay";
import KudaSound from "../../assets/quiz/sounds/Kuda.mp3";
import DombaSound from "../../assets/quiz/sounds/Domba.mp3";
import KelelawarSound from "../../assets/quiz/sounds/Kelelawar.mp3";
import RusaSound from "../../assets/quiz/sounds/Rusa.mp3";
import WaletSound from "../../assets/quiz/sounds/Walet.mp3";
import Kelinci from "../../assets/quiz/Kelinci.png";
import Unta from "../../assets/quiz/Unta.png";
import Zebra from "../../assets/quiz/Zebra.png";
import Kuda from "../../assets/quiz/Kuda.png";
import Bebek from "../../assets/quiz/Bebek.png";
import Macan from "../../assets/quiz/Macan.png";
import Gajah from "../../assets/quiz/Gajah.png";
import Domba from "../../assets/quiz/Domba.png";
import Jerapah from "../../assets/quiz/Jerapah.png";
import Elang from "../../assets/quiz/Elang.png";
import Kelelawar from "../../assets/quiz/kelelawar.png";
import Rusa from "../../assets/quiz/Rusa.png";
import Walet from "../../assets/quiz/Walet.png";

const formRules = [
  {
    required: true,
    message: "Pilih salah satu dari jawaban di atas",
  },
];

const {} = Carousel;

const Level3 = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isTimesUp, level } = useSelector((state) => state.level);

  const onSubmit = (values) => {
    console.log(values);

    if (isTimesUp)
      return swal({
        title: "Belum lolos",
        text: `Waktu pengerjaan sudah habis`,
        icon: "warning",
      }).then(() => navigate(-1));

    let result = 0;

    if (values.answer1 === "D") result += 20;
    if (values.answer2 === "B") result += 20;
    if (values.answer3 === "C") result += 20;
    if (values.answer4 === "A") result += 20;
    if (values.answer5 === "C") result += 20;

    if (result < 100)
      return swal({
        title: "Belum lolos",
        text: `Nilai mu ${result}`,
        icon: "warning",
      }).then(() => navigate(-1));

    if (result === 100 && level === 3) dispatch(levelUp());

    return swal({
      title: "Selamat !!!",
      text: `Nilai mu ${result}`,
      icon: "success",
    }).then(() => navigate(-1));
  };

  const onFailed = ({ values }) => {
    const arrError = [];
    Object.values(values).map((value, index) => {
      const indexSoal = Object.keys(values)[index].charAt(
        Object.keys(values)[index].length - 1
      );
      if (!value) arrError.push(`quis nomor ${indexSoal} belum di isi !\n`);
    });

    alert(arrError.join(""));
  };

  useEffect(() => {
    dispatch(resetTimes());
  }, []);

  return (
    <>
      <GameEntity countdown>
        <Form form={form} onFinish={onSubmit} onFinishFailed={onFailed}>
          <Quesioner />
        </Form>
      </GameEntity>
    </>
  );
};

export default Level3;

const Quesioner = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [slick, setSlick] = useState(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    setSlick(carouselRef.current);
  }, []);

  return (
    <Space size="middle" direction="vertical">
      <QuestEntity>
        <Carousel
          afterChange={(currentTab) => setCurrentTab(currentTab)}
          infinite
          slidesToScroll={1}
          dots={false}
          ref={carouselRef}
          asNavFor={slick}
        >
          <div>
            <QuestCard question="1. Suara hewan apakah ini ?">
              <ButtonPlay source={KudaSound} />
              <Form.Item name="answer1" rules={formRules}>
                <Radio.Group>
                  <Space direction="vertical" size="middle">
                    <Row align="center" gutter={[30, 30]}>
                      <Col md={12}>
                        <Radio value="A" className="text-white text-xl">
                          A.{" "}
                          <img src={Kelinci} alt="Kelinci" className="w-full max-w-[8rem] aspect-square" />
                        </Radio>
                      </Col>
                      <Col md={12}>
                        <Radio value="B" className="text-white text-xl">
                          B. <img src={Unta} alt="Unta" className="w-full max-w-[8rem] aspect-square" />
                        </Radio>
                      </Col>
                      <Col md={12}>
                        <Radio value="C" className="text-white text-xl">
                          C. <img src={Zebra} alt="Zebra" className="w-full max-w-[8rem] aspect-square" />
                        </Radio>
                      </Col>
                      <Col md={12}>
                        <Radio value="D" className="text-white text-xl">
                          D. <img src={Kuda} alt="Kuda" className="w-full max-w-[8rem] aspect-square" />
                        </Radio>
                      </Col>
                    </Row>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </QuestCard>
          </div>
          <div>
            <QuestCard question="2. Suara hewan apakah ini ?">
              <ButtonPlay source={DombaSound} />
              <Form.Item name="answer2" rules={formRules}>
                <Radio.Group>
                  <Space direction="vertical" size="middle">
                    <Row align="center" gutter={[30, 30]}>
                      <Col md={12}>
                        <Radio value="A" className="text-white text-xl">
                          A. <img src={Macan} alt="Macan" className="w-full max-w-[8rem] aspect-square" />
                        </Radio>
                      </Col>
                      <Col md={12}>
                        <Radio value="B" className="text-white text-xl">
                          B. <img src={Domba} alt="Domba" className="w-full max-w-[8rem] aspect-square" />
                        </Radio>
                      </Col>
                      <Col md={12}>
                        <Radio value="C" className="text-white text-xl">
                          C. <img src={Zebra} alt="Zebra" className="w-full max-w-[8rem] aspect-square" />
                        </Radio>
                      </Col>
                      <Col md={12}>
                        <Radio value="D" className="text-white text-xl">
                          D. <img src={Elang} alt="Elang" className="w-full max-w-[8rem] aspect-square" />
                        </Radio>
                      </Col>
                    </Row>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </QuestCard>
          </div>
          <div>
            <QuestCard question="3. Suara hewan apakah ini ?">
              <ButtonPlay source={KelelawarSound} />
              <Form.Item name="answer3" rules={formRules}>
                <Radio.Group>
                  <Space direction="vertical" size="middle">
                    <Row align="center" gutter={[30, 30]}>
                      <Col md={12}>
                        <Radio value="A" className="text-white text-xl">
                          A. <img src={Unta} alt="Unta" className="w-full max-w-[8rem] aspect-square" />
                        </Radio>
                      </Col>
                      <Col md={12}>
                        <Radio value="B" className="text-white text-xl">
                          B. <img src={Macan} alt="Macan" className="w-full max-w-[8rem] aspect-square" />
                        </Radio>
                      </Col>
                      <Col md={12}>
                        <Radio value="C" className="text-white text-xl">
                          C.{" "}
                          <img
                            src={Kelelawar}
                            alt="Kelelawar"
                            className="w-full"
                          />
                        </Radio>
                      </Col>
                      <Col md={12}>
                        <Radio value="D" className="text-white text-xl">
                          D. <img src={Unta} alt="Unta" className="w-full max-w-[8rem] aspect-square" />
                        </Radio>
                      </Col>
                    </Row>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </QuestCard>
          </div>
          <div>
            <QuestCard question="4. Suara hewan apakah ini ?">
              <ButtonPlay source={RusaSound} />
              <Form.Item name="answer4" rules={formRules}>
                <Radio.Group>
                  <Space direction="vertical" size="middle">
                    <Row align="center" gutter={[30, 30]}>
                      <Col md={12}>
                        <Radio value="A" className="text-white text-xl">
                          A. <img src={Rusa} alt="Rusa" className="w-full max-w-[8rem] aspect-square" />
                        </Radio>
                      </Col>
                      <Col md={12}>
                        <Radio value="B" className="text-white text-xl">
                          B. <img src={Unta} alt="Unta" className="w-full max-w-[8rem] aspect-square" />
                        </Radio>
                      </Col>
                      <Col md={12}>
                        <Radio value="C" className="text-white text-xl">
                          C. <img src={Bebek} alt="Bebek" className="w-full max-w-[8rem] aspect-square" />
                        </Radio>
                      </Col>
                      <Col md={12}>
                        <Radio value="D" className="text-white text-xl">
                          D.{" "}
                          <img src={Kelinci} alt="Kelinci" className="w-full max-w-[8rem] aspect-square" />
                        </Radio>
                      </Col>
                    </Row>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </QuestCard>
          </div>
          <div>
            <QuestCard question="5. Suara hewan apakah ini ?">
              <ButtonPlay source={WaletSound} />
              <Form.Item name="answer5" rules={formRules}>
                <Radio.Group>
                  <Space direction="vertical" size="middle">
                    <Row align="center" gutter={[30, 30]}>
                      <Col md={12}>
                        <Radio value="A" className="text-white text-xl">
                          A.{" "}
                          <img src={Jerapah} alt="Jerapah" className="w-full max-w-[8rem] aspect-square" />
                        </Radio>
                      </Col>
                      <Col md={12}>
                        <Radio value="B" className="text-white text-xl">
                          B. <img src={Elang} alt="Elang" className="w-full max-w-[8rem] aspect-square" />
                        </Radio>
                      </Col>
                      <Col md={12}>
                        <Radio value="C" className="text-white text-xl">
                          C. <img src={Walet} alt="Walet" className="w-full max-w-[8rem] aspect-square" />
                        </Radio>
                      </Col>
                      <Col md={12}>
                        <Radio value="D" className="text-white text-xl">
                          D. <img src={Gajah} alt="Gajah" className="w-full max-w-[8rem] aspect-square" />
                        </Radio>
                      </Col>
                    </Row>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </QuestCard>
          </div>
        </Carousel>
        <div className="flex mt-4">
          <div className="m-auto flex gap-3 md:gap-20 flex-col md:flex-row">
            <Button
              type="button"
              className="flex gap-3 items-center cursor-pointer py-1 px-3 text-white bg-indigo-600 rounded-md disabled:bg-slate-400 disabled:cursor-default"
              onClick={() => slick?.prev()}
              disabled={currentTab === 0}
            >
              <FiArrowLeftCircle className="h-6 w-6" />
              <span>Sebelumnya</span>
            </Button>
            <Button
              type="button"
              className="flex gap-3 items-center cursor-pointer py-1 px-3 text-white bg-indigo-600 rounded-md disabled:bg-slate-400 disabled:cursor-default"
              onClick={() => slick?.next()}
              disabled={currentTab === 4}
            >
              <span>Selanjutnya</span>
              <FiArrowRightCircle className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </QuestEntity>
      <Tooltip title="Jawab semua Quis untuk submit !">
        <div>
          <Input
            type="submit"
            value="Submit"
            size="large"
            className="bg-indigo-600 text-white font-medium disabled:bg-slate-400 border-none cursor-pointer"
            disabled={currentTab < 4}
          />
        </div>
      </Tooltip>
    </Space>
  );
};
