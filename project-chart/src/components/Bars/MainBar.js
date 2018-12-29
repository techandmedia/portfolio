import React from "react";
import GreenBar from "./GreenBar";
import RedBar from "./RedBar";
import { getData } from "../../data/GetData";
// import { ReactComponent as Loading } from "./loading.svg";
import Loading from "./Loading";

export default class MainBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // URL: this.props.URL,
      data1: [], // masukkan data dari API di sini
      data2: [], // push data dari data1 ke data2
      data3: [], // this is not used, for testing only
      data4: [], // UPDATE: ternyata data2 sudah bisa dipakai
      // UPDATE: data2 sering tidak stabli, tidak bisa pass data
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    });
    try {
      const { URL } = this.props;
      const daily = "Time Series (Daily)";
      getData(URL).then(data => {
        // let key = 0; // key ini hanya dipakai pada cara ke 2 untuk data3
        // Perhatikan bentuk output API nya, ada yang data[daily], ada yg data.data[daily]
        // API ini menggunakan Object, bukan Array
        // Objek 1: Meta Data, alias dari nama perusahaan
        // Objek 2: Daily Time Series, ini serangkaian objek yang berisi data
        // Ambil object ke 2
        this.setState({
          // Cara pertama, dengan menggunakan values dari object sebagai index
          data1: data.data[daily]
          // Cara kedua, menggunakan method Object values dengan key sesuai dengan indexnya
          // data3: Object.values(data.data)[key]
        });

        // DATA dari API nya tanggal terbaru, jadi seolah olah 'terbalik'
        // console.log(
        //   `${Object.keys(this.state.data1)[0]}`,Object.values(this.state.data1)[0],
        //   `${Object.keys(this.state.data1)[99]}`,Object.values(this.state.data1)[99]
        // );

        const dataLength = Object.keys(this.state.data1).length;
        // console.log(this.state.data1, this.state.data3);

        // ============================================================
        // Berapa lama waktu yang diperlukan untuk membuat sebuah array
        // let d = new Date();
        // let h = d.getHours();
        // let m = d.getMinutes();
        // let s = d.getSeconds();
        // let ms = d.getMilliseconds();
        // console.log(`${h} ${m} ${s} ${ms}`);
        let xStartingPoint = 63;
        for (let key = 0; key < dataLength; key++) {
          xStartingPoint = xStartingPoint + 17;
          const DailyData = Object.values(this.state.data1)[key];
          // console.log(xStartingPoint);
          // console.log(openValue, closeValue, lowValue, highValue);
          // Ternyata format data bukan Number!!
          // Convert dulu ke Number
          // Cara Pertama
          // let open = Number(DailyData["1. open"]);
          // let high = Number(DailyData["2. high"]);
          // let low = Number(DailyData["3. low"]);
          // let close = Number(DailyData["4. close"]);

          // Cara Kedua
          // Mendapatkan value dari objek
          let open = Number(Object.values(DailyData)[0]);
          let high = Number(Object.values(DailyData)[1]);
          let low = Number(Object.values(DailyData)[2]);
          let close = Number(Object.values(DailyData)[3]);
          // console.log('OV',open)

          // Mendapatkan key dari object
          // const highValue = Object.keys(DailyData)[1];
          // console.log('hv',highValue)

          // Buat menjadi key value pair
          this.state.data2.push({
            open: open,
            high: high,
            low: low,
            close: close,
            xStartingPoint: xStartingPoint
          });
          // ===================================================================================
          // UPDATE-2: DATA2 TIDAK STABIL, tidak bisa pass data
          // ===================================================================================
          // ===================================================================================
          // UPDATE-1: DATA2 bisa digunakan: WTF??
          // ===================================================================================
          // Data2 yang didapat dari Array Push tidak bisa dimap di function atau Component lain
          // Data2 harus dimap dulu di dalam fungsi yang memanggilnya: lalu di setState T_T
          // WTF?!!

          this.setState({
            data4: this.state.data2.map(data => ({
              open: data.open,
              high: data.high,
              low: data.low,
              close: data.close,
              xStartingPoint: data.xStartingPoint
            })),
            isLoading: false
          });
        }
        // this.state.data4.map(data => {
        //   if (data.open < data.close) {
        //     console.log(data);
        //   }
        // });

        // ============================================================
        // Inisial: 80an ms, Setelahnya: rata-rata 20-24ms
        // d = new Date();
        // h = d.getHours();
        // m = d.getMinutes();
        // s = d.getSeconds();
        // let msx = d.getMilliseconds();
        // console.log(`${h} ${m} ${s} ${msx}`);
        // console.log(`${msx - ms} ms`);
        // console.log("xbar", this.state.data2);
      });
      // ===================================================================================
      // This Fetch Function is not working when passing data to other function or Component
      // const data = await fetch(URL).then(response => {
      //   if (!response.ok) {
      //     throw Error(response.statusText);
      //   }
      //   return response.json();
      // });
      // this.setState({
      //   data1: data[daily]
      //   // data2: data
      // });
      // ===================================================================================
    } catch (err) {
      console.log(err);
    }
  }

<<<<<<< HEAD
<<<<<<< HEAD
  getDataFromAPI = () => {
    const {
      openValue,
      closeValue,
      lowValue,
      highValue,
      startingBarPointX,
      dataDaily
    } = this.state;
    for (var key in dataDaily) {
      let open = Number(dataDaily["1. open"]);
      let high = Number(dataDaily["2. high"]);
      let low = Number(dataDaily["3. low"]);
      let close = Number(dataDaily["4. close"]);
      this.setState({
        openValue: open,
        closeValue: close,
        lowValue: low,
        highValue: high
      });
      // console.log(dataDaily[key]);
      return (
        <GreenBar
          openValue={openValue}
          closeValue={closeValue}
          lowValue={lowValue}
          highValue={highValue}
          startingBarPointX={startingBarPointX}
        />
      );
    }
  };
=======
  // renderBar = () =>
  //   this.state.data2.map(data => {
  // console.log(data.open);
  //     {
  //       data && data.close > data.open ? (
  // return <GreenBar data={data} />;
  //       ) : (
  //         <RedBar />
  //       );
  //     }
  // let startingBarPointX = 50;
  // console.log(startingBarPointX);
  // let open = Number(data["1. open"]);
  // let high = Number(data["2. high"]);
  // let low = Number(data["3. low"]);
  // let close = Number(data["4. close"]);
  // startingBarPointX = startingBarPointX + 50;
  // // console.log("open", open, "close", close, "low", low, "high", high);
  // if (open < close) {
  //   return (
  //     <GreenBar
  //       // data1={data1}
  //       open={open}
  //       close={close}
  //       low={low}
  //       high={high}
  //       startingBarPointX={startingBarPointX}
  //     />
  //   );
  // } else {
  //   return <RedBar />;
  // }
  // });
>>>>>>> d3f3243c91c1a36c6ee5b4485145d48a7c75f91a

=======
>>>>>>> 54be3ebc0d769c391d5170e607cb21bf9a653e38
  render() {
    const { data4, isLoading } = this.state;
    const yStartingPoint = 450;
    const horizontalBarLength = 7;
    const scale = 0;
    const redStroke = "rgb(255,0,0)";
    const greenStroke = "rgb(0,255,0)";
    const strokeWidth = 1;
    // const data5 = data4.slice(0, 10);
    // const data5 = [
    //   { low: 150, high: 200, open: 160, close: 170, xStartingPoint: 50 },
    //   { low: 160, high: 220, open: 190, close: 170, xStartingPoint: 70 },
    //   { low: 140, high: 210, open: 160, close: 190, xStartingPoint: 90 },
    //   { low: 120, high: 215, open: 160, close: 190, xStartingPoint: 110 },
    //   { low: 140, high: 230, open: 210, close: 190, xStartingPoint: 130 }
    // ];

    // if (isLoading) {
    // return <h3 className="loading">Loading.....</h3>;
    //   return <Loading />;
    // }

    return (
      <React.Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" width="1800" height="1000">
          >
          <line
            x1="60"
            x2="60"
            y1="150"
            y2={yStartingPoint}
            style={{ stroke: "rgb(100,100,100)", strokeWidth: 2 }}
          />
          <line
            x1="40"
            x2="1800"
            y1={yStartingPoint}
            y2={yStartingPoint}
            style={{ stroke: "rgb(100,100,100)", strokeWidth: 2 }}
          />
          {isLoading ? (
            <Loading />
          ) : (
            data4.map(data => {
              // console.log(data4);
              let { open, low, high, close, xStartingPoint } = data;
              let key = open + low + high + close + Math.random();
              if (data.open < data.close) {
                return (
                  <GreenBar
                    key={key}
                    open={open}
                    low={low}
                    high={high}
                    close={close}
                    xStartingPoint={xStartingPoint}
                    horizontalBarLength={horizontalBarLength}
                    yStartingPoint={yStartingPoint}
                    scale={scale}
                    greenStroke={greenStroke}
                    strokeWidth={strokeWidth}
                  />
                );
              } else {
                return (
                  <RedBar
                    key={key}
                    open={open}
                    low={low}
                    high={high}
                    close={close}
                    xStartingPoint={xStartingPoint}
                    horizontalBarLength={horizontalBarLength}
                    yStartingPoint={yStartingPoint}
                    scale={scale}
                    redStroke={redStroke}
                    strokeWidth={strokeWidth}
                  />
                );
              }
            })
          )}
        </svg>
      </React.Fragment>
    );
  }
}
