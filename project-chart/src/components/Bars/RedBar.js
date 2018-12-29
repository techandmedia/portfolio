import React from "react";

export default function RedBar({
  open,
  close,
  low,
  high,
  xStartingPoint,
  horizontalBarLength,
  yStartingPoint,
  scale,
  redStroke,
  strokeWidth
}) {
  let x1 = xStartingPoint;
  let x2 = xStartingPoint;
  let yLow = yStartingPoint - low - scale;
  let yHigh = yStartingPoint - high - scale;

  let yOpen = yStartingPoint - open - scale;
  let yClose = yStartingPoint - close - scale;

  // console.log(`RED yOpen ${yOpen}, yClose ${yClose}, yLow ${yLow}, yHigh ${yHigh}`);

  return (
    <React.Fragment>
      {/* Warna merah jika Closing lebih kecil dari Open */}
      {/* Garis vertikal warna merah */}
      <line
        //Titik awal garis
        x1={x1}
        x2={x2}
        // Tinggi bar - vertical - menentukan low to high
        y1={yLow}
        y2={yHigh}
        style={{ stroke: redStroke, strokeWidth: strokeWidth }}
      />

      {/* Red Open (menghadap ke kiri) - Vertical Line */}
      <line
        x1={xStartingPoint} // garis-vert-awal
        x2={xStartingPoint - horizontalBarLength} // garis-vert-akhir
        y1={yClose} // garis-horz-awal
        y2={yClose} // garis-horz-akhir
        style={{ stroke: redStroke, strokeWidth: strokeWidth }}
      />
      {/* Red Close (menghadap ke kanan) - Vertical Line */}
      <line
        x1={xStartingPoint + horizontalBarLength} // garis-vert-awal
        x2={xStartingPoint} // garis-vert-akhir
        y1={yOpen} // garis-horz-awal
        y2={yOpen} // garis-horz-akhir
        style={{ stroke: redStroke, strokeWidth: strokeWidth }}
      />
    </React.Fragment>
  );
}
