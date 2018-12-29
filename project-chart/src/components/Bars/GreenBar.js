import React from "react";

export default function GreenBar({
  open,
  close,
  low,
  high,
  xStartingPoint,
  horizontalBarLength,
  yStartingPoint,
  scale,
  greenStroke,
  strokeWidth
}) {
  // const scaleY1 = 50;
  // const scaleY2 = scaleY1 / 2;
  let x1 = xStartingPoint;
  let x2 = xStartingPoint;
  let yLow = yStartingPoint - low - scale;
  let yHigh = yStartingPoint - high - scale;
  // let lowHigh = (high - low) * scale;
  // let openClose = (open - close) * scale;
  // let yLow = yStartingPoint - low / 2;
  // let yHigh = yLow + (high - low) * 2;

  let yOpen = yStartingPoint - open - scale;
  let yClose = yStartingPoint - close - scale;
  // let yOpen = yLow + openClose;
  // let yClose = yOpen + openClose;

  // console.log(`low ${low}, high ${high}, open ${open}, close ${close}`);
  // console.log(`GREEN yOpen ${yOpen}, yClose ${yClose}, yLow ${yLow}, yHigh ${yHigh}`);
  // console.log(`yHigh ${lowHigh}`);
  return (
    <React.Fragment>
      {/* Warna Hijau jika Closing lebih besar dari open 
       Garis vertikal warna hijau */}
      <line
        x1={x1}
        x2={x2}
        y1={yLow}
        y2={yHigh}
        style={{ stroke: greenStroke, strokeWidth: strokeWidth }}
      />
      {/* Green open (menghadap ke kiri) - Horizontal Line */}
      <line
        x1={xStartingPoint} // garis-vert-awal
        x2={xStartingPoint + horizontalBarLength} // garis-vert-akhir
        y1={yOpen} // garis-horz-awal
        y2={yOpen} // garis-horz-akhir
        style={{ stroke: greenStroke, strokeWidth: strokeWidth }}
      />
      {/* Green close (menghadap ke kanan) - Horizontal Line */}
      <line
        x2={xStartingPoint} // garis-vert-awal
        x1={xStartingPoint - horizontalBarLength} // garis-vert-akhir
        y1={yClose} // garis-horz-awal
        y2={yClose} // garis-horz-akhir
        style={{ stroke: greenStroke, strokeWidth: strokeWidth }}
      />
    </React.Fragment>
  );
}
