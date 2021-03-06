import React, { useState, useEffect, useRef } from "react";
// import { Link, Link, Redirect } from "react-router-dom";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
// import pdimobile from "/img/pdimobile.svg";
// import logo from "/img/pdiperjuangan02.svg";
// import DataNavbar from '../../data/index'
import "./Navbar.module.scss";
import Dropdown from "../dropdownRedirect/Dropdown";

const Navbar = () => {
  const [webUrl, setWebUrl] = useState("https://pdiperjuangan.id");
  // const setRefresher = useStoreActions((action) => action.setRefresher);
  // const refresher = useStoreState((state) => state.refresher);
  // const setNavHeight = useStoreActions((action) => action.setNavHeight);
  const [show, setShow] = useState(false);
  const [menu, setMenu] = useState({
    Partai: [
      {
        title: "AD ART",
        params: "28",
      },
      {
        title: "Visi dan Misi",
        params: "27",
      },
      {
        title: "Tata Kelola Partai",
        params: "234",
      },
      {
        title: "Struktur DPP",
        params: "all",
      },
      {
        title: "DPD dan DPC",
        params: "229",
      },
    ],
    "Ketua Umum": [
      {
        title: "Pidato Kongres",
        params: "233",
      },
      {
        title: "Pidato Rakernas",
        params: "238",
      },
      {
        title: "Pidato Rakornas",
        params: "239",
      },
      {
        title: "Pidato HUT",
        params: "240",
      },
      {
        title: "Pidato Khusus",
        params: "259",
      },
    ],
    Berita: [
      {
        title: "Fokus",
        params: "189",
      },
      {
        title: "Siaran pers",
        params: "262",
      },
      {
        title: "Nasional",
        params: "190",
      },
      {
        title: "Daerah",
        params: "191",
      },
      {
        title: "Nuansa",
        params: "192",
      },
      {
        title: "Foto/Gallery",
        params: "all",
      },
      {
        title: "Literasi Digital",
        params: "265",
      },
    ],
    Multimedia: [
      {
        title: "Video Dokumentasi",
        params: "dokumentasi",
      },
      {
        title: "Video Teaser",
        params: "teaser",
      },
      {
        title: "Wawancara",
        params: "wawancara",
      },
      {
        title: "Siaran Langsung",
        params: "siaran_langsung",
      },
    ],
    "Bung Karno Bapak Bangsa": [
      {
        title: "Lini masa",
        params: "235",
      },
      {
        title: "Wejangan Bung Karno",
        params: "237",
      },
      {
        title: "Materi Pokok Pembelajaran",
        params: "236",
      },
      {
        title: "Artikel tentang Bung Karno",
        params: "277",
      },
    ],
    "Informasi Publik": [
      {
        title: "Visi dan Misi PPID",
        params: "231",
      },
      {
        title: "Struktur PPID PDI Perjuangan",
        params: "222",
      },
      {
        title: "Regulasi PPD",
        params: "216",
      },
      {
        title: "Prosedur Pelayanan PPID",
        params: "220",
      },
      {
        title: "Tata Cara",
        params: "224",
      },
      {
        title: "Laporan Keuangan",
        params: "227",
      },
    ],
    Pemilu: [
      {
        title: "Pemilihan Kepala Daerah",
        params: "241",
      },
      {
        title: "Pemilihan Legislatif",
        params: "242",
      },
      {
        title: "Pemilihan Presiden",
        params: "243",
      },
    ],
  });
  const [scroll, setScroll] = useState(false);
  const [iconRotate, setIconRotate] = useState(null);
  const isDesktop = useMediaQuery({ minWidth: 992 });

  const isTablet = useMediaQuery({ minWidth: 751, maxWidth: 991 });

  const isMobile = useMediaQuery({ maxWidth: 767 });
  let [collapse1, setCollapse1] = useState(false);
  // const setSearch = useStoreActions((action) => action.setSearch);
  // const search = useStoreState((state) => state.search);
  // const getNavHeight = async () => {
  // const ht = await document.getElementById("navbar").offsetHeight;
  // await setNavHeight(ht);
  // };

  // const handleSubmit = (e) => {
  // e.preventDefault();
  // window.location.href = `/search/${search}`;
  // sessionStorage.setItem("search", search);
  // };

  useEffect(() => {
    // getDataMenu();
    window.addEventListener("load", () => {
      //   getNavHeight();
    });
  }, [isDesktop, isTablet, isMobile]);

  return (
    <>
      {isDesktop && (
        <>
          <nav
            className="navbar navbar-expand-lg fixed-top"
            id="navbar"
            style={{
              boxShadow:
                window.scrollY > 1
                  ? "-1px 7px 30px -12px rgba(0,0,0,0.75)"
                  : "none",
              height: "10vh",
            }}
          >
            <div className="container-fluid">
              <a className="navbar-brand" href={webUrl} activeClassName="brand">
                <img
                  src="/img/pdiperjuangan02.svg"
                  alt=""
                  width="60"
                  className="d-inline-block align-center active"
                  loading="lazy"
                />
              </a>
              <button
                name="btn_menu"
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-label="Toggle navigation"
              >
                <i className="fa fa-bars" aria-hidden="true"></i>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 navbar-nav-custom">
                  {Object.keys(menu).map((e, i) => (
                    <li
                      className="nav-item"
                      style={{
                        position: "relative",
                      }}
                      key={i}
                      onMouseOver={() => {
                        setShow(e);
                        // console.log(show);
                      }}
                      onMouseLeave={() => {
                        setShow("");
                      }}
                    >
                      <a
                        className="nav-link"
                        href={
                          webUrl + "/" + e.replace(/\s/g, "-").toLowerCase()
                        }
                        activeClassName="active"
                      >
                        {e}
                      </a>
                      {console.log(e)}
                      {show === e && (
                        <Dropdown
                          menuItem={Object.values(menu)}
                          listIndex={i}
                        />
                      )}
                    </li>
                  ))}
                </ul>

                <form
                  // onSubmit={handleSubmit}
                  // action={`/search/${search}`}
                  className="d-inline-flex"
                  style={{
                    display: "flex",
                  }}
                >
                  <input
                    className="form-control mr-2"
                    type="text"
                    placeholder="Cari Artikel"
                    // name="search"
                    // onChange={function (e) {
                    //   setSearch(e.target.value);
                    // }}
                    type="text"
                  />
                  <a
                    href={`${webUrl}/search`}
                    name="submit"
                    className="btn-next"
                  >
                    <i
                      className="fas fa-search"
                      aria-hidden="true"
                      name="icon"
                    ></i>
                  </a>
                </form>
              </div>
            </div>
          </nav>
        </>
      )}
      {isMobile && (
        <>
          <nav
            className="navbar navbar-expand-lg fixed-top"
            id="navbar"
            style={{
              boxShadow:
                window.scrollY > 1
                  ? "-1px 7px 30px -12px rgba(0,0,0,0.75)"
                  : "none",
            }}
          >
            <div className="container-fluid">
              <a className="navbar-brand" href={webUrl} activeClassName="brand">
                <img
                  src="/img/pdimobile.svg"
                  alt=""
                  width="100"
                  className="d-inline-block align-center active"
                  loading="lazy"
                  onClick={() => {
                    setCollapse1(false);
                  }}
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-label="Toggle navigation"
                style={{
                  color: "#fff",
                }}
                onClick={() => {
                  setCollapse1(!collapse1);
                }}
              >
                <i className="fa fa-bars" aria-hidden="true"></i>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
                style={{
                  display: collapse1 ? "block" : "none",
                }}
              >
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                  {Object.keys(menu).map((e, i) => (
                    <li
                      className="nav-item"
                      style={{
                        position: "relative",
                      }}
                      key={e.id}
                      onClick={() => {
                        setShow(e.name);
                      }}
                    >
                      <div
                        className="triggerMobile"
                        style={{
                          display: "flex",
                          padding: "0 10%",
                          flexDirection: "column",
                        }}
                      >
                        <div
                          className="triggerDropdown"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <a
                            className="nav-link"
                            href={
                              webUrl + "/" + e.replace(/\s/g, "-").toLowerCase()
                            }
                            activeClassName="active"
                            onClick={() => {
                              setCollapse1(!collapse1);
                            }}
                          >
                            {e}
                          </a>
                          <i
                            className="fas fa-angle-down"
                            data-toggle="collapse"
                            data-target={`#collapseExample${i}`}
                            aria-expanded="false"
                            aria-controls={`collapseExample${i}`}
                            id="icon-menuDrop"
                            onClick={() => {
                              if (iconRotate != null) {
                                setIconRotate(null);
                              } else {
                                setIconRotate(i);
                              }
                            }}
                            style={{
                              transform:
                                iconRotate == i
                                  ? "rotate(-180deg)"
                                  : "rotate(0)",
                              color: iconRotate == i ? "#333" : "#f3f3f3",
                              fontSize: iconRotate == i ? "20pt" : "13pt",
                              transition:
                                iconRotate == i
                                  ? "0.5s ease-in-out"
                                  : "0.3s ease-in",
                            }}
                          ></i>
                        </div>
                      </div>
                      <div
                        className="dropdownCollapsed collapse"
                        id={`collapseExample${i}`}
                        style={{
                          backgroundColor: "#333333",
                        }}
                      >
                        {Object.values(menu)[i].map((e, i) => (
                          <div
                            key={i}
                            className="dropdown-menu-mobile"
                            style={{
                              height: "50px",
                              transition: "0.5s ease-in-out",
                            }}
                          >
                            <a
                              className="page-menu-drop-mobile"
                              style={{
                                color: "#f3f3f3",
                              }}
                              onClick={() => {
                                setCollapse1(!collapse1);
                                // setRefresher();
                              }}
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
                                  ? `${webUrl}/${e.title
                                      .replace(/\s/g, "-")
                                      .toLowerCase()}`
                                  : `${webUrl}/article/${
                                      e.params
                                    }/${e.title
                                      .replace(/\s/g, "-")
                                      .toLowerCase()}`
                              }
                            >
                              {e.title}
                            </a>
                          </div>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
                <form className="d-inline-flex">
                  <input
                    className="form-control mr-2"
                    type="text"
                    placeholder="cari artikel"
                    name="search"
                  />
                  <Link href="/search" name="submit" className="btn-next">
                    <i
                      className="fas fa-search"
                      aria-hidden="true"
                      name="icon"
                      onClick={() => {
                        setCollapse1(!collapse1);
                      }}
                    ></i>
                  </Link>
                </form>
              </div>
            </div>
          </nav>
        </>
      )}

      {isTablet && (
        <>
          <nav
            className="navbar navbar-expand-lg fixed-top"
            id="navbar"
            style={{
              boxShadow:
                window.scrollY > 1
                  ? "-1px 7px 30px -12px rgba(0,0,0,0.75)"
                  : "none",
            }}
          >
            <div className="container-fluid">
              <Link
                className="navbar-brand"
                href={webUrl}
                activeClassName="brand"
              >
                <img
                  src="/img/pdimobile.svg"
                  alt=""
                  width="200"
                  className="d-inline-block align-center active"
                  loading="lazy"
                  onClick={() => {
                    setCollapse1(false);
                  }}
                />
              </Link>
              <button
                name="btn_menu"
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-label="Toggle navigation"
                style={{
                  color: "#fff",
                  margin: "0 65px",
                }}
                onClick={() => {
                  setCollapse1(!collapse1);
                }}
              >
                <i className="fa fa-bars" aria-hidden="true" style={{}}></i>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
                style={{
                  display: collapse1 ? "block" : "none",
                }}
              >
                <ul
                  className="navbar-nav mx-auto mb-2 mb-lg-0"
                  style={{
                    overflow: "scroll",
                  }}
                >
                  {Object.keys(menu).map((e, i) => (
                    <li
                      className="nav-item"
                      style={{
                        position: "relative",
                      }}
                      key={e.id}
                      onClick={() => {
                        setShow(e.name);
                      }}
                    >
                      <div
                        className="triggerMobile"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          padding: "10px 10%",
                        }}
                      >
                        <div
                          className="triggerDropdown"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <Link
                            className="nav-link"
                            href={toString(
                              webUrl + "/" + e.replace(/\s/g, "-").toLowerCase()
                            )}
                            activeClassName="active"
                            onClick={() => {
                              setCollapse1(!collapse1);
                            }}
                          >
                            {e}
                          </Link>
                          <i
                            className="fas fa-angle-down"
                            data-toggle="collapse"
                            data-target={`#collapseExample${i}`}
                            aria-expanded="false"
                            aria-controls={`collapseExample${i}`}
                            id="icon-menuDrop"
                            onClick={() => {
                              if (iconRotate != null) {
                                setIconRotate(null);
                              } else {
                                setIconRotate(i);
                              }
                            }}
                            style={{
                              transform:
                                iconRotate == i
                                  ? "rotate(-180deg)"
                                  : "rotate(0)",
                              color: iconRotate == i ? "#333" : "#f3f3f3",
                              fontSize: iconRotate == i ? "20pt" : "13pt",
                              transition:
                                iconRotate == i
                                  ? "0.5s ease-in-out"
                                  : "0.3s ease-in",
                            }}
                          ></i>
                        </div>
                      </div>
                      <div
                        className="dropdownCollapsed collapse"
                        id={`collapseExample${i}`}
                        style={{
                          backgroundColor: "#333333",
                        }}
                      >
                        {Object.values(menu)[i].map((e, i) => (
                          <div
                            key={i}
                            className="dropdown-menu-mobile "
                            style={{
                              height: "50px",
                              transition: "0.5s ease-in-out",
                              padding: "0 10%",
                            }}
                            key={e.key}
                          >
                            <a
                              className="page-menu-drop-mobile"
                              style={{
                                color: "#f3f3f3",
                              }}
                              onClick={() => {
                                setCollapse1(!collapse1);
                                // setRefresher();
                              }}
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
                                  ? `${webUrl}/${e.title
                                      .replace(/\s/g, "-")
                                      .toLowerCase()}`
                                  : `${webUrl}/article/${
                                      e.params
                                    }/${e.title
                                      .replace(/\s/g, "-")
                                      .toLowerCase()}`
                              }
                            >
                              {e.title}
                            </a>
                          </div>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
                <form className="form">
                  <input
                    className="form-control mr-2"
                    type="text"
                    placeholder="cari artikel"
                    name="search"
                    // onChange={function (e) {
                    //   setSearch(e.target.value);
                    // }}
                  />
                  <a href="/search" name="submit" className="btn-next">
                    <i
                      className="fas fa-search"
                      aria-hidden="true"
                      name="icon"
                      onClick={() => {
                        setCollapse1(!collapse1);
                      }}
                    ></i>
                  </a>
                </form>
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default Navbar;
