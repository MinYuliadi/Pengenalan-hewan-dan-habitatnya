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
import Unta from "../../assets/quiz/Unta.png";
import Taring from "../../assets/quiz/Taring.png";

const formRules = [
  {
    required: true,
    message: "Pilih salah satu dari jawaban di atas",
  },
];

const {} = Carousel;

const Level5 = () => {
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

    if (values.answer1 === "B") result += 20;
    if (values.answer2 === "C") result += 20;
    if (values.answer3 === "A") result += 20;
    if (values.answer4 === "A") result += 20;
    if (values.answer5 === "B") result += 20;

    if (result < 100)
      return swal({
        title: "Belum lolos",
        text: `Nilai mu ${result}`,
        icon: "warning",
      }).then(() => navigate(-1));

    if (result === 100 && level === 5) dispatch(levelUp());

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

export default Level5;

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
            <QuestCard question="1. Fungsi dari punuk unta pada gambar di bawah ini adalah...">
              <div className="flex justify-center items-center">

              <img src={Unta} alt="Unta" className="w-full max-w-[8rem] aspect-square" />
              </div>
              <Form.Item name="answer1" rules={formRules}>
                <Radio.Group>
                  <Space direction="vertical" size="middle">
                    <Radio value="A" className="text-white text-xl">
                      A. Menahan hawa dingin
                    </Radio>
                    <Radio value="B" className="text-white text-xl">
                      B. Untuk menyimpan cadangan makanan
                    </Radio>
                    <Radio value="C" className="text-white text-xl">
                      C. Untuk membawa barang barang
                    </Radio>
                    <Radio value="D" className="text-white text-xl">
                      D. Untuk hiasan
                    </Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </QuestCard>
          </div>
          <div>
            <QuestCard question="2. Fungsi dari gigi taring harimau pada gambar di bawah ini adalah...">
              <div className="flex justify-center items-center">

              <img src={Taring} alt="Taring" className="w-full max-w-[8rem] aspect-square" />
              </div>
              <Form.Item name="answer2" rules={formRules}>
                <Radio.Group>
                  <Space direction="vertical" size="middle">
                    <Radio value="A" className="text-white text-xl">
                      A. Sebagai hiasan
                    </Radio>
                    <Radio value="B" className="text-white text-xl">
                      B. Menakuti lawan nya
                    </Radio>
                    <Radio value="C" className="text-white text-xl">
                      C. Merobek makanan
                    </Radio>
                    <Radio value="D" className="text-white text-xl">
                      D. Untuk membawa barang
                    </Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </QuestCard>
          </div>
          <div>
            <QuestCard question="3. Kaki yang dimiliki oleh burung elang digunakan untuk...">
              <Form.Item name="answer3" rules={formRules}>
                <Radio.Group>
                  <Space direction="vertical" size="middle">
                    <Radio value="A" className="text-white text-xl">
                      A. Mencengkram mangsanya
                    </Radio>
                    <Radio value="B" className="text-white text-xl">
                      B. Menangkap buah-buahan
                    </Radio>
                    <Radio value="C" className="text-white text-xl">
                      C. Mencari biji-bijian
                    </Radio>
                    <Radio value="D" className="text-white text-xl">
                      D. Berjalan di tanah
                    </Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </QuestCard>
          </div>
          <div>
            <QuestCard question="4. Fungsi tanduk yang dimiliki oleh rusa digunakan untuk...">
              <Form.Item name="answer4" rules={formRules}>
                <Radio.Group>
                  <Space direction="vertical" size="middle">
                    <Radio value="A" className="text-white text-xl">
                      A. Menarik perhatian rusa betina
                    </Radio>
                    <Radio value="B" className="text-white text-xl">
                      B. Mencari makanan
                    </Radio>
                    <Radio value="C" className="text-white text-xl">
                      C. Sebagai hiasan
                    </Radio>
                    <Radio value="D" className="text-white text-xl">
                      D. Menakuti lawannya
                    </Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </QuestCard>
          </div>
          <div>
            <QuestCard question="5. Fungsi tinta yang dimiliki oleh cumi-cumi adalah...">
              <Form.Item name="answer5" rules={formRules}>
                <Radio.Group>
                  <Space direction="vertical" size="middle">
                    <Radio value="A" className="text-white text-xl">
                      A. Sebagai alat tradisional
                    </Radio>
                    <Radio value="B" className="text-white text-xl">
                      B. Untuk melindungi diri dari predator
                    </Radio>
                    <Radio value="C" className="text-white text-xl">
                      C. Sebagai tinta alat tulis
                    </Radio>
                    <Radio value="D" className="text-white text-xl">
                      D. Menarik perhatian lawan jenis
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
