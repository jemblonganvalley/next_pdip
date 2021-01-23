import React, { useState } from "react";
import "./Dropdown.module.scss";
import Link from "next/link";

const Dropdown = ({ menuItem, listIndex }) => {
  const [webUrl, setWebUrl] = useState("https://pdiperjuangan.id");
  return (
    <div className="list-group dropdownMenu">
      {/* {console.log(menuItem)}
         {menuItem[listIndex].map((e,i)=>{
           console.log(e.title)
         })} */}

      <span></span>
      {menuItem[listIndex].map((e, i) => (
        <a
          className="list-group-item"
          key={i}
          href={
            e.params === "siaran_langsung"
              ? `${webUrl}/multimedia/siaran_langsung`
              : e.params === "dokumentasi"
              ? `${webUrl}/multimedia/dokumentasi`
              : e.params === "teaser"
              ? `${webUrl}/multimedia/teaser`
              : e.params === "wawancara"
              ? `${webUrl}/multimedia/wawancara`
              : e.title === "Lagu Perjuangan"
              ? `${webUrl}/article/250/${e.title
                  .replace(/\s/g, "-")
                  .toLowerCase()}`
              : e.title === "Lahirnya Pancasila 1 Juni 1945"
              ? `${webUrl}/detail-article/109/Lahirnya-Pancasila-1-Juni-1945`
              : e.title === "Foto/Gallery"
              ? `${webUrl}/gallery`
              : e.params === "222"
              ? `${webUrl}/detail-article/656/${e.title
                  .replace(/\s/g, "-")
                  .toLowerCase()}`
              : e.params === "220"
              ? `${webUrl}/detail-article/624/${e.title
                  .replace(/\s/g, "-")
                  .toLowerCase()}`
              : e.params === "216"
              ? `${webUrl}/detail-article/623/${e.title
                  .replace(/\s/g, "-")
                  .toLowerCase()}`
              : e.params === "224"
              ? `${webUrl}/detail-article/630/${e.title
                  .replace(/\s/g, "-")
                  .toLowerCase()}`
              : e.params === "229"
              ? `${webUrl}/partai/dpd-dpc`
              : e.params === "230"
              ? `${webUrl}/detail-article/658/${e.title
                  .replace(/\s/g, "-")
                  .toLowerCase()}`
              : e.params === "234"
              ? `${webUrl}/detail-article/841/${e.title
                  .replace(/\s/g, "-")
                  .toLowerCase()}`
              : e.params === "235"
              ? `${webUrl}/detail-article/1012/${e.title
                  .replace(/\s/g, "-")
                  .toLowerCase()}`
              : e.params === "27"
              ? `${webUrl}/detail-article/107/${e.title
                  .replace(/\s/g, "-")
                  .toLowerCase()}`
              : e.params === "242"
              ? `${webUrl}/detail-article/871/${e.title
                  .replace(/\s/g, "-")
                  .toLowerCase()}`
              : e.params === "243"
              ? `${webUrl}/detail-article/865/${e.title
                  .replace(/\s/g, "-")
                  .toLowerCase()}`
              : e.params === "237"
              ? `${webUrl}/bung-karno-bapak-bangsa/quotes/3`
              : e.params === "28"
              ? `${webUrl}/detail-article/838/${e.title
                  .replace(/\s/g, "-")
                  .toLowerCase()}`
              : e.title === "Fraksi Pdi Perjuangan"
              ? `${webUrl}/Fraksi-Pdi-Perjuangan`
              : e.params === "all"
              ? `${webUrl}/${e.title.replace(/\s/g, "-").toLowerCase()}`
              : `${webUrl}/article/${e.params}/${e.title
                  .replace(/\s/g, "-")
                  .toLowerCase()}`
          }
        >
          {e.title}
        </a>
      ))}

      <div className="arrow"></div>
    </div>
  );
};

export default Dropdown;
