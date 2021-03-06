import React, { useEffect, useState } from "react";
import "./Dpd.scss";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";

import Layouts from "../../../components/Layouts";

import BreadCrumbs from "../../../components/breadcrumbs/BreadCrumbs";
import MainDivider from "../../../components/divider/MainDivider";
import Wait from "../../../components/wait/Wait";

const Dpd = () => {
  // const { id, nameProv } = useParams();
  const [configHome, setConfigHome] = useState();

  // const getConfigHome = async () => {
  //   const res = await fetch("https://data.pdiperjuangan.id/api/auth/app", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       app_id: "1555309664580",
  //       api_secret: "4d672ce3-e422-4d8a-86ff-fabb1808a689",
  //     }),
  //   });
  //   const data = await res.json();

  //   const resConfigHome = await fetch(
  //     "https://data.pdiperjuangan.id/api/partai/dpd/find",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${data.token}`,
  //       },
  //       body: JSON.stringify({
  //         id: id,
  //       }),
  //     }
  //   );

  //   const dataConfigHome = await resConfigHome.json();
  //   setConfigHome(dataConfigHome.query);
  //   console.log(configHome);
  // };

  // useEffect(() => {
  //   getConfigHome();
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <>
    <Layouts>

      {configHome ? (
        <div className="dpdWrapper">
          {/* HEADERS */}
          {/* <div className="dpdHead">
                <div className="backDpd">
                    <div className="textDpdHead">
                        <h2>Solid Bergerak Untuk<br/>Indonesia Raya </h2>
                    </div>
                </div>
            </div> */}
          {/* END */}

          {/* Card Header */}
          {/* <CardHeader /> */}
          {/* END Card Header */}

          {/* LINK PARTAI */}
          <div className="linkedDetail">
            <BreadCrumbs
              to1="/"
              link1="Home"
              to2="/partai"
              link2="Partai"
              page3="Dewan Pimpinan"
            />
          </div>
          {/* END */}

          <div className="pengurus">
            {/* Divider */}
            <div className="divider-dewan-pimpinan">
              <MainDivider text="Dewan Pimpinan Daerah" />
            </div>
            {/* END Divider */}

            <div className="dpdTextHead">
              <h1>{configHome.name}</h1>
            </div>
            <div className="profilDpd">
              <div className="kolum1">
                <img
                  src={`https://data.pdiperjuangan.id/public/${configHome.photo_one}`}
                  alt=""
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    borderRadius: "10px",
                  }}
                  className="imagePertamaDPD"
                />
                <div className="textDpd">
                  <div className="alamat dpdText">
                    <small className="alamatText text-danger">Alamat </small>
                    <p className="namaProfil">{configHome.address}</p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=dpd+pdip+provinsi+${nameProv}`}
                      target="_blank"
                    >
                      <button
                        type="button"
                        className="btn btn-danger rounded"
                        name="btn_map"
                      >
                        <i className="fas fa-map pr-2" aria-hidden="true"></i>
                        Map
                      </button>
                    </a>
                  </div>
                  <div className="telpon dpdText">
                    <small className="smallTanggal text-danger">Telepon</small>
                    <p className="tanggal">{configHome.phone}</p>
                    <a href={`tel:+62${configHome.phone}`}>
                      <button
                        type="button"
                        className="btn btn-danger rounded"
                        name="btn_hubungi"
                      >
                        <i className="fas fa-phone pr-2" aria-hidden="true"></i>
                        Hubungi
                      </button>
                    </a>
                  </div>
                  <div className="ketua dpdText">
                    <small className="agamaHead text-danger">Ketua</small>
                    <p className="text">{configHome.ketua}</p>
                  </div>
                  <div className="sekretaris dpdText">
                    <small className="emailHead text-danger">Sekretaris</small>
                    <p className="emailText">{configHome.sekretaris}</p>
                  </div>
                  <div className="bendahara dpdText">
                    <small className="emailHead text-danger">Bendahara</small>
                    <p className="emailText">{configHome.bendahara}</p>
                  </div>
                </div>
              </div>

              <div className="kolum2">
                <div
                  className="peta"
                  style={{
                    backgroundImage: `url(https://data.pdiperjuangan.id/public/${configHome.photo_two})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className="descPeta">
                  <h5 className="dpc">{`DPC PDI Perjuangan ` + nameProv}</h5>
                  {parse(configHome.description)}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Wait />
      )}
    </Layouts>
    </>
  );
};

export default Dpd;
