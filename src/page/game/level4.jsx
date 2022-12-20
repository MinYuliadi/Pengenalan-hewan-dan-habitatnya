import React, { useState, useEffect } from "react";
import GameEntity from "../../component/entity/gameEnity";
import QuestEntity from "../../component/entity/QuestEntity";
import QuestCard from "../../component/card/QuestCard";
import { Button, Carousel, Form, Input, Radio, Space, Tooltip } from "antd";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useSelector, useDispatch } from "react-redux";
import { levelUp, resetTimes } from "../../redux/level";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import { useRef } from "react";

const formRules = [
  {
    required: true,
    message: "Pilih salah satu dari jawaban di atas",
  },
];

const {} = Carousel;

const Level4 = () => {
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
    if (values.answer2 === "D") result += 20;
    if (values.answer3 === "C") result += 20;
    if (values.answer4 === "C") result += 20;
    if (values.answer5 === "D") result += 20;

    if (result < 100)
      return swal({
        title: "Belum lolos",
        text: `Nilai mu ${result}`,
        icon: "warning",
      }).then(() => navigate(-1));

    if (result === 100 && level === 4) dispatch(levelUp());

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

export default Level4;

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
            <QuestCard question="1. Berikut ini merupakan makanan yang tepat pada burung kardinal adalah...">
              <Form.Item name="answer1" rules={formRules}>
                <Radio.Group>
                  <Space direction="vertical" size="middle">
                    <Radio value="A" className="text-white text-xl">
                      A. Sayuran
                    </Radio>
                    <Radio value="B" className="text-white text-xl">
                      B. Daging
                    </Radio>
                    <Radio value="C" className="text-white text-xl">
                      C. Buah-buahan
                    </Radio>
                    <Radio value="D" className="text-white text-xl">
                      D. Biji-bijian
                    </Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </QuestCard>
          </div>
          <div>
            <QuestCard question="2. Berikut ini merupakan makanan yang tepat pada anjing laut adalah...">
              <Form.Item name="answer2" rules={formRules}>
                <Radio.Group>
                  <Space direction="vertical" size="middle">
                    <Radio value="A" className="text-white text-xl">
                      A. Sayuran
                    </Radio>
                    <Radio value="B" className="text-white text-xl">
                      B. Buah-buahan
                    </Radio>
                    <Radio value="C" className="text-white text-xl">
                      C. Biji-bijian
                    </Radio>
                    <Radio value="D" className="text-white text-xl">
                      D. Daging
                    </Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </QuestCard>
          </div>
          <div>
            <QuestCard question="3. Hewan pemakan segalanya (tumbuhan dan daging) kecuali...">
              <Form.Item name="answer3" rules={formRules}>
                <Radio.Group>
                  <Space direction="vertical" size="middle">
                    <Radio value="A" className="text-white text-xl">
                      A. Ayam
                    </Radio>
                    <Radio value="B" className="text-white text-xl">
                      B. Belalang
                    </Radio>
                    <Radio value="C" className="text-white text-xl">
                      C. Buaya
                    </Radio>
                    <Radio value="D" className="text-white text-xl">
                      D. Babi
                    </Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </QuestCard>
          </div>
          <div>
            <QuestCard question="4. Berdasarkan jenis makanan nya hewan di bagi menjadi 3 golongan kecuali...">
              <Form.Item name="answer4" rules={formRules}>
                <Radio.Group>
                  <Space direction="vertical" size="middle">
                    <Radio value="A" className="text-white text-xl">
                      A. Karnivora
                    </Radio>
                    <Radio value="B" className="text-white text-xl">
                      B. Omnivora
                    </Radio>
                    <Radio value="C" className="text-white text-xl">
                      C. Ovipar
                    </Radio>
                    <Radio value="D" className="text-white text-xl">
                      D. Herbivora
                    </Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </QuestCard>
          </div>
          <div>
            <QuestCard question="5. Hewan yang termasuk Herbivora adalah...">
              <Form.Item name="answer5" rules={formRules}>
                <Radio.Group>
                  <Space direction="vertical" size="middle">
                    <Radio value="A" className="text-white text-xl">
                      A. Sapi, kuda dan macan
                    </Radio>
                    <Radio value="B" className="text-white text-xl">
                      B. Singa, buaya dan kucing
                    </Radio>
                    <Radio value="C" className="text-white text-xl">
                      C. Ayam, burung jalak dan tupai
                    </Radio>
                    <Radio value="D" className="text-white text-xl">
                      D. Kambing, jerapah dan kuda
                    </Radio>
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
