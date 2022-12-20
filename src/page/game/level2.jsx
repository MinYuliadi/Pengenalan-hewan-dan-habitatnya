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

const Level2 = () => {
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
    if (values.answer2 === "A") result += 20;
    if (values.answer3 === "B") result += 20;
    if (values.answer4 === "C") result += 20;
    if (values.answer5 === "B") result += 20;

    if (result < 100)
      return swal({
        title: "Belum lolos",
        text: `Nilai mu ${result}`,
        icon: "warning",
      }).then(() => navigate(-1));

    if (result === 100 && level === 2) dispatch(levelUp());

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

export default Level2;

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
            <QuestCard question="1. Hewan yang hidup di darat adalah ?">
              <Form.Item name="answer1" rules={formRules}>
                <Radio.Group>
                  <Space direction="vertical" size="middle">
                    <Radio value="A" className="text-white text-xl">
                      A. Kuda
                    </Radio>
                    <Radio value="B" className="text-white text-xl">
                      B. Paus
                    </Radio>
                    <Radio value="C" className="text-white text-xl">
                      C. Hiu
                    </Radio>
                    <Radio value="D" className="text-white text-xl">
                      D. Udang
                    </Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </QuestCard>
          </div>
          <div>
            <QuestCard question="2. Hewan yang hidup di air adalah ?">
              <Form.Item name="answer2" rules={formRules}>
                <Radio.Group>
                  <Space direction="vertical" size="middle">
                    <Radio value="A" className="text-white text-xl">
                      A. Ubur-ubur
                    </Radio>
                    <Radio value="B" className="text-white text-xl">
                      B. Burung Elang
                    </Radio>
                    <Radio value="C" className="text-white text-xl">
                      C. Kucing
                    </Radio>
                    <Radio value="D" className="text-white text-xl">
                      D. Badak
                    </Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </QuestCard>
          </div>
          <div>
            <QuestCard question="3. Dimana habitat burung hantu ?">
              <Form.Item name="answer3" rules={formRules}>
                <Radio.Group>
                  <Space direction="vertical" size="middle">
                    <Radio value="A" className="text-white text-xl">
                      A. Laut
                    </Radio>
                    <Radio value="B" className="text-white text-xl">
                      B. Pohon/hutan
                    </Radio>
                    <Radio value="C" className="text-white text-xl">
                      C. Pegunungan
                    </Radio>
                    <Radio value="D" className="text-white text-xl">
                      D. Danau
                    </Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </QuestCard>
          </div>
          <div>
            <QuestCard question="4. Dimana habitat kuda nil ?">
              <Form.Item name="answer4" rules={formRules}>
                <Radio.Group>
                  <Space direction="vertical" size="middle">
                    <Radio value="A" className="text-white text-xl">
                      A. Hutan
                    </Radio>
                    <Radio value="B" className="text-white text-xl">
                      B. Pepohonan
                    </Radio>
                    <Radio value="C" className="text-white text-xl">
                      C. Sungai dan Danau
                    </Radio>
                    <Radio value="D" className="text-white text-xl">
                      D. Pegunungan
                    </Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </QuestCard>
          </div>
          <div>
            <QuestCard question="5. Dimana habitat kuda ?">
              <Form.Item name="answer5" rules={formRules}>
                <Radio.Group>
                  <Space direction="vertical" size="middle">
                    <Radio value="A" className="text-white text-xl">
                      A. Padang gurun
                    </Radio>
                    <Radio value="B" className="text-white text-xl">
                      B. Padang rumput dan savana
                    </Radio>
                    <Radio value="C" className="text-white text-xl">
                      C. Gurun
                    </Radio>
                    <Radio value="D" className="text-white text-xl">
                      D. Sungai dan danau
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
