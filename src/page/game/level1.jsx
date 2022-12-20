import React, { useState, useEffect, useRef } from "react";
import GameEntity from "../../component/entity/gameEnity";
import QuestEntity from "../../component/entity/QuestEntity";
import Ayam from "../../assets/quiz/chicken.png";
import Kelelawar from "../../assets/quiz/kelelawar.png";
import Hiu from "../../assets/quiz/hiu.png";
import Nyamuk from "../../assets/quiz/Nyamuk.png";
import Unta from "../../assets/quiz/Unta.png";
import Kelinci from "../../assets/quiz/Kelinci.png";
import Jerapah from "../../assets/quiz/Jerapah.png";
import Zebra from "../../assets/quiz/Zebra.png";
import QuestCard from "../../component/card/QuestCard";
import {
  Carousel,
  Form,
  Input,
  Radio,
  Space,
  Row,
  Col,
  Tooltip,
  Button,
} from "antd";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useSelector, useDispatch } from "react-redux";
import { levelUp, resetTimes } from "../../redux/level";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

const formRules = [
  {
    required: true,
    message: "Pilih salah satu dari jawaban di atas",
  },
];

const Level1 = () => {
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

    if (values.answer1 === "A") result += 20;
    if (values.answer2 === "C") result += 20;
    if (values.answer3 === "B") result += 20;
    if (values.answer4 === "A") result += 20;
    if (values.answer5 === "B") result += 20;

    if (result < 100)
      return swal({
        title: "Belum lolos",
        text: `Nilai mu ${result}`,
        icon: "warning",
      }).then(() => navigate(-1));

    if (result === 100 && level === 1) dispatch(levelUp());

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

export default Level1;

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
            <QuestCard question="1. Hewan ini bernama ?" image={Ayam}>
              <Form.Item name="answer1" rules={formRules}>
                <Radio.Group>
                  <Space direction="vertical" size="middle">
                    <Radio value="A" className="text-white text-xl">
                      A. Ayam
                    </Radio>
                    <Radio value="B" className="text-white text-xl">
                      B. Kucing
                    </Radio>
                    <Radio value="C" className="text-white text-xl">
                      C. Harimau
                    </Radio>
                    <Radio value="D" className="text-white text-xl">
                      D. Monyet
                    </Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </QuestCard>
          </div>
          <div>
            <QuestCard question="2. Hewan ini bernama ?" image={Kelelawar}>
              <Form.Item name="answer2" rules={formRules}>
                <Radio.Group>
                  <Space direction="vertical" size="middle">
                    <Radio value="A" className="text-white text-xl">
                      A. Unta
                    </Radio>
                    <Radio value="B" className="text-white text-xl">
                      B. Anjing
                    </Radio>
                    <Radio value="C" className="text-white text-xl">
                      C. Kelelawar
                    </Radio>
                    <Radio value="D" className="text-white text-xl">
                      D. Paus
                    </Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </QuestCard>
          </div>
          <div>
            <QuestCard question="3. Hewan ini bernama ?" image={Hiu}>
              <Form.Item name="answer3" rules={formRules}>
                <Radio.Group>
                  <Space direction="vertical" size="middle">
                    <Radio value="A" className="text-white text-xl">
                      A. Paus
                    </Radio>
                    <Radio value="B" className="text-white text-xl">
                      B. Hiu
                    </Radio>
                    <Radio value="C" className="text-white text-xl">
                      C. Anjing Laut
                    </Radio>
                    <Radio value="D" className="text-white text-xl">
                      D. Kuda Laut
                    </Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </QuestCard>
          </div>
          <div>
            <QuestCard
              question={
                <>
                  4. Lengkapi nama hewan ini <u>N</u>&nbsp;
                  <u>Y</u>&nbsp;
                  <u>A</u>&nbsp;
                  <u>&nbsp;&nbsp;</u>&nbsp;
                  <u>&nbsp;&nbsp;</u>&nbsp;
                  <u>K</u>
                </>
              }
              image={Nyamuk}
            >
              <Form.Item name="answer4" rules={formRules}>
                <Radio.Group>
                  <Space direction="vertical" size="middle">
                    <Radio value="A" className="text-white text-xl">
                      A. M dan U
                    </Radio>
                    <Radio value="B" className="text-white text-xl">
                      B. C dan O
                    </Radio>
                    <Radio value="C" className="text-white text-xl">
                      C. P dan S
                    </Radio>
                    <Radio value="D" className="text-white text-xl">
                      D. D dan E
                    </Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </QuestCard>
          </div>
          <div>
            <QuestCard question="5. Gambar Jerapah di bawah ini adalah ?">
              <Form.Item name="answer5" rules={formRules}>
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
                          B.{" "}
                          <img src={Jerapah} alt="Jerapah" className="w-full max-w-[8rem] aspect-square" />
                        </Radio>
                      </Col>
                      <Col md={12}>
                        <Radio value="C" className="text-white text-xl">
                          C. <img src={Zebra} alt="Zebra" className="w-full max-w-[8rem] aspect-square" />
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
